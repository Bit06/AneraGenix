import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Dna,
  Drop,
  ShieldCheck,
  X,
} from "@phosphor-icons/react";
import { ChartIcon, HelixIcon, TubeIcon } from "../components/icons";
import { Eyebrow, Notch, Reveal } from "../components/ui";
import { TESTS, type TestDetail } from "../data";

const ICONS = { genome: HelixIcon, panel: TubeIcon, interpretation: ChartIcon };

export default function Tests({ highlight }: { highlight: number[] }) {
  const [selectedTest, setSelectedTest] = useState<TestDetail | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTest(null);
    };
    if (selectedTest) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedTest]);

  return (
    <section id="tests" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pb-24 sm:px-8 lg:pb-36">
      <div className="grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow>What we test</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-medium tracking-[-0.045em] text-ink">
              Testing built for
              <br />
              real clinical decisions.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-[360px] text-[14.5px] leading-[1.65] text-ink-soft md:ml-auto">
            Three ways to work with us — from a single gene panel to your entire genome, interpreted
            by people who do this every day.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
        {TESTS.map((t, i) => {
          const Icon = ICONS[t.kind];
          const featured = i === 0;
          const lit = highlight.includes(i);

          return (
            <Reveal key={t.kind} delay={i * 90} as="article">
              <div
                onClick={() => setSelectedTest(t)}
                className={`group relative flex h-full min-h-[360px] cursor-pointer flex-col rounded-[24px] p-6.5 transition-all duration-500 ease-out-expo hover:-translate-y-2 lg:min-h-[400px] lg:p-8 cutout-tr ${
                  featured
                    ? "bg-[linear-gradient(155deg,#e32145_0%,#c10f2d_52%,#920720_100%)] text-white shadow-[0_30px_70px_-25px_rgba(215,20,50,0.7)]"
                    : "border border-ink/10 bg-white text-ink ring-1 ring-ink/5 hover:border-brand/40 hover:ring-brand/15 transition-all"
                } ${lit ? "ring-4 ring-brand/50 ring-offset-4 ring-offset-paper scale-[1.02]" : ""}`}
              >
                <Notch
                  pathClassName={
                    featured
                      ? "stroke-white/30 group-hover:stroke-white/60"
                      : "stroke-ink/10 group-hover:stroke-brand/40"
                  }
                  dotColor={featured ? "bg-white" : "bg-brand"}
                />
                <span
                  className={`font-mono text-[11px] font-semibold tracking-wider ${
                    featured ? "text-white/60" : "text-brand"
                  }`}
                >
                  {t.badgeNumber}
                </span>

                <h3 className="mt-2.5 text-[22px] leading-[1.14] font-medium tracking-[-0.035em]">
                  {t.title[0]}
                  <br />
                  {t.title[1]}
                </h3>

                <div className="flex flex-1 items-center justify-center py-7">
                  <span
                    className={`grid size-[92px] place-items-center rounded-full transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:rotate-6 ${
                      featured
                        ? "bg-white/15 ring-1 ring-white/25 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
                        : "bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#fde3e7_55%,#f8cfd6_100%)] ring-1 ring-brand/15"
                    }`}
                  >
                    {t.kind === "genome" ? <HelixIcon light={featured} /> : <Icon />}
                  </span>
                </div>

                <p
                  className={`text-[13.5px] leading-[1.6] ${
                    featured ? "text-white/85" : "text-ink-soft"
                  }`}
                >
                  {t.body}
                </p>

                <div className="mt-6 flex items-center justify-between border-t pt-4 border-current/10">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium">
                    Explore {t.kind === "panel" ? "panel" : t.kind === "interpretation" ? "data" : "test"}
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span
                    className={`font-mono text-[12px] font-medium ${
                      featured ? "text-white/70" : "text-muted"
                    }`}
                  >
                    €{t.price}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Interactive Clinical Test Slide-out Modal */}
      {selectedTest && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedTest(null)}
            className="fixed inset-0 bg-night/70 backdrop-blur-md transition-opacity animate-[rise_0.2s_ease-out]"
          />

          {/* Modal Container with modernized sleek custom scrollbar */}
          <div className="custom-scrollbar relative z-10 max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-[28px] border border-ink/10 bg-white p-6 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between border-b border-ink/8 pb-5">
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-brand">
                  TEST SPECIFICATION · {selectedTest.badgeNumber}
                </span>
                <h3 className="mt-1 text-[26px] font-medium tracking-[-0.035em] text-ink">
                  {selectedTest.title.join(" ")}
                </h3>
                <p className="mt-1 text-[13.5px] text-muted">{selectedTest.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTest(null)}
                aria-label="Close dialog"
                className="grid size-9 place-items-center rounded-full bg-paper text-ink-soft ring-1 ring-ink/8 transition hover:bg-blush hover:text-brand cursor-pointer"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Quick Specs Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-paper p-3 ring-1 ring-ink/5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <Clock size={14} className="text-brand" /> Turnaround
                </span>
                <p className="mt-1 text-[13.5px] font-semibold text-ink">{selectedTest.turnaround}</p>
              </div>
              <div className="rounded-xl bg-paper p-3 ring-1 ring-ink/5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <Drop size={14} className="text-brand" /> Sample
                </span>
                <p className="mt-1 truncate text-[13.5px] font-semibold text-ink">
                  {selectedTest.kind === "interpretation" ? "Data File" : "Cheek Swab"}
                </p>
              </div>
              <div className="rounded-xl bg-paper p-3 ring-1 ring-ink/5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <Dna size={14} className="text-brand" /> Read Depth
                </span>
                <p className="mt-1 text-[13.5px] font-semibold text-ink">
                  {selectedTest.kind === "panel" ? "200×" : selectedTest.kind === "genome" ? "30×" : "GRCh38"}
                </p>
              </div>
              <div className="rounded-xl bg-paper p-3 ring-1 ring-ink/5">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-muted">
                  <ShieldCheck size={14} className="text-brand" /> Quality
                </span>
                <p className="mt-1 text-[13.5px] font-semibold text-ink">ISO 15189</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-muted font-mono">
                Clinical Overview
              </h4>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-soft">
                {selectedTest.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-6">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-muted font-mono">
                What Is Included
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedTest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[13.5px] text-ink">
                    <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gene Tags */}
            <div className="mt-6 border-t border-ink/8 pt-5">
              <h4 className="text-[11.5px] font-semibold uppercase tracking-wider text-muted font-mono">
                Primary Biomarkers & Covered Genes
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {selectedTest.keyGenes.map((g) => (
                  <span
                    key={g}
                    className="rounded-md bg-paper px-2.5 py-1 font-mono text-[11px] text-ink ring-1 ring-ink/8"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-8 flex flex-col gap-3 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[11px] text-muted uppercase font-mono tracking-wider">
                  Transparent Price
                </span>
                <p className="text-[28px] font-medium text-ink">
                  €{selectedTest.price}{" "}
                  <span className="text-[13px] font-normal text-muted">
                    {selectedTest.kind === "genome" ? "all-inclusive" : "per order"}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#pricing"
                  onClick={() => setSelectedTest(null)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-[13.5px] font-medium text-white ring-1 ring-brand-deep/30 transition hover:bg-brand-deep active:scale-98 cursor-pointer"
                >
                  <span>Select this test</span>
                  <ArrowRight size={15} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
