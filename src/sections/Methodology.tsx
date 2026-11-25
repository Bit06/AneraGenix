import { useState } from "react";
import { ArrowRight, CheckCircle, Dna, FileText, Lightning, Scissors, Sparkle } from "@phosphor-icons/react";
import Helix, { type HelixScene } from "../components/Helix";
import { Eyebrow, Reveal } from "../components/ui";
import { METHODOLOGY_CONTENT } from "../data";

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

export default function Methodology() {
  const { header, intro, howItWorks, whySelected } = METHODOLOGY_CONTENT;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodology" className="relative overflow-hidden bg-[#07192e] text-white py-24 sm:py-32">
      {/* Cyan bioluminescent ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_52%,rgba(11,185,190,0.18)_0%,rgba(4,132,157,0.06)_48%,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header & Introduction */}
        <div className="max-w-[840px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-[11px] font-mono tracking-wider text-brand font-semibold uppercase">
            <Dna size={14} weight="bold" />
            <span>Molecular Genetic Technique</span>
          </div>

          <h2 className="mt-4 text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-white">
            {header}
          </h2>

          <p className="mt-6 text-[15.5px] sm:text-[16.5px] leading-[1.72] text-white/80">
            {intro}
          </p>
        </div>

        {/* Animated Helix Canvas container */}
        <div className="my-10 relative h-[180px] sm:h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <Helix scene={processScene} dark animate label="CRISPR molecular cleavage animation" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07192e] to-transparent pointer-events-none" />
        </div>

        {/* How does this technique work? */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-brand animate-pulse" />
            <h3 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold tracking-[-0.03em] text-white">
              {howItWorks.title}
            </h3>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorks.steps.map((st, idx) => (
              <div
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`group cursor-pointer relative flex flex-col justify-between rounded-[20px] border p-6 sm:p-7 transition-all duration-200 ${
                  activeStep === idx
                    ? "border-brand bg-white/10 ring-1 ring-brand/50"
                    : "border-white/12 bg-white/4 hover:border-white/25 hover:bg-white/7"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[12px] font-bold text-brand">
                      PHASE {st.num}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full bg-white/10 text-brand">
                      {idx === 0 ? <Dna size={16} /> : idx === 1 ? <Scissors size={16} /> : <Lightning size={16} />}
                    </span>
                  </div>

                  <h4 className="mt-4 text-[17.5px] font-semibold text-white">
                    {st.label}
                  </h4>

                  <p className="mt-3 text-[14px] leading-[1.68] text-white/75">
                    {st.text}
                  </p>
                </div>

                {/* Sub-technical badge */}
                <div className="mt-6 rounded-xl bg-white/5 p-3 border border-white/5 font-mono text-[11px] text-brand/90">
                  {idx === 0 && "PAM Sequence: 5'-NGG-3' Recognition"}
                  {idx === 1 && "Dual Nuclease Domains: HNH & RuvC"}
                  {idx === 2 && "Frameshift Knockout via NHEJ"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why have we selected this approach? */}
        <div className="mt-14 sm:mt-20 rounded-[26px] border border-brand/30 bg-gradient-to-r from-brand/10 via-brand/5 to-transparent p-7 sm:p-10">
          <div className="flex items-center gap-2 font-mono text-[11.5px] font-bold tracking-wider text-brand uppercase">
            <Sparkle size={14} weight="fill" />
            <span>Strategic Alignment</span>
          </div>

          <h3 className="mt-3 text-[22px] sm:text-[26px] font-semibold tracking-[-0.025em] text-white">
            {whySelected.title}
          </h3>

          <p className="mt-4 max-w-[950px] text-[15px] sm:text-[16px] leading-[1.75] text-white/85">
            {whySelected.text}
          </p>
        </div>
      </div>
    </section>
  );
}
