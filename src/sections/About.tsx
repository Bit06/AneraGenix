import { CheckCircle, Dna, ShieldCheck, SquaresFour, Target } from "@phosphor-icons/react";
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
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-deep/20 bg-brand-deep/5 px-3 py-1 font-mono text-[11px] font-bold text-brand-deep uppercase tracking-wider mb-2.5">
              <Dna size={14} weight="bold" />
              <span>Genome Editing Platform</span>
            </div>
            <h2 className="text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whyCrispr.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {whyCrispr.paragraphs.map((p, idx) => {
            const isMiddle = idx === 1;
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border p-6 sm:p-7.5 transition-all duration-300 hover:-translate-y-1 ${
                    isMiddle
                      ? "border-brand-deep/30 bg-gradient-to-b from-[#f0f9fb] via-white to-white shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(4,132,157,0.18)] hover:border-brand-deep/60"
                      : "border-ink/10 bg-white hover:border-brand-deep/40 hover:shadow-[0_12px_30px_-10px_rgba(4,132,157,0.1)]"
                  }`}
                >
                  {/* Top Gradient Accent Strip */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] ${
                      idx === 0
                        ? "bg-gradient-to-r from-brand-deep to-[#03788f]"
                        : idx === 1
                          ? "bg-gradient-to-r from-[#03788f] via-brand-deep to-[#048fa5]"
                          : "bg-gradient-to-r from-amber-600/80 to-brand-deep/80"
                    }`}
                  />

                  {/* Watermark Number in background */}
                  <span className="pointer-events-none absolute right-4 top-2 font-mono text-[64px] font-black text-ink/[0.03] select-none">
                    0{idx + 1}
                  </span>

                  <div>
                    {/* Header Row: Icon + Label + Number Badge */}
                    <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`grid size-9 place-items-center rounded-xl border transition-colors ${
                            idx === 0
                              ? "border-brand-deep/20 bg-brand-deep/5 text-brand-deep group-hover:bg-brand-deep group-hover:text-white"
                              : idx === 1
                                ? "border-brand-deep/30 bg-brand-deep text-white shadow-xs"
                                : "border-amber-600/20 bg-amber-500/10 text-amber-700 group-hover:bg-amber-600 group-hover:text-white"
                          }`}
                        >
                          {idx === 0 && <Target size={18} weight="bold" />}
                          {idx === 1 && <SquaresFour size={18} weight="bold" />}
                          {idx === 2 && <ShieldCheck size={18} weight="bold" />}
                        </div>

                        <div>
                          <span className="block font-mono text-[11px] font-bold tracking-wider text-ink uppercase">
                            {idx === 0
                              ? "PRECISION TARGETING"
                              : idx === 1
                                ? "MULTIPLEX EDITING"
                                : "LIMITATIONS & SCREENING"}
                          </span>
                          {idx === 1 && (
                            <span className="text-[10px] font-mono font-medium text-brand-deep">
                              Tri-Genomic (A, B, D)
                            </span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`flex size-7 items-center justify-center rounded-full border text-[11.5px] font-mono font-bold ${
                          isMiddle
                            ? "border-brand-deep/30 bg-brand-deep/10 text-brand-deep"
                            : "border-ink/10 bg-paper text-ink-soft"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Paragraph Content */}
                    <p className="mt-5 text-[14px] sm:text-[14.5px] leading-[1.74] text-ink-soft">
                      {p}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Part 3: OUR AIMS */}
      <div className="mt-20 sm:mt-28 rounded-[24px] border border-brand-deep/20 bg-gradient-to-br from-white via-[#f3fafb] to-[#e4f4f7] p-7 sm:p-10 lg:p-12">
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
                <div className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-deep/10 text-brand-deep">
                  <CheckCircle size={18} weight="bold" />
                </div>
                <div>
                  <span className="font-mono text-[11px] font-bold text-brand-deep">
                    AIM 0{idx + 1}
                  </span>
                  <p className="mt-1 text-[13.5px] sm:text-[14px] leading-[1.62] text-ink font-medium">
                    {point}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
