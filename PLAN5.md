Saya ingin menambahkan animasi ringan dan profesional pada portfolio website ini.

Repo:
https://github.com/yeftakun/porto-yefta

Fokus:
- Tambahkan animasi yang halus, modern, dan tidak berlebihan.
- Jangan redesign layout.
- Jangan mengubah struktur konten utama.
- Jangan mengubah warna utama, typography, dan layout besar.
- Animasi harus tetap ringan dan tidak memakai library eksternal.
- Gunakan CSS animation/transitions dan JavaScript ringan jika diperlukan.
- Pastikan tetap responsive dan tidak mengganggu aksesibilitas.

Bagian yang boleh diberi animasi:
1. Hero section
2. Focus area cards
3. About section
4. Project rows
5. Skill cards
6. Contact section
7. Buttons
8. Social icons
9. Navbar active state

Animasi yang diinginkan:

1. Initial hero animation
- Saat halaman dibuka, elemen hero muncul secara bertahap.
- Heading muncul dulu, lalu subheading/description, lalu button, lalu portrait image.
- Gunakan efek:
  - opacity dari 0 ke 1
  - translateY kecil, misalnya 16px ke 0
- Durasi sekitar 500–800ms.
- Jangan terlalu lambat.

2. Scroll reveal animation
- Tambahkan class reusable, misalnya:
  - reveal
  - reveal-visible
- Elemen dengan class .reveal awalnya:
  - opacity: 0
  - transform: translateY(24px)
- Saat masuk viewport:
  - opacity: 1
  - transform: translateY(0)
- Gunakan IntersectionObserver di JavaScript.
- Terapkan ke:
  - about layout
  - about cards
  - project rows
  - skill cards
  - contact form
- Tambahkan stagger sederhana menggunakan CSS variable atau delay class jika memungkinkan.
- Animasi hanya jalan sekali saat pertama kali muncul.

3. Hover animation untuk cards
- Tambahkan hover halus pada:
  - .focus-card
  - .about-card
  - .skill-card
  - .project-image jika sesuai
- Efek:
  - transform: translateY(-4px)
  - border color sedikit lebih terang
  - box-shadow ringan
- Jangan buat card terlalu meloncat.
- Gunakan transition 160–220ms ease.

4. Button animation
- Pertahankan hover button yang sudah ada.
- Tambahkan animasi ringan pada icon arrow di dalam button.
- Saat hover:
  - arrow bergeser sedikit ke kanan, misalnya translateX(4px)
- Jangan ubah ukuran button.

5. Image animation
- Untuk .portrait-wrap dan .about-image-wrap:
  - Tambahkan entrance animation saat page load atau reveal.
  - Tambahkan hover effect ringan:
    - image scale(1.03)
- Pastikan overflow tetap hidden agar gambar tidak keluar container.
- Untuk project image:
  - Hover scale sangat kecil, misalnya 1.02
  - Transition smooth.

6. Navbar active state
- Tambahkan active state pada nav link berdasarkan section yang sedang terlihat.
- Gunakan JavaScript IntersectionObserver.
- Class aktif misalnya:
  - nav-link-active
- Style:
  - color: var(--white)
  - optional underline atau small border-bottom
- Jangan mengganggu mobile navigation.

7. Respect reduced motion
- Tambahkan media query:
  @media (prefers-reduced-motion: reduce)
- Jika user mengaktifkan reduced motion:
  - Matikan animation
  - Matikan transition yang besar
  - Scroll behavior menjadi auto jika perlu

8. JavaScript
- Jika memungkinkan, pisahkan script animasi ke file baru:
  - animations.js
- Lalu tambahkan script di index.html sebelum closing body:
  <script src="animations.js"></script>
- Jangan menghapus script navigation dan script form Netlify/reCAPTCHA yang sudah ada.
- Pastikan script form submit tetap berjalan.
- Pastikan mobile nav tetap berjalan.

Implementasi teknis yang diharapkan:

CSS:
- Tambahkan keyframes:
  - fadeUp
  - fadeIn
- Tambahkan class:
  - reveal
  - reveal-visible
  - nav-link-active
- Tambahkan transition pada card/button/image.

JavaScript:
- Gunakan IntersectionObserver untuk reveal animation.
- Gunakan IntersectionObserver atau scroll listener ringan untuk active navbar.
- Jangan gunakan library eksternal seperti AOS, GSAP, Framer Motion, jQuery, atau Bootstrap JS.

Elemen yang perlu diberi class .reveal:
- .focus-card
- .about-layout
- .about-card
- .project-row
- .skill-card
- .contact-section .section-heading
- .contact-form

Stagger:
- Untuk daftar cards seperti focus cards, about cards, dan skill cards, beri delay bertahap.
- Bisa menggunakan inline style:
  style="--reveal-delay: 80ms"
  style="--reveal-delay: 160ms"
- Atau gunakan nth-child di CSS.

Aksesibilitas:
- Animasi tidak boleh membuat konten sulit dibaca.
- Jangan menambahkan animasi loop yang terus bergerak.
- Jangan membuat efek parallax berat.
- Jangan membuat scroll hijacking.
- Jangan membuat cursor custom.

Pastikan hasil akhir:
- Website tetap cepat.
- Animasi terasa smooth.
- Layout tidak bergeser aneh saat load.
- Tidak ada error JavaScript di console.
- Tidak merusak Netlify form, reCAPTCHA, navbar mobile, dan anchor link.