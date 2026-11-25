import { useState, useEffect, type FormEvent } from "react";
import { CheckCircle, Clock, Calendar, User, VideoCamera, X } from "@phosphor-icons/react";
import { TEAM } from "../data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [consultType, setConsultType] = useState("Pre-test Guidance");
  const [counselor, setCounselor] = useState(TEAM[2].name); // Sarah Jenkins default
  const [date, setDate] = useState("Tomorrow · 14:00 CET");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-night/60 backdrop-blur-sm transition-opacity animate-[rise_0.2s_ease-out]"
      />

      {/* Modal Dialog with Modern Minimalist Scrollbar and Crisp Stroke */}
      <div className="custom-scrollbar relative z-10 w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[26px] border border-ink/10 bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between border-b border-ink/8 pb-4">
          <div>
            <span className="font-mono text-[10.5px] font-semibold tracking-wider text-brand uppercase">
              1-on-1 Consultation
            </span>
            <h3 className="mt-1 text-[22px] font-medium tracking-[-0.03em] text-ink">
              Book a Genetic Counseling Session
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="grid size-8 place-items-center rounded-full bg-paper text-ink-soft ring-1 ring-ink/8 transition hover:bg-blush hover:text-brand cursor-pointer"
          >
            <X size={17} weight="bold" />
          </button>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted font-mono">
                Consultation Topic
              </label>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {[
                  "Pre-test Guidance",
                  "Results Review",
                  "Second Opinion",
                ].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setConsultType(t)}
                    className={`rounded-xl px-3 py-2 text-[12.5px] font-medium transition cursor-pointer ${
                      consultType === t
                        ? "bg-brand text-white ring-1 ring-brand-deep/30"
                        : "bg-paper text-ink-soft ring-1 ring-ink/5 hover:bg-blush hover:text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted font-mono">
                Select Specialist
              </label>
              <div className="mt-2 space-y-2">
                {TEAM.slice(0, 3).map((doc) => (
                  <label
                    key={doc.name}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 transition ${
                      counselor === doc.name
                        ? "border-brand bg-blush/30 ring-1 ring-brand/20"
                        : "border-ink/8 bg-white hover:bg-paper"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="counselor"
                        checked={counselor === doc.name}
                        onChange={() => setCounselor(doc.name)}
                        className="text-brand accent-brand cursor-pointer"
                      />
                      <div>
                        <p className="text-[13.5px] font-medium text-ink">{doc.name}</p>
                        <p className="text-[11.5px] text-muted">{doc.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10.5px] text-brand">{doc.cred}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted font-mono">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Jane Smith"
                  className="mt-1.5 w-full rounded-xl bg-paper px-3.5 py-2.5 text-[13.5px] text-ink outline-none ring-1 ring-ink/10 transition-all focus:bg-white focus:ring-2 focus:ring-brand/40"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted font-mono">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="mt-1.5 w-full rounded-xl bg-paper px-3.5 py-2.5 text-[13.5px] text-ink outline-none ring-1 ring-ink/10 transition-all focus:bg-white focus:ring-2 focus:ring-brand/40"
                />
              </div>
            </div>

            <div className="rounded-xl bg-paper p-3.5 ring-1 ring-ink/8">
              <div className="flex items-center gap-2 text-[12px] text-ink-soft">
                <VideoCamera size={16} className="text-brand shrink-0" />
                <span>45-minute secure video session via HIPAA/GDPR encrypted room.</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-brand py-3 text-[14px] font-medium text-white ring-1 ring-brand-deep/30 transition hover:bg-brand-deep active:scale-[0.99] cursor-pointer"
            >
              Confirm Consultation Request
            </button>
          </form>
        ) : (
          <div className="py-8 text-center animate-[rise_0.25s_ease-out]">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle size={32} weight="fill" />
            </div>
            <h4 className="mt-4 text-[20px] font-medium text-ink">
              Consultation Scheduled!
            </h4>
            <p className="mx-auto mt-2 max-w-[380px] text-[13.5px] leading-relaxed text-ink-soft">
              A private calendar invitation with video room credentials has been dispatched to{" "}
              <strong className="text-ink">{email || "your inbox"}</strong> with {counselor}.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 rounded-full bg-ink px-6 py-2.5 text-[13px] font-medium text-white ring-1 ring-ink/10 transition hover:bg-brand active:scale-98 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
