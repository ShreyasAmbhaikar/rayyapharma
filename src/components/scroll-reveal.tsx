'use client';

import { useEffect } from 'react';

const revealSelector = '.reveal-fade, .reveal-up, .reveal-soft';

export function ScrollReveal() {
  useEffect(() => {
    const nodes = new Set<HTMLElement>();

    const setVisible = (element: Element) => {
      if (element instanceof HTMLElement) {
        element.dataset.revealVisible = 'true';
      }
    };

    const observeElement = (element: Element, observer?: IntersectionObserver) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setVisible(element);
        return;
      }

      if (nodes.has(element)) {
        return;
      }

      nodes.add(element);
      element.dataset.revealVisible = 'false';
      observer?.observe(element);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.14,
      },
    );

    document.querySelectorAll(revealSelector).forEach((element) => observeElement(element, revealObserver));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches(revealSelector)) {
            observeElement(node, revealObserver);
          }

          node.querySelectorAll(revealSelector).forEach((element) => observeElement(element, revealObserver));
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
      nodes.clear();
    };
  }, []);

  return null;
}
