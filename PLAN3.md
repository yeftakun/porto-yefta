Saya ingin menambahkan halaman detail untuk setiap project pada portfolio website ini.

Keputusan struktur:
- Gunakan **halaman terpisah**, bukan modal.
- Setiap project card pada section “Projects” harus memiliki tombol/link “View Project”.
- Tombol tersebut mengarah ke halaman detail masing-masing project.

Tujuan:
Membuat tampilan portfolio terasa lebih profesional, lebih informatif, dan lebih cocok untuk menampilkan studi kasus project beserta beberapa screenshot.

Project yang saat ini ada:
1. PrintOrder / PrintForm
2. Book Room
3. Assetto Corsa Lapboard

Buat struktur agar masing-masing project memiliki halaman detail sendiri, misalnya:
- project-printorder.html
- project-cs-ticketing.html
- project-ac-lapboard.html

Ketentuan umum:
1. Pertahankan style visual utama website:
   - warna
   - typography
   - spacing
   - layout language
   - button style
2. Jangan redesign total.
3. Halaman detail harus tetap konsisten dengan homepage portfolio.
4. Pastikan responsive.
5. Buat struktur HTML dan CSS rapi, semantic, dan mudah diisi konten nyata nanti.
6. Jika perlu JavaScript untuk slider/carousel, buat yang sederhana, ringan, dan tidak bergantung pada library eksternal.

Struktur halaman detail project yang diinginkan:

1. Header / top area
- Judul project
- Tag / kategori project
- Short one-line summary
- Tombol:
  - Back to Projects
  - GitHub (placeholder link)
  - Live Demo / Demo (placeholder link, opsional)

2. Project hero image / gallery
- Buat area screenshot utama
- Gunakan **slider / carousel gambar**
- Harus bisa:
  - next / previous dengan tombol
  - indicator / dots (jika memungkinkan)
  - support swipe sederhana di mobile kalau mudah, jika tidak cukup tombol
- Gunakan beberapa placeholder screenshot dulu
- Setiap project detail page minimal punya 3–5 placeholder image slots
- Gambar harus bisa diganti mudah nanti

3. Overview
- Section untuk ringkasan project
- Isi placeholder paragraph umum
- Nanti akan diganti dengan deskripsi asli

4. Problem / Background
- Section untuk menjelaskan masalah yang ingin diselesaikan project
- Isi placeholder text

5. Solution / Features
- Section untuk solusi atau fitur utama
- Gunakan bullet list / cards
- Isi placeholder umum

6. Tech Stack
- Section khusus stack
- Tampilkan sebagai list, pills, atau small cards
- Gunakan placeholder stack yang sesuai dengan masing-masing project

7. Challenges / Notes
- Section untuk tantangan, pembelajaran, atau catatan implementasi
- Isi placeholder text

8. Outcome / Result
- Section untuk hasil project, manfaat, atau kesimpulan singkat
- Isi placeholder text

9. Bottom navigation / CTA
- Tombol kembali ke homepage atau kembali ke section projects
- Opsional: tombol next project / previous project

Perubahan pada homepage:
1. Ubah tombol “View Project” pada masing-masing project card agar mengarah ke halaman detail project masing-masing.
2. Tetap pertahankan section “Projects” di homepage sebagai preview singkat saja.
3. Jangan pindahkan seluruh detail ke homepage.

Kebutuhan slider/carousel:
1. Buat slider sederhana tanpa library eksternal.
2. Harus ada:
   - tombol previous
   - tombol next
3. Jika memungkinkan tambahkan:
   - dot indicators
   - active state
4. Slider harus responsif.
5. Gambar utama harus berubah saat tombol ditekan.
6. Gunakan placeholder image dulu.
7. Satu struktur slider reusable untuk semua halaman detail project.

Penamaan class:
- Gunakan nama class yang jelas dan reusable
- Contoh:
  - project-detail-page
  - project-detail-header
  - project-gallery
  - project-gallery-track
  - project-gallery-slide
  - project-gallery-controls
  - project-meta
  - project-section
  - tech-stack-list
- Sesuaikan dengan style codebase yang sudah ada

File yang kemungkinan perlu dibuat / diubah:
- index.html
- styles.css
- project-printorder.html
- project-cs-ticketing.html
- project-ac-lapboard.html
- script.js atau script inline khusus jika diperlukan untuk slider

Catatan penting:
- Fokus dulu pada struktur dan komponen.
- Konten real project tidak perlu ditulis detail; gunakan placeholder yang rapi dan profesional.
- Jangan gunakan modal.
- Pastikan hasil akhirnya terasa seperti portfolio project case study yang clean, simple, dan modern.