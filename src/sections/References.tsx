import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Reveal } from "../components/ui";
import { REFERENCES_LIST } from "../data";

export default function References() {
  const [filter, setFilter] = useState("");

  const filtered = REFERENCES_LIST.filter(
    (r) =>
      r.citation.toLowerCase().includes(filter.toLowerCase()) ||
      r.id.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <section id="references" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-16 pb-24 sm:px-8 lg:pb-32">
      <div className="flex flex-col items-start gap-3">
        <Reveal delay={60}>
          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <div>
              <h2 className="text-[clamp(2.3rem,4.8vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-ink">
                REFERENCES
              </h2>
            </div>

            {/* Quick Search Input */}
            <div className="flex items-center gap-2 rounded-full border border-ink/12 bg-white px-4 py-2 w-full sm:w-auto max-w-[340px]">
              <MagnifyingGlass size={16} className="text-muted shrink-0" />
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search references..."
                className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-muted"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Citations List */}
      <div className="mt-9 overflow-hidden rounded-[20px] border border-ink/10 bg-white">
        <ul className="divide-y divide-ink/8">
          {filtered.map((ref) => (
            <li
              key={ref.id}
              className="p-5 sm:p-6 transition hover:bg-brand-deep/5"
            >
              <p className="text-[13.5px] sm:text-[14px] leading-[1.7] text-ink-soft break-words">
                {ref.citation}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
