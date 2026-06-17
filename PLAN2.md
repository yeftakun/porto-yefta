Saya ingin merapikan struktur portfolio website pada repo ini.

Fokus utama: ubah struktur section terlebih dahulu. Konten real/detail proyek akan diisi nanti, jadi gunakan placeholder yang rapi, profesional, dan mudah diganti.

Struktur navbar yang diinginkan:
- Home
- About
- Projects
- Skills
- Contact

Ketentuan perubahan:
1. Pertahankan desain visual, warna, layout umum, spacing, typography, dan style utama dari template yang sudah ada.
2. Jangan redesign total. Fokus pada restrukturisasi section dan placeholder konten.
3. Hapus section:
   - Testimonials
   - Recent Work
4. Ganti section “Case Studies” menjadi “Projects”.
5. Ganti “Get In Touch” menjadi “Contact”.
6. Tambahkan section baru:
   - About
   - Skills
7. Pastikan semua anchor navbar sesuai:
   - Home -> #home
   - About -> #about
   - Projects -> #projects
   - Skills -> #skills
   - Contact -> #contact
8. Pastikan mobile navigation tetap berfungsi seperti sebelumnya.
9. Jangan merusak konfigurasi Netlify Form dan reCAPTCHA yang sudah ada.
10. Pertahankan form contact yang sudah ada, termasuk:
   - data-netlify="true"
   - data-netlify-recaptcha="true"
   - honeypot
   - hidden form-name
   - subject
   - recaptcha wrapper
   - JavaScript validation submit yang sudah ada

Susunan section yang diinginkan:

1. Home / Hero
   - Heading placeholder, contoh: “Hi, I’m [Your Name].”
   - Subheading placeholder singkat tentang role, contoh: “Software Developer focused on practical web applications, desktop utilities, and workflow-based systems.”
   - Deskripsi singkat 1 paragraf.
   - CTA utama mengarah ke #projects, contoh: “View Projects”
   - Bagian kecil yang sebelumnya “Worked with” diganti menjadi “Currently focused on” atau “Focus Areas”.
   - Isi card/chip placeholder:
     - Web Applications
     - Desktop Utilities
     - Backend Systems
     - Automation Tools
     - Data Handling

2. About
   - Buat section baru dengan id="about".
   - Heading: “About Me”
   - Isi 1–2 paragraf placeholder tentang profil developer.
   - Tambahkan 3 highlight/card kecil, misalnya:
     - Practical Software
     - Web & Desktop
     - Learning by Building
   - Gunakan placeholder description pada setiap card.

3. Projects
   - Gunakan struktur layout dari section Case Studies yang sudah ada.
   - Ubah id dari case-studies menjadi projects.
   - Heading: “Projects”
   - Deskripsi pendek placeholder.
   - Tampilkan 3 project card/row utama.
   - Gunakan placeholder general, bukan konten final.
   - Struktur tiap project:
     - Tag/kategori
     - Project title
     - Short description
     - Optional tech stack text
     - CTA button “View Project”
   - Contoh placeholder project:
     - Project One
     - Project Two
     - Project Three
   - Link sementara boleh tetap "#".

4. Skills
   - Buat section baru dengan id="skills".
   - Heading: “Skills”
   - Deskripsi pendek placeholder.
   - Tampilkan skill dalam beberapa kategori/card:
     - Frontend
     - Backend
     - Database
     - Desktop Development
     - Tools & Deployment
   - Isi setiap kategori dengan placeholder tech stack umum:
     - Frontend: HTML, CSS, JavaScript
     - Backend: Node.js, PHP, REST API
     - Database: PostgreSQL, MySQL
     - Desktop: .NET, Windows Forms
     - Tools: Git, GitHub, Netlify
   - Buat tampilannya tetap konsisten dengan style template.

5. Contact
   - Ubah heading dari “Get In Touch” menjadi “Contact”.
   - Ubah deskripsi menjadi placeholder profesional.
   - Pertahankan form yang sudah ada.
   - Jangan hapus reCAPTCHA.
   - Jangan hapus logic JavaScript submit.
   - Pastikan captcha tetap berada di tengah melalui .recaptcha-wrapper.

File yang kemungkinan perlu diubah:
- index.html
- styles.css

Catatan style:
- Gunakan class yang sudah ada jika memungkinkan.
- Tambahkan class baru hanya jika diperlukan untuk About dan Skills.
- Jangan menghapus script navigasi mobile.
- Jangan menghapus script form submit.
- Pastikan tidak ada lagi teks dummy seperti “Testimonials”, “Recent Work”, “Worked with”, “Client Name”, “Case Studies”, atau “Get In Touch” kecuali sudah diganti sesuai struktur baru.
- Pastikan halaman tetap responsive.
- Pastikan HTML tetap semantic dan rapi.