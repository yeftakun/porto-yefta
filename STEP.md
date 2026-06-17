# 5 Tahap Penyelesaian Stack Portfolio

Dokumen ini memecah rencana di `PLAN.md` menjadi 5 tahap eksekusi yang lebih mudah diikuti.

## Tahap 1: Siapkan Form Contact untuk Netlify Forms

Tujuan: membuat form `Get In Touch` bisa dikenali oleh Netlify saat deploy.

Checklist:

- [x] Update form di `index.html` menjadi `name="contact"`.
- [x] Tambahkan `method="POST"`.
- [x] Tambahkan `data-netlify="true"`.
- [x] Tambahkan `netlify-honeypot="bot-field"`.
- [x] Tambahkan hidden input `form-name` dengan value `contact`.
- [x] Tambahkan honeypot field `bot-field`.
- [x] Tambahkan `required` untuk field penting:
  - `email`
  - `message`
- [x] Pastikan field tetap memakai name yang jelas:
  - `email`
  - `mobile`
  - `message`
- [x] Tambahkan `action="/thank-you.html"` agar user diarahkan ke halaman sukses setelah submit.

Output tahap ini:

- Form contact sudah kompatibel dengan Netlify Forms.
- Struktur form tetap bersih dan tidak mengganggu desain.

## Tahap 2: Tambahkan Halaman Sukses dan Styling Pendukung

Tujuan: memberi feedback yang jelas setelah user mengirim pesan.

Checklist:

- [x] Buat file `thank-you.html`.
- [x] Buat tampilan sederhana yang konsisten dengan desain portfolio:
  - background hitam
  - heading putih
  - body text abu-abu
  - tombol hijau untuk kembali ke homepage
- [x] Tambahkan link kembali ke `index.html`.
- [x] Tambahkan CSS untuk honeypot field:

```css
.hidden-field {
  display: none;
}
```

- [x] Jika styling halaman sukses tidak inline, tambahkan class CSS yang dibutuhkan di `styles.css`.
- [x] Test buka `thank-you.html` langsung di browser.

Output tahap ini:

- Flow submit tidak berhenti di halaman form.
- User melihat konfirmasi setelah pesan dikirim.

## Tahap 3: QA Lokal Sebelum Deploy

Tujuan: memastikan website siap sebelum masuk Netlify.

Checklist desktop:

- [ ] Navbar link `Get In Touch` menuju section `#contact`.
- [ ] Form terlihat rapi di desktop.
- [ ] Input email, mobile, dan message bisa diketik.
- [ ] Tombol submit terlihat proporsional.
- [ ] Sidebar mobile tidak mengganggu desktop navbar.

Checklist mobile:

- [ ] Hamburger membuka sidebar.
- [ ] Sidebar bisa ditutup lewat tombol close.
- [ ] Sidebar bisa ditutup lewat overlay.
- [ ] Link `Get In Touch` menutup sidebar dan menuju form.
- [ ] Form tidak overflow pada width 375px atau 390px.
- [ ] Textarea nyaman digunakan.
- [ ] Tombol submit mudah ditekan.

Checklist aksesibilitas dasar:

- [ ] Semua input punya label.
- [ ] Tombol bisa difokus dengan keyboard.
- [ ] Escape menutup sidebar.
- [ ] Kontras teks tetap terbaca.

Output tahap ini:

- Website aman untuk dideploy.
- Masalah layout besar sudah ditangkap sebelum masuk production.

## Tahap 4: Deploy ke Netlify dan Aktifkan Form

Tujuan: membuat website online dan memastikan Netlify menangkap form `contact`.

Checklist deploy:

- [ ] Pastikan semua file ada:
  - `index.html`
  - `styles.css`
  - `thank-you.html`
  - `PLAN.md`
  - `STEP.md`
- [ ] Push project ke GitHub repository.
- [ ] Login Netlify.
- [ ] Pilih "Add new site".
- [ ] Pilih "Import an existing project".
- [ ] Hubungkan ke GitHub repository.
- [ ] Kosongkan build command.
- [ ] Set publish directory ke root project.
- [ ] Deploy site.

Checklist Netlify Forms:

- [ ] Buka Netlify dashboard.
- [ ] Masuk ke site portfolio.
- [ ] Buka menu Forms.
- [ ] Pastikan form `contact` terdeteksi.
- [ ] Submit test dari URL live.
- [ ] Pastikan submission muncul di Forms dashboard.
- [ ] Pastikan redirect ke `thank-you.html` bekerja.

Output tahap ini:

- Website online.
- Form contact tersimpan di Netlify Forms dashboard.

## Tahap 5: Aktifkan Email Notification dan Final QA

Tujuan: memastikan pesan masuk bisa langsung diketahui lewat email dan tetap tersimpan sebagai arsip.

Checklist notification:

- [ ] Buka Netlify dashboard.
- [ ] Masuk ke site portfolio.
- [ ] Buka Form notifications.
- [ ] Tambahkan email notification untuk form `contact`.
- [ ] Isi email tujuan.
- [ ] Simpan konfigurasi.
- [ ] Submit test dari website live.
- [ ] Pastikan email notification masuk.
- [ ] Cek spam/promotions jika email belum terlihat.

Final QA:

- [ ] Submission tersimpan di dashboard Netlify.
- [ ] Email notification terkirim.
- [ ] Halaman `thank-you.html` terbuka setelah submit.
- [ ] Website desktop tetap rapi setelah deploy.
- [ ] Website mobile tetap rapi setelah deploy.
- [ ] Link navigasi semua section berjalan:
  - Home
  - Case Studies
  - Testimonials
  - Recent Work
  - Get In Touch

Output tahap ini:

- Stack gratis sudah berjalan end-to-end.
- Contact form punya dua jalur data:
  - email notification untuk respon cepat
  - Netlify Forms dashboard untuk arsip

## Catatan Upgrade Nanti

Tetap pakai Netlify Forms selama kebutuhan masih sederhana. Upgrade ke Supabase + halaman admin hanya jika nanti perlu:

- login admin
- status submission
- search/filter
- export data
- dashboard custom
- workflow follow-up yang lebih kompleks
