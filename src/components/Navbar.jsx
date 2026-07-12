import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-bone uppercase"
        >
          Enes<span className="text-brass">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-sage hover:text-brass border border-transparent hover:border-line rounded px-3 py-2 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-bone border border-line rounded px-3 py-2 font-mono text-xs uppercase"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menüyü aç/kapat"
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-panel border-t border-line px-6 py-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-sm uppercase tracking-wider text-sage hover:text-brass py-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
