import { Dna, Plant } from "@phosphor-icons/react";
import { useCountUp, useInView } from "../components/ui";
import { LANDING_CONTENT, COMPANY_INFO } from "../data";
import { IMAGES } from "../assets/images";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-ink/8 bg-[radial-gradient(120%_95%_at_80%_18%,#e6f6f8_0%,#f2fafb_44%,var(--color-paper)_78%)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-14 sm:px-8 sm:pt-34 lg:pt-38 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Headline, Body, Exploration Navigation */}
          <div className="relative z-30 max-w-[800px]">
            {/* Scientific Topic Pill */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-deep/30 bg-white px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-semibold text-brand-deep animate-[rise_1.1s_var(--ease-out-expo)_both]">
              <Dna size={14} weight="bold" className="text-brand-deep shrink-0" />
              <span>CRISPR-Cas9 Multiplex Editing in Wheat</span>
              <span className="size-1 rounded-full bg-brand-deep shrink-0 max-sm:hidden" />
              <span className="font-mono text-[11px] text-muted shrink-0 max-sm:hidden">{COMPANY_INFO.gene} Target</span>
            </div>

            {/* Verbatim Headline */}
            <h1 className="mt-6 sm:mt-7 text-[clamp(2.3rem,5.6vw,5.2rem)] leading-[1.04] sm:leading-[0.98] font-semibold tracking-[-0.04em] text-ink break-words">
              <span className="block animate-[rise_1.1s_var(--ease-out-expo)_both]">
                {LANDING_CONTENT.headline.split("THROUGH")[0]}THROUGH
              </span>
              <span className="block animate-[rise_1.1s_var(--ease-out-expo)_0.1s_both] bg-gradient-to-r from-brand-deep via-[#03788f] to-[#048fa5] bg-clip-text text-transparent">
                GENETIC RESEARCH
              </span>
            </h1>

            {/* Verbatim Body Paragraph */}
            <p className="relative z-10 mt-6 max-w-[620px] animate-[rise_1.1s_var(--ease-out-expo)_0.2s_both] text-[15.5px] sm:text-[16.5px] leading-[1.68] text-ink-soft">
              {LANDING_CONTENT.body}
            </p>
          </div>

          {/* Right Column: Figure 1 (Replacing spiral DNA helix) */}
          <div className="relative animate-[rise_1.1s_var(--ease-out-expo)_0.25s_both]">
            <figure className="overflow-hidden rounded-[22px] border border-ink/12 bg-white p-3">
              <img
                src={IMAGES.figure1}
                alt="wheat the crop being investigate in this study"
                className="aspect-[4/3] w-full rounded-[16px] object-cover"
                loading="eager"
              />
              <figcaption className="px-2 pt-3 pb-1">
                <p className="text-[13.5px] font-semibold text-ink leading-snug">
                  Figure 1: wheat the crop being investigate in this study
                </p>
                <p className="mt-1 text-[11.5px] font-mono text-muted">
                  Source: (UK flour millers)
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Scientific Key Indicators & Empirical Overview */}
        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  const plants = useCountUp(207, inView, 1200);
  const mutants = useCountUp(5, inView, 900);
  const genes = useCountUp(3, inView, 700);

  return (
    <div
      ref={ref}
      className="relative z-20 mt-14 grid gap-px overflow-hidden rounded-[20px] bg-ink/10 border border-ink/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
    >
      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(plants)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">T1 Plants</span>
        </div>
        <p className="mt-1.5 text-[12px] font-mono text-muted">
          Screened (Zhang et al., 2017)
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(mutants)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">Triple Mutants</span>
        </div>
        <p className="mt-1.5 text-[12px] font-mono text-muted">
          Homozygous TaEDR1 knockouts
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6">
        <div className="flex items-baseline gap-2">
          <span className="text-[34px] sm:text-[40px] leading-none font-semibold tracking-[-0.04em] tabular-nums text-ink">
            {Math.round(genes)}
          </span>
          <span className="text-[12px] font-mono text-brand-deep font-bold">Homoeologues</span>
        </div>
        <p className="mt-1.5 text-[12px] font-mono text-muted">
          Subgenomes 1A, 1B, 1D
        </p>
      </div>

      <div className="bg-white px-5 py-5 sm:px-6 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 text-brand-deep font-semibold text-[13px]">
          <Plant size={18} weight="duotone" className="text-brand-deep shrink-0" />
          <span>Powdery Mildew</span>
        </div>
        <p className="mt-1.5 text-[12px] font-mono text-muted">
          Bgt Inoculation Response
        </p>
      </div>
    </div>
  );
}
