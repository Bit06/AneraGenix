import { useEffect, useRef } from "react";

/**
 * A high-resolution, depth-sorted DNA renderer. The backbone is built from
 * irregular glass beads while the base pairs use translucent capsule-like
 * rods and smaller internal nodes, matching the supplied art direction.
 */

export type HelixSpec = {
  a: [number, number];
  b: [number, number];
  radius: number;
  pairs: number;
  turns: number;
  focus?: number;
  dof?: number;
  blur?: number;
  speed?: number;
  tilt?: number;
  opacity?: number;
};

export type HelixScene = {
  helices: HelixSpec[];
  particles?: number;
  particleBox?: [number, number, number, number];
};

type Props = {
  scene: (w: number, h: number) => HelixScene;
  dark?: boolean;
  animate?: boolean;
  className?: string;
  label?: string;
};

type Palette = {
  light: string;
  bright: string;
  mid: string;
  deep: string;
  rim: string;
  alpha: number;
};

const PALETTES: Record<string, Palette> = {
  ruby: {
    light: "#ffffff",
    bright: "#38e1e7",
    mid: "#0bb9be",
    deep: "#04849d",
    rim: "#8ce0e6",
    alpha: 0.98,
  },
  garnet: {
    light: "#e0fbfb",
    bright: "#0bb9be",
    mid: "#04849d",
    deep: "#0b294f",
    rim: "#67e8f9",
    alpha: 0.98,
  },
  scarlet: {
    light: "#ffffff",
    bright: "#22d3ee",
    mid: "#0891b2",
    deep: "#0b294f",
    rim: "#a5f3fc",
    alpha: 0.98,
  },
  cherry: {
    light: "#ffffff",
    bright: "#0bb9be",
    mid: "#04849d",
    deep: "#083344",
    rim: "#bae6fd",
    alpha: 0.98,
  },
  coral: {
    light: "#ffffff",
    bright: "#38bdf8",
    mid: "#0284c7",
    deep: "#0c4a6e",
    rim: "#bae6fd",
    alpha: 0.96,
  },
  blush: {
    light: "#ffffff",
    bright: "#e0f2fe",
    mid: "#7dd3fc",
    deep: "#0369a1",
    rim: "#ffffff",
    alpha: 0.96,
  },
  pearl: {
    light: "#ffffff",
    bright: "#f0fdfa",
    mid: "#99f6e4",
    deep: "#0d9488",
    rim: "#ffffff",
    alpha: 0.99,
  },
  glass: {
    light: "#ffffff",
    bright: "#ccfbf1",
    mid: "#14b8a6",
    deep: "#0f766e",
    rim: "#ffffff",
    alpha: 0.76,
  },
};

const PALETTE_KEYS = Object.keys(PALETTES);
const BLUR_LEVELS = [0, 2, 5, 9];
const SPRITE = 160;
const SPHERE_R = 54;

function blurPixels(level: number) {
  const clamped = Math.max(0, Math.min(BLUR_LEVELS.length - 1, level));
  const low = Math.floor(clamped);
  const high = Math.ceil(clamped);
  const mix = clamped - low;
  return BLUR_LEVELS[low] * (1 - mix) + BLUR_LEVELS[high] * mix;
}

