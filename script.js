/* ===================================
   PORTFOLIO - MAIN JAVASCRIPT
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  // =====================
  // PRELOADER
  // =====================
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');
  const letters = document.querySelectorAll('.preloader-logo .letter');

  // Animate letters in with stagger
  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      letter.style.opacity = '1';
      letter.style.transform = 'translateY(0)';
    }, 200 + i * 200);
  });

  // Progress bar animation
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 8 + 2;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      // Start curtain reveal after short pause
      setTimeout(() => {
        preloader.classList.add('done');
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.style.overflow = '';
        }, 800);
      }, 300);
    }
    preloaderBar.style.width = progress + '%';
  }, 80);

  // Prevent scroll during preloader
  document.body.style.overflow = 'hidden';

  // =====================
  // CUSTOM CURSOR
  // =====================
  const cursorOuter = document.getElementById('cursorOuter');
  const cursorInner = document.getElementById('cursorInner');
  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Inner cursor follows precisely
    cursorInner.style.left = mouseX + 'px';
    cursorInner.style.top = mouseY + 'px';
  });

  // Smooth follow for outer cursor (lag effect)
  function animateCursor() {
    outerX += (mouseX - outerX) * 0.12;
    outerY += (mouseY - outerY) * 0.12;
    cursorOuter.style.left = outerX + 'px';
    cursorOuter.style.top = outerY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, .tech-card, .project-card, .filter-btn, input, textarea');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOuter.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorOuter.classList.remove('hovered'));
  });

  // =====================
  // NAVBAR SCROLL EFFECT
  // =====================
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Navbar background
    if (scrollTop > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    scrollProgress.style.width = scrollPercent + '%';

    // Back to top button
    if (scrollPercent > 50) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNavLink();
  });

  // Back to top
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =====================
  // ACTIVE NAV LINK
  // =====================
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      }
    });
  }

  // =====================
  // HAMBURGER MENU
  // =====================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // =====================
  // TYPEWRITER EFFECT
  // =====================
  const typewriterEl = document.getElementById('typewriterText');
  const phrases = ['Full Stack Developer', 'PHP Developer', 'Python Enthusiast', 'Web Craftsman'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typewrite() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // pause before next phrase
    }

    setTimeout(typewrite, typeSpeed);
  }
  typewrite();

  // =====================
  // (Particles JS removed for performance — using CSS instead)
  // =====================

  // =====================
  // SECTION REVEAL (Intersection Observer)
  // =====================
  const revealElements = document.querySelectorAll('.section-reveal');
  function resetForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.value = '';
      input.parentElement.classList.remove('focused');
    });
  }

  // =====================
  // PROJECT MODAL LOGIC
  // =====================
  const projectsData = {
    kaswarga: {
      title: "KasWarga",
      badge: "Live Project",
      image: "assets/project1.webp",
      desc: "KasWarga adalah sistem manajemen keuangan berbasis web yang dirancang khusus untuk organisasi warga seperti RT dan RW. Aplikasi ini memungkinkan bendahara mencatat pemasukan dan pengeluaran kas secara real-time, menghasilkan laporan bulanan otomatis dalam format PDF, serta mengirimkan notifikasi kepada anggota warga melalui dashboard. Fitur utama mencakup multi-level akses (Admin, Bendahara, Anggota), visualisasi grafik keuangan interaktif menggunakan Chart.js, serta sistem ekspor laporan ke Excel dan PDF. Dibangun di atas arsitektur MVC menggunakan PHP native dengan database MySQL yang terstruktur rapi.",
      features: [
        "Manajemen pemasukan & pengeluaran real-time",
        "Laporan bulanan otomatis (PDF & Excel)",
        "Dashboard grafik keuangan interaktif",
        "Multi-role: Admin, Bendahara, Anggota",
        "Riwayat transaksi + filter tanggal",
        "Notifikasi pembayaran iuran warga"
      ],
      stack: ["PHP", "MySQL", "Bootstrap 5", "Chart.js", "FPDF"],
      year: "2024",
      team: "3 orang",
      duration: "3 bulan",
      type: "Tugas Akhir Semester"
    },
    elearning: {
      title: "E-Learning Platform",
      badge: "Completed",
      image: "assets/project2.webp",
      desc: "Platform pembelajaran online berbasis web yang menggabungkan sistem manajemen kursus dengan mekanisme kuis interaktif dan pelacakan progres belajar siswa. Instruktur dapat membuat modul pembelajaran berjenjang, mengunggah materi video dan PDF, serta membuat soal kuis pilihan ganda dengan batas waktu. Siswa mendapatkan dashboard personal yang menampilkan progres kursus, nilai kuis, sertifikat penyelesaian, dan leaderboard. Sistem ini dibangun menggunakan Laravel sebagai backend framework dengan MySQL sebagai database utama, serta JavaScript Vanilla untuk interaksi kuis real-time.",
      features: [
        "Manajemen kursus multi-instruktur",
        "Sistem kuis real-time dengan timer countdown",
        "Progress tracking per modul per siswa",
        "Sertifikat otomatis saat kursus selesai",
        "Leaderboard dan poin reward",
        "Notifikasi email tugas & deadline"
      ],
      stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "Blade Template"],
      year: "2025",
      team: "4 orang",
      duration: "4 bulan",
      type: "Capstone Project"
    },
    scraper: {
      title: "Data Scraper CLI",
      badge: "v2.0 Active",
      image: "assets/project3.webp",
      desc: "Skrip otomatisasi berbasis Python yang dirancang untuk mengambil data produk dari berbagai platform e-commerce secara terjadwal. Data yang di-scrape mencakup nama produk, harga, rating, jumlah ulasan, dan ketersediaan stok. Semua data kemudian dibersihkan menggunakan Pandas, dianalisis tren harganya, dan diekspor secara otomatis ke file CSV dan laporan PDF harian. Script ini berjalan via CLI dengan parameter fleksibel sehingga bisa diintegrasikan ke cron job server Linux. Cocok untuk riset pasar, monitoring kompetitor, dan analisis harga produk secara berkala.",
      features: [
        "Scraping multi-platform (Tokopedia, Shopee style)",
        "Pembersihan data otomatis dengan Pandas",
        "Export ke CSV dan laporan PDF harian",
        "Jadwal otomatis via cron job",
        "Analisis tren harga mingguan",
        "Log aktivitas scraping tersimpan"
      ],
      stack: ["Python", "BeautifulSoup", "Pandas", "Requests", "FPDF2"],
      year: "2025",
      team: "Solo Project",
      duration: "1 bulan",
      type: "Personal Project"
    },
    inventory: {
      title: "Inventory REST API",
      badge: "In Production",
      image: "assets/project1.webp",
      desc: "REST API backend untuk sistem monitoring stok gudang real-time yang dapat diintegrasikan ke berbagai frontend (web, mobile, IoT). API ini mengelola data produk, kategori, supplier, dan mutasi stok masuk/keluar secara terstruktur. Setiap endpoint dilindungi autentikasi JWT token, lengkap dengan rate limiting dan logging aktivitas. Dashboard admin web disertakan sebagai antarmuka visual menggunakan Chart.js untuk memantau tren stok, produk hampir habis, dan riwayat transaksi gudang. Dokumentasi API tersedia via Swagger/Postman Collection.",
      features: [
        "RESTful endpoint lengkap (CRUD produk, supplier, stok)",
        "Autentikasi JWT + refresh token",
        "Real-time stock alert (stok kritis)",
        "Visualisasi grafik stok dengan Chart.js",
        "Dokumentasi API Postman Collection",
        "Export laporan stok bulanan"
      ],
      stack: ["PHP", "MySQL", "Chart.js", "JWT Auth", "Bootstrap"],
      year: "2025",
      team: "Solo Project",
      duration: "6 minggu",
      type: "Personal Project"
    },
    autoreport: {
      title: "Auto Report Generator",
      badge: "Stable Release",
      image: "assets/project2.webp",
      desc: "Bot Python yang secara otomatis membaca data dari spreadsheet Google Sheets atau file Excel, mengolahnya menjadi laporan PDF yang terformat rapi dan profesional, lalu mengirimkannya melalui email ke penerima yang ditentukan. Setiap laporan mencakup ringkasan eksekutif, tabel data, dan grafik visual. Format laporan dapat dikustomisasi melalui file template YAML. Sangat berguna untuk pelaporan rutin bisnis seperti laporan penjualan harian, rekap absensi, atau monitoring KPI tanpa perlu intervensi manual.",
      features: [
        "Baca data dari Excel / Google Sheets otomatis",
        "Generate PDF laporan berformat profesional",
        "Grafik visual otomatis (bar, line, pie)",
        "Kirim email otomatis ke multiple penerima",
        "Template laporan kustomisasi via YAML",
        "Jadwal pengiriman via scheduler"
      ],
      stack: ["Python", "Pandas", "ReportLab", "smtplib", "openpyxl"],
      year: "2026",
      team: "Solo Project",
      duration: "3 minggu",
      type: "Automation Tool"
    },
    blogcms: {
      title: "Headless Blog CMS",
      badge: "Beta Testing",
      image: "assets/project3.webp",
      desc: "Sistem manajemen konten (CMS) headless modern yang memisahkan backend admin dari frontend website secara penuh. Admin mengelola artikel, kategori, tag, dan media melalui panel Laravel yang intuitif, sementara konten disajikan ke publik via API ke frontend Nuxt.js yang ultra-cepat dan SEO-friendly. Website statis yang dihasilkan memuat dalam hitungan milidetik karena menggunakan Static Site Generation (SSG). Dilengkapi fitur rich text editor, manajemen gambar dengan cropping, jadwal publish otomatis, dan analitik pembaca sederhana.",
      features: [
        "Admin panel Laravel + API headless",
        "Frontend Nuxt.js Static Site Generation (SSG)",
        "Rich text editor artikel (TipTap)",
        "Jadwal publish & draft otomatis",
        "Manajemen media + image cropping",
        "SEO meta tags otomatis per artikel"
      ],
      stack: ["Laravel", "Vue.js", "Nuxt.js", "MySQL", "TailwindCSS"],
      year: "2026",
      team: "2 orang",
      duration: "2 bulan",
      type: "Open Source"
    }
  };

  const modal = document.getElementById('projectModal');

  window.openModal = function (id) {
    const data = projectsData[id];
    if (!data) return;

    // Populate Data
    document.getElementById('modalThumbnail').src = data.image;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalBadgeStatus').textContent = data.badge;
    document.getElementById('modalDesc').textContent = data.desc;

    // Populate Features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    // Populate Tech Stack
    const techStackCont = document.getElementById('modalTechStack');
    techStackCont.innerHTML = '';
    data.stack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'modal-tech-badge';
      span.textContent = tech;
      techStackCont.appendChild(span);
    });

    // Populate Info
    document.getElementById('modalYear').textContent = data.year;
    document.getElementById('modalTeam').textContent = data.team;
    document.getElementById('modalDuration').textContent = data.duration;
    document.getElementById('modalType').textContent = data.type;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent bg scroll
  };

  window.closeModal = function () {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // restore bg scroll
  };

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // =====================
  // INFO CARD STAGGER ANIMATION
  // =====================
  const staggerCards = document.querySelectorAll('.fade-up-stagger');
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  staggerCards.forEach(card => staggerObserver.observe(card));

  // =====================
  // COUNT-UP ANIMATION
  // =====================
  const statNumbers = document.querySelectorAll('.stat-target');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 30; // 30 steps

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          el.textContent = Math.floor(current);
        }, 50);

        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => countObserver.observe(el));

  // =====================
  // SKILL BAR ANIMATION
  // =====================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  // =====================
  // PROJECT FILTER
  // =====================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.display = '';
        } else {
          card.classList.add('hidden');
          // After transition, hide
          setTimeout(() => {
            if (card.classList.contains('hidden')) {
              card.style.display = 'none';
            }
          }, 400);
        }
      });
    });
  });

  // =====================
  // TIMELINE ANIMATION
  // =====================
  const timeline = document.getElementById('timeline');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeline.classList.add('animate');

        // Stagger reveal each item
        timelineItems.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('revealed');
          }, 300 + i * 200);
        });

        timelineObserver.unobserve(timeline);
      }
    });
  }, { threshold: 0.2 });

  if (timeline) timelineObserver.observe(timeline);

  // Timeline grow effect on scroll
  window.addEventListener('scroll', () => {
    if (!timeline || !timeline.classList.contains('animate')) return;
    const rect = timeline.getBoundingClientRect();
    const timelineHeight = rect.height;
    const scrolledIntoTimeline = window.innerHeight - rect.top;
    const percentScrolled = Math.min(Math.max(scrolledIntoTimeline / timelineHeight * 100, 0), 100);
    const clipBottom = 100 - percentScrolled;
    timeline.style.setProperty('--clip-bottom', clipBottom + '%');
    const beforeEl = timeline.querySelector('::before');
    // Use CSS directly
    timeline.style.cssText += '';
  });

  // Override timeline::before clip-path via scroll
  const timelineStyle = document.createElement('style');
  timelineStyle.id = 'timelineScrollStyle';
  document.head.appendChild(timelineStyle);

  function updateTimelineClip() {
    if (!timeline) return;
    const rect = timeline.getBoundingClientRect();
    const scrolledInto = window.innerHeight - rect.top;
    const percent = Math.min(Math.max(scrolledInto / rect.height * 100, 0), 100);
    const clipBottom = 100 - percent;
    timelineStyle.textContent = `
      .timeline.animate::before {
        clip-path: inset(0 0 ${clipBottom}% 0) !important;
      }
    `;
    requestAnimationFrame(updateTimelineClip);
  }
  updateTimelineClip();

  // =====================
  // MAGNETIC BUTTONS
  // =====================
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // =====================
  // CONTACT FORM HANDLER
  // =====================
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Terkirim! ✅';
    submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      contactForm.reset();
    }, 3000);
  });

  // =====================
  // PLACEHOLDER IMAGES (SVG-based fallback)
  // =====================
  function createPlaceholderSVG(text, w, h) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1b2a"/>
          <stop offset="100%" style="stop-color:#112240"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#64748B" font-family="Inter,sans-serif" font-size="16" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>`;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }

  // Set fallback images for any broken image
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      const text = img.alt || 'Image';
      const isAvatar = img.classList.contains('hero-avatar');
      if (isAvatar) {
        img.src = createPlaceholderSVG('👤', 280, 280);
      } else if (img.closest('.project-thumb')) {
        img.src = createPlaceholderSVG(text, 640, 360);
      } else {
        img.src = createPlaceholderSVG(text, 420, 420);
      }
    });
    // Trigger error check for already broken
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event('error'));
    }
  });

  // =====================
  // SMOOTH SCROLL for all anchor links
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
