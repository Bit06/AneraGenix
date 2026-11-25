import { useState } from "react";
import { Info, Plus, Minus, ArrowRight, Check } from "@phosphor-icons/react";
import Helix, { type HelixScene } from "../components/Helix";
import { Eyebrow, PillButton, Reveal } from "../components/ui";
import { STEPS } from "../data";

const processScene = (w: number, h: number): HelixScene => {
  if (w >= 1024) {
    return {
      helices: [
        {
          a: [0.02, 0.62],
          b: [0.98, 0.46],
          radius: 0.058,
          pairs: 30,
          turns: 3.0,
          focus: 0.58,
          dof: 0.65,
          speed: 0.25,
        },
      ],
      particles: 22,
    };
  }
  return {
    helices: [
      {
        a: [0.04, 0.58],
        b: [0.96, 0.44],
        radius: w / h > 1.2 ? 0.075 : 0.09,
        pairs: 22,
        turns: 2.1,
        focus: 0.55,
        dof: 0.68,
        speed: 0.22,
      },
    ],
    particles: 14,
  };
};

// Precisely tuned card anchor placement on large displays
const PLACEMENT = [
  { left: "6%", top: 130, connectorHeight: 250 },
  { left: "38%", top: 90, connectorHeight: 270 },
  { left: "70%", top: 60, connectorHeight: 260 },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(1); // Step 2 default highlighted

  return (
    <section id="process" className="relative overflow-hidden bg-[#0a0709] text-white">
      {/* Bioluminescent dark ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_52%,rgba(216,31,60,0.22)_0%,rgba(140,10,35,0.08)_48%,transparent_80%)]" />

      <div className="relative min-h-0 lg:h-[980px]">
        {/* Animated DNA Canvas */}
        <div className="relative h-[260px] sm:h-[380px] lg:absolute lg:inset-0 lg:h-auto">
          <Helix scene={processScene} dark animate label="Glowing DNA double helix illustrating clinical sequencing workflow" />
        </div>

        {/* Large screens: Floating callouts with precise vertical connectors to the DNA strand */}
        <ol className="hidden lg:block">
          {STEPS.map((s, i) => {
            const isExpanded = activeStep === i;
            return (
              <li
                key={s.n}
                className="absolute z-20 w-[27%] max-w-[350px] transition-transform duration-300"
                style={{ left: PLACEMENT[i].left, top: PLACEMENT[i].top }}
              >
                <Reveal delay={i * 120}>
                  <div
                    onClick={() => setActiveStep(isExpanded ? null : i)}
                    className={`cursor-pointer rounded-2xl border transition-all duration-300 ${
                      isExpanded
                        ? "border-brand/60 bg-[#161014]/95 shadow-[0_20px_50px_-15px_rgba(216,31,60,0.4)]"
                        : "border-white/12 bg-[#120d10]/95 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.8)] hover:border-white/30 hover:bg-[#181215]"
                    } p-5`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-brand">
                          STEP {s.n}
                        </span>
                        <h3 className="mt-0.5 text-[17px] font-medium tracking-[-0.02em] text-white">
                          {s.title}
                        </h3>
                      </div>
                      <button
                        type="button"
                        aria-label={isExpanded ? "Collapse step details" : "Expand step details"}
                        className={`grid size-7 place-items-center rounded-full transition-colors ${
                          isExpanded ? "bg-brand text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {isExpanded ? <Minus size={13} weight="bold" /> : <Plus size={13} weight="bold" />}
                      </button>
                    </div>

                    <p className="mt-2.5 text-[12.5px] leading-[1.6] text-white/70">
                      {s.short}
                    </p>

                    {isExpanded && (
                      <div className="mt-3.5 border-t border-white/10 pt-3 animate-[rise_0.25s_ease-out]">
                        <p className="text-[11.5px] leading-[1.6] text-white/55">
                          {s.detail}
                        </p>
                        <span className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[10px] text-brand">
                          <Check size={12} weight="bold" /> {s.metric}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Vertical connector line pointing down to the strand */}
                  <div
                    className="relative mx-auto w-px bg-gradient-to-b from-brand/80 via-white/30 to-brand"
                    style={{ height: PLACEMENT[i].connectorHeight }}
                  >
                    <span className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_16px_6px_rgba(255,80,105,0.9)] animate-pulse" />
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Small/medium screens: responsive cards */}
        <div className="relative mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:pb-16">
          <ol className="grid gap-3.5 sm:grid-cols-3 lg:hidden">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} as="li">
                <div
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  className="rounded-2xl border border-white/12 bg-[#140e12]/95 p-4.5 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10.5px] text-brand">STEP {s.n}</span>
                    <span className="text-[11px] text-white/50">{s.metric}</span>
                  </div>
                  <h3 className="mt-1 text-[16px] font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-white/70">{s.body}</p>
                  {activeStep === i && (
                    <p className="mt-2.5 border-t border-white/10 pt-2 text-[11.5px] text-brand">
                      {s.detail}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Section Summary Row */}
          <div className="mt-14 flex flex-col gap-6 border-t border-white/12 pt-8 md:flex-row md:items-end md:justify-between lg:mt-0">
            <div>
              <Eyebrow dark>How it works</Eyebrow>
              <h2 className="mt-5 max-w-[620px] text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] font-medium tracking-[-0.04em]">
                From cheek swab to clinical conversation{" "}
                <span className="text-white/45 font-normal">in three weeks.</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <PillButton href="#pricing" variant="brand">
                Order a kit
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
