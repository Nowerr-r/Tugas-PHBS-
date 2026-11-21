import "./style.css";

const questions = [
  {
    topic: "Cuci tangan",
    text: "Apakah anggota keluarga mencuci tangan pakai sabun setelah menggunakan toilet?",
    nextStep: "Sediakan air dan sabun di tempat yang mudah dijangkau.",
  },
  {
    topic: "Cuci tangan",
    text: "Apakah anggota keluarga mencuci tangan pakai sabun sebelum makan dan menyiapkan makanan?",
    nextStep: "Biasakan cuci tangan pakai sabun sebelum makan dan menyiapkan makanan.",
  },
  {
    topic: "Air minum aman",
    text: "Apakah air minum keluarga berasal dari sumber aman atau diolah sesuai anjuran kesehatan?",
    nextStep: "Tanyakan cara memastikan air minum aman kepada kader atau puskesmas.",
  },
  {
    topic: "Air minum aman",
    text: "Apakah air minum disimpan dalam wadah yang bersih dan tertutup?",
    nextStep: "Gunakan wadah bersih dan tertutup untuk menyimpan air minum.",
  },
  {
    topic: "Jamban sehat",
    text: "Apakah keluarga menggunakan jamban sehat dan tidak buang air besar sembarangan?",
    nextStep: "Diskusikan pilihan jamban sehat yang sesuai dengan kondisi rumah bersama kader.",
  },
  {
    topic: "Kelola sampah",
    text: "Apakah keluarga membuang sampah sesuai aturan lingkungan, bukan ke sungai atau saluran air?",
    nextStep: "Gunakan tempat sampah yang tertutup dan ikuti aturan pengelolaan sampah setempat.",
  },
  {
    topic: "Sayur dan buah",
    text: "Apakah keluarga mengonsumsi sayur dan buah setiap hari, sesuai ketersediaan?",
    nextStep: "Tambahkan sayur atau buah yang mudah didapat dan sesuai kebiasaan keluarga.",
  },
  {
    topic: "Aktivitas fisik",
    text: "Apakah anggota keluarga rutin bergerak aktif dengan cara yang sesuai usia dan kemampuan?",
    nextStep: "Pilih kegiatan ringan yang aman dan menyenangkan, lalu lakukan secara rutin.",
  },
  {
    topic: "Rumah bebas asap rokok",
    text: "Apakah keluarga menjaga rumah tetap bebas dari asap rokok?",
    nextStep: "Sepakati area rumah bebas asap rokok dan sampaikan kesepakatan itu dengan saling menghormati.",
  },
  {
    topic: "Cegah jentik nyamuk",
    text: "Apakah keluarga rutin memeriksa wadah air dan lingkungan sekitar untuk mencegah jentik nyamuk?",
    nextStep: "Periksa tempat penampungan air dan barang yang dapat menampung air. Tanyakan langkah pencegahan yang sesuai kepada kader atau puskesmas.",
  },
  {
    topic: "Gizi seimbang",
    text: "Apakah keluarga rutin makan nasi bersama sayur, buah, dan lauk pauk yang bergizi setiap hari?",
    nextStep: "Tambahkan sayur, buah, dan protein nabati atau hewani pada setiap waktu makan keluarga.",
  },
  {
    topic: "Tidur cukup",
    text: "Apakah anggota keluarga tidur cukup dengan jadwal yang teratur setiap malam?",
    nextStep: "Tetapkan jam tidur yang konsisten dan ciptakan kamar yang nyaman, tenang, dan redup untuk tidur nyenyak.",
  },
];

