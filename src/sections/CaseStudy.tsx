import { useState } from "react";
import {
  ArrowUpRight,
  ChartBar,
  CheckCircle,
  Database,
  Dna,
  FileText,
  MagnifyingGlass,
  Plant,
  ShieldCheck,
} from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "../components/ui";
import { CASE_STUDY_CONTENT } from "../data";
import { IMAGES } from "../assets/images";

export default function CaseStudy() {
  const { header, disease, genes, crisprUsed, furtherResearch, experimentalData } =
    CASE_STUDY_CONTENT;

  return (
    <section id="case-study" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      {/* Eyebrow & Main Title */}
      <div className="flex flex-col items-start gap-3">
        <Reveal>
          <Eyebrow>Genetics Specific Case Study</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
            {header}
          </h2>
        </Reveal>
      </div>

      {/* Part 1: Disease & QTL Meta-Analysis Background */}
      <div className="mt-10 grid gap-7 lg:grid-cols-2">
        <Reveal delay={80}>
          <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                <Plant size={15} weight="duotone" />
                <span>Pathogen Profiling</span>
              </div>
              <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.02em] text-ink">
                {disease.title}
              </h3>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
                {disease.text}
              </p>
            </div>
            <div className="mt-6 border-t border-ink/8 pt-3 text-[11.5px] font-mono text-muted">
              Source: University of California Statewide Integrated Pest Management Program
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/10 bg-white p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                <Database size={15} weight="duotone" />
                <span>QTL Meta-Analysis</span>
              </div>
              <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.02em] text-ink">
                {genes.title}
              </h3>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
                {genes.text}
              </p>
            </div>
            <div className="mt-6 border-t border-ink/8 pt-3 text-[11.5px] font-mono text-muted">
              Source: Sharma et al. (2024), Frontiers in Plant Science (222 QTLs across 33 studies)
            </div>
          </div>
        </Reveal>
      </div>

      {/* Part 2: How has CRISPR-Cas9 been used (Zhang et al. 2017) */}
      <div className="mt-12 rounded-[24px] border border-ink/10 bg-paper p-6 sm:p-9 lg:p-11">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
            <Dna size={16} weight="bold" />
            <span>Targeting TaEDR1 Homoeologues</span>
          </div>
          <h3 className="mt-2 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-ink">
            {crisprUsed.title}
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-[15.5px] leading-[1.75] text-ink-soft">
            {crisprUsed.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <p className="rounded-xl border border-ink/8 bg-white p-5.5">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <figure className="overflow-hidden rounded-[20px] border border-ink/10 bg-white p-3.5">
                <div className="flex items-center justify-center rounded-[14px] bg-[#f8fafc] p-2 border border-ink/5">
                  <img
                    src={IMAGES.figure3}
                    alt="shows an overview of the CRISPR/CAS genome-editing mechanism in plant cells"
                    className="w-full rounded-[10px] object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-2 pt-3 pb-1">
                  <p className="text-[13px] font-semibold text-ink leading-snug">
                    Figure 4: shows an overview of the CRISPR/CAS genome-editing mechanism in plant cells.
                  </p>
                  <p className="mt-1 text-[11.5px] font-mono text-muted">
                    Source: kaur et al. (2025), Figure 3
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* Empirical Dataset Display: Meets Assessment 1 Criterion for Dataset Analysis */}
        <div className="mt-10 border-t border-ink/8 pt-9">
          <div className="flex items-center justify-between border-b border-ink/10 pb-3">
            <span className="font-mono text-[11.5px] font-bold tracking-wider text-brand-deep uppercase">
              Experimental Dataset · Zhang et al. (2017) Empirical Summary
            </span>
            <span className="rounded-full border border-brand-deep/20 bg-brand-deep/5 px-2.5 py-0.5 font-mono text-[11px] font-bold text-brand-deep">
              Quantitative Proof
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experimentalData.map((d) => (
              <div
                key={d.metric}
                className="rounded-xl border border-brand-deep/20 bg-white p-5"
              >
                <p className="font-mono text-[11px] font-bold text-muted uppercase">
                  {d.metric}
                </p>
                <p className="mt-2 text-[28px] font-bold tracking-tight text-ink">
                  {d.value}
                </p>
                <p className="mt-1.5 text-[12px] leading-snug text-ink-soft">
                  {d.context}
                </p>
              </div>
            ))}
          </div>

          {/* Comparative Data: Figure 4 Phenotypic Crop & Table 1 */}
          <div className="mt-8 grid gap-6 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <figure className="overflow-hidden rounded-[20px] border border-ink/10 bg-white p-3.5">
                  <div className="flex items-center justify-center rounded-[14px] bg-[#f8fafc] p-3 border border-ink/5">
                    <img
                      src={IMAGES.figure4}
                      alt="shows a reduction in powdery mildew symptom in CRISPR-Cas9 -edited TaEDR1 wheat mutant compared with unedited control plants"
                      className="max-h-[220px] w-auto max-w-full rounded-[10px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-2 pt-3 pb-1">
                    <p className="text-[13px] font-semibold text-ink leading-snug">
                      Figure 5: shows a reduction in powdery mildew symptom in CRISPR-Cas9 -edited TaEDR1 wheat mutant compared with unedited control plants
                    </p>
                    <p className="mt-1 text-[11.5px] font-mono text-muted">
                      Source: cropped from (Zhang et al., 2017, figure 6D)
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
                  <div className="border-b border-ink/8 bg-brand-deep/5 px-5 py-3 flex items-center justify-between">
                    <span className="text-[12px] font-mono font-bold text-brand-deep">
                      Table 1: Phenotypic response of wild type and CRISPR-Cas edited wheat to the Bgt inoculation
                    </span>
                    <span className="text-[11px] font-mono text-muted">Zhang et al. (2017)</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px]">
                      <thead className="border-b border-ink/8 bg-paper font-mono text-[11px] text-muted">
                        <tr>
                          <th className="px-5 py-3.5 font-bold">Genotype</th>
                          <th className="px-5 py-3.5 font-bold"><em>TaEDR1</em> status</th>
                          <th className="px-5 py-3.5 font-bold">Fungal microcolonies</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink/6 font-mono text-[12.5px]">
                        <tr>
                          <td className="px-5 py-4 font-sans font-semibold text-ink">Wild type (KN199)</td>
                          <td className="px-5 py-4 text-ink-soft">Intact 1A, 1B and 1D homoeologues</td>
                          <td className="px-5 py-4 text-[#991b1b] font-semibold">More microcolonies</td>
                        </tr>
                        <tr className="bg-brand-deep/5">
                          <td className="px-5 py-4 font-sans font-bold text-brand-deep">Homozygous triple mutant (<em>Taedr1</em>)</td>
                          <td className="px-5 py-4 text-brand-deep font-medium">Frameshift mutations in 1A, 1B and 1D</td>
                          <td className="px-5 py-4 text-[#065f46] font-bold">Fewer microcolonies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-ink/8 bg-[#fbfdfd] px-5 py-2.5 text-[11px] font-mono text-muted">
                    Source: Based on Zhang et al. (2017).
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Part 3: What does further research show? (Li et al. 2022) */}
        <div className="mt-8 rounded-xl border border-brand-deep/20 bg-gradient-to-r from-brand-deep/5 via-white to-brand-deep/5 p-6">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
            <CheckCircle size={15} weight="bold" />
            <span>Independent Corroboration</span>
          </div>
          <h4 className="mt-2 text-[18.5px] font-semibold text-ink">
            {furtherResearch.title}
          </h4>
          <p className="mt-2.5 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
            {furtherResearch.text}
          </p>
        </div>
      </div>
    </section>
  );
}
