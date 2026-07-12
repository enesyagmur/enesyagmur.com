export default function Contact() {
  return (
    <section id="iletisim" className="pegboard-bg bg-panel">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-3">
              İletişim
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-bone uppercase mb-6">
              Birlikte
              <br />
              Çalışalım
            </h2>
            <p className="text-sage leading-relaxed max-w-sm">
              Yeni bir proje, iş fırsatı ya da sadece merhaba demek için bana
              ulaşabilirsiniz.
            </p>

            <div className="mt-8 space-y-3 font-mono text-sm">
              <a
                href="mailto:enesyagmuroffical@gmail.com"
                className="block text-bone hover:text-brass transition-colors"
              >
                enesyagmuroffical@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/enes-ya%C4%9Fmur-4b6201249/?skipRedirect=true"
                className="block text-sage hover:text-brass transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/enes-yağmur
              </a>
              <a
                href="https://github.com/enesyagmur?tab=overview&from=2026-07-01&to=2026-07-12"
                className="block text-sage hover:text-brass transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/enesyagmur
              </a>
              <a
                href="tel:+905458681696"
                className="block text-sage hover:text-brass transition-colors"
              >
                +90 545 868 16 96
              </a>
            </div>
          </div>

          <form
            className="space-y-4"
            action="https://formspree.io/f/xgogewer"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wider text-sage"
              >
                Ad Soyad
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full bg-panel border border-line rounded-sm px-4 py-3 text-bone placeholder:text-sage/50 focus:border-brass outline-none"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wider text-sage"
              >
                E-posta
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full bg-panel border border-line rounded-sm px-4 py-3 text-bone placeholder:text-sage/50 focus:border-brass outline-none"
                placeholder="ornek@mail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wider text-sage"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full bg-panel border border-line rounded-sm px-4 py-3 text-bone placeholder:text-sage/50 focus:border-brass outline-none resize-none"
                placeholder="Mesajınız"
              />
            </div>
            <button
              type="submit"
              className="font-mono text-sm uppercase tracking-wider bg-signal text-bone px-6 py-3 rounded-sm hover:brightness-110 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