const topics = [
  {
    title: "Cuci tangan pakai sabun",
    body: "Cuci tangan dengan sabun dan air mengalir setelah dari toilet, sebelum makan, serta sebelum menyiapkan makanan.",
    source: "https://www.who.int/health-topics/water-sanitation-and-hygiene-wash",
    sourceLabel: "WHO: Water, sanitation and hygiene",
  },
  {
    title: "Air minum aman",
    body: "Gunakan air minum yang aman. Jika perlu diolah, ikuti anjuran kesehatan; simpan dalam wadah bersih dan tertutup.",
    source: "https://www.who.int/news-room/fact-sheets/detail/drinking-water",
    sourceLabel: "WHO: Drinking-water",
  },
  {
    title: "Jamban sehat",
    body: "Gunakan fasilitas sanitasi yang aman dan tidak mencemari lingkungan. Jika belum tersedia, diskusikan pilihan yang memungkinkan bersama kader atau puskesmas.",
    source: "https://www.who.int/news-room/fact-sheets/detail/sanitation",
    sourceLabel: "WHO: Sanitation",
  },
  {
    title: "Kelola sampah",
    body: "Kumpulkan dan buang sampah sesuai sistem di lingkungan. Hindari membuangnya ke sungai atau saluran air agar lingkungan tetap terjaga.",
    source: "https://www.kemkes.go.id/id/layanan/gerakan-masyarakat-hidup-sehat",
    sourceLabel: "Kemenkes RI: GERMAS dan PHBS",
  },
  {
    title: "Sayur dan buah",
    body: "Usahakan menu beragam dengan sayur dan buah yang tersedia. Bahan lokal dan musiman bisa disesuaikan dengan kebiasaan keluarga.",
    source: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    sourceLabel: "WHO: Healthy diet",
  },
  {
    title: "Aktivitas fisik",
    body: "Berjalan, bermain, berkebun, atau kegiatan rumah tangga dapat menjadi cara untuk bergerak. Pilih yang aman dan sesuai usia, kemampuan, serta kondisi kesehatan.",
    source: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
    sourceLabel: "WHO: Physical activity",
  },
  {
    title: "Rumah bebas asap rokok",
    body: "Asap rokok membahayakan orang yang merokok maupun orang di sekitarnya. Sepakati rumah bebas asap rokok dan sampaikan aturan itu dengan sopan kepada anggota keluarga serta tamu.",
    source: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
    sourceLabel: "WHO: Tobacco and nicotine",
  },
  {
    title: "Cegah jentik nyamuk",
    body: "Periksa tempat penampungan air dan barang yang dapat menampung air. Tutup atau bersihkan wadah secara berkala, sesuai kondisi rumah dan anjuran setempat.",
    source: "https://www.who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue",
    sourceLabel: "WHO: Dengue prevention",
  },
  {
    title: "Gizi seimbang",
    body: "Makan makanan bergizi dengan komposisi sayur, buah, dan lauk pauk yang cukup. Bahan lokal dan musiman bisa disesuaikan dengan kemampuan keluarga.",
    source: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    sourceLabel: "WHO: Healthy diet",
  },
  {
    title: "Tidur cukup",
    body: "Tidur yang cukup dan berkualitas penting untuk pertumbuhan, kekebalan tubuh, dan konsentrasi. Ciptakan rutinitas tidur yang teratur untuk seluruh anggota keluarga.",
    source: "https://www.who.int/news-room/fact-sheets/detail/sleep",
    sourceLabel: "WHO: Sleep and health",
  },
];

const answers = new Array(questions.length).fill(null);
let screen = "home";
let questionIndex = 0;

const app = document.querySelector("#app");

function header() {
  return `
    <header class="topbar">
      <button class="brand" data-screen="home" aria-label="Kembali ke beranda">
        <img class="brand-logo" src="/phbs-keluarga-logo.png" alt="Logo PHBS Keluarga" />
        <span><strong>PHBS Keluarga</strong><small>Hidup Bersih & Sehat</small></span>
      </button>
      <span class="topbar-label">Edukasi · Cek kebiasaan · Tindak lanjut</span>
    </header>`;
}

function navigation() {
  const items = [
    ["home", "Beranda"],
    ["education", "Edukasi"],
    ["screening", "Cek PHBS"],
    ["help", "Bantuan"],
  ];
  return `
    <nav class="bottom-nav" aria-label="Navigasi utama">
      ${items
        .map(
          ([id, label]) => {
            const active = screen === id || (screen === "result" && id === "screening");
            return `
            <button class="nav-item ${active ? "active" : ""}"
              data-screen="${id}" ${active ? 'aria-current="page"' : ""}>
              ${label}
            </button>`;
          },
        )
        .join("")}
    </nav>`;
}

