import { CheckCircle, Dna, Plant, ShieldCheck, Sparkle } from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "../components/ui";
import { ABOUT_CONTENT, COMPANY_INFO } from "../data";

export default function About() {
  const { whoAreWe, whyCrispr, ourAims } = ABOUT_CONTENT;

  return (
    <section id="about" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      {/* Section Eyebrow & Top Badge */}
      <div className="flex flex-col items-start gap-3">
        <Reveal>
          <Eyebrow>About the company</Eyebrow>
        </Reveal>
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
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
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

        {/* Figure 2: Powdery Mildew Symptoms (Replaces the DNA in About) & Hexaploid Wheat Architecture */}
        <Reveal delay={160} className="relative">
          <figure className="overflow-hidden rounded-[22px] border border-ink/10 bg-white p-3">
            <img
              src="./mildew-symptoms.jpeg"
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
            <p className="font-mono text-[11.5px] font-bold tracking-[0.14em] text-brand-deep uppercase">
              Methodological Selection
            </p>
            <h2 className="mt-2.5 text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink">
              {whyCrispr.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {whyCrispr.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="flex h-full flex-col justify-between rounded-[20px] border border-ink/10 bg-white p-6 sm:p-7 transition hover:border-brand-deep/40">
                <div>
                  <div className="flex items-center justify-between border-b border-ink/8 pb-3.5">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                      {idx === 0
                        ? "PRECISION TARGETING"
                        : idx === 1
                          ? "MULTIPLEX EDITING"
                          : "LIMITATIONS & SCREENING"}
                    </span>
                    <span className="flex size-7 items-center justify-center rounded-full border border-ink/10 bg-paper text-[12px] font-mono font-bold text-ink">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] sm:text-[14.5px] leading-[1.72] text-ink-soft">
                    {p}
                  </p>
                </div>

                <div className="mt-6 border-t border-ink/8 pt-3">
                  <span className="text-[11.5px] font-mono font-medium text-muted">
                    {idx === 0
                      ? "RNA-guided vs ZFNs/TALENs (Přibylová & Fischer, 2024)"
                      : idx === 1
                        ? "Hexaploid subgenomes A, B, D (Li et al., 2021)"
                        : "Off-target screening (Sturme et al., 2022)"}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Part 3: OUR AIMS */}
      <div className="mt-20 sm:mt-28 rounded-[24px] border border-brand-deep/20 bg-gradient-to-br from-white via-[#f3fafb] to-[#e4f4f7] p-7 sm:p-10 lg:p-12">
        <Reveal>
          <div className="max-w-[700px]">
            <span className="font-mono text-[11.5px] font-bold tracking-[0.16em] text-brand-deep uppercase">
              Research Blueprint
            </span>
            <h2 className="mt-2 text-[clamp(2.1rem,3.6vw,2.9rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-ink">
              {ourAims.title}
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-[16px] text-ink-soft font-medium">
              {ourAims.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
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
