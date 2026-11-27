import { ArrowSquareOut, Globe, Sparkle } from "@phosphor-icons/react";
import { Reveal } from "./ui";

export default function LiveWebsiteCTA() {
  const liveUrl = "https://aneragenix-orcin.vercel.app";

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[26px] border border-brand-deep/30 bg-gradient-to-br from-[#0B294F] via-[#07192e] to-[#04849D] p-8 sm:p-12 text-center text-white shadow-xl">
          {/* Subtle background ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(11,185,190,0.25)_0%,transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-[720px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-4 py-1.5 text-[11.5px] font-mono font-bold tracking-wider text-brand uppercase">
              <Sparkle size={14} weight="fill" />
              <span>Interactive Portfolio Submission</span>
            </div>

            <h3 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-[-0.03em] leading-tight text-white">
              Experience the Live Interactive Platform
            </h3>

            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/80">
              This academic portfolio is fully deployed with responsive molecular models, interactive bioassay assays, and live genomic datasets. Click below to view the running platform.
            </p>

            {/* Big Prominent Clickable Button */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-[15px] sm:text-[16px] font-bold text-[#0B294F] shadow-lg shadow-brand/30 transition-all hover:bg-white hover:scale-105 active:scale-95"
              >
                <Globe size={20} weight="bold" className="transition-transform group-hover:rotate-12" />
                <span>Check Out The Site</span>
                <ArrowSquareOut size={18} weight="bold" />
              </a>

              {/* Explicit Clickable Text URL for PDF readers & print */}
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12.5px] text-brand/90 hover:text-white underline underline-offset-4 transition-colors"
              >
                Live URL: {liveUrl}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
