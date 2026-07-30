"use client";
import React, { useEffect, useRef, useState } from "react";

interface SlideUpProps {
  children: React.ReactNode;
  offset?: string;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, offset = "0px", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: offset,
        threshold: 0.1,
      }
    );

    const currentRef = ref.current; // Simpan ref.current ke variabel

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [offset]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SlideUp;