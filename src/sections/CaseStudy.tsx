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

export default function CaseStudy() {
  const { header, disease, genes, crisprUsed, furtherResearch, experimentalData } =
    CASE_STUDY_CONTENT;

  return (
    <section id="case-study" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
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
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal delay={80}>
          <div className="flex h-full flex-col justify-between rounded-[26px] border border-ink/10 bg-white p-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                <Plant size={15} weight="duotone" />
                <span>Pathogen Profiling</span>
              </div>
              <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-ink">
                {disease.title}
              </h3>
              <p className="mt-4 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
                {disease.text}
              </p>
            </div>
            <div className="mt-6 border-t border-ink/8 pt-3 text-[11.5px] font-mono text-muted">
              Source: University of California Statewide Integrated Pest Management Program
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex h-full flex-col justify-between rounded-[26px] border border-ink/10 bg-white p-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
                <Database size={15} weight="duotone" />
                <span>QTL Meta-Analysis</span>
              </div>
              <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em] text-ink">
                {genes.title}
              </h3>
              <p className="mt-4 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
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
      <div className="mt-14 rounded-[28px] border border-ink/10 bg-paper p-7 sm:p-10 lg:p-12">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
            <Dna size={16} weight="bold" />
            <span>Targeting TaEDR1 Homoeologues</span>
          </div>
          <h3 className="mt-2 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-ink">
            {crisprUsed.title}
          </h3>
        </Reveal>

        <div className="mt-8 space-y-5 text-[15px] sm:text-[15.5px] leading-[1.75] text-ink-soft">
          {crisprUsed.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <p className="rounded-2xl border border-ink/5 bg-white p-6 shadow-xs">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Empirical Dataset Display: Meets Assessment 1 Criterion for Dataset Analysis */}
        <div className="mt-10">
          <div className="flex items-center justify-between border-b border-ink/10 pb-3">
            <span className="font-mono text-[11.5px] font-bold tracking-wider text-brand-deep uppercase">
              Experimental Dataset · Zhang et al. (2017) Empirical Summary
            </span>
            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-brand-deep">
              Quantitative Proof
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experimentalData.map((d, i) => (
              <div
                key={d.metric}
                className="rounded-2xl border border-brand/20 bg-white p-5 shadow-xs"
              >
                <p className="font-mono text-[11px] font-semibold text-muted uppercase">
                  {d.metric}
                </p>
                <p className="mt-2 text-[28px] font-bold tracking-tight text-ink">
                  {d.value}
                </p>
                <p className="mt-2 text-[11.5px] leading-snug text-ink-soft">
                  {d.context}
                </p>
              </div>
            ))}
          </div>

          {/* Comparative Data Table: Wild Type vs taedr1 Triple Knockouts */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-xs">
            <div className="bg-brand/10 px-5 py-3 border-b border-ink/8 flex items-center justify-between">
              <span className="text-[12px] font-mono font-bold text-brand-deep">
                Table 1: Phenotypic Response to Blumeria graminis f. sp. tritici (Bgt) Inoculation
              </span>
              <span className="text-[11px] font-mono text-muted">Zhang et al. (2017)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-paper font-mono text-[11px] text-muted border-b border-ink/8">
                  <tr>
                    <th className="px-5 py-3">Genotype</th>
                    <th className="px-5 py-3">Subgenome Status (A, B, D)</th>
                    <th className="px-5 py-3">Fungal Microcolonies</th>
                    <th className="px-5 py-3">Disease Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/6 font-mono text-[12px]">
                  <tr>
                    <td className="px-5 py-3.5 font-sans font-semibold text-ink">Wild Type (Control)</td>
                    <td className="px-5 py-3.5 text-ink-soft">Intact (WT / WT / WT)</td>
                    <td className="px-5 py-3.5 text-muted">Baseline High Density</td>
                    <td className="px-5 py-3.5 text-[#b80f2c] font-semibold">Susceptible to Mildew</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3.5 font-sans font-semibold text-ink">Single / Double Mutants</td>
                    <td className="px-5 py-3.5 text-ink-soft">Partial Knockout</td>
                    <td className="px-5 py-3.5 text-muted">Intermediate Density</td>
                    <td className="px-5 py-3.5 text-amber-700 font-semibold">Residual Susceptibility</td>
                  </tr>
                  <tr className="bg-brand/5">
                    <td className="px-5 py-3.5 font-sans font-bold text-brand-deep">Homozygous Triple KO (taedr1)</td>
                    <td className="px-5 py-3.5 text-brand-deep font-semibold">Frameshift across 1A, 1B, 1D</td>
                    <td className="px-5 py-3.5 text-brand-deep font-bold">Significantly Reduced</td>
                    <td className="px-5 py-3.5 text-emerald-700 font-bold">Resistant to Mildew</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Part 3: What does further research show? (Li et al. 2022) */}
        <div className="mt-10 rounded-2xl border border-brand/20 bg-gradient-to-r from-brand/10 via-white to-brand/5 p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-brand-deep uppercase">
            <CheckCircle size={15} weight="bold" />
            <span>Independent Corroboration</span>
          </div>
          <h4 className="mt-2 text-[19px] font-semibold text-ink">
            {furtherResearch.title}
          </h4>
          <p className="mt-3 text-[14.5px] sm:text-[15px] leading-[1.72] text-ink-soft">
            {furtherResearch.text}
          </p>
        </div>
      </div>
    </section>
  );
}
