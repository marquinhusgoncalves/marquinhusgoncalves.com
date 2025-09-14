export interface NewsletterSubscriptionData {
  email: string;
  source?: string;
  variant?: string;
  locale?: string;
  tags?: string[];
}

export interface NewsletterResponse {
  ok: boolean;
  error?: string;
  already?: boolean;
  created?: boolean;
  status?: 'pending' | 'confirmed';
}

export class NewsletterError extends Error {
  public readonly code?: string;

  constructor({ message, code }: { message: string; code?: string }) {
    super(message);
    this.name = 'NewsletterError';
    this.code = code;
  }
}

class NewsletterService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = this.getBaseUrl();
  }

  private getBaseUrl(): string {
    const netlifyFunctionsUrl = process.env.GATSBY_NETLIFY_FUNCTIONS_URL;
    if (!netlifyFunctionsUrl) {
      throw new Error(
        'GATSBY_NETLIFY_FUNCTIONS_URL environment variable is required',
      );
    }

    return netlifyFunctionsUrl;
  }

  async subscribe(
    data: NewsletterSubscriptionData,
  ): Promise<NewsletterResponse> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const response = await fetch(`${this.baseUrl}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result: NewsletterResponse;
      try {
        result = await response.json();
      } catch {
        throw new NewsletterError({
          message: 'Invalid response from server',
          code: 'INVALID_RESPONSE',
        });
      }

      if (!response.ok) {
        const errorCode = this.getErrorCodeFromStatus(response.status);
        throw new NewsletterError({
          message: result.error || this.getErrorMessageFromCode(errorCode),
          code: errorCode,
        });
      }

      return result;
    } catch (error) {
      if (error instanceof NewsletterError) {
        throw error;
      }

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new NewsletterError({
            message: 'Request timeout - please try again',
            code: 'TIMEOUT_ERROR',
          });
        }

        if (error.message.includes('Failed to fetch')) {
          throw new NewsletterError({
            message: 'Network error - please check your connection',
            code: 'NETWORK_ERROR',
          });
        }

        throw new NewsletterError({
          message: error.message,
          code: 'SUBSCRIPTION_ERROR',
        });
      }

      throw new NewsletterError({
        message: 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR',
      });
    }
  }

  private getErrorCodeFromStatus(status: number): string {
    switch (status) {
      case 400:
        return 'BAD_REQUEST';
      case 401:
        return 'UNAUTHORIZED';
      case 403:
        return 'FORBIDDEN';
      case 404:
        return 'NOT_FOUND';
      case 405:
        return 'METHOD_NOT_ALLOWED';
      case 429:
        return 'RATE_LIMITED';
      case 500:
        return 'SERVER_ERROR';
      case 502:
        return 'BAD_GATEWAY';
      case 503:
        return 'SERVICE_UNAVAILABLE';
      case 504:
        return 'GATEWAY_TIMEOUT';
      default:
        return 'UNKNOWN_ERROR';
    }
  }

  private getErrorMessageFromCode(code: string): string {
    switch (code) {
      case 'BAD_REQUEST':
        return 'Invalid request data';
      case 'UNAUTHORIZED':
        return 'Authentication failed';
      case 'FORBIDDEN':
        return 'Access denied';
      case 'NOT_FOUND':
        return 'Service not found';
      case 'METHOD_NOT_ALLOWED':
        return 'Method not allowed';
      case 'RATE_LIMITED':
        return 'Too many requests - please try again later';
      case 'SERVER_ERROR':
        return 'Server error - please try again';
      case 'BAD_GATEWAY':
        return 'Service temporarily unavailable';
      case 'SERVICE_UNAVAILABLE':
        return 'Service temporarily unavailable';
      case 'GATEWAY_TIMEOUT':
        return 'Request timeout - please try again';
      default:
        return 'An error occurred';
    }
  }

  getSourceFromPath(pathname: string): string {
    if (pathname.includes('/blog')) return 'blog';
    if (pathname.includes('/projetos')) return 'projects';
    if (pathname.includes('/dicas')) return 'tips';
    if (pathname.includes('/viagens')) return 'travels';
    if (pathname.includes('/newsletter')) return 'newsletter';
    if (pathname.includes('/sobre')) return 'about';
    if (pathname === '/') return 'home';
    return 'blog'; // default
  }

  getTagsFromContext(pathname: string, variant?: string): string[] {
    const tags: string[] = [];

    if (pathname.includes('/blog')) tags.push('blog');
    if (pathname.includes('/projetos')) tags.push('projects');
    if (pathname.includes('/dicas')) tags.push('tips');
    if (pathname.includes('/viagens')) tags.push('travels');

    if (variant) tags.push(variant);

    return tags;
  }
}

export const newsletterService = new NewsletterService();
