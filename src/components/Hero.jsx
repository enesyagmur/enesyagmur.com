const TAGS = [
  "E-TİCARET",
  "SOSYAL MEDYA",
  "FRONTEND WEB GELİŞTİRME",
  "MÜŞTERİ HİZMETLERİ",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pegboard-bg border-b border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-6">
          İstanbul · Dijital Operasyon
        </p>

        <h1 className="font-display uppercase text-bone leading-[0.95] text-[14vw] sm:text-7xl md:text-8xl font-semibold">
          Enes Yağmur.
        </h1>

        <p className="mt-6 max-w-xl text-sage text-lg leading-relaxed">
          E-ticaret operasyonlarından video prodüksiyona, arayüz kodlamaktan
          müşteri deneyimine kadar dijital ticaretin her aşamasında iş gören çok
          yönlü biririyim.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs uppercase tracking-wider text-ink bg-brass px-3 py-1.5 rounded-sm -rotate-1 first:rotate-1 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="#iletisim"
            className="font-mono text-sm uppercase tracking-wider bg-signal text-bone px-6 py-3 rounded-sm hover:brightness-110 transition"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
