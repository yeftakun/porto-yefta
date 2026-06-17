# Rencana Penerapan Stack Portfolio

## Tujuan

Menerapkan portfolio 1 halaman statis dengan form kontak yang bisa menerima pesan tanpa backend custom. Stack utama:

- HTML, CSS, dan JavaScript statis.
- Hosting gratis di Netlify.
- Netlify Forms untuk menyimpan submission dan mengirim notifikasi email.

Pendekatan ini dipilih karena project saat ini sudah statis, cepat dideploy, murah untuk tahap awal, dan tidak membutuhkan database, auth, atau server sendiri.

## Target Hasil

- Website portfolio bisa diakses online.
- Form "Get In Touch" bisa menerima data `email`, `mobile`, dan `message`.
- Setiap submission tersimpan di dashboard Netlify.
- Setiap submission mengirim notifikasi ke email pemilik portfolio.
- Setelah submit, user diarahkan ke halaman sukses sederhana.
- Struktur tetap mudah dikembangkan jika nanti butuh dashboard/admin khusus.

## Stack Final

### Frontend

- `index.html`
- `styles.css`
- JavaScript kecil inline untuk sidebar mobile.

Tidak perlu React, Next.js, Vite, atau build tool selama kebutuhan masih portfolio statis.

### Hosting

- Netlify free tier.
- Deploy dari GitHub repository atau drag-and-drop folder project.
- Rekomendasi: deploy dari GitHub agar update berikutnya tinggal push commit.

### Form Handling

- Netlify Forms.
- Data submission disimpan di Netlify Forms dashboard.
- Email notification diatur dari Netlify dashboard.
- Tambahkan halaman sukses lokal: `thank-you.html`.

## Rencana Implementasi

### 1. Rapikan form HTML

Ubah form contact di `index.html` agar dikenali Netlify Forms:

```html
<form
  class="contact-form"
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/thank-you.html"
>
  <input type="hidden" name="form-name" value="contact" />
  <p class="hidden-field">
    <label>Do not fill this out: <input name="bot-field" /></label>
  </p>
  ...
</form>
```

Field yang perlu dipertahankan:

- `email`
- `mobile`
- `message`

Tambahan yang disarankan:

- `required` untuk email dan message.
- `aria-label` atau label visual yang sudah ada tetap dipertahankan.
- Honeypot field untuk mengurangi spam.

### 2. Tambahkan styling honeypot

Tambahkan class di `styles.css`:

```css
.hidden-field {
  display: none;
}
```

### 3. Buat halaman sukses

Buat `thank-you.html` dengan tampilan sederhana:

- Background hitam.
- Judul: "Message Sent"
- Teks singkat bahwa pesan sudah diterima.
- Tombol kembali ke homepage.

Halaman ini membuat flow form lebih jelas dibanding tetap diam di section contact setelah submit.

### 4. Deploy ke Netlify

Opsi yang direkomendasikan:

1. Buat repository GitHub untuk project ini.
2. Push semua file:
   - `index.html`
   - `styles.css`
   - `thank-you.html`
   - `PLAN.md`
3. Login Netlify.
4. Add new site from Git.
5. Pilih repository.
6. Build command dikosongkan.
7. Publish directory gunakan root project.

Untuk project statis, Netlify tidak perlu build command.

### 5. Aktifkan dan cek Netlify Forms

Setelah deploy pertama:

1. Buka Netlify dashboard.
2. Masuk ke site portfolio.
3. Buka menu Forms.
4. Pastikan form `contact` terdeteksi.
5. Test submit dari website live.
6. Pastikan data muncul di Forms dashboard.

### 6. Atur email notification

Di Netlify dashboard:

1. Masuk ke Site configuration.
2. Buka Forms.
3. Buka Form notifications.
4. Tambahkan email notification.
5. Isi email tujuan.
6. Test submit lagi.
7. Pastikan email masuk.

Catatan: tetap cek folder spam/promotions di awal.

### 7. QA sebelum dianggap selesai

Cek desktop:

- Navbar link `Get In Touch` scroll ke section contact.
- Form terlihat sesuai desain.
- Input dan textarea nyaman diketik.
- Submit mengarah ke `thank-you.html`.
- Data masuk dashboard Netlify.
- Email notification terkirim.

Cek mobile:

- Sidebar mobile tetap bisa buka/tutup.
- Link `Get In Touch` menutup sidebar dan scroll ke contact.
- Form full-width dan tidak overflow.
- Keyboard mobile tidak membuat layout rusak.
- Tombol submit mudah ditekan.

Cek aksesibilitas dasar:

- Semua input punya label.
- Tombol submit bisa difokus via keyboard.
- Warna teks cukup kontras.
- Halaman sukses punya link kembali.

## Opsi Data: Email vs Dashboard

Untuk tahap awal, gunakan dua-duanya:

- Email notification untuk respon cepat.
- Netlify Forms dashboard sebagai arsip dan backup.

Tidak disarankan membuat halaman admin khusus sekarang karena perlu:

- Authentication.
- Database.
- Proteksi data.
- Deployment logic tambahan.
- Maintenance lebih besar.

## Kapan Perlu Upgrade Stack

Tetap pakai Netlify Forms selama:

- Submission masih sedikit.
- Data hanya perlu dibaca oleh pemilik portfolio.
- Tidak perlu status follow-up, assignment, atau dashboard custom.

Pertimbangkan Supabase free tier + admin page kalau nanti butuh:

- Login admin.
- List submission di halaman khusus.
- Status seperti `new`, `replied`, `archived`.
- Search dan filter.
- Export data.
- Integrasi dengan workflow lain.

## Rencana Upgrade Jika Butuh Dashboard Khusus

Tahap 2 opsional:

1. Tambahkan Supabase project.
2. Buat table `contact_messages`.
3. Buat endpoint serverless atau gunakan Supabase insert dari frontend dengan aturan RLS yang aman.
4. Buat halaman admin terpisah.
5. Tambahkan auth untuk admin.
6. Deploy tetap di Netlify.

Upgrade ini jangan dilakukan sebelum benar-benar diperlukan.

## Checklist Eksekusi

- [ ] Update form contact agar kompatibel dengan Netlify Forms.
- [ ] Tambahkan honeypot anti-spam.
- [ ] Tambahkan `thank-you.html`.
- [ ] Test form secara lokal sebatas tampilan.
- [ ] Deploy ke Netlify.
- [ ] Pastikan form terdeteksi di Netlify dashboard.
- [ ] Test submit dari URL live.
- [ ] Aktifkan email notification.
- [ ] Test email notification.
- [ ] Cek ulang desktop dan mobile.

## Referensi

- Netlify Forms setup: https://docs.netlify.com/manage/forms/setup/
- Netlify Forms notifications: https://docs.netlify.com/manage/forms/notifications/
- Netlify Forms usage and billing: https://docs.netlify.com/manage/forms/usage-and-billing/
