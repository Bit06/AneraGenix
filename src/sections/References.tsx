import { useState } from "react";
import { ArrowUpRight, BookOpen, Check, Copy, MagnifyingGlass } from "@phosphor-icons/react";
import { Eyebrow, Reveal } from "../components/ui";
import { REFERENCES_LIST } from "../data";

export default function References() {
  const [filter, setFilter] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = REFERENCES_LIST.filter(
    (r) =>
      r.citation.toLowerCase().includes(filter.toLowerCase()) ||
      r.id.toLowerCase().includes(filter.toLowerCase()),
  );

  const copyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="references" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-16 pb-24 sm:px-8 lg:pb-32">
      <div className="flex flex-col items-start gap-3">
        <Reveal>
          <Eyebrow>Peer-Reviewed Scientific Literature</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <div>
              <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
                REFERENCES
              </h2>
              <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-ink-soft">
                Full academic citations supporting the methodology, hexaploid wheat genetics, TaEDR1 target selection, and CRISPR-Cas9 genome editing protocols.
              </p>
            </div>

            {/* Quick Search Input */}
            <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-xs ring-1 ring-ink/5 w-full sm:w-auto max-w-[340px]">
              <MagnifyingGlass size={16} className="text-muted shrink-0" />
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search authors, journal or year..."
                className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-muted"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Citations List */}
      <div className="mt-10 overflow-hidden rounded-[26px] border border-ink/10 bg-white shadow-xs">
        <div className="border-b border-ink/8 bg-paper px-6 py-4 flex items-center justify-between text-[12px] font-mono font-semibold text-brand-deep">
          <span>{filtered.length} Peer-Reviewed Citations ({REFERENCES_LIST.length} Total)</span>
          <span className="text-muted">Harvard Citation Format</span>
        </div>

        <ol className="divide-y divide-ink/8 list-decimal list-inside">
          {filtered.map((ref, idx) => (
            <li
              key={ref.id}
              className="group p-5 sm:p-6 transition hover:bg-brand/5 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="text-[13.5px] sm:text-[14px] leading-[1.7] text-ink-soft flex-1">
                <span className="font-mono font-semibold text-brand-deep mr-2">[{idx + 1}]</span>
                <span>{ref.citation}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => copyCitation(ref.id, ref.citation)}
                  className="inline-flex items-center gap-1 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[11.5px] font-mono text-ink-soft shadow-2xs hover:border-brand hover:text-brand transition cursor-pointer"
                  title="Copy citation"
                >
                  {copiedId === ref.id ? (
                    <>
                      <Check size={13} weight="bold" className="text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-3 py-1.5 text-[11.5px] font-mono font-semibold text-brand-deep hover:bg-brand hover:text-white transition"
                >
                  <span>DOI Link</span>
                  <ArrowUpRight size={13} weight="bold" />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