function homePage() {
  return `
    <main class="page">
      <section class="hero home-hero">
        <p class="eyebrow">KOTA SEHAT · PHBS KELUARGA</p>
        <h1>Kebiasaan sehat dimulai dari rumah.</h1>
        <p class="lead">Kenali kebiasaan yang sudah berjalan, lalu temukan satu langkah sederhana untuk membuat rumah lebih sehat. Tidak perlu mengubah semuanya sekaligus.</p>
        <div class="hero-actions">
          <button class="button button-primary" data-action="start">Mulai cek kebiasaan</button>
          <button class="button button-secondary" data-screen="education">Pelajari PHBS</button>
        </div>
        <p class="disclaimer">${questions.length} pertanyaan · Tanpa akun · Bukan diagnosis</p>
      </section>

      <section class="service-grid" aria-label="Layanan PHBS Keluarga">
        <button class="service-card service-primary" data-action="start">
          <span class="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 3.75h8l4.25 4.5v9a3 3 0 0 1-3 3h-8.5a3 3 0 0 1-3-3v-10.5a3 3 0 0 1 2.25-2.9Z" />
              <path d="M15 4v5h4M8.5 13l2.2 2.2 4.8-4.8" />
            </svg>
          </span>
          <span class="service-title">Cek kebiasaan PHBS</span>
          <span class="service-description">Jawab sejumlah pertanyaan singkat tentang kebiasaan sehat sehari-hari. Gunakan ringkasan untuk memilih satu langkah yang terasa realistis.</span>
          <span class="service-action">Mulai cek <span aria-hidden="true">↗</span></span>
        </button>
        <button class="service-card" data-screen="education">
          <span class="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 5.5a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H6a2 2 0 0 0-2 2Z" />
              <path d="M20 5.5a2 2 0 0 0-2-2h-4M14 6.5v14a3 3 0 0 1 3-3h3Z" />
            </svg>
          </span>
          <span class="service-title">Pelajari topik PHBS</span>
          <span class="service-description">Baca panduan tentang kebersihan, air minum, sanitasi, makanan, aktivitas, udara rumah, dan pencegahan jentik.</span>
          <span class="service-action">Baca edukasi <span aria-hidden="true">↗</span></span>
        </button>
        <button class="service-card" data-screen="help">
          <span class="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="8" r="3" />
              <path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a4 4 0 0 1 2.5 3.7V20" />
            </svg>
          </span>
          <span class="service-title">Cari tindak lanjut</span>
          <span class="service-description">Temukan sumber tepercaya dan petunjuk mencari kader atau puskesmas saat ingin bertanya lebih lanjut.</span>
          <span class="service-action">Lihat bantuan <span aria-hidden="true">↗</span></span>
        </button>
      </section>

      <section class="notice">
        <strong>Mulai dari yang bisa dilakukan</strong>
        <p>Setiap keluarga punya kondisi dan akses yang berbeda. Pilih langkah kecil yang sesuai kemampuan; perubahan yang dijalani bersama lebih mudah dipertahankan.</p>
      </section>

      <p class="trust-note">Jawaban tidak dikirim ke server dan hanya tersedia selama halaman terbuka. Hasil bukan diagnosis atau pengganti konsultasi tenaga kesehatan.</p>
    </main>`;
}

function educationPage() {
  return `
    <main class="page">
      <div class="page-heading">
        <p class="eyebrow">EDUKASI PHBS</p>
        <h1>Kenali PHBS dari kebiasaan sehari-hari.</h1>
        <p class="lead">Mulai dari hal sederhana yang bisa dilakukan bersama. Setiap topik dilengkapi rujukan agar keluarga dapat membaca lebih lanjut.</p>
      </div>
      <section class="topic-grid">
        ${topics
          .map(
            (topic, index) => `
              <article class="topic-card">
                <span class="topic-number">${String(index + 1).padStart(2, "0")}</span>
                <h2>${topic.title}</h2>
                <p>${topic.body}</p>
                <a href="${topic.source}" target="_blank" rel="noopener noreferrer">${topic.sourceLabel}<span aria-hidden="true"> ↗</span></a>
              </article>`,
          )
          .join("")}
      </section>
      <aside class="notice">
        <strong>Kebiasaan sehat bukan ajang membandingkan</strong>
        <p>Kondisi rumah, akses air, kemampuan, dan kebiasaan tiap keluarga tidak sama. Gunakan informasi ini sebagai panduan, bukan alasan untuk menyalahkan diri sendiri atau orang lain.</p>
      </aside>
    </main>`;
}

