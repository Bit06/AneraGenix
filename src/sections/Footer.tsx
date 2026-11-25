import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle,
  Dna,
  Plant,
  ShieldCheck,
  BookmarkSimple,
} from "@phosphor-icons/react";
import { AneragenixMark } from "../components/icons";
import { COMPANY_INFO, NAV } from "../data";

const QUICK_LINKS = [
  {
    category: "Navigation",
    links: [
      { label: "About the company", href: "#about" },
      { label: "Products and services", href: "#services" },
      { label: "Our methodology", href: "#methodology" },
      { label: "Case study", href: "#case-study" },
      { label: "Meet our team", href: "#team" },
      { label: "References", href: "#references" },
    ],
  },
  {
    category: "Research Focus",
    links: [
      { label: "Triticum aestivum (Bread wheat)", href: "#about" },
      { label: "Blumeria graminis f. sp. tritici (Bgt)", href: "#case-study" },
      { label: "TaEDR1 gene homoeologues", href: "#services" },
      { label: "Multiplex CRISPR-Cas9", href: "#methodology" },
      { label: "Hexaploid subgenomes (A, B, D)", href: "#methodology" },
      { label: "Zhang et al. (2017) Dataset", href: "#case-study" },
    ],
  },
  {
    category: "Methodology",
    links: [
      { label: "Guide RNA (gRNA) design", href: "#methodology" },
      { label: "PAM recognition (5'-NGG-3')", href: "#methodology" },
      { label: "Double strand break (DSB)", href: "#methodology" },
      { label: "HNH & RuvC nuclease domains", href: "#methodology" },
      { label: "NHEJ & HDR repair pathways", href: "#methodology" },
      { label: "Microcolony bioassays", href: "#services" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setDone(true);
  };

  return (
    <footer className="w-full overflow-hidden border-t border-ink/8 bg-[#f4f9fa]">
      <div className="mx-auto w-full max-w-[1400px] px-5 pt-14 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand & Research Newsletter */}
          <div className="w-full lg:max-w-[440px]">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-[20px] font-semibold tracking-[-0.03em] text-ink"
            >
              <AneragenixMark className="h-[26px] w-[28px]" />
              <span>{COMPANY_INFO.name}</span>
            </a>
            <p className="mt-4 text-[13.5px] leading-[1.65] text-ink-soft sm:max-w-[370px]">
              Investigating how plant genes can allow production of healthier crops with improved
              disease resistance against powdery mildew through targeted CRISPR-Cas9 genome editing.
            </p>

            <form
              onSubmit={submit}
              className="mt-6 flex w-full max-w-full sm:max-w-[390px] items-center rounded-full bg-white p-1.5 pl-4 sm:pl-5 ring-1 ring-ink/10 transition-all focus-within:ring-2 focus-within:ring-brand/40 shadow-xs"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={done ? "Subscribed to research briefings" : "researcher@institution.edu"}
                disabled={done}
                className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={done}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white transition hover:bg-brand active:scale-95 cursor-pointer"
              >
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-[11px] text-brand-deep font-medium">
                <Dna size={14} weight="bold" className="text-brand shrink-0" />
                <span>CRISPR-Cas9 Multiplexing</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/8 bg-white px-3.5 py-1.5 text-[11px] text-ink-soft">
                <Plant size={14} weight="duotone" className="text-brand-deep shrink-0" />
                <span>Wheat (Triticum aestivum)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/8 bg-white px-3.5 py-1.5 text-[11px] text-ink-soft">
                <ShieldCheck size={14} weight="duotone" className="text-brand-deep shrink-0" />
                <span>TaEDR1 Resistance Research</span>
              </span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
            {QUICK_LINKS.map((col) => (
              <div key={col.category} className="min-w-0">
                <p className="font-mono text-[10.5px] font-bold tracking-[0.1em] text-brand-deep uppercase">
                  {col.category}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block truncate text-[13px] text-ink-soft transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Scope Strip */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/8 py-6 text-center text-[12px] text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} AneraGenix Technology. Molecular Plant Genetics & CRISPR-Cas9 Research.</p>
          <div className="flex items-center gap-4 text-[12px]">
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#methodology" className="hover:text-brand transition-colors">Methodology</a>
            <a href="#case-study" className="hover:text-brand transition-colors">Case Study</a>
            <a href="#references" className="hover:text-brand transition-colors">References (14)</a>
          </div>
        </div>
      </div>

      {/* Responsive watermark in brand palette */}
      <p
        aria-hidden
        className="-mb-[0.16em] text-center text-[clamp(3.8rem,19vw,22rem)] leading-[0.82] font-semibold tracking-[-0.07em] select-none bg-gradient-to-b from-brand/15 via-brand/5 to-transparent bg-clip-text text-transparent pointer-events-none uppercase"
      >
        aneragenix
      </p>
    </footer>
  );
}
