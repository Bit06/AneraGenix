import { AneragenixMark } from "../components/icons";
import { COMPANY_INFO, NAV } from "../data";

export default function Footer() {
  const liveUrl = "https://aneragenix-orcin.vercel.app";

  return (
    <footer className="w-full overflow-hidden border-t border-ink/10 bg-[#f3f8f9]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand & Button directly underneath the logo */}
          <div className="flex flex-col items-center sm:items-start gap-3.5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.03em] text-ink"
            >
              <AneragenixMark className="h-[24px] w-[26px]" />
              <span>{COMPANY_INFO.name}</span>
            </a>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-deep px-5 py-2 text-[13.5px] font-semibold text-white shadow-sm transition hover:bg-ink active:scale-95 cursor-pointer"
            >
              Check out the site
            </a>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[13px] font-medium text-ink-soft">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-colors hover:text-brand-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-ink/8 pt-6 text-center text-[12px] text-muted">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Academic Portfolio Assessment 1.</p>
        </div>
      </div>
    </footer>
  );
}
