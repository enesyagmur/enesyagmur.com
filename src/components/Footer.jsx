export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-sage">
          © {new Date().getFullYear()} Enes Yağmur. Tüm hakları saklıdır.
        </p>
        <p className="font-mono text-xs text-sage">
          React + Tailwind ile kodlandı.
        </p>
      </div>
    </footer>
  );
}
