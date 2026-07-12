# Portfolyo Sitesi

React + Vite + Tailwind CSS v4 ile kodlanmış kişisel portfolyo sitesi.

## 1. Bilgisayarında Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## 2. İçeriği Kendine Göre Düzenleme

Aşağıdaki dosyalarda kendi bilgilerinle değiştirmen gereken yerler var:

- `src/components/Projects.jsx` — örnek/placeholder projeler, gerçek projelerinle değiştir
- `src/components/Contact.jsx` — e-posta, LinkedIn, Instagram linklerini kendi bilgilerinle güncelle
- `src/components/About.jsx` — deneyim/eğitim zaman çizelgesi

## 3. Yayına Alma (Vercel ile, ücretsiz)

1. Projeyi bir GitHub reposuna yükle
2. vercel.com üzerinden GitHub hesabınla giriş yap
3. "New Project" -> reponu seç -> Deploy'a bas (Vite projelerini otomatik tanır)
4. Birkaç saniye içinde "senin-projen.vercel.app" şeklinde bir link alırsın

## 4. GoDaddy Alan Adını Bağlama

Vercel'de proje ayarlarından Settings -> Domains kısmına git, alan adını (örn. enesxyz.com) ekle. Vercel sana genelde şu kayıtları GoDaddy'ye eklemeni ister:

- A Record: @ -> Vercel'in verdiği IP adresi
- CNAME: www -> cname.vercel-dns.com

GoDaddy tarafında:
1. GoDaddy hesabına gir -> Alan Adlarım -> domainini seç -> DNS Yönet
2. Yukarıdaki A ve CNAME kayıtlarını ekle/güncelle
3. DNS değişikliklerinin yayılması genelde birkaç dakika, bazen birkaç saat sürebilir

Netlify kullanmak istersen süreç neredeyse aynı (sadece verilen DNS kayıtları farklı olur).
