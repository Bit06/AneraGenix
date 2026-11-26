import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Dna,
  Flask,
  Microscope,
  Plant,
  ShieldCheck,
} from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "../components/ui";
import { SERVICES_CONTENT } from "../data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow>Capabilities & Offerings</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
              {SERVICES_CONTENT.header}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-[420px] text-[15px] leading-[1.68] text-ink-soft md:ml-auto">
            {SERVICES_CONTENT.intro}
          </p>
        </Reveal>
      </div>

      {/* 3 Comprehensive Service Cards with Flat Architectural Borders (No AI Shadows) */}
      <div className="mt-12 grid gap-7 lg:grid-cols-3">
        {SERVICES_CONTENT.services.map((svc, i) => (
          <Reveal key={svc.id} delay={i * 90}>
            <div className="flex h-full flex-col justify-between rounded-[22px] border border-ink/12 bg-white p-6 sm:p-7.5 transition-all hover:border-brand-deep/50">
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between border-b border-ink/8 pb-3.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-deep/25 bg-brand-deep/5 px-3 py-1 font-mono text-[11px] font-bold text-brand-deep">
                    {i === 0 ? <Dna size={14} weight="bold" /> : i === 1 ? <Flask size={14} weight="bold" /> : <Microscope size={14} weight="bold" />}
                    <span>{svc.tag}</span>
                  </span>
                  <span className="font-mono text-[15px] font-bold text-muted/70">
                    0{svc.number}
                  </span>
                </div>

                {/* Verbatim Title */}
                <h3 className="mt-4.5 text-[20px] font-semibold tracking-[-0.025em] text-ink">
                  {svc.title}
                </h3>

                {/* Verbatim Description */}
                <p className="mt-3.5 text-[14.5px] leading-[1.7] text-ink-soft">
                  {svc.desc}
                </p>

                {/* Verbatim Detail */}
                <div className="mt-4 rounded-xl border border-ink/8 bg-paper p-4">
                  <p className="text-[13.5px] leading-[1.65] text-ink-soft">
                    {svc.detail}
                  </p>
                </div>

                {/* Scientific Figure / Visual Diagram specific to each service */}
                <div className="mt-5 rounded-xl border border-brand-deep/20 bg-gradient-to-br from-[#f2fafb] via-white to-[#ebf7f9] p-4">
                  {i === 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-bold">
                        <span>Multiplex sgRNA Delivery</span>
                        <span>SpCas9</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                        <div className="rounded-lg border border-brand-deep/20 bg-white p-2">
                          <p className="font-bold text-ink">sgRNA-1</p>
                          <p className="text-brand-deep font-semibold text-[9.5px]">TaEDR1-1A</p>
                        </div>
                        <div className="rounded-lg border border-brand-deep/20 bg-white p-2">
                          <p className="font-bold text-ink">sgRNA-2</p>
                          <p className="text-brand-deep font-semibold text-[9.5px]">TaEDR1-1B</p>
                        </div>
                        <div className="rounded-lg border border-brand-deep/20 bg-white p-2">
                          <p className="font-bold text-ink">sgRNA-3</p>
                          <p className="text-brand-deep font-semibold text-[9.5px]">TaEDR1-1D</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-bold">
                        <span>Validation Pipeline</span>
                        <span>Band Resolution</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between rounded-md border border-brand-deep/20 bg-white px-2.5 py-1.5">
                          <span className="text-ink font-semibold">1. PCR Amplicon</span>
                          <span className="text-brand-deep font-bold font-mono">Target DNA</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-brand-deep/20 bg-white px-2.5 py-1.5">
                          <span className="text-ink font-semibold">2. Restriction Digest</span>
                          <span className="text-brand-deep font-bold font-mono">Change in Restriction enzymes</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-brand-deep/20 bg-white px-2.5 py-1.5">
                          <span className="text-ink font-semibold">3. DNA Sequencing</span>
                          <span className="text-brand-deep font-bold font-mono">Exact DNA changes identified</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-bold">
                        <span>Microcolony count Bioassay</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center text-[10.5px]">
                        <div className="rounded-lg border border-ink/10 bg-white p-2.5">
                          <p className="font-mono text-muted text-[10px] font-medium">Wild Type wheat</p>
                          <p className="text-[14px] font-bold text-ink mt-0.5">High Density</p>
                          <p className="text-[10px] text-muted">Susceptible</p>
                        </div>
                        <div className="rounded-lg border border-brand-deep/30 bg-brand-deep/10 p-2.5">
                          <p className="font-mono text-brand-deep text-[10px] font-bold">TaEDR1 triple mutant</p>
                          <p className="text-[14px] font-bold text-brand-deep mt-0.5">Reduced</p>
                          <p className="text-[10px] text-brand-deep font-bold">Resistant</p>
                        </div>
                      </div>
                      <p className="pt-0.5 text-center font-mono text-[10.5px] text-muted">
                        48-72 hours after Bgt inoculation
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Verbatim Research Application */}
              <div className="mt-5 border-t border-ink/8 pt-3.5">
                <p className="text-[13px] font-semibold leading-snug text-brand-deep">
                  {svc.application}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
