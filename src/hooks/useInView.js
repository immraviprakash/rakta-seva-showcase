import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver hook for viewport-based reveal animations.
 * Respects prefers-reduced-motion.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.05, once = true, rootMargin = '50px 0px 50px 0px' } = options;

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Immediate check on mount: if element is already in or near viewport, reveal immediately
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight + 80 && rect.bottom > -80) {
      setIsInView(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return [ref, isInView];
}


/**
 * Smooth scroll to a section or element, ensuring section heading lands fully visible below navbar.
 * Accounts for dynamic navbar height and respects prefers-reduced-motion.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Locate the actual section heading inside the container, or fall back to element
  const heading = el.querySelector('.section-heading') || el.querySelector('h2, [id$="-title"]') || el;

  // Dynamically measure current navbar height
  const nav = document.querySelector('.navbar');
  const navHeight = nav ? nav.getBoundingClientRect().height : 72;

  // Intentional breathing space below the fixed navbar
  const spacingBelowNav = 20;

  // Calculate destination scroll coordinate
  const headingRect = heading.getBoundingClientRect();
  const targetY = headingRect.top + window.pageYOffset - navHeight - spacingBelowNav;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: prefersReduced ? 'auto' : 'smooth',
  });
}
