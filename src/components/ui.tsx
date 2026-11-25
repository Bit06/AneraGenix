import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react";

const revealCallbacks = new Map<Element, () => void>();
let sharedRevealObserver: IntersectionObserver | null = null;

function getSharedRevealObserver() {
  if (!sharedRevealObserver && typeof window !== "undefined") {
    sharedRevealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = revealCallbacks.get(entry.target);
            if (cb) {
              cb();
              revealCallbacks.delete(entry.target);
              sharedRevealObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
  }
  return sharedRevealObserver;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getSharedRevealObserver();
    if (!observer) {
      setInView(true);
      return;
    }
    revealCallbacks.set(el, () => setInView(true));
    observer.observe(el);
    return () => {
      revealCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[5px] border px-2 py-[3px] font-mono text-[10px] font-medium uppercase tracking-[0.08em] ${
        dark ? "border-white/15 text-white/70" : "border-ink/10 bg-white/60 text-ink-soft"
      }`}
    >
      <span className="size-[5px] rounded-[1px] bg-brand" />
      {children}
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "brand" | "light" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function PillButton({
  children,
  href = "#",
  variant = "light",
  className = "",
  onClick,
}: BtnProps) {
  const styles = {
    brand: "bg-brand text-white border border-brand-deep/30 ring-1 ring-brand/20 hover:bg-brand-deep",
    light: "bg-white text-ink ring-1 ring-ink/10 hover:ring-ink/20",
    ghost: "bg-white/80 text-ink backdrop-blur ring-1 ring-ink/10 hover:ring-ink/20 hover:bg-white",
  }[variant];
  const knob = variant === "brand" ? "bg-white text-brand" : "bg-brand text-white";
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-[13px] font-medium transition-all duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`grid size-8 place-items-center overflow-hidden rounded-full transition-transform duration-500 ease-out-expo group-hover:scale-105 ${knob}`}
      >
        <span className="relative block size-3.5 overflow-hidden">
          <ArrowRight
            weight="bold"
            className="absolute inset-0 size-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-full"
          />
          <ArrowRight
            weight="bold"
            className="absolute inset-0 size-3.5 -translate-x-full transition-transform duration-500 ease-out-expo group-hover:translate-x-0"
          />
        </span>
      </span>
    </a>
  );
}

/** Inverted-radius notch in the top-right corner of a card, with the brand dot. */
export function Notch({
  size = 32,
  borderColor,
  dotColor = "bg-brand",
  dot = true,
  pathClassName = "",
}: {
  bg?: string;
  size?: number;
  r?: number;
  borderColor?: string;
  dotColor?: string;
  dot?: boolean;
  pathClassName?: string;
}) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-0 right-0 z-20 block"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 size-full overflow-visible"
        fill="none"
      >
        <path
          d={`M 0 0 A ${size} ${size} 0 0 0 ${size} ${size}`}
          strokeWidth="1.2"
          fill="none"
          className={`${
            pathClassName ? pathClassName : "stroke-ink/10 group-hover:stroke-brand/40"
          } transition-colors duration-300`}
          {...(borderColor ? { stroke: borderColor } : {})}
        />
      </svg>
      {dot && (
        <span
          aria-hidden
          className={`absolute top-2.5 right-2.5 z-20 size-1.5 rounded-full ${dotColor} shadow-[0_0_0_2px_rgba(255,255,255,0.6)]`}
        />
      )}
    </span>
  );
}

export function useCountUp(target: number, run: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setV(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return v;
}

export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
