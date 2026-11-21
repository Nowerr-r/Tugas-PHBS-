# KS QR Health Station

Prototype PWA untuk menghubungkan warga ke edukasi PHBS, skrining awal, dan informasi tindak lanjut melalui satu QR Code eksternal.

## Jalankan lokal

1. Install Node.js 20 atau lebih baru.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka alamat `Network` yang Vite tampilkan di terminal pada browser laptop atau HP.

Untuk demo lokal, buat QR sementara dari alamat `Network` memakai QR generator pilihan kelompok. Scan dengan HP yang tersambung ke Wi-Fi yang sama. Jangan gunakan alamat `localhost`; alamat itu hanya berlaku di perangkat yang menjalankan server.

QR bukan bagian dari halaman app. QR eksternal membuka beranda Health Station; edukasi, skrining, dan tindak lanjut tersedia di dalam app.

## Build

Jalankan `npm run build`. Untuk akses publik, deploy folder `dist` ke hosting HTTPS. URL publik saat ini adalah [https://phbs-keluarga.netlify.app/](https://phbs-keluarga.netlify.app/). File QR siap tempel ada di `qr-health-station.png`; buat ulang jika alamat situs berubah. QR hanya memuat tautan aplikasi, bukan jawaban atau data pribadi. Jangan cetak QR yang memakai `localhost` atau alamat Wi-Fi lokal.

## Batas prototype

- Tidak ada akun, penyimpanan jawaban, atau pengumpulan lokasi.
- Jawaban hanya tersimpan selama halaman terbuka.
- Pertanyaan dan materi adalah draf edukasi, bukan instrumen resmi atau tervalidasi. Minta dosen atau tenaga kesehatan meninjau sebelum uji coba dengan masyarakat.
- Tautan kontak kader belum diisi karena nomor resmi harus dikonfirmasi oleh kelompok.
- Skrining ini bukan diagnosis dan tidak menggantikan konsultasi tenaga kesehatan.