function screeningPage() {
  const question = questions[questionIndex];
  const selected = answers[questionIndex];
  const choices = [
    ["yes", "Sudah"],
    ["no", "Belum"],
    ["unknown", "Tidak tahu"],
  ];

  return `
    <main class="page narrow-page">
      <div class="page-heading">
        <p class="eyebrow">CEK KEBIASAAN KELUARGA</p>
        <h1>Jawabanmu membantu memilih langkah berikutnya.</h1>
        <p class="lead">Jawab berdasarkan kebiasaan sehari-hari, bukan yang ideal. Jika belum yakin, pilih “Tidak tahu”.</p>
      </div>
      <section class="question-card">
        <div class="progress-label">
          <span>Pertanyaan ${questionIndex + 1} dari ${questions.length}</span>
          <span>${Math.round(((questionIndex + 1) / questions.length) * 100)}%</span>
        </div>
        <div class="progress-track"><span style="width:${((questionIndex + 1) / questions.length) * 100}%"></span></div>
        <p class="question-topic">${question.topic}</p>
        <h2>${question.text}</h2>
        <p class="helper">Tidak ada nilai benar atau salah. Jawaban jujur membantu menemukan informasi dan langkah yang sesuai.</p>
        <div class="choice-list" role="group" aria-label="Pilih jawaban">
          ${choices
            .map(
              ([value, label]) => `
                <button class="choice ${selected === value ? "selected" : ""}" data-answer="${value}" aria-pressed="${selected === value}">
                  <span class="choice-dot" aria-hidden="true"></span>${label}
                </button>`,
            )
            .join("")}
        </div>
        <div class="question-actions">
          <button class="button button-secondary" data-action="previous" ${questionIndex === 0 ? "disabled" : ""}>Kembali</button>
          <button class="button button-primary" data-action="next" ${selected === null ? "disabled" : ""}>
            ${questionIndex === questions.length - 1 ? "Lihat hasil" : "Lanjut"}
          </button>
        </div>
      </section>
      <p class="draft-note">Pertanyaan ini adalah draf skrining edukatif, bukan instrumen resmi atau diagnosis.</p>
    </main>`;
}

function resultPage() {
  const done = answers.filter((answer) => answer === "yes").length;
  const unknown = answers.filter((answer) => answer === "unknown").length;
  const needsFollowUp = questions
    .map((question, index) => ({ ...question, answer: answers[index] }))
    .filter((question) => question.answer !== "yes");

  return `
    <main class="page narrow-page">
      <div class="page-heading">
        <p class="eyebrow">RINGKASAN JAWABAN</p>
        <h1>Ringkasan ini membantu memilih langkah kecil berikutnya.</h1>
      </div>
      <section class="result-card">
        <p class="score">${done}<span> / ${questions.length}</span></p>
        <h2>${done} dari ${questions.length} kebiasaan sudah dilakukan</h2>
        <p>${unknown > 0 ? `Ada ${unknown} jawaban “Tidak tahu”. Itu wajar; artinya kebiasaan tersebut belum terkonfirmasi.` : "Semua pertanyaan sudah terjawab. Terima kasih sudah meninjau kebiasaan keluarga."}</p>
        <p class="helper">${getScoreMessage(done)}</p>
      </section>
      <section class="next-steps">
        <div class="section-heading">
          <div><p class="eyebrow">LANGKAH KECIL BERIKUTNYA</p><h2>${needsFollowUp.length ? "Pilih satu yang paling mungkin dilakukan." : "Pertahankan kebiasaan baik."}</h2></div>
        </div>
        ${
          needsFollowUp.length
            ? `<ol>${needsFollowUp
                .map(
                  (question) => `<li><strong>${question.topic}</strong><span>${question.nextStep}</span><small>${question.answer === "unknown" ? "Belum terkonfirmasi" : "Belum dilakukan rutin"}</small></li>`,
                )
                .join("")}</ol>`
            : "<p>Keluarga menjawab “Sudah” untuk semua pertanyaan. Pertahankan kebiasaan yang terasa cocok dan saling dukung agar tetap berjalan.</p>"
        }
      </section>
      <div class="hero-actions">
        <button class="button button-primary" data-screen="help">Lihat tindak lanjut</button>
        <button class="button button-secondary" data-action="restart">Ulangi cek</button>
      </div>
      <p class="urgent-note">Bila ada keluhan atau kekhawatiran, hubungi tenaga kesehatan. Jangan menunggu atau mengandalkan hasil skrining ini.</p>
    </main>`;
}

