import { useState } from "react";
import { ArrowRight, CheckCircle, Dna, FileText, Lightning, Scissors, Sparkle } from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "../components/ui";
import { METHODOLOGY_CONTENT } from "../data";

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

        {/* Figure 5: CRISPR-Cas9 Gene Editing Process (Rasheed et al. 2021) */}
        <div className="my-10">
          <figure className="overflow-hidden rounded-[22px] border border-white/15 bg-white p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-center rounded-[16px] bg-white p-2">
              <img
                src="./figure-5.jpeg"
                alt="shows an overview of the CRISPR-Cas9 gene editing process. It shows the main stages involved in identifying and modifying a target gene"
                className="max-h-[540px] w-auto max-w-full rounded-[10px] object-contain"
                loading="lazy"
              />
            </div>
            <figcaption className="px-2 pt-3.5 pb-1 border-t border-ink/10">
              <p className="text-[13.5px] font-semibold text-ink leading-snug">
                Figure 5: shows an overview of the CRISPR-Cas9 gene editing process. It shows the main stages involved in identifying and modifying a target gene
              </p>
              <p className="mt-1 text-[11.5px] font-mono text-muted">
                Source: Rasheed et al., (2021)
              </p>
            </figcaption>
          </figure>
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
