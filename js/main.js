/**
 * Literasi Digital Indonesia — Main JavaScript
 * Interactivity: navigation, search, tabs, modals, checklist, quiz, etc.
 */

(function () {
  'use strict';

  // ─── DATA ───────────────────────────────────────────────

  const PILAR_DATA = {
    skills: {
      title: 'Digital Skills (Kecakapan Digital)',
      icon: '💻',
      color: 'text-neon-cyan',
      examples: [
        'Menggunakan aplikasi produktivitas (Google Workspace, Microsoft 365)',
        'Mengelola file cloud dan backup data penting',
        'Membuat konten digital: presentasi, video, infografis',
        'Menggunakan e-commerce dan layanan digital pemerintah'
      ],
      impact: 'Meningkatkan produktivitas kerja, akses layanan publik digital, dan daya saing di pasar kerja global.'
    },
    safety: {
      title: 'Digital Safety (Keamanan Digital)',
      icon: '🔐',
      color: 'text-neon-purple',
      examples: [
        'Mengaktifkan autentikasi dua faktor (2FA) di semua akun',
        'Mengenali phishing email dan SMS penipuan',
        'Menggunakan VPN di jaringan publik',
        'Memperbarui software dan antivirus secara rutin'
      ],
      impact: 'Melindungi data pribadi, mencegah pencurian identitas, dan mengurangi risiko kerugian finansial akibat penipuan siber.'
    },
    culture: {
      title: 'Digital Culture (Budaya Digital)',
      icon: '🌐',
      color: 'text-neon-emerald',
      examples: [
        'Berpartisipasi positif di media sosial dan forum online',
        'Menghormati keragaman pendapat dan budaya digital',
        'Mendukung ekonomi kreatif dan UMKM digital',
        'Menggunakan teknologi untuk kolaborasi dan inovasi sosial'
      ],
      impact: 'Membangun ekosistem digital inklusif, kreatif, dan produktif yang mendukung pertumbuhan ekonomi digital Indonesia.'
    },
    ethics: {
      title: 'Digital Ethics (Etika Digital)',
      icon: '📜',
      color: 'text-amber-400',
      examples: [
        'Tidak menyebarkan informasi tanpa verifikasi (anti-hoaks)',
        'Menghormati hak cipta dan privasi orang lain',
        'Menghindari cyberbullying dan ujaran kebencian',
        'Bertanggung jawab atas setiap konten yang dibagikan'
      ],
      impact: 'Menciptakan ruang digital yang sehat, terpercaya, dan demokratis — fondasi masyarakat digital yang bermartabat.'
    }
  };

  const CHECKLIST_ITEMS = [
    { id: 1, text: 'Saya memverifikasi berita sebelum membagikannya (cek sumber & fact-checker)', category: 'etika' },
    { id: 2, text: 'Saya menggunakan autentikasi dua faktor (2FA) di akun penting', category: 'keamanan' },
    { id: 3, text: 'Saya mengatur privasi akun media sosial secara berkala', category: 'keamanan' },
    { id: 4, text: 'Saya menggunakan password unik dan kuat untuk setiap akun', category: 'keamanan' },
    { id: 5, text: 'Saya menghindari mengklik link mencurigakan dari SMS/email', category: 'keamanan' },
    { id: 6, text: 'Saya menerapkan netiket (etika berkomunikasi online)', category: 'etika' },
    { id: 7, text: 'Saya tidak membagikan data pribadi orang lain tanpa izin', category: 'etika' },
    { id: 8, text: 'Saya melaporkan konten hoaks/penipuan ke platform terkait', category: 'etika' },
    { id: 9, text: 'Saya rutin memperbarui aplikasi dan sistem operasi', category: 'keamanan' },
    { id: 10, text: 'Saya membackup data penting secara berkala', category: 'skills' },
    { id: 11, text: 'Saya kritis terhadap iklan/investasi "cepat kaya" di media sosial', category: 'keamanan' },
    { id: 12, text: 'Saya mendukung konten positif dan kreator lokal', category: 'budaya' }
  ];

  const TUJUAN = [
    { num: 1, title: 'Meningkatkan Akses Informasi', desc: 'Memastikan semua lapisan masyarakat dapat mengakses informasi digital secara adil.' },
    { num: 2, title: 'Membangun Berpikir Kritis', desc: 'Mengembangkan kemampuan mengevaluasi dan memverifikasi informasi digital.' },
    { num: 3, title: 'Mencegah Penyebaran Hoaks', desc: 'Mengurangi dampak destruktif misinformasi dan disinformasi.' },
    { num: 4, title: 'Melindungi Keamanan Data', desc: 'Meningkatkan kesadaran dan praktik keamanan siber masyarakat.' },
    { num: 5, title: 'Mendorong Partisipasi Digital', desc: 'Mengaktifkan partisipasi warga dalam ekosistem digital nasional.' },
    { num: 6, title: 'Menutup Kesenjangan Digital', desc: 'Mengurangi gap akses teknologi di daerah 3T dan kelompok rentan.' },
    { num: 7, title: 'Mempersiapkan SDM Digital', desc: 'Menyiapkan generasi muda untuk dunia kerja berbasis digital.' },
    { num: 8, title: 'Memperkuat Demokrasi Digital', desc: 'Mendorong pemilu cerdas dan partisipasi politik yang terinformasi.' }
  ];

  const MANFAAT = [
    { num: 1, title: 'Kesiapan Kerja', desc: 'Kompetensi digital menjadi syarat 87% lowongan kerja modern.' },
    { num: 2, title: 'Pencegahan Hoaks', desc: 'Masyarakat terliterasi 3x lebih jarang menyebarkan misinformasi.' },
    { num: 3, title: 'Keamanan Data', desc: 'Mengurangi risiko kebocoran data pribadi hingga 60%.' },
    { num: 4, title: 'Partisipasi Pemilu Cerdas', desc: 'Memilih berdasarkan informasi terverifikasi, bukan emosi.' },
    { num: 5, title: 'Ekonomi Digital', desc: 'Mendorong UMKM go digital dan transaksi cashless aman.' },
    { num: 6, title: 'Pendidikan Inklusif', desc: 'Akses pembelajaran online untuk seluruh pelajar Indonesia.' },
    { num: 7, title: 'Kesehatan Mental Digital', desc: 'Mengurangi dampak negatif media sosial dan cyberbullying.' },
    { num: 8, title: 'Inovasi & Kreativitas', desc: 'Membuka peluang kreasi konten dan ekonomi kreatif.' },
    { num: 9, title: 'Layanan Publik Digital', desc: 'Memudahkan akses layanan pemerintah (e-government).' },
    { num: 10, title: 'Kepercayaan Digital', desc: 'Membangun ekosistem online yang terpercaya dan transparan.' }
  ];

  const TANTANGAN = [
    { title: 'Penyebaran Hoaks & Misinformasi', severity: 'high', solusi: 'Edukasi fact-checking, kolaborasi dengan Kominfo & Mafindo, literasi media di sekolah.' },
    { title: 'Kesenjangan Akses Digital (3T)', severity: 'high', solusi: 'Perluasan infrastruktur BTS, program USAF, edukasi offline-to-online.' },
    { title: 'Cyberbullying', severity: 'high', solusi: 'Kampanye anti-bullying, pelaporan UU ITE, konseling digital di sekolah.' },
    { title: 'Kesadaran Keamanan Siber Rendah', severity: 'med', solusi: 'Workshop 2FA & password, simulasi phishing, kampanye BSSN.' },
    { title: 'Penipuan Online & Phishing', severity: 'high', solusi: 'Edukasi modus penipuan, verifikasi nomor resmi, lapor ke ADUAN ITE.' },
    { title: 'Ketergantungan Media Sosial', severity: 'med', solusi: 'Digital detox education, parental control, screen time awareness.' },
    { title: 'Plagiarisme & Pelanggaran HAKI', severity: 'med', solusi: 'Edukasi hak cipta digital, tools deteksi plagiarisme, etika konten.' },
    { title: 'Radikalisme Online', severity: 'high', solusi: 'Counter-narrative, literasi ideologi, kolaborasi BNPT & komunitas.' },
    { title: 'Literasi Finansial Digital Lemah', severity: 'med', solusi: 'Edukasi investasi aman, verifikasi platform terdaftar OJK, anti-gorengan.' },
    { title: 'Gap Generasi Digital', severity: 'low', solusi: 'Program literasi untuk lansia, mentoring antar-generasi, konten multigenerasi.' }
  ];

  const QUIZ_QUESTIONS = [
    {
      question: 'Anda menerima WhatsApp: "Selamat! Anda menang undian Rp50 juta. Klik link ini untuk klaim." Apa tindakan terbaik?',
      options: [
        'Segera klik link sebelum kadaluarsa',
        'Abaikan dan laporkan sebagai spam/penipuan',
        'Teruskan ke teman agar mereka juga menang',
        'Balas dengan data pribadi untuk verifikasi'
      ],
      correct: 1,
      explanation: 'Ini adalah modus penipuan klasik (phishing/smishing). Undian tanpa ikut serta, link mencurigakan, dan urgensi palsu adalah red flag. Abaikan, jangan klik, dan laporkan.'
    },
    {
      question: 'Berita viral: "Minum air lemon setiap pagi menyembuhkan kanker — dokter diam!" Bagaimana mengevaluasinya?',
      options: [
        'Langsung bagikan karena bermanfaat',
        'Cek sumber asli, konsultasi sumber medis terpercaya & fact-checker',
        'Percaya karena banyak yang share',
        'Simpan dan praktikkan dulu'
      ],
      correct: 1,
      explanation: 'Klaim kesehatan sensasional tanpa bukti ilmiah adalah ciri hoaks. Selalu verifikasi melalui sumber medis resmi (Kemenkes, WHO) dan fact-checker (TurnBackHoax, CekFakta).'
    },
    {
      question: 'Email: "Akun bank Anda diblokir. Login di www.bank-secure-login.com" Apa yang harus dilakukan?',
      options: [
        'Login segera via link email',
        'Hubungi call center resmi bank & akses via app/website resmi',
        'Balas email dengan username & password',
        'Forward ke semua kontak sebagai peringatan'
      ],
      correct: 1,
      explanation: 'Domain palsu (bukan domain resmi bank) adalah tanda phishing. Jangan pernah login via link email. Selalu akses langsung melalui aplikasi atau website resmi, atau hubungi call center.'
    }
  ];

  const SEARCH_INDEX = [
    { keywords: ['hoaks', 'misinformasi', 'fake news', 'berita palsu'], section: '#definisi', label: 'Definisi & Pengertian Literasi Digital' },
    { keywords: ['unesco', 'kominfo', 'kemdikbud', 'ahli', 'definisi'], section: '#definisi', label: 'Definisi Menurut Ahli' },
    { keywords: ['pilar', 'skills', 'kecakapan', 'kominfo'], section: '#pilar', label: '4 Pilar Literasi Digital' },
    { keywords: ['keamanan', 'safety', '2fa', 'password', 'phishing'], section: '#pilar', label: 'Pilar Keamanan Digital' },
    { keywords: ['etika', 'ethics', 'netiket'], section: '#pilar', label: 'Pilar Etika Digital' },
    { keywords: ['checklist', 'assessment', 'self', 'skor'], section: '#checklist', label: 'Checklist Self-Assessment' },
    { keywords: ['privasi', 'privacy'], section: '#checklist', label: 'Checklist Privasi Digital' },
    { keywords: ['tujuan', 'manfaat', 'pemilu', 'kerja'], section: '#tujuan', label: 'Tujuan & Manfaat' },
    { keywords: ['tantangan', 'cyberbullying', '3t', 'kesenjangan'], section: '#tantangan', label: 'Tantangan Digital Indonesia' },
    { keywords: ['kuis', 'simulator', 'penipuan', 'deteksi'], section: '#simulator', label: 'Simulator Hoaks & Safety' },
    { keywords: ['kontak', 'form', 'masukan', 'feedback'], section: '#kontak', label: 'Form Kontak' }
  ];

  // ─── DOM READY ──────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initParticles();
    initHeader();
    initSmoothScroll();
    initMobileMenu();
    initThemeToggle();
    initSearch();
    initExpertTabs();
    initPilarModal();
    initChecklist();
    initCarousel();
    initTantangan();
    initRadarChart();
    initQuiz();
    initContactForm();
    initScrollReveal();
    initCounters();
  }

  // ─── PARTICLE BACKGROUND ────────────────────────────────

  function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(Math.floor(window.innerWidth / 15), 80);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cancelAnimationFrame(animId);
      canvas.style.display = 'none';
    }
  }

  // ─── HEADER ─────────────────────────────────────────────

  function initHeader() {
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ─── SMOOTH SCROLL ──────────────────────────────────────

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          closeMobileMenu();
        }
      });
    });
  }

  // ─── MOBILE MENU ────────────────────────────────────────

  function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  function closeMobileMenu() {
    document.getElementById('mobileMenu')?.classList.add('hidden');
  }

  // ─── THEME TOGGLE ───────────────────────────────────────

  function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const iconDark = document.getElementById('iconDark');
    const iconLight = document.getElementById('iconLight');
    const html = document.documentElement;

    const saved = localStorage.getItem('ldi-theme');
    if (saved === 'slate') applySlate();

    toggle?.addEventListener('click', () => {
      if (html.classList.contains('slate-mode')) {
        html.classList.remove('slate-mode');
        html.classList.add('dark');
        document.body.classList.remove('bg-slate-mode');
        document.body.classList.add('bg-space');
        iconDark.classList.remove('hidden');
        iconLight.classList.add('hidden');
        localStorage.setItem('ldi-theme', 'dark');
      } else {
        applySlate();
      }
    });

    function applySlate() {
      html.classList.add('slate-mode');
      html.classList.remove('dark');
      document.body.classList.remove('bg-space');
      document.body.classList.add('bg-slate-mode');
      iconDark.classList.add('hidden');
      iconLight.classList.remove('hidden');
      localStorage.setItem('ldi-theme', 'slate');
    }
  }

  // ─── SEARCH ─────────────────────────────────────────────

  function initSearch() {
    const input = document.getElementById('globalSearch');
    const results = document.getElementById('searchResults');
    const btn = document.getElementById('searchBtn');

    function performSearch(query) {
      if (!query.trim()) {
        results.classList.add('hidden');
        return;
      }

      const q = query.toLowerCase();
      const matches = SEARCH_INDEX.filter(item =>
        item.keywords.some(kw => kw.includes(q) || q.includes(kw)) ||
        item.label.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        results.innerHTML = '<div class="p-4 text-sm text-gray-500">Tidak ditemukan. Coba: hoaks, 2FA, netiket, privasi</div>';
      } else {
        results.innerHTML = matches.map(m =>
          `<button class="search-result w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors border-b border-white/5 last:border-0" data-section="${m.section}">
            <span class="text-neon-cyan">${m.label}</span>
          </button>`
        ).join('');
      }
      results.classList.remove('hidden');

      results.querySelectorAll('.search-result').forEach(el => {
        el.addEventListener('click', () => {
          const section = document.querySelector(el.dataset.section);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            section.classList.add('search-highlight');
            setTimeout(() => section.classList.remove('search-highlight'), 2000);
          }
          results.classList.add('hidden');
        });
      });
    }

    input?.addEventListener('input', () => performSearch(input.value));
    input?.addEventListener('keydown', e => { if (e.key === 'Enter') performSearch(input.value); });
    btn?.addEventListener('click', () => performSearch(input.value));

    document.addEventListener('click', e => {
      if (!input?.contains(e.target) && !results?.contains(e.target) && !btn?.contains(e.target)) {
        results?.classList.add('hidden');
      }
    });
  }

  // ─── EXPERT TABS ────────────────────────────────────────

  function initExpertTabs() {
    const tabs = document.querySelectorAll('#expertTabs .tab-btn');
    const panels = document.querySelectorAll('#expertContent .tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p => {
          p.classList.toggle('hidden', p.dataset.panel !== tab.dataset.tab);
          p.classList.toggle('active', p.dataset.panel === tab.dataset.tab);
        });
      });
    });
  }

  // ─── PILAR MODAL ────────────────────────────────────────

  function initPilarModal() {
    const modal = document.getElementById('pilarModal');
    const body = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeModal');

    document.querySelectorAll('.pilar-card').forEach(card => {
      card.addEventListener('click', () => {
        const data = PILAR_DATA[card.dataset.pilar];
        if (!data) return;

        body.innerHTML = `
          <div class="text-4xl mb-4">${data.icon}</div>
          <h3 class="text-xl font-bold mb-4 ${data.color}">${data.title}</h3>
          <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Contoh Implementasi</h4>
          <ul class="space-y-2 mb-6">
            ${data.examples.map(ex => `<li class="flex items-start gap-2 text-sm text-gray-300"><span class="text-neon-cyan mt-0.5">▸</span>${ex}</li>`).join('')}
          </ul>
          <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Dampak</h4>
          <p class="text-sm text-gray-300 leading-relaxed">${data.impact}</p>
        `;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    closeBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  // ─── CHECKLIST ──────────────────────────────────────────

  function initChecklist() {
    const container = document.getElementById('checklistItems');
    const scoreEl = document.getElementById('checklistScore');
    const labelEl = document.getElementById('checklistLabel');
    const progressEl = document.getElementById('checklistProgress');
    const resetBtn = document.getElementById('resetChecklist');

    container.innerHTML = CHECKLIST_ITEMS.map(item => `
      <label class="checklist-item" data-id="${item.id}">
        <input type="checkbox" value="${item.id}">
        <span class="text-sm text-gray-300">${item.text}</span>
      </label>
    `).join('');

    function updateScore() {
      const checked = container.querySelectorAll('input:checked').length;
      const total = CHECKLIST_ITEMS.length;
      const pct = Math.round((checked / total) * 100);

      scoreEl.textContent = pct + '%';
      progressEl.style.width = pct + '%';

      let label, color;
      if (pct >= 85) { label = 'Sangat Aman & Etis — Excellent!'; color = 'text-neon-emerald'; }
      else if (pct >= 65) { label = 'Cukup Baik — Tingkatkan beberapa area'; color = 'text-neon-cyan'; }
      else if (pct >= 40) { label = 'Perlu Perbaikan — Fokus keamanan & etika'; color = 'text-yellow-400'; }
      else { label = 'Rentan Risiko — Segera pelajari modul edukasi'; color = 'text-red-400'; }

      labelEl.textContent = label;
      labelEl.className = 'text-sm mt-1 ' + color;

      container.querySelectorAll('.checklist-item').forEach(el => {
        el.classList.toggle('checked', el.querySelector('input').checked);
      });
    }

    container.addEventListener('change', updateScore);

    resetBtn?.addEventListener('click', () => {
      container.querySelectorAll('input').forEach(cb => { cb.checked = false; });
      updateScore();
    });
  }

  // ─── CAROUSEL (TUJUAN & MANFAAT) ────────────────────────

  function initCarousel() {
    const tujuanGrid = document.querySelector('#carouselTujuan .grid');
    const manfaatGrid = document.querySelector('#carouselManfaat .grid');
    let currentType = 'tujuan';
    let currentPage = 0;
    const itemsPerPage = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;

    function renderCards(data, grid) {
      grid.innerHTML = data.map(item => `
        <div class="carousel-card">
          <div class="card-num">${String(item.num).padStart(2, '0')}</div>
          <h4 class="font-semibold text-sm mb-2">${item.title}</h4>
          <p class="text-xs text-gray-400 leading-relaxed">${item.desc}</p>
        </div>
      `).join('');
    }

    renderCards(TUJUAN, tujuanGrid);
    renderCards(MANFAAT, manfaatGrid);

    const tabBtns = document.querySelectorAll('[data-carousel]');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.dataset.carousel;
        currentPage = 0;
        document.getElementById('carouselTujuan').classList.toggle('hidden', currentType !== 'tujuan');
        document.getElementById('carouselManfaat').classList.toggle('hidden', currentType !== 'manfaat');
        updateDots();
      });
    });

    function getData() { return currentType === 'tujuan' ? TUJUAN : MANFAAT; }
    function getGrid() { return currentType === 'tujuan' ? tujuanGrid : manfaatGrid; }
    function totalPages() { return Math.ceil(getData().length / itemsPerPage); }

    function showPage(page) {
      const data = getData();
      const start = page * itemsPerPage;
      const slice = data.slice(start, start + itemsPerPage);
      getGrid().innerHTML = slice.map(item => `
        <div class="carousel-card">
          <div class="card-num">${String(item.num).padStart(2, '0')}</div>
          <h4 class="font-semibold text-sm mb-2">${item.title}</h4>
          <p class="text-xs text-gray-400 leading-relaxed">${item.desc}</p>
        </div>
      `).join('');
    }

    function updateDots() {
      const dots = document.getElementById('carouselDots');
      const pages = totalPages();
      dots.innerHTML = Array.from({ length: pages }, (_, i) =>
        `<button class="carousel-dot ${i === currentPage ? 'active' : ''}" data-page="${i}"></button>`
      ).join('');
      dots.querySelectorAll('.carousel-dot').forEach(d => {
        d.addEventListener('click', () => { currentPage = +d.dataset.page; showPage(currentPage); updateDots(); });
      });
    }

    document.getElementById('carouselPrev')?.addEventListener('click', () => {
      currentPage = (currentPage - 1 + totalPages()) % totalPages();
      showPage(currentPage);
      updateDots();
    });

    document.getElementById('carouselNext')?.addEventListener('click', () => {
      currentPage = (currentPage + 1) % totalPages();
      showPage(currentPage);
      updateDots();
    });

    showPage(0);
    updateDots();
  }

  // ─── TANTANGAN ACCORDION ────────────────────────────────

  function initTantangan() {
    const container = document.getElementById('tantanganAccordion');
    container.innerHTML = TANTANGAN.map((item, i) => `
      <div class="accordion-item" data-index="${i}">
        <button class="accordion-trigger">
          <div class="flex items-center gap-3">
            <span class="severity severity-${item.severity}">${item.severity === 'high' ? 'Tinggi' : item.severity === 'med' ? 'Sedang' : 'Rendah'}</span>
            <span class="font-medium text-sm">${item.title}</span>
          </div>
          <svg class="accordion-icon w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="accordion-content">
          <div class="accordion-body"><strong>Solusi:</strong> ${item.solusi}</div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const wasOpen = item.classList.contains('open');
        container.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // ─── RADAR CHART ────────────────────────────────────────

  function initRadarChart() {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const labels = TANTANGAN.map(t => t.title.split(' ').slice(0, 2).join(' '));
    const values = TANTANGAN.map(t => t.severity === 'high' ? 90 : t.severity === 'med' ? 60 : 35);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const maxR = 120;
    const n = labels.length;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let ring = 1; ring <= 4; ring++) {
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
          const r = (maxR / 4) * ring;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.stroke();
      }

      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.stroke();
      }

      ctx.beginPath();
      values.forEach((v, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const r = (v / 100) * maxR;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 242, 254, 0.15)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      values.forEach((v, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        const r = (v / 100) * maxR;
        ctx.beginPath();
        ctx.arc(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2fe';
        ctx.fill();
      });
    }

    draw();
  }

  // ─── QUIZ ───────────────────────────────────────────────

  function initQuiz() {
    let currentQ = 0;
    let score = 0;
    let answered = false;

    const container = document.getElementById('quizContent');
    const resultEl = document.getElementById('quizResult');
    const quizContainer = document.getElementById('quizContainer');
    const dots = document.querySelectorAll('.quiz-dot');

    function renderQuestion() {
      answered = false;
      const q = QUIZ_QUESTIONS[currentQ];
      container.innerHTML = `
        <h3 class="font-semibold text-lg mb-6">${q.question}</h3>
        <div id="quizOptions">
          ${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`).join('')}
        </div>
        <div id="quizExplanation"></div>
      `;

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentQ);
        d.classList.toggle('done', i < currentQ);
      });

      container.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(+btn.dataset.index));
      });
    }

    function handleAnswer(selected) {
      if (answered) return;
      answered = true;
      const q = QUIZ_QUESTIONS[currentQ];
      const options = container.querySelectorAll('.quiz-option');

      options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === q.correct) opt.classList.add('correct');
        if (i === selected && selected !== q.correct) opt.classList.add('wrong');
      });

      if (selected === q.correct) score++;

      document.getElementById('quizExplanation').innerHTML = `
        <div class="quiz-explanation"><strong>Pembahasan:</strong> ${q.explanation}</div>
      `;

      setTimeout(() => {
        currentQ++;
        if (currentQ < QUIZ_QUESTIONS.length) {
          renderQuestion();
        } else {
          showResult();
        }
      }, 2500);
    }

    function showResult() {
      quizContainer.classList.add('hidden');
      resultEl.classList.remove('hidden');
      const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
      document.getElementById('quizScoreDisplay').textContent = score + '/' + QUIZ_QUESTIONS.length;

      let feedback;
      if (pct === 100) feedback = 'Luar biasa! Anda sangat waspada terhadap hoaks dan penipuan online.';
      else if (pct >= 66) feedback = 'Bagus! Tingkat kewaspadaan digital Anda cukup baik, terus tingkatkan.';
      else feedback = 'Perlu peningkatan. Pelajari modul Keamanan Digital dan coba simulator lagi.';

      document.getElementById('quizFeedback').textContent = feedback;
    }

    document.getElementById('quizRestart')?.addEventListener('click', () => {
      currentQ = 0;
      score = 0;
      quizContainer.classList.remove('hidden');
      resultEl.classList.add('hidden');
      dots.forEach(d => { d.classList.remove('active', 'done'); });
      renderQuestion();
    });

    renderQuestion();
  }

  // ─── CONTACT FORM ───────────────────────────────────────

  function initContactForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');

    form?.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const subject = form.querySelector('#subject');
      const message = form.querySelector('#message');

      [name, email, subject, message].forEach(field => {
        const err = field.parentElement.querySelector('.error-msg');
        field.classList.remove('error');
        err.classList.add('hidden');
      });

      if (name.value.trim().length < 2) {
        showError(name, 'Nama wajib diisi (min. 2 karakter)');
        valid = false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        showError(email, 'Email tidak valid');
        valid = false;
      }

      if (!subject.value) {
        showError(subject, 'Pilih subjek pesan');
        valid = false;
      }

      if (message.value.trim().length < 10) {
        showError(message, 'Pesan wajib diisi (min. 10 karakter)');
        valid = false;
      }

      if (valid) {
        success.classList.remove('hidden');
        form.reset();
        setTimeout(() => success.classList.add('hidden'), 5000);
      }
    });

    function showError(field, msg) {
      field.classList.add('error');
      const err = field.parentElement.querySelector('.error-msg');
      err.textContent = msg;
      err.classList.remove('hidden');
    }
  }

  // ─── SCROLL REVEAL ──────────────────────────────────────

  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => observer.observe(el));
  }

  // ─── ANIMATED COUNTERS ──────────────────────────────────

  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          counters.forEach(counter => animateCounter(counter));
        }
      });
    }, { threshold: 0.5 });

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    function formatStatNumber(value, el) {
      const card = el?.closest?.('.stat-card');
      const cardWidth = card?.offsetWidth || window.innerWidth;
      const useCompact = cardWidth < 220;

      if (useCompact) {
        if (value >= 1000000) return (value / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' Jt';
        if (value >= 1000) return (value / 1000).toLocaleString('id-ID', { maximumFractionDigits: 0 }) + ' Rb';
      }
      return value.toLocaleString('id-ID');
    }

    function animateCounter(el) {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        el.textContent = formatStatNumber(current, el) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }
  }

})();
