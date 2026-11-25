import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Dna,
  Flask,
  Microscope,
  Plant,
  ShieldCheck,
  Waveform,
} from "@phosphor-icons/react";
import { Eyebrow, Notch, Reveal } from "../components/ui";
import { SERVICES_CONTENT } from "../data";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow>Capabilities & Offerings</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
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

      {/* 3 Comprehensive Service Cards with Diagrams */}
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {SERVICES_CONTENT.services.map((svc, i) => (
          <Reveal key={svc.id} delay={i * 100}>
            <div className="flex h-full flex-col justify-between rounded-[26px] border border-ink/10 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-brand/40 hover:shadow-lg">
              <div>
                {/* Header Badge & Number */}
                <div className="flex items-center justify-between border-b border-ink/8 pb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-mono text-[11px] font-semibold text-brand-deep">
                    {i === 0 ? <Dna size={14} weight="bold" /> : i === 1 ? <Flask size={14} weight="bold" /> : <Microscope size={14} weight="bold" />}
                    <span>{svc.tag}</span>
                  </span>
                  <span className="font-mono text-[16px] font-semibold text-muted/60">
                    0{svc.number}
                  </span>
                </div>

                {/* Verbatim Title */}
                <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.025em] text-ink">
                  {svc.title}
                </h3>

                {/* Verbatim Description */}
                <p className="mt-4 text-[14.5px] leading-[1.7] text-ink-soft">
                  {svc.desc}
                </p>

                {/* Verbatim Detail */}
                <div className="mt-4 rounded-xl bg-paper p-4 border border-ink/5">
                  <p className="text-[13.5px] leading-[1.65] text-ink-soft">
                    {svc.detail}
                  </p>
                </div>

                {/* Scientific Figure / Visual Diagram specific to each service */}
                <div className="mt-6 rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 via-white to-brand/10 p-4">
                  {i === 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-semibold">
                        <span>Figure 1: Multiplex sgRNA Delivery</span>
                        <span>SpCas9</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] font-mono">
                        <div className="rounded-lg bg-white p-2 border border-brand/20 shadow-xs">
                          <p className="font-bold text-ink">sgRNA-1</p>
                          <p className="text-brand text-[9.5px]">TaEDR1-1A</p>
                        </div>
                        <div className="rounded-lg bg-white p-2 border border-brand/20 shadow-xs">
                          <p className="font-bold text-ink">sgRNA-2</p>
                          <p className="text-brand text-[9.5px]">TaEDR1-1B</p>
                        </div>
                        <div className="rounded-lg bg-white p-2 border border-brand/20 shadow-xs">
                          <p className="font-bold text-ink">sgRNA-3</p>
                          <p className="text-brand text-[9.5px]">TaEDR1-1D</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-semibold">
                        <span>Figure 2: Validation Pipeline</span>
                        <span>Band Resolution</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[10px]">
                        <div className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 border border-brand/20">
                          <span className="text-ink font-semibold">1. PCR Amplicon</span>
                          <span className="text-brand font-mono">Amplified Locus</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 border border-brand/20">
                          <span className="text-ink font-semibold">2. Restriction Digest</span>
                          <span className="text-brand font-mono">Cleavage Loss</span>
                        </div>
                        <div className="flex items-center justify-between rounded-md bg-white px-2.5 py-1.5 border border-brand/20">
                          <span className="text-ink font-semibold">3. DNA Sequencing</span>
                          <span className="text-brand font-mono">Frameshift Indels</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-brand-deep font-semibold">
                        <span>Figure 3: Microcolony Count Bioassay</span>
                        <span>48-72h post-Bgt</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center text-[10.5px]">
                        <div className="rounded-xl bg-white p-2.5 border border-ink/10">
                          <p className="font-mono text-muted text-[10px]">Wild Type</p>
                          <p className="text-[14px] font-bold text-ink mt-0.5">High Density</p>
                          <p className="text-[9.5px] text-muted">Susceptible</p>
                        </div>
                        <div className="rounded-xl bg-brand/15 p-2.5 border border-brand/30">
                          <p className="font-mono text-brand-deep text-[10px]">taedr1 Triple KO</p>
                          <p className="text-[14px] font-bold text-brand-deep mt-0.5">Reduced</p>
                          <p className="text-[9.5px] text-brand-deep font-semibold">Resistant</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Verbatim Research Application */}
              <div className="mt-6 border-t border-ink/8 pt-4">
                <p className="text-[12.5px] font-semibold leading-snug text-brand-deep">
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
