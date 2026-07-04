import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);
  const location = useLocation();

  useLayoutEffect(() => {
    const page = pageRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!page || reduceMotion) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        page,
        {
          autoAlpha: 0,
          y: 18,
          filter: "blur(10px) saturate(0.85)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px) saturate(1)",
          duration: 0.55,
          ease: "power3.out",
        }
      );
    }, page);

    return () => context.revert();
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="will-change-transform">
      {children}
    </div>
  );
};

export default PageTransition;
