const TOOLS = [
  {
    name: "E-ticaret Operasyonları",
    tag: "TOOL / 01",
    detail: "Trendyol, Hepsiburada, İkas",
    list: ["Stok & kargo takibi", "Ürün sayfası tasarımı", "Kampanya yönetimi"],
  },
  {
    name: "İçerik & Video Üretimi",
    tag: "TOOL / 02",
    detail: "CapCut, Photoshop, Adobe Firefly",
    list: ["Ürün videoları", "Sosyal medya içeriği", "Canlı yayın"],
  },
  {
    name: "Frontend Geliştirme",
    tag: "TOOL / 03",
    detail: "React, Tailwind, HTML/CSS/JS",
    list: ["Arayüz kodlama", "VS Code, Cursor", "Responsive tasarım"],
  },
  {
    name: "Müşteri Deneyimi",
    tag: "TOOL / 04",
    detail: "4 yıl saha deneyimi",
    list: ["Sorun çözme", "Süreç takibi", "İletişim yönetimi"],
  },
];

export default function Skills() {
  return (
    <section id="yetenekler" className="pegboard-bg">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-3">
          Yetenekler
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-bone uppercase mb-2">
          Alet Çantası
        </h2>
        <p className="text-sage max-w-xl mb-14">
          Her proje farklı bir alet ister. İşte elimin altında tuttuğum
          dört ana yetenek seti.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {TOOLS.map((tool, i) => (
            <div
              key={tool.name}
              className={`group bg-panel border border-line rounded-sm p-6 transition-all duration-300 hover:border-brass hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 ${
                i % 2 === 0 ? "sm:rotate-[-0.5deg]" : "sm:rotate-[0.5deg]"
              } hover:rotate-0`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-brass">
                  {tool.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-line group-hover:bg-signal transition-colors" />
              </div>

              <h3 className="font-display text-2xl text-bone uppercase mt-3">
                {tool.name}
              </h3>
              <p className="text-sage text-sm mt-1">{tool.detail}</p>

              <ul className="mt-4 space-y-1.5">
                {tool.list.map((item) => (
                  <li
                    key={item}
                    className="text-sage/90 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brass rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
