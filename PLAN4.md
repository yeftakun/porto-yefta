Saya ingin redesign section About pada portfolio website.

Fokus:

* Buat section About lebih ringkas, visual, dan tidak terlalu banyak paragraf.
* Pertahankan style utama website yang sudah ada.
* Jangan redesign seluruh halaman, hanya section About.
* Tetap gunakan warna, font, spacing, dan nuansa visual yang konsisten dengan template portfolio saat ini.

Struktur About yang diinginkan:

1. Section utama About

* id tetap: about
* Heading utama: About Me
* Layout desktop:

  * Kolom kiri: area foto/profile image
  * Kolom kanan: informasi singkat tentang saya
* Layout mobile:

  * Foto di atas
  * Informasi di bawah
  * Semua tetap responsive dan rapi

2. Kolom kiri: profile image

* Buat container gambar berbentuk rounded rectangle / rounded card.
* Gunakan class yang jelas, misalnya:

  * about-profile
  * about-image-wrap
  * about-image
* Untuk sementara gunakan gambar yang sudah ada di hero atau placeholder image.
* Pastikan gambar tidak gepeng dan memakai object-fit: cover.
* Ukuran desktop kira-kira besar dan seimbang dengan teks di kanan.
* Di mobile, gambar mengecil dan tetap proporsional.

3. Kolom kanan: intro ringkas
   Isi konten:

* Heading kecil / title:
  About Me

* Paragraf pendek:
  I am an Informatics fresh graduate based in Manado, Indonesia, with an interest in practical software development, web applications, desktop utilities, and workflow-based systems.

* Jangan buat paragraf terlalu panjang.

* Maksimal 2–3 kalimat pendek.

4. Background points
   Tambahkan bagian kecil berisi poin-poin latar belakang.
   Bisa menggunakan icon kecil atau bullet/chip sederhana.

Isi poin:

* Based in Manado, Indonesia
* Informatics Fresh Graduate
* Interested in Web, Desktop, and Automation Projects
* Focused on Practical Problem Solving

Gunakan layout:

* Bisa berupa vertical list atau small cards/chips.
* Harus terlihat sebagai satu grup informasi.
* Class contoh:

  * about-info-list
  * about-info-item

5. Follow Me
   Di bawah background points, tambahkan bagian social media.

Struktur:

* Heading kecil:
  Follow Me
* Icon social media kecil:

  * LinkedIn
  * Instagram
  * YouTube
  * GitHub
  * Facebook

Ketentuan:

* Gunakan link placeholder dulu, href="#".
* Icon boleh menggunakan teks singkat dulu jika belum memakai icon library, misalnya:

  * in
  * IG
  * YT
  * GH
  * FB
* Jika project belum memakai icon library, jangan tambahkan dependency eksternal dulu.
* Buat icon berbentuk small circular button atau small square button.
* Tambahkan hover effect sederhana yang konsisten dengan style website.
* Class contoh:

  * about-social
  * about-social-title
  * about-social-links
  * about-social-link

6. Konten tambahan About di bawah layout utama
   Di bawah layout foto + informasi, tambahkan area konten ringkas.
   Bisa berupa 3 card seperti sebelumnya, tetapi teksnya dipersingkat.

Card 1:
Title:
Practical Software
Description:
I build tools based on real workflow problems, not only visual prototypes.

Card 2:
Title:
Web & Desktop
Description:
I work with browser-based applications and Windows desktop utilities.

Card 3:
Title:
Learning by Building
Description:
I improve through complete projects, testing, and iteration.

7. Hapus atau ringkas paragraf lama

* Hapus paragraf About yang terlalu panjang.
* Jangan tampilkan text placeholder lama seperti:

  * “A short profile section…”
  * “This section can later be replaced…”
  * “clean placeholders…”
* Ganti semua dengan konten asli yang ringkas.

8. Style yang diharapkan

* About section harus clean, modern, dan tidak terlalu ramai.
* Gunakan whitespace yang cukup.
* Layout desktop harus terlihat seperti:
  [profile image/card] [about info + background points + follow me]
  lalu di bawahnya:
  [Practical Software] [Web & Desktop] [Learning by Building]
* Pastikan spacing antar bagian nyaman.
* Pastikan responsive di mobile.

9. File yang kemungkinan perlu diubah

* index.html
* styles.css

10. Jangan mengubah bagian lain

* Jangan ubah Home, Projects, Skills, Contact, dan JavaScript form.
* Jangan merusak navbar anchor.
* Jangan menghapus konfigurasi Netlify form dan reCAPTCHA.
* Fokus hanya pada section About.
