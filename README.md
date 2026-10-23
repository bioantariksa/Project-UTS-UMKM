# Website UMKM Bhayangkari (Versi Parallax)

Website profil organisasi/komunitas UMKM Bhayangkari menggunakan HTML5, CSS3, dan sedikit JavaScript (tanpa library/framework/database). Efek parallax: lapisan hero bergerak berbeda kecepatan, pita foto latar bergeser saat scroll, galeri bertingkat, dan elemen muncul halus. Efek dinonaktifkan otomatis bila perangkat memakai pengaturan *reduce motion*.

## Halaman
- `index.html` — profil, visi-misi, galeri ilustrasi, dan bidang kegiatan.
- `produk.html` — tabel contoh produk, kategori, satuan, dan harga.
- `kontak.html` — informasi kontak dan formulir demonstrasi.

## Menjalankan secara lokal
1. Ekstrak folder proyek.
2. Buka `index.html` di browser (Chrome/Edge/Firefox).
3. Gunakan menu navigasi untuk berpindah halaman.

## Struktur folder
```
bhayangkari-umkm/
├── index.html
├── produk.html
├── kontak.html
├── README.md
├── css/style.css
├── js/parallax.js       # logika efek parallax
├── images/              # aset ilustrasi SVG
└── screenshots/         # tangkapan layar halaman
```

## Catatan isi
Gambar pada proyek ini berupa ilustrasi SVG. Harga pada halaman produk adalah data contoh untuk tugas dan perlu diganti jika digunakan sebagai katalog sungguhan. Formulir kontak hanya tampilan statis; belum mengirim data ke server.

## Hosting gratis dengan GitHub Pages
1. Buat akun atau masuk ke https://github.com.
2. Klik **New repository**, beri nama `bhayangkari-umkm`, pilih **Public**, lalu buat repository.
3. Unggah semua isi folder proyek (pastikan `index.html` ada di root repository), lalu klik **Commit changes**.
4. Buka **Settings → Pages**.
5. Di **Build and deployment**, pilih **Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi. URL biasanya berbentuk `https://NAMA-USERNAME.github.io/bhayangkari-umkm/`.
7. Buka URL tersebut dan uji semua tautan. URL akhir bergantung pada nama akun dan repository.

## Rencana video demonstrasi 5–10 menit
- **00:00–00:45 — Pembukaan:** perkenalkan website dan tujuan proyek.
- **00:45–02:15 — Beranda:** jelaskan header, navigasi, banner, profil, visi-misi, galeri, dan bidang kegiatan.
- **02:15–03:30 — Produk & Harga:** klik menu dan jelaskan tabel dengan `table`, `thead`, `tbody`, `tr`, `th`, dan `td`.
- **03:30–04:30 — Kontak:** jelaskan informasi kontak dan formulir contoh.
- **04:30–06:00 — Struktur HTML:** tunjukkan `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `h1`–`h3`, `p`, `img`, `ul`, dan tautan `<a href="...">`.
- **06:00–07:30 — CSS:** tunjukkan `css/style.css`; jelaskan variabel warna, layout Grid/Flexbox, border-radius, box-shadow, hover, dan media query responsif.
- **07:30–08:00 — Penutup:** tunjukkan perpindahan ant halaman dan URL hosting (setelah berhasil diterbitkan).

Sesuaikan durasi dan isi narasi dengan demonstrasi sebenarnya. Jangan menyatakan website sudah online sebelum publikasi selesai.