function makeSphere(p: Palette) {
  const c = document.createElement("canvas");
  c.width = c.height = SPRITE;
  const g = c.getContext("2d")!;
  const cx = SPRITE / 2;
  const cy = SPRITE / 2;
  const r = SPHERE_R;

  // 1. Soft atmospheric bioluminescent aura
  const aura = g.createRadialGradient(cx, cy, r * 0.72, cx, cy, r * 1.28);
  aura.addColorStop(0, `${p.bright}2e`);
  aura.addColorStop(0.7, `${p.mid}0a`);
  aura.addColorStop(1, "rgba(255, 30, 70, 0)");
  g.fillStyle = aura;
  g.beginPath();
  g.arc(cx, cy, r * 1.28, 0, Math.PI * 2);
  g.fill();

  // 2. Translucent candy / glass 3D body
  // Key light from top-left (cx - r*0.32, cy - r*0.36)
  const body = g.createRadialGradient(
    cx - r * 0.3,
    cy - r * 0.34,
    r * 0.05,
    cx + r * 0.06,
    cy + r * 0.08,
    r * 1.02,
  );
  body.addColorStop(0, p.light);
  body.addColorStop(0.12, p.bright);
  body.addColorStop(0.55, p.mid);
  body.addColorStop(0.92, p.deep);
  body.addColorStop(1, p.deep);
  g.globalAlpha = p.alpha;
  g.fillStyle = body;
  g.beginPath();
  g.arc(cx, cy, r, 0, Math.PI * 2);
  g.fill();

  // 3. Transmitted light caustic on bottom-right interior (refracted glass glow)
  const caustic = g.createRadialGradient(
    cx + r * 0.34,
    cy + r * 0.36,
    0,
    cx + r * 0.3,
    cy + r * 0.34,
    r * 0.72,
  );
  caustic.addColorStop(0, `${p.rim}ea`);
  caustic.addColorStop(0.35, `${p.bright}99`);
  caustic.addColorStop(0.75, `${p.mid}15`);
  caustic.addColorStop(1, "rgba(255, 255, 255, 0)");
  g.fillStyle = caustic;
  g.beginPath();
  g.arc(cx, cy, r - 0.5, 0, Math.PI * 2);
  g.fill();

  // 4. Clean glass edge contour
  g.globalAlpha = 0.75;
  const rim = g.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
  rim.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  rim.addColorStop(0.35, "rgba(255, 255, 255, 0.2)");
  rim.addColorStop(0.7, `${p.rim}aa`);
  rim.addColorStop(1, "rgba(180, 20, 50, 0.3)");
  g.strokeStyle = rim;
  g.lineWidth = 1.6;
  g.beginPath();
  g.arc(cx, cy, r - 0.8, 0, Math.PI * 2);
  g.stroke();

  // 5. Crisp studio key-light specular glint
  g.globalAlpha = 1;
  const spec = g.createRadialGradient(
    cx - r * 0.36,
    cy - r * 0.4,
    0,
    cx - r * 0.36,
    cy - r * 0.4,
    r * 0.28,
  );
  spec.addColorStop(0, "rgba(255, 255, 255, 1)");
  spec.addColorStop(0.28, "rgba(255, 255, 255, 0.9)");
  spec.addColorStop(0.65, "rgba(255, 255, 255, 0.15)");
  spec.addColorStop(1, "rgba(255, 255, 255, 0)");
  g.fillStyle = spec;
  g.beginPath();
  g.arc(cx - r * 0.34, cy - r * 0.38, r * 0.28, 0, Math.PI * 2);
  g.fill();

  // 6. Secondary soft reflection glint (curved arc)
  g.strokeStyle = "rgba(255, 255, 255, 0.55)";
  g.lineWidth = 1.4;
  g.lineCap = "round";
  g.beginPath();
  g.arc(cx, cy, r * 0.72, Math.PI * 1.06, Math.PI * 1.38);
  g.stroke();

  return c;
}

function blurSprite(src: HTMLCanvasElement, amount: number) {
  if (!amount) return src;
  const c = document.createElement("canvas");
  c.width = c.height = SPRITE;
  const g = c.getContext("2d")!;
  g.filter = `blur(${amount}px)`;
  g.drawImage(src, 0, 0);
  return c;
}

let spriteCache: Record<string, HTMLCanvasElement[]> | null = null;
function getSprites() {
  if (spriteCache) return spriteCache;
  spriteCache = {};
  for (const key of PALETTE_KEYS) {
    const base = makeSphere(PALETTES[key]);
    spriteCache[key] = BLUR_LEVELS.map((blur) => blurSprite(base, blur));
  }
  return spriteCache;
}

function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

type Bead = {
  type: "bead";
  x: number;
  y: number;
  z: number;
  size: number;
  key: string;
  blur: number;
  alpha: number;
};

type Rod = {
  type: "rod";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  z: number;
  width: number;
  blur: number;
  alpha: number;
  backbone?: boolean;
};

type Drawable = Bead | Rod;

export default function Helix({
  scene,
  dark = false,
  animate = false,
  className = "",
  label,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef(scene);
  sceneRef.current = scene;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const sprites = getSprites();
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.webdriver;

    let w = 1;
    let h = 1;
    let dpr = 1;
    let current: HelixScene = { helices: [] };
    type Particle = {
      x: number;
      y: number;
      size: number;
      key: string;
      blur: number;
      vx: number;
      vy: number;
      phase: number;
      isBokeh?: boolean;
      isSparkle?: boolean;
    };
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    let time = 0;
    let last = performance.now();

    const seedParticles = () => {
      const count = current.particles ?? 0;
      const box = current.particleBox ?? [0, 0, 1, 1];
      const unit = Math.min(w, h);
      particles = Array.from({ length: count }, (_, i) => {
        const r = hash(i * 13 + 7);
        const isBokeh = i % 3 === 0;
        const isSparkle = !isBokeh && i % 2 === 0;
        const size = isBokeh
          ? unit * (0.024 + r * 0.045)
          : isSparkle
            ? unit * (0.003 + r * 0.004)
            : unit * (0.006 + r * 0.014);

        return {
          x: (box[0] + hash(i * 3.1) * (box[2] - box[0])) * w,
          y: (box[1] + hash(i * 5.7 + 1) * (box[3] - box[1])) * h,
          size,
          key: ["ruby", "cherry", "coral", "blush", "pearl", "glass"][i % 6],
          blur: isBokeh ? 3 : isSparkle ? 0 : r > 0.5 ? 2 : 1,
          vx: (hash(i + 2) - 0.5) * 3,
          vy: (hash(i + 9) - 0.5) * 3 - 1.2,
          phase: hash(i + 4) * Math.PI * 2,
          isBokeh,
          isSparkle,
        };
      });
    };

    const buildHelix = (spec: HelixSpec, out: Drawable[], index: number) => {
      const ax = spec.a[0] * w;
      const ay = spec.a[1] * h;
      const bx = spec.b[0] * w;
      const by = spec.b[1] * h;
      const dx = bx - ax;
      const dy = by - ay;
      const length = Math.max(1, Math.hypot(dx, dy));
      const ux = dx / length;
      const uy = dy / length;
      const nx = -uy;
      const ny = ux;
      const radius = spec.radius * length;
      const tilt = spec.tilt ?? 0.3;
      const focus = spec.focus ?? 0.5;
      const dof = spec.dof ?? 1;
      const baseBlur = spec.blur ?? 0;
      const opacity = spec.opacity ?? 1;
      const phase = time * (spec.speed ?? 1) * 0.14;

      // Proportions matching reference artwork: clean, slender, elegant
      const mainSize = radius * 0.22;
      const spacerSize = mainSize * 0.46;
      const rungNodeSize = radius * 0.056;
      const previous: ({ x: number; y: number; z: number } | null)[] = [null, null];

      const blurFor = (u: number, z: number) => {
        const alongAxis = Math.abs(u - focus) * dof * 3.8;
        const depth = Math.max(0, Math.abs(z) - 0.45) * dof * 1.25;
        return Math.min(3, alongAxis + depth + baseBlur);
      };
      const point = (u: number, theta: number) => {
        const c = Math.cos(theta);
        const z = Math.sin(theta);
        return {
          x: ax + dx * u + nx * radius * c + ux * radius * z * tilt,
          y: ay + dy * u + ny * radius * c + uy * radius * z * tilt,
          z,
        };
      };

      for (let i = 0; i < spec.pairs; i++) {
        const u = i / Math.max(1, spec.pairs - 1);
        const theta = u * spec.turns * Math.PI * 2 + phase;
        const p1 = point(u, theta);
        const p2 = point(u, theta + Math.PI);
        const depth = (p1.z + p2.z) / 2;
        const blur = blurFor(u, depth);
        const pairWidth = Math.max(1.2, radius * 0.045);

        // 1. Slender crystal glass rod connecting the base pair
        out.push({
          type: "rod",
          x1: p1.x,
          y1: p1.y,
          x2: p2.x,
          y2: p2.y,
          z: depth - 0.02,
          width: pairWidth,
          blur,
          alpha: opacity * (0.6 + (depth + 1) * 0.12),
        });

        // 2. Delicate tiny glass collar beads along the rung
        const rungFractions = [0.35, 0.5, 0.65];
        for (let rIdx = 0; rIdx < rungFractions.length; rIdx++) {
          const fn = rungFractions[rIdx];
          const rx = p1.x + (p2.x - p1.x) * fn;
          const ry = p1.y + (p2.y - p1.y) * fn;
          const rz = p1.z + (p2.z - p1.z) * fn;
          const rBlur = blurFor(u, rz);
          const rKey = rIdx === 1 ? (hash(i * 31) > 0.45 ? "pearl" : "blush") : "glass";

          out.push({
            type: "bead",
            x: rx,
            y: ry,
            z: rz + 0.005,
            size: rungNodeSize * (1 + rz * 0.2),
            key: rKey,
            blur: rBlur,
            alpha: opacity * (0.8 + (rz + 1) * 0.08),
          });
        }

        // 3. Backbone strands: clean alternating [Main Bead] - [Spacer Bead] sequence
        for (let strand = 0; strand < 2; strand++) {
          const p = strand === 0 ? p1 : p2;
          const prev = previous[strand];
          if (prev) {
            // Delicate connecting backbone spine
            out.push({
              type: "rod",
              x1: prev.x,
              y1: prev.y,
              x2: p.x,
              y2: p.y,
              z: (prev.z + p.z) / 2 - 0.03,
              width: mainSize * 0.42,
              blur: blurFor(u, p.z),
              alpha: opacity * 0.65,
              backbone: true,
            });

            // Single neat spacer bead halfway between prev and p
            const midX = (prev.x + p.x) * 0.5;
            const midY = (prev.y + p.y) * 0.5;
            const midZ = (prev.z + p.z) * 0.5;
            const spacerRnd = hash(i * 47 + strand * 23 + index * 97);
            const spacerKey =
              strand === 0
                ? spacerRnd > 0.6 ? "coral" : "ruby"
                : spacerRnd > 0.5 ? "pearl" : "blush";

            out.push({
              type: "bead",
              x: midX,
              y: midY,
              z: midZ - 0.01,
              size: spacerSize * (1 + midZ * 0.28),
              key: spacerKey,
              blur: blurFor(u, midZ),
              alpha: opacity * (0.8 + (midZ + 1) * 0.09),
            });
          }
          previous[strand] = p;

          // Primary main bead
          const random = hash(i * 19 + strand * 7 + index * 101);
          const key =
            strand === 0
              ? random > 0.7
                ? "coral"
                : random > 0.4
                  ? "cherry"
                  : "ruby"
              : random > 0.6
                ? "pearl"
                : random > 0.35
                  ? "blush"
                  : random > 0.18
                    ? "coral"
                    : "cherry";

          const perspective = 1 + p.z * 0.32;
          out.push({
            type: "bead",
            x: p.x,
            y: p.y,
            z: p.z,
            size: mainSize * perspective * (0.92 + random * 0.16),
            key,
            blur: blurFor(u, p.z),
            alpha: opacity * (0.85 + (p.z + 1) * 0.1),
          });
        }
      }
    };

    const drawRod = (rod: Rod) => {
      ctx.globalAlpha = rod.alpha;

      if (rod.backbone) {
        // Continuous biological backbone strand connecting the beads
        ctx.strokeStyle = dark ? "rgba(235, 30, 65, 0.55)" : "rgba(235, 45, 75, 0.45)";
        ctx.lineWidth = rod.width;
        ctx.beginPath();
        ctx.moveTo(rod.x1, rod.y1);
        ctx.lineTo(rod.x2, rod.y2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
        ctx.lineWidth = Math.max(0.6, rod.width * 0.3);
        ctx.beginPath();
        ctx.moveTo(rod.x1, rod.y1);
        ctx.lineTo(rod.x2, rod.y2);
        ctx.stroke();
      } else {
        // Base pair rung: Slender crystal glass tube
        ctx.strokeStyle = dark ? "rgba(240, 40, 75, 0.22)" : "rgba(245, 90, 120, 0.18)";
        ctx.lineWidth = rod.width * 1.6;
        ctx.beginPath();
        ctx.moveTo(rod.x1, rod.y1);
        ctx.lineTo(rod.x2, rod.y2);
        ctx.stroke();

        ctx.strokeStyle = dark ? "rgba(255, 205, 220, 0.75)" : "rgba(255, 220, 230, 0.7)";
        ctx.lineWidth = rod.width * 0.8;
        ctx.beginPath();
        ctx.moveTo(rod.x1, rod.y1);
        ctx.lineTo(rod.x2, rod.y2);
        ctx.stroke();

        // Crystal highlight
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.lineWidth = Math.max(0.6, rod.width * 0.25);
        ctx.beginPath();
        ctx.moveTo(rod.x1, rod.y1);
        ctx.lineTo(rod.x2, rod.y2);
        ctx.stroke();
      }
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.lineCap = "round";

      const drawables: Drawable[] = [];
      current.helices.forEach((spec, i) => buildHelix(spec, drawables, i));
      drawables.sort((a, b) => a.z - b.z || (a.type === "rod" ? -1 : 1));
      const spriteScale = SPRITE / 2 / SPHERE_R;

      // Atmospheric bokeh & biological particles sit behind the helix
      for (const p of particles) {
        const x = p.x + Math.sin(time * 0.16 + p.phase) * (6 + Math.abs(p.vx));
        const y = p.y + Math.cos(time * 0.12 + p.phase) * (5 + Math.abs(p.vy));
        const size = p.size * spriteScale;
        const bIdx = Math.min(3, Math.max(0, p.blur));

        const sGroup = sprites[p.key] || sprites.ruby;
        if (p.isBokeh) {
          // Dreamy out-of-focus background bokeh discs
          const pulse = 0.55 + 0.45 * Math.sin(time * 0.5 + p.phase);
          ctx.globalAlpha = (dark ? 0.28 : 0.18) * pulse;
          ctx.drawImage(sGroup[3], x - size, y - size, size * 2, size * 2);
        } else if (p.isSparkle) {
          // Twinkling biological diamond / micro-flares
          const sparkle = Math.max(0, Math.sin(time * 2.2 + p.phase));
          ctx.globalAlpha = dark ? 0.85 * sparkle : 0.65 * sparkle;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(x, y, Math.max(1, p.size * 0.25), 0, Math.PI * 2);
          ctx.fill();

          if (sparkle > 0.6) {
            ctx.strokeStyle = dark ? "rgba(255, 210, 225, 0.8)" : "rgba(235, 60, 90, 0.5)";
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(x - 5, y);
            ctx.lineTo(x + 5, y);
            ctx.moveTo(x, y - 5);
            ctx.lineTo(x, y + 5);
            ctx.stroke();
          }
        } else {
          // Soft floating midground bio-particle
          ctx.globalAlpha = dark ? 0.55 : 0.38;
          ctx.drawImage(sGroup[bIdx], x - size, y - size, size * 2, size * 2);
        }
      }

      for (const item of drawables) {
        if (item.type === "rod") {
          drawRod(item);
          continue;
        }
        const size = item.size * spriteScale;
        const idx = Math.min(3, Math.max(0, Math.round(item.blur)));
        const sGroup = sprites[item.key] || sprites.ruby;
        ctx.globalAlpha = Math.min(1, item.alpha);
        ctx.drawImage(sGroup[idx], item.x - size, item.y - size, size * 2, size * 2);
      }
      ctx.globalAlpha = 1;
    };

    let isScrolling = false;
    let scrollTimer = 0;
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        isScrolling = false;
      }, 70);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const loop = (now: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      if (isScrolling) {
        // Yield the thread completely to the browser compositor during active scrolling
        last = now;
        raf = requestAnimationFrame(loop);
        return;
      }
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      time += dt;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const newW = Math.max(1, Math.round(rect.width * dpr));
      const newH = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== newW || canvas.height !== newH) {
        canvas.width = newW;
        canvas.height = newH;
      }
      w = rect.width;
      h = rect.height;
      current = sceneRef.current(w, h);
      seedParticles();
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (animate && !reduced) {
          if (visible) {
            if (!raf) {
              last = performance.now();
              raf = requestAnimationFrame(loop);
            }
          } else {
            if (raf) {
              cancelAnimationFrame(raf);
              raf = 0;
            }
          }
        }
      },
      { rootMargin: "60px" },
    );
    io.observe(canvas);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
      ro.disconnect();
      io.disconnect();
    };
  }, [animate, dark]);

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
