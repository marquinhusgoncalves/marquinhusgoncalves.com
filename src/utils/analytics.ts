import type { Metric } from 'web-vitals';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function reportWebVitals() {
  import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
    const send = ({ name, delta, id }: Metric) => {
      trackEvent(name, {
        event_category: 'Web Vitals',
        event_label: id,
        // CLS é um score 0–1, os outros são em ms — normaliza para inteiro
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    };

    onCLS(send);
    onFCP(send);
    onINP(send);
    onLCP(send);
    onTTFB(send);
  });
}
