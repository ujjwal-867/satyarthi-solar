import { useState, useEffect, useRef } from "react";

/**
 * LazySection
 * Defers rendering and mounting of below-the-fold components until:
 * 1. The component is within 450px of the viewport (via IntersectionObserver)
 * 2. An explicit hash/anchor navigation occurs (e.g. clicking "Book Free Survey")
 * 3. The browser is idle (after a 3.5s delay fallback)
 *
 * This dramatically reduces initial JS execution, DOM nodes, and layout
 * calculations on mobile devices, ensuring instant first paint on 3G/4G.
 */
export default function LazySection({
  children,
  minHeight = "360px",
  anchorId,
  className = "",
  forceMount = false
}) {
  const [shouldMount, setShouldMount] = useState(forceMount);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldMount) return;

    // Check if current URL hash matches this section's ID
    if (
      anchorId &&
      window.location.hash &&
      window.location.hash.toLowerCase() === `#${anchorId.toLowerCase()}`
    ) {
      setShouldMount(true);
      return;
    }

    // Fallback if IntersectionObserver is unsupported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldMount(true);
      return;
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    // Pre-mount ahead of the viewport to ensure 100% fluid, zero-lag scrolling
    const rootMargin = isMobile ? "800px 0px" : "1200px 0px";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Idle fallback: pre-mount remaining sections in background after 3.5s
    const idleTimer = setTimeout(() => {
      setShouldMount(true);
    }, 3500);

    // Trigger on global mount event (dispatched when clicking nav anchors)
    const handleMountAll = () => setShouldMount(true);
    window.addEventListener("mount-all-sections", handleMountAll, { once: true });

    return () => {
      clearTimeout(idleTimer);
      observer.disconnect();
      window.removeEventListener("mount-all-sections", handleMountAll);
    };
  }, [anchorId, shouldMount]);

  return (
    <div
      ref={containerRef}
      id={!shouldMount ? anchorId : undefined}
      className={className}
      style={!shouldMount ? { minHeight } : undefined}
    >
      {shouldMount ? (
        children
      ) : (
        <div
          style={{ minHeight }}
          className="w-full flex flex-col items-center justify-center p-8 bg-slate-50/50"
          aria-hidden="true"
        >
          <div className="w-10 h-10 rounded-2xl bg-blue-600/10 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
          </div>
          <span className="text-xs font-semibold text-slate-400 mt-2.5">
            Loading section...
          </span>
        </div>
      )}
    </div>
  );
}
