import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Dna,
  DownloadSimple,
  FilePdf,
  Info,
  Pill,
  SealCheck,
  ShieldCheck,
  Stethoscope,
  User,
  WarningCircle,
} from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "./ui";
import { SAMPLE_REPORT_DATA } from "../data";

export default function ReportViewer() {
  const [viewMode, setViewMode] = useState<"patient" | "physician">("patient");
  const [filterDomain, setFilterDomain] = useState<string>("all");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  const filteredPatientItems =
    filterDomain === "all"
      ? SAMPLE_REPORT_DATA.patientView
      : SAMPLE_REPORT_DATA.patientView.filter((item) => item.domain === filterDomain);

  const domains = [
    { id: "all", label: "All Findings", count: SAMPLE_REPORT_DATA.patientView.length },
    { id: "pharmacogenomics", label: "Pharmacogenomics", count: 2 },
    { id: "cardiovascular", label: "Cardiovascular", count: 1 },
    { id: "carrier", label: "Carrier Status", count: 1 },
    { id: "oncology", label: "Hereditary Cancer", count: 1 },
  ];

  return (
    <section id="sample-report" className="mx-auto max-w-[1400px] px-4 pt-10 pb-6 sm:px-8 lg:pt-14 lg:pb-10">
      <div className="text-center">
        <Reveal>
          <Eyebrow>Sample Report Preview</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-[760px] text-[clamp(2.2rem,4.4vw,3.5rem)] leading-[1.05] font-medium tracking-[-0.045em] text-ink">
            See the difference.{" "}
            <span className="text-muted/80 font-normal">
              Two views for every single result.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-[1.6] text-ink-soft">
            Toggle between the plain-language summary tailored for you, and the technical
            ACMG/CPIC dataset built for your personal physician.
          </p>
        </Reveal>
      </div>

      <Reveal delay={220} className="mt-12">
        <div className="relative overflow-hidden rounded-[26px] border border-ink/10 bg-white ring-1 ring-ink/5">
          {/* Top Clinical Header Bar */}
          <div className="border-b border-ink/8 bg-[#fdf9fa] px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 font-mono text-[11px] font-semibold text-brand">
                    <ShieldCheck size={14} weight="bold" /> LOCUS WGS REPORT
                  </span>
                  <span className="font-mono text-[12px] font-medium text-ink">
                    ID: {SAMPLE_REPORT_DATA.patient.id}
                  </span>
                  <span className="hidden sm:inline text-ink/20">·</span>
                  <span className="text-[12px] text-muted font-mono">
                    {SAMPLE_REPORT_DATA.patient.cliaId}
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] text-ink-soft">
                  Patient: <strong className="font-semibold text-ink">{SAMPLE_REPORT_DATA.patient.name}</strong> · Sign-off by{" "}
                  {SAMPLE_REPORT_DATA.patient.physician} & {SAMPLE_REPORT_DATA.patient.coReviewer}
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center self-start sm:self-auto rounded-full bg-paper p-1 ring-1 ring-ink/10">
                <button
                  type="button"
                  onClick={() => setViewMode("patient")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all cursor-pointer ${
                    viewMode === "patient"
                      ? "bg-brand text-white ring-1 ring-brand-deep/30"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <User size={13} weight="bold" />
                  <span>Patient Plain-Language</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("physician")}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all cursor-pointer ${
                    viewMode === "physician"
                      ? "bg-ink text-white ring-1 ring-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <Stethoscope size={13} weight="bold" />
                  <span>Physician ACMG</span>
                </button>
              </div>
            </div>

            {/* Quality Metrics Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-ink/6 pt-4 sm:grid-cols-4 sm:gap-4">
              {SAMPLE_REPORT_DATA.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-white p-2.5 sm:p-3 ring-1 ring-ink/6">
                  <p className="text-[10.5px] font-medium text-muted uppercase tracking-wider font-mono">
                    {m.label}
                  </p>
                  <p className="mt-0.5 text-[16px] sm:text-[18px] font-semibold text-ink tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-ink-soft/75 truncate">{m.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills (Patient View only) with ultra-modern fluid mobile scroll & edge fade */}
          {viewMode === "patient" && (
            <div className="relative border-b border-ink/6 bg-white">
              {/* Modern scroll hints: smooth edge gradient masks indicating horizontal scrollability on mobile */}
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/80 to-transparent sm:hidden" />
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-white to-transparent sm:hidden" />

              <div className="no-scrollbar flex items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 scroll-smooth overscroll-x-contain">
                <span className="text-[11.5px] font-medium text-muted shrink-0 flex items-center gap-1">
                  <span>Filter:</span>
                </span>
                {domains.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setFilterDomain(d.id)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium whitespace-nowrap transition-all duration-150 active:scale-95 cursor-pointer select-none shrink-0 ${
                      filterDomain === d.id
                        ? "bg-brand text-white shadow-xs ring-1 ring-brand-deep/30"
                        : "bg-paper text-ink-soft hover:bg-ink/5 hover:text-ink ring-1 ring-ink/8 active:bg-ink/10"
                    }`}
                  >
                    <span>{d.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 font-mono text-[9.5px] font-semibold ${
                        filterDomain === d.id ? "bg-white/25 text-white" : "bg-ink/8 text-muted"
                      }`}
                    >
                      {d.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="p-4 sm:p-7 lg:p-9 bg-[#fdfcfc]">
            {viewMode === "patient" ? (
              <div className="grid gap-4.5 md:grid-cols-2">
                {filteredPatientItems.map((item) => (
                  <div
                    key={item.category}
                    className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-5 sm:p-6 ring-1 ring-ink/5 transition-all duration-200 hover:border-brand/50 hover:ring-1 hover:ring-brand/20"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/6 pb-3">
                        <div className="min-w-0">
                          <span className="inline-block rounded bg-paper px-2 py-0.5 font-mono text-[10.5px] font-semibold text-brand">
                            {item.geneBadge}
                          </span>
                          <span className="ml-2 font-mono text-[10.5px] text-muted">
                            {item.locus}
                          </span>
                          <h4 className="mt-1 text-[15px] sm:text-[16px] font-semibold text-ink leading-snug truncate">
                            {item.category}
                          </h4>
                        </div>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-medium shrink-0 ${item.tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Explanation */}
                      <p className="mt-3.5 text-[13px] sm:text-[13.5px] leading-[1.65] text-ink-soft">
                        {item.summary}
                      </p>
                    </div>

                    {/* Recommendation & Clinical Guideline Strip */}
                    <div className="mt-5 border-t border-ink/6 pt-3.5">
                      <div className="flex items-start gap-2 rounded-xl bg-paper/80 p-3 text-[12px] text-ink-soft leading-relaxed">
                        <Info size={16} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                        <div>
                          <strong className="font-semibold text-ink">Clinical Guidance: </strong>
                          {item.advice}
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between text-[10.5px] font-mono text-muted">
                        <span>Standard: {item.guideline}</span>
                        <span className="text-emerald-700 font-medium flex items-center gap-1">
                          <CheckCircle size={12} weight="fill" /> Verified
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {/* Mobile View: High-Readability Variant Cards */}
                <div className="grid gap-3.5 md:hidden">
                  {SAMPLE_REPORT_DATA.physicianView.map((row) => (
                    <div
                      key={row.gene}
                      className="rounded-2xl border border-ink/10 bg-white p-4.5 ring-1 ring-ink/5"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-ink/6 pb-2.5">
                        <div>
                          <span className="font-mono text-[15px] font-bold text-brand">
                            {row.gene}
                          </span>
                          <span className="ml-2 font-mono text-[11px] text-muted">
                            {row.transcript}
                          </span>
                        </div>
                        <span
                          className={`rounded px-2 py-0.5 font-mono text-[10.5px] font-medium ${
                            row.classification.includes("Actionable") ||
                            row.classification.includes("Pathogenic")
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-emerald-100 text-emerald-900 border border-emerald-300"
                          }`}
                        >
                          {row.classification}
                        </span>
                      </div>
                      <dl className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11.5px]">
                        <div>
                          <dt className="text-muted text-[10px] uppercase">Variant</dt>
                          <dd className="font-medium text-ink break-all">{row.variant}</dd>
                        </div>
                        <div>
                          <dt className="text-muted text-[10px] uppercase">dbSNP</dt>
                          <dd className="text-ink-soft">{row.dbSNP}</dd>
                        </div>
                        <div>
                          <dt className="text-muted text-[10px] uppercase">Zygosity</dt>
                          <dd className="text-ink-soft">{row.zygosity}</dd>
                        </div>
                        <div>
                          <dt className="text-muted text-[10px] uppercase">Read Depth</dt>
                          <dd className="font-semibold text-brand">{row.depth}</dd>
                        </div>
                      </dl>
                      <div className="mt-3 border-t border-ink/6 pt-2.5 text-[11.5px] text-ink-soft leading-relaxed">
                        <strong className="font-sans font-medium text-ink">Clinical Evidence: </strong>
                        {row.evidence}
                      </div>
                      <div className="mt-2 text-right">
                        <span className="font-mono text-[10px] text-muted bg-paper px-2 py-0.5 rounded">
                          {row.clinvar}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View: Full-Featured ACMG Table */}
                <div className="hidden md:block overflow-x-auto rounded-2xl border border-ink/10 bg-white ring-1 ring-ink/5">
                  <table className="w-full text-left text-[12.5px]">
                    <thead>
                      <tr className="border-b border-ink/8 bg-paper/60 font-mono text-[10.5px] uppercase tracking-wider text-muted">
                        <th className="py-3.5 pl-5 pr-3 font-semibold">Gene & Transcript</th>
                        <th className="py-3.5 px-3 font-semibold">HGVSc / p Variant</th>
                        <th className="py-3.5 px-3 font-semibold">dbSNP ID</th>
                        <th className="py-3.5 px-3 font-semibold">ACMG / CPIC Classification</th>
                        <th className="py-3.5 px-3 font-semibold">Zygosity</th>
                        <th className="py-3.5 px-3 font-semibold">Depth</th>
                        <th className="py-3.5 pl-3 pr-5 font-semibold">Clinical Interpretation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink/6 font-mono text-[12px]">
                      {SAMPLE_REPORT_DATA.physicianView.map((row) => (
                        <tr key={row.gene} className="hover:bg-paper/50 transition-colors">
                          <td className="py-4 pl-5 pr-3 font-semibold text-brand">
                            <div>{row.gene}</div>
                            <div className="text-[10.5px] text-muted font-normal">{row.transcript}</div>
                          </td>
                          <td className="py-4 px-3 text-ink font-medium">{row.variant}</td>
                          <td className="py-4 px-3 text-muted">{row.dbSNP}</td>
                          <td className="py-4 px-3">
                            <span
                              className={`inline-block rounded px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap ${
                                row.classification.includes("Actionable") ||
                                row.classification.includes("Pathogenic")
                                  ? "bg-amber-100 text-amber-900 border border-amber-200"
                                  : "bg-emerald-100 text-emerald-900 border border-emerald-200"
                              }`}
                            >
                              {row.classification}
                            </span>
                          </td>
                          <td className="py-4 px-3 text-ink-soft whitespace-nowrap">{row.zygosity}</td>
                          <td className="py-4 px-3 font-semibold text-ink">{row.depth}</td>
                          <td className="py-4 pl-3 pr-5 font-sans text-[12px] text-ink-soft max-w-[280px]">
                            {row.evidence}
                            <div className="mt-1 font-mono text-[10px] text-muted">{row.clinvar}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Download & Accreditation Footer */}
          <div className="flex flex-col gap-3.5 border-t border-ink/8 bg-[#fdf9fa] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-[12px] text-muted leading-relaxed">
              Every Locus kit includes patient and physician summaries, raw FASTQ/BAM exports, and free lifetime clinical re-interpretation.
            </p>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4.5 py-2 text-[12.5px] font-medium text-ink ring-1 ring-ink/10 transition hover:bg-paper hover:ring-brand/40 active:scale-95 shrink-0 cursor-pointer"
            >
              <FilePdf size={16} weight="fill" className="text-brand shrink-0" />
              <span>{downloaded ? "Sample PDF downloading..." : "Download Full Sample PDF (18 Pages)"}</span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

