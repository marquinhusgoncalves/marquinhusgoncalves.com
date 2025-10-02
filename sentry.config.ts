import * as Sentry from '@sentry/gatsby';

// Only initialize Sentry in browser environment
if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.GATSBY_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Performance monitoring
    tracesSampleRate: 0.1,
    // Session replay configuration
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
