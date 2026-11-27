import { CheckCircle, Crosshair, Dna, ShieldCheck } from "@phosphor-icons/react";
import { Reveal } from "../components/ui";
import { ABOUT_CONTENT } from "../data";
import { IMAGES } from "../assets/images";

export default function About() {
  const { whoAreWe, whyCrispr, ourAims } = ABOUT_CONTENT;

  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      {/* Top Badges */}
      <div className="flex flex-col items-start gap-3">
        <Reveal delay={60}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand-deep/20 bg-brand/10 px-3 py-1 text-[11.5px] font-mono font-semibold text-brand-deep">
              Fictional Molecular Genetic Company
            </span>
            <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-[11.5px] font-mono font-medium text-ink-soft">
              Wheat (Triticum aestivum) · TaEDR1
            </span>
          </div>
        </Reveal>
      </div>

      {/* Part 1: Who are we? */}
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <Reveal delay={80}>
            <h2 className="text-[clamp(2.1rem,4vw,3.2rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whoAreWe.title}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 text-[15px] sm:text-[15.5px] leading-[1.72] text-ink-soft">
            {whoAreWe.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={100 + idx * 50}>
                <p className="rounded-xl border border-ink/10 bg-white p-5 transition hover:border-brand-deep/40">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Figure 2: Powdery Mildew Symptoms & Hexaploid Wheat Architecture */}
        <Reveal delay={160} className="relative">
          <figure className="overflow-hidden rounded-[22px] border border-ink/10 bg-white p-3">
            <img
              src={IMAGES.figure2}
              alt="shows powdery mildew symptoms on wheat leaves, cause by the Blumeria graminis f. sp. tritici"
              className="aspect-[4/3] w-full rounded-[16px] object-cover"
              loading="lazy"
            />
            <figcaption className="px-2 pt-3 pb-1">
              <p className="text-[13px] font-semibold text-ink leading-snug">
                Figure 2: shows powdery mildew symptoms on wheat leaves, cause by the Blumeria graminis f. sp. tritici.
              </p>
              <p className="mt-1 text-[11.5px] font-mono text-muted">
                Source: Nebraska Wheat Board (n.d.).
              </p>
            </figcaption>
          </figure>

          {/* Hexaploid Subgenome Homoeologue Breakdown Card */}
          <div className="mt-4 rounded-[18px] border border-ink/10 bg-white p-5">
            <div className="flex items-center justify-between border-b border-ink/8 pb-3">
              <span className="font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                Hexaploid Wheat Architecture (AABBDD)
              </span>
              <span className="rounded-full border border-brand-deep/20 bg-brand/10 px-2.5 py-0.5 text-[10.5px] font-mono font-bold text-brand-deep">
                2n = 6x = 42
              </span>
            </div>
            <div className="mt-3.5 grid grid-cols-3 gap-2.5 text-center">
              <div className="rounded-xl border border-ink/8 bg-paper p-3">
                <p className="text-[12px] font-mono font-bold text-ink">Subgenome A</p>
                <p className="mt-1 text-[11.5px] font-mono text-brand-deep font-bold">TaEDR1-1A</p>
                <p className="mt-0.5 text-[10.5px] text-muted">Chromosome 1A</p>
              </div>
              <div className="rounded-xl border border-ink/8 bg-paper p-3">
                <p className="text-[12px] font-mono font-bold text-ink">Subgenome B</p>
                <p className="mt-1 text-[11.5px] font-mono text-brand-deep font-bold">TaEDR1-1B</p>
                <p className="mt-0.5 text-[10.5px] text-muted">Chromosome 1B</p>
              </div>
              <div className="rounded-xl border border-ink/8 bg-paper p-3">
                <p className="text-[12px] font-mono font-bold text-ink">Subgenome D</p>
                <p className="mt-1 text-[11.5px] font-mono text-brand-deep font-bold">TaEDR1-1D</p>
                <p className="mt-0.5 text-[10.5px] text-muted">Chromosome 1D</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-muted">
              Multiplex CRISPR-Cas9 simultaneously targets all 3 copies to overcome genetic redundancy.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Part 2: Why CRISPR-Cas9? */}
      <div className="mt-20 sm:mt-28">
        <Reveal>
          <div className="max-w-[760px]">
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whyCrispr.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {/* Card 1: Precision Targeting */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7.5 transition-all hover:border-brand-deep/30 hover:-translate-y-0.5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-deep/10 text-brand-deep mb-5">
                <Crosshair size={22} weight="bold" />
              </div>
              <h3 className="text-[17.5px] font-semibold tracking-[-0.02em] text-ink">
                Precision DNA Targeting
              </h3>
              <p className="mt-3 text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                {whyCrispr.paragraphs[0]}
              </p>
            </div>
          </Reveal>

          {/* Card 2: Multiplex Editing (Featured Centerpiece) */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-brand-deep/30 bg-[#f0f8fa] p-6 sm:p-7.5 transition-all hover:border-brand-deep/50 hover:-translate-y-0.5">
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-deep text-white mb-5 shadow-xs">
                  <Dna size={22} weight="bold" />
                </div>
                <h3 className="text-[17.5px] font-semibold tracking-[-0.02em] text-ink">
                  Multiplex Genome Editing
                </h3>
                <p className="mt-3 text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                  {whyCrispr.paragraphs[1]}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] font-bold text-brand-deep">
                <span className="rounded-md border border-brand-deep/20 bg-white px-2 py-0.5">TaEDR1-1A</span>
                <span className="rounded-md border border-brand-deep/20 bg-white px-2 py-0.5">TaEDR1-1B</span>
                <span className="rounded-md border border-brand-deep/20 bg-white px-2 py-0.5">TaEDR1-1D</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Limitations & Screening */}
          <Reveal delay={160}>
            <div className="flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 sm:p-7.5 transition-all hover:border-brand-deep/30 hover:-translate-y-0.5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-deep/10 text-brand-deep mb-5">
                <ShieldCheck size={22} weight="bold" />
              </div>
              <h3 className="text-[17.5px] font-semibold tracking-[-0.02em] text-ink">
                Limitations & Verification
              </h3>
              <p className="mt-3 text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                {whyCrispr.paragraphs[2]}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Part 3: OUR AIMS */}
      <div className="mt-20 sm:mt-28 rounded-[24px] border border-brand-deep/20 bg-[#f4fafb] p-7 sm:p-10 lg:p-12">
        <Reveal>
          <div className="max-w-[700px]">
            <h2 className="text-[clamp(2.1rem,3.6vw,2.9rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-ink">
              {ourAims.title}
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[16px] text-ink-soft font-medium">
              {ourAims.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3.5 sm:gap-4 md:grid-cols-3">
          {ourAims.points.map((point, idx) => (
            <Reveal key={idx} delay={idx * 50}>
              <div className="flex h-full items-start gap-3.5 rounded-[16px] border border-ink/10 bg-white p-5 transition hover:border-brand-deep">
                <div className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-deep/10 text-brand-deep mt-0.5">
                  <CheckCircle size={18} weight="bold" />
                </div>
                <p className="text-[14px] leading-[1.65] text-ink font-medium">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
