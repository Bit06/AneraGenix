import { useEffect, useState } from "react";
import { AneragenixMark } from "../components/icons";
import { NAV, COMPANY_INFO } from "../data";

type Props = {
  onOpenConsult?: () => void;
};

export default function Nav({ onOpenConsult }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 15);

      if (scrollY < 120) {
        setActive("");
        return;
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 70) {
        if (NAV.length > 0) setActive(NAV[NAV.length - 1].id);
        return;
      }

      const probeY = scrollY + window.innerHeight * 0.35;
      const elements = NAV.map((item) => document.getElementById(item.id)).filter(
        (el): el is HTMLElement => Boolean(el),
      );

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (probeY >= el.offsetTop - 70) {
          setActive(el.id);
          return;
        }
      }
      setActive(elements[0]?.id || "");
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
      setActive(id);
    }
    setOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActive("");
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4 transition-all duration-300 ${
          open ? "max-lg:bg-white max-lg:border-b max-lg:border-ink/10" : ""
        }`}
      >
        {/* Brand Logo & Name */}
        <a
          href="#top"
          onClick={handleLogoClick}
          aria-label="Back to top"
          className={`flex items-center gap-2.5 rounded-full py-2 pr-4 pl-2.5 text-[16px] sm:text-[17px] font-semibold tracking-[-0.03em] transition-all duration-300 ease-out shrink-0 ${
            scrolled
              ? "bg-white/95 border border-ink/10 backdrop-blur-xl"
              : "bg-transparent border border-transparent"
          }`}
        >
          <AneragenixMark className="h-6 w-6" />
          <span className="text-ink">{COMPANY_INFO.name}</span>
        </a>

        {/* Desktop Navigation Bar with ample breathing room */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2 items-center gap-1 rounded-full bg-white/95 p-1 border border-ink/10 backdrop-blur-xl"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-200 whitespace-nowrap ${
                active === item.id
                  ? "bg-ink text-white font-semibold"
                  : "text-ink-soft hover:bg-blush hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Mobile Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="cursor-pointer max-sm:!hidden inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition hover:bg-brand-deep active:scale-95"
          >
            Explore Research
          </a>

          {/* Morphing Hamburger Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative z-50 grid size-10 place-items-center rounded-full transition-all duration-300 active:scale-90 lg:hidden cursor-pointer ${
              open
                ? "bg-blush border border-brand/30 text-brand-deep"
                : "bg-white border border-ink/10 text-ink"
            }`}
          >
            <div className="relative flex h-3.5 w-4.5 flex-col justify-between">
              <span
                className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out-expo origin-center ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out-expo origin-center ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean flat editorial overlay, zero fuzzy drop shadows) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-out-expo lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-night/50 transition-opacity duration-300"
        />

        <div
          className={`absolute inset-x-3.5 top-[68px] transform-gpu rounded-[22px] border border-ink/12 bg-white p-5 transition-all duration-300 ease-out-expo ${
            open ? "translate-y-0 opacity-100 scale-100" : "-translate-y-3 opacity-0 scale-[0.97]"
          }`}
        >
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium tracking-[-0.015em] transition-all active:scale-[0.99] text-ink hover:bg-blush active:bg-blush ${
                    active === item.id
                      ? "font-semibold bg-brand/10 text-brand-deep"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <span>{item.label}</span>
                  {active === item.id && (
                    <span className="size-2 rounded-full bg-brand-deep" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-ink/8 pt-4">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-brand-deep"
            >
              Explore Research
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
