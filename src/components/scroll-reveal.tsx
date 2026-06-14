'use client';

import { useEffect } from 'react';

const revealSelector = '.reveal-fade, .reveal-up, .reveal-soft';

export function ScrollReveal() {
  useEffect(() => {
    // 1. Quick check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        if (element instanceof HTMLElement) {
          element.dataset.revealVisible = 'true';
        }
      });
      return;
    }

    const nodes = new Set<HTMLElement>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.dataset.revealVisible = 'true';
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      }
    );

    let scanFrameId: number | null = null;

    const runScan = () => {
      scanFrameId = null;

      const elements = Array.from(document.querySelectorAll(revealSelector)) as HTMLElement[];
      const newElements = elements.filter((el) => !nodes.has(el));
      if (newElements.length === 0) {
        return;
      }

      // Batch read viewport boundaries
      const viewportHeight = window.innerHeight;
      const elementStates = newElements.map((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
        return { el, isInViewport };
      });

      // Batch write dataset properties and setup observers
      elementStates.forEach(({ el, isInViewport }) => {
        nodes.add(el);
        if (isInViewport) {
          el.dataset.revealVisible = 'true';
        } else {
          el.dataset.revealVisible = 'false';
          revealObserver.observe(el);
        }
      });
    };

    const requestScan = () => {
      if (scanFrameId !== null) {
        return;
      }
      scanFrameId = requestAnimationFrame(runScan);
    };

    // Run initial scan
    requestScan();

    // Observe child additions using MutationObserver, but debounced
    const mutationObserver = new MutationObserver(() => {
      requestScan();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (scanFrameId !== null) {
        cancelAnimationFrame(scanFrameId);
      }
      mutationObserver.disconnect();
      revealObserver.disconnect();
      nodes.clear();
    };
  }, []);

  return null;
}
