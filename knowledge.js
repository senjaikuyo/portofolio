/**
 * ARIA KNOWLEDGE BASE
 * Contains all structured data about the portfolio for "Chat with Data" capability.
 */
const ARIA_KNOWLEDGE = {
    personal: {
        name: "Mohamad Senja",
        nickname: "Senja",
        age: 21,
        role: "Full Stack Developer",
        location: "Batam, Kepri, Indonesia 🇮🇩",
        education: {
            institution: "Politeknik Negeri Batam",
            major: "Teknik Informatika",
            degree: "D4 / Sarjana Terapan",
            batch: 2023,
            semester: 4,
            gpa: "3.90/4.00"
        },
        bio: "Mahasiswa Teknik Informatika di Polibatam yang memiliki passion besar dalam pengembangan web. Memiliki pengalaman lebih dari 2 tahun belajar dan membangun proyek nyata.",
        mbti: "INTJ",
        hobbies: ["Coding", "Musik", "Membaca"],
        status: "Open to Work / Mahasiswa Aktif"
    },

    projects: [
        {
            id: "kaswarga",
            title: "KasWarga API",
            category: "Web App",
            tags: ["PHP", "MySQL", "Bootstrap", "Laravel"],
            description: "Sistem manajemen kas rukun tetangga berbasis Laravel. Dibuat untuk digitalisasi laporan keuangan RT/RW.",
            features: [
                "Laporan keuangan otomatis",
                "Pencatatan iuran warga",
                "Dashboard admin & warga",
                "Notifikasi iuran",
                "Ekspor laporan ke PDF/Excel"
            ],
            tech_details: "Dibangun menggunakan arsitektur MVC Laravel dengan database MySQL yang dioptimasi."
        },
        {
            id: "elearning",
            title: "E-Learning Dashboard",
            category: "Web App",
            tags: ["Laravel", "MySQL", "JavaScript"],
            description: "UI dashboard modern untuk platform pendidikan online dengan fitur manajemen kursus.",
            features: [
                "Manajemen materi video",
                "Sistem kuis interaktif",
                "Progress tracking siswa",
                "Dashboard instruktur",
                "Sistem pembayaran terintegrasi"
            ],
            tech_details: "Fokus pada UX yang intuitif dan responsivitas tinggi menggunakan Bootstrap dan Vanilla JS."
        },
        {
            id: "scraper",
            title: "Data Scraper CLI",
            category: "Tool",
            tags: ["Python", "Pandas", "BeautifulSoup"],
            description: "Script otomatisasi pengambilan data e-commerce berskala besar.",
            features: [
                "Scraping multi-page",
                "Penyimpanan ke CSV/JSON",
                "Bypass proteksi basic",
                "Analisis data dengan Pandas",
                "Scheduling otomatis"
            ],
            tech_details: "Menggunakan Python dengan library BeautifulSoup4 dan Selenium untuk handling konten dinamis."
        },
        {
            id: "inventory",
            title: "Inventory REST API",
            category: "Backend",
            tags: ["PHP", "MySQL", "Chart.js"],
            description: "Sistem monitoring stok gudang real-time dengan visualisasi data.",
            features: [
                "Manajemen keluar masuk barang",
                "Visualisasi stok dengan Chart.js",
                "Sistem peringatan stok menipis",
                "Multi-warehouse support",
                "Logs aktivitas user"
            ],
            tech_details: "Native PHP 8 dengan keamanan Prepared Statements untuk database."
        },
        {
            id: "autoreport",
            title: "Auto Report Generator",
            category: "Tool",
            tags: ["Python", "BeautifulSoup"],
            description: "Bot pembuat laporan PDF dari spreadsheet otomatis untuk kebutuhan bisnis.",
            features: [
                "Konversi Excel/CSV ke PDF profesional",
                "Template laporan kustom",
                "Kirim email otomatis setelah generate",
                "Batch processing ribuan data",
                "Proteksi PDF dengan password"
            ],
            tech_details: "Library PyPDF2 dan FPDF dikombinasikan dengan openpyxl."
        },
        {
            id: "blogcms",
            title: "Headless Blog CMS",
            category: "Web App",
            tags: ["Laravel", "MySQL", "REST API"],
            description: "Backend CMS modern yang fleksibel untuk berbagai platform frontend.",
            features: [
                "RESTful API design",
                "Markdown editor",
                "Sistem manajemen role & permission",
                "Media manager",
                "SEO optimization helpers"
            ],
            tech_details: "Arsitektur Headless memungkinkan frontend bebas menggunakan framework apapun."
        }
    ],

    skills: {
        frontend: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript (ES6+)", "Tailwind CSS"],
        backend: ["PHP (Laravel/Native)", "Python (Flask/Automation)", "RESTful API"],
        database: ["MySQL", "PostgreSQL"],
        tools: ["Git & GitHub", "XAMPP", "Postman", "VS Code", "Linux", "Docker"]
    },

    faqs: [
        {
            questions: ["siapa", "nama", "kamu", "panggilan"],
            answer: "Saya Mohamad Senja, biasa dipanggil **Senja**. Saya seorang Full Stack Developer dari Batam!"
        },
        {
            questions: ["kontak", "hubungi", "social", "sosmed", "email", "telepon"],
            answer: "Kamu bisa hubungi saya lewat email di **hello@senjai.dev** atau via GitHub di **github.com/senjaikuyo**."
        },
        {
            questions: ["kuliah", "sekolah", "dimana", "semester", "angkatan"],
            answer: "Saat ini saya kuliah di **Politeknik Negeri Batam**, jurusan Teknik Informatika (D4). Sekarang saya sedang di semester 4, angkatan 2023."
        },
        {
            questions: ["tech", "bahasa", "programming", "stack"],
            answer: "Keahlian utama saya ada di **PHP (Laravel)** dan **Python**. Saya juga lancar menggunakan JavaScript, MySQL, dan berbagai tools modern seperti Docker dan Git."
        },
        {
            questions: ["project", "terbaik", "andalan"],
            answer: "Project andalan saya saat ini adalah **KasWarga API** dan **E-Learning Platform**. Keduanya dibangun dengan Laravel dan fokus pada solusi masalah nyata."
        },
        {
            questions: ["remote", "kerja", "hire", "gaji"],
            answer: "Saya sangat terbuka untuk tawaran kerja remote, freelance, atau kolaborasi project menarik lainnya. Yuk diskusi via email!"
        }
    ],

    bot_identity: {
        name: "ARIA",
        full_name: "Artificial Responsive Intelligent Assistant",
        version: "2.0 (Pro)",
        personality: "Profesional, membantu, cerdas, tapi tetap bersahabat.",
        creator: "SenJai Kuyo"
    }
};