function helpPage() {
  return `
    <main class="page">
      <div class="page-heading">
        <p class="eyebrow">TINDAK LANJUT</p>
        <h1>Kamu tidak harus mencari jawaban sendiri.</h1>
        <p class="lead">Kader dan tenaga kesehatan dapat membantu menyesuaikan informasi dengan kebutuhan keluarga.</p>
      </div>
      <section class="help-grid">
        <article class="help-card">
          <span class="card-kicker">DUKUNGAN WARGA</span>
          <h2>Hubungi kader</h2>
          <p>Temui kader di lingkunganmu atau tanyakan jadwal posyandu. Mereka dapat membantu menghubungkan keluarga dengan informasi dan layanan setempat.</p>
          <span class="helper">Kontak kader lokal belum dicantumkan. Tambahkan informasi yang benar dan sudah mendapat izin sebelum prototype dibagikan.</span>
        </article>
        <article class="help-card">
          <span class="card-kicker">LAYANAN KESEHATAN</span>
          <h2>Cari puskesmas</h2>
          <p>Untuk bertanya atau mencari layanan kesehatan, temukan puskesmas terdekat atau minta arahan kader.</p>
          <a class="text-link" href="https://www.google.com/maps/search/puskesmas+terdekat" target="_blank" rel="noopener noreferrer">Buka pencarian puskesmas<span aria-hidden="true"> ↗</span></a>
          <span class="helper">Tautan membuka Google Maps. Aplikasi ini tidak meminta atau menyimpan lokasi.</span>
        </article>
        <article class="help-card">
          <span class="card-kicker">SUMBER INFORMASI</span>
          <h2>Baca sumber tepercaya</h2>
          <p>Pelajari informasi kesehatan dari sumber resmi dan rujukan yang dapat diperiksa.</p>
          <a class="text-link" href="https://www.kemkes.go.id/id/layanan/gerakan-masyarakat-hidup-sehat" target="_blank" rel="noopener noreferrer">Kemenkes RI: Gerakan Masyarakat Hidup Sehat<span aria-hidden="true"> ↗</span></a>
          <a class="text-link" href="https://www.who.int/health-topics/health-promotion" target="_blank" rel="noopener noreferrer">WHO: Health promotion<span aria-hidden="true"> ↗</span></a>
        </article>
      </section>
      <section class="notice privacy-notice">
        <h2>Privasi, batasan, dan sikap saling menghormati</h2>
        <ul>
          <li>Aplikasi tidak meminta nama, alamat, atau lokasi. Jawaban hanya ada selama halaman terbuka dan tidak dikirim ke server.</li>
          <li>Hasil hanya untuk edukasi dan skrining awal, bukan diagnosis atau pengganti konsultasi tenaga kesehatan.</li>
          <li>Hormati budaya, keyakinan, kondisi, dan kemampuan setiap keluarga. Hindari menyalahkan atau membeda-bedakan.</li>
        </ul>
      </section>
      <section class="about-solution">
        <p class="eyebrow">TENTANG PROTOTYPE</p>
        <div class="info-grid" aria-label="Masalah dan pengguna">
          <article class="info-card">
            <span class="card-kicker">MASALAH</span>
            <h2>Informasi kesehatan mudah terpencar</h2>
            <p>Satu QR menghubungkan keluarga dengan edukasi PHBS, refleksi kebiasaan, dan petunjuk tindak lanjut.</p>
          </article>
          <article class="info-card">
            <span class="card-kicker">PENGGUNA</span>
            <h2>Keluarga dan kader</h2>
            <p>Keluarga dapat menjelajah secara mandiri. Kader membantu menjelaskan informasi dan pilihan tindak lanjut setempat.</p>
          </article>
        </div>
        <p class="draft-note"><strong>Catatan prototype:</strong> materi dan pertanyaan masih berupa draf. Minta dosen atau tenaga kesehatan meninjau sebelum digunakan sebagai layanan masyarakat.</p>
      </section>
    </main>`;
}

function getScoreMessage(done) {
  const total = questions.length;
  const pct = Math.round((done / total) * 100);
  if (pct >= 80) {
    return `Luar biasa! ${pct}% kebiasaan sehat sudah terpenuhi. Pertahankan kebiasaan baik ini dan serbagikan ke tetangga sekitar.`;
  }
  if (pct >= 50) {
    return `Kebiasaan sehat keluarga sudah ada yang baik (${pct}%). Ada beberapa hal yang dapat ditingkatkan secara bertahap, mulai dari satu hal yang paling mudah.`;
  }
  return `Jangan khawatir, awal yang baik dimulai dari hal kecil (${pct}%). Pilih satu kebiasaan yang paling mudah dilakukan dan lakukan bersama keluarga setiap hari.`;
}

function render() {
  const pages = {
    home: homePage,
    education: educationPage,
    screening: screeningPage,
    result: resultPage,
    help: helpPage,
  };
  app.innerHTML = `${header()}${pages[screen]()}${navigation()}`;
  bindEvents();
}

function bindEvents() {
  app.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      screen = button.dataset.screen;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  app.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      answers[questionIndex] = button.dataset.answer;
      render();
    });
  });

  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "start") {
        questionIndex = 0;
        screen = "screening";
      } else if (action === "previous" && questionIndex > 0) {
        questionIndex -= 1;
      } else if (action === "next" && answers[questionIndex] !== null) {
        if (questionIndex === questions.length - 1) {
          screen = "result";
        } else {
          questionIndex += 1;
        }
      } else if (action === "restart") {
        answers.fill(null);
        questionIndex = 0;
        screen = "screening";
      } else {
        return;
      }
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

render();

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
