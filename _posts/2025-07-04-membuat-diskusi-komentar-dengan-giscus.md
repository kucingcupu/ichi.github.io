---
layout: post
title: "Membuat Diskusi Komentar dengan Giscus"
date: 2025-07-04 20:00:00 +0700
categories: jekyll
---

Halo para *blogger* dan pengembang web! Pernahkah kamu merasa blog statis buatanmu di Jekyll terasa sedikit sepi tanpa adanya kolom komentar? Interaksi dengan pembaca adalah jantung dari sebuah komunitas online yang aktif. Nah, di artikel ini, kita akan membahas cara mudah dan elegan untuk menambahkan fitur diskusi dan komentar ke blog Jekyll kamu menggunakan **Giscus**, sebuah sistem komentar *open-source* yang didukung oleh GitHub Discussions.

Jika kamu mencari solusi komentar yang:

* **Gratis dan tanpa iklan:** Giscus sepenuhnya gratis dan tidak akan menampilkan iklan yang mengganggu.
* **Terintegrasi langsung dengan GitHub:** Pembaca dapat berkomentar menggunakan akun GitHub mereka.
* **Tampilannya bersih dan modern:** Giscus memiliki desain yang minimalis dan mudah disesuaikan dengan tema blog kamu.
* **Datanya tersimpan di GitHub Discussions:** Kamu memiliki kendali penuh atas komentar yang masuk di repositori GitHub kamu.
* **Ringan dan tidak memperlambat loading blog:** Giscus menggunakan *client-side rendering* yang efisien.

Maka Giscus adalah pilihan yang sangat menarik untuk blog Jekyll kamu! Mari kita telusuri bagaimana cara mengintegrasikannya.

<br>

### Mengapa Memilih Giscus?

Sebelum kita masuk ke langkah-langkah implementasi, mari kita rangkum mengapa Giscus menjadi favorit banyak pengembang:

* **Gratis dan Open Source:** Tidak ada biaya berlangganan dan kode sumbernya terbuka untuk umum.
* **Privasi:** Tidak melacak pengguna seperti beberapa sistem komentar pihak ketiga lainnya.
* **Integrasi GitHub:** Memanfaatkan platform yang sudah dikenal oleh banyak pengembang dan pembaca teknis.
* **Kontrol Data:** Semua komentar tersimpan sebagai *discussions* di repositori GitHub kamu.
* **Fleksibilitas Kategori:** Diskusi dapat diatur per artikel dan bahkan dikelompokkan berdasarkan kategori blog kamu.

<br>

### Langkah-Langkah Mengintegrasikan Giscus ke Blog Jekyll Kamu

Proses integrasi Giscus ke blog Jekyll pada dasarnya melibatkan beberapa langkah utama:

1.  **Aktifkan GitHub Discussions:** Pastikan fitur GitHub Discussions sudah aktif di repositori blog kamu (atau repositori publik terpisah yang kamu siapkan untuk diskusi).
2.  **Konfigurasi Giscus di [giscus.app](https://giscus.app/):** Kunjungi situs Giscus dan gunakan formulir konfigurasi untuk menghasilkan kode *script* yang sesuai dengan repositori dan preferensi kamu.
3.  **Tambahkan Kode Giscus ke Layout Postingan:** Tempelkan kode *script* Giscus ke dalam file layout yang digunakan untuk menampilkan artikel blog kamu (biasanya `_layouts/post.html`).
4.  **Sesuaikan Konfigurasi (Opsional):** Kamu bisa mengatur tema, bahasa, posisi *form* komentar, dan bahkan memetakan kategori blog Jekyll kamu ke kategori diskusi GitHub yang berbeda.

<br>

### Mengatasi Berbagai Skenario: Satu Kategori atau Lebih?

Salah satu kelebihan Giscus adalah fleksibilitasnya dalam mengelola diskusi:

* **Satu Kategori untuk Semua Artikel:** Cara paling sederhana adalah dengan menentukan satu kategori diskusi di GitHub (misalnya "General" atau "Blog Comments") dan mengarahkan semua komentar artikel ke sana. Giscus akan secara otomatis membuat *thread* diskusi terpisah untuk setiap artikel berdasarkan *pathname* URL.
* **Kategori Diskusi Berdasarkan Kategori Blog:** Jika blog kamu memiliki beberapa kategori (misalnya "Teknologi", "Gaya Hidup", "Resep Masakan"), kamu bisa mengonfigurasi Giscus untuk secara otomatis menempatkan diskusi artikel ke kategori diskusi GitHub yang sesuai. Ini melibatkan pembuatan *mapping* di file `_config.yml` Jekyll kamu.

<br>

### Penting: Visibilitas Repositori

Perlu diingat bahwa **untuk konfigurasi Giscus standar, repositori GitHub blog kamu harus bersifat publik**. Ini karena Giscus memerlukan akses publik untuk membaca dan menulis ke GitHub Discussions.

**Solusi untuk Repositori Privat:** Jika kamu ingin menjaga repositori blog utama kamu tetap privat, kamu bisa membuat **repositori GitHub publik terpisah yang dikhususkan untuk diskusi**. Kemudian, konfigurasi Giscus akan diarahkan ke repositori publik ini.

<br>

### Penyesuaian Tampilan dan Posisi Form Komentar

Giscus memungkinkan kamu menyesuaikan tampilannya melalui pilihan tema yang beragam. Selain itu, kamu juga bisa mengatur posisi *form* komentar apakah ingin ditampilkan di bagian atas atau bawah daftar komentar melalui atribut `data-input-position` di dalam kode *script* Giscus.

<br>

### Kesimpulan

Menambahkan fitur komentar ke blog Jekyll kamu tidak harus rumit. Dengan Giscus, kamu mendapatkan solusi yang elegan, gratis, dan terintegrasi dengan platform yang populer di kalangan pengembang. Baik kamu memilih konfigurasi sederhana dengan satu kategori atau memanfaatkan pemetaan kategori yang lebih canggih, Giscus memberikan cara yang efektif untuk membangun interaksi dengan pembaca blog kamu.

Jadi, tunggu apa lagi? Cobalah Giscus di blog Jekyll kamu dan mulailah percakapan dengan audiensmu!
