const TIMELINE = [
  {
    period: "Halen",
    title: "E-ticaret ve Dijital Pazarlama Sorumlusu",
    org: "Bisiklet Dünyam · İstanbul",
    detail:
      "Trendyol, Hepsiburada ve İkas üzerinden uçtan uca e-ticaret operasyonu: stok takibi, kargo/paketleme süreçleri, ürün tasarımı ve içerik/video üretimi.",
  },
  {
    period: "~4 Yıl",
    title: "Müşteri Hizmetleri",
    org: "Yemeksepeti",
    detail:
      "Yoğun hacimli müşteri iletişiminde sorun çözme, süreç takibi ve müşteri deneyimi odaklı çalışma.",
  },
  {
    period: "Eğitim",
    title: "Yönetim Bilişim Sistemleri (Lisans)",
    org: "Anadolu Üniversitesi",
  },
  {
    period: "Eğitim",
    title: "Bilgisayar Programcılığı (Ön Lisans)",
    org: "Balıkesir Üniversitesi",
  },
];

export default function About() {
  return (
    <section id="hakkimda" className="bg-panel border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-3">
              Hakkımda
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-bone uppercase">
              Çok Yönlü,
              <br />
              Tek Odak
            </h2>
            <p className="mt-6 text-sage leading-relaxed">
              Farklı disiplinleri tek bir operasyon anlayışında birleştiriyorum:
              ürünü doğru raflara taşımak, doğru içerikle anlatmak ve doğru
              deneyimle desteklemek.
            </p>
          </div>

          <ol className="relative border-l border-line pl-8 space-y-10">
            {TIMELINE.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-brass" />
                <p className="font-mono text-xs uppercase tracking-wider text-brass mb-1">
                  {item.period}
                </p>
                <h3 className="font-display text-xl text-bone uppercase">
                  {item.title}
                </h3>
                <p className="text-sage text-sm mt-0.5">{item.org}</p>
                <p className="text-sage/90 mt-2 leading-relaxed">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
