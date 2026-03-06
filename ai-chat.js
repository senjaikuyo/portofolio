/* ===================================
   ARIA AI CHATBOT LOGIC
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Inject HTML for ARIA Widget
  const aiWidgetHTML = `
    <div class="ai-widget">
      <button class="ai-toggle" id="aiToggle" aria-label="Open ARIA Assistant">
        <span class="ai-icon">✦ AI</span>
        <div class="ai-badge" id="aiBadge">
          <span class="badge-dot">1</span>
          <span class="badge-tooltip">Hei! Tanya aku sesuatu 👋</span>
        </div>
      </button>
      
      <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-header">
          <div class="ai-header-left">
            <div class="ai-avatar">✦</div>
            <div class="ai-header-text">
              <span class="ai-name">ARIA</span>
              <span class="ai-subtitle">Online · Portfolio Assistant</span>
            </div>
          </div>
          <div class="ai-header-right">
            <button class="ai-control" id="aiMinimize">−</button>
            <button class="ai-control" id="aiClose">✕</button>
          </div>
        </div>
        
        <div class="ai-messages" id="aiMessages">
          <!-- Welcome message injected via JS -->
        </div>
        
        <div class="ai-typing" id="aiTyping" style="display: none;">
          <div class="ai-avatar-small">✦</div>
          <div class="typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        
        <div class="ai-input-area">
          <div class="ai-quick-replies" id="aiQuickReplies">
            <button class="qr-btn" data-reply="projects">🚀 Lihat Projects</button>
            <button class="qr-btn" data-reply="skills">💼 Tech Stack</button>
            <button class="qr-btn" data-reply="kontak">📩 Kontak</button>
          </div>
          <form class="ai-form" id="aiForm">
            <input type="text" id="aiInput" class="ai-input" placeholder="Tanya sesuatu..." autocomplete="off" />
            <button type="submit" class="ai-submit" aria-label="Kirim Pesan">→</button>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', aiWidgetHTML);

  const aiToggle = document.getElementById('aiToggle');
  const aiBadge = document.getElementById('aiBadge');
  const aiChatWindow = document.getElementById('aiChatWindow');
  const aiMinimize = document.getElementById('aiMinimize');
  const aiClose = document.getElementById('aiClose');
  const aiMessages = document.getElementById('aiMessages');
  const aiTyping = document.getElementById('aiTyping');
  const aiQuickReplies = document.getElementById('aiQuickReplies');
  const aiForm = document.getElementById('aiForm');
  const aiInput = document.getElementById('aiInput');

  let isFirstOpen = true;

  // Toggle chat window
  function openChat() {
    aiChatWindow.classList.add('open');
    aiBadge.style.display = 'none'; // Hide notification badge permanently once opened

    if (isFirstOpen) {
      isFirstOpen = false;
      showTypingIndicator();
      setTimeout(() => {
        hideTypingIndicator();
        addMessage("Halo! Saya ARIA, asisten portfolio ini 👋 Kamu bisa tanya tentang project yang dibuat, skill yang dimiliki, cara kontak, atau hal lainnya. Ada yang bisa saya bantu?", 'bot');
      }, 1000);
    }
  }

  function closeChat() {
    aiChatWindow.classList.remove('open');
  }

  aiToggle.addEventListener('click', openChat);
  aiMinimize.addEventListener('click', closeChat);
  aiClose.addEventListener('click', closeChat);

  // Focus input when opened
  aiChatWindow.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform' && aiChatWindow.classList.contains('open')) {
      aiInput.focus();
    }
  });

  // Basic NLP Regex / Keyword Matching
  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('kaswarga')) {
      return "Sebuah sistem manajemen keuangan warga RT/RW (built with **PHP & MySQL**). Aplikasi ini punya fitur laporan otomatis dan notifikasi warga. Lengkapnya bisa klik project card **KasWarga** di halaman Home!";
    }
    if (lowerText.includes('project') || lowerText.includes('proyek') || lowerText.includes('portofolio')) {
      return "Tentu! Di portfolio ini ada 6 project utama: **KasWarga**, **E-Learning Platform**, **Data Scraper CLI**, **Inventory REST API**, **Auto Report Generator**, dan **Headless Blog CMS**. Kamu bisa lihat detail semuanya di bagian **Projects**.";
    }
    if (lowerText.includes('stack') || lowerText.includes('skill') || lowerText.includes('bisa')) {
      return "Kemahiran utamanya ada di Full Stack Web Development! 💻 Tech stack prioritasnya adalah **PHP** (khususnya framework **Laravel**), **Python** (untuk otomasi/data), **JavaScript**, **MySQL**, dan **TailwindCSS/Bootstrap**.";
    }
    if (lowerText.includes('laravel')) {
      return "Tentu saja! Ada beberapa project berbasis **Laravel**, seperti pengerjaan API **Headless Blog CMS** dan **E-Learning Platform** yang kompleks. Bisa klik projectnya di halaman utama ya.";
    }
    if (lowerText.includes('kontak') || lowerText.includes('hubungi') || lowerText.includes('email') || lowerText.includes('telepon')) {
      return "Gampang banget! Kamu bisa reach out via email di **hello@senjai.dev**, atau isi saja form kontak di bagian paling bawah halaman Home ya. 📨";
    }
    if (lowerText.includes('pengalaman') || lowerText.includes('lama') || lowerText.includes('kerj')) {
      return "Saya sudah aktif bereksplorasi di web development selama lebih dari **2 tahun** dan saat ini masih berkuliah (D4 Teknik Informatika). Punya pengalaman freelancing dan kolaborasi di project skala kampus/pemerintahan lokal.";
    }

    // Fallback response for unhandled inputs
    return "Wah itu di luar portfolioku 😄 tapi coba tanya hal lain seputar skill, pengamalan, atau kontak saja!";
  };

  // Handle Form Submit
  aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userText = aiInput.value.trim();
    if (!userText) return;

    aiInput.value = '';
    processUserMessage(userText);
  });

  // Handle Quick Replies
  aiQuickReplies.addEventListener('click', (e) => {
    if (e.target.classList.contains('qr-btn')) {
      const type = e.target.getAttribute('data-reply');
      let text = e.target.textContent;

      // Strip out the emoji for processing clean keyword intent
      if (type === 'projects') processUserMessage("Coba lihat projects nya dong", "🚀 Lihat Projects");
      if (type === 'skills') processUserMessage("Apa aja tech stack mu?", "💼 Tech Stack");
      if (type === 'kontak') processUserMessage("Cara hubunginya gimana?", "📩 Kontak");
    }
  });

  function processUserMessage(processText, displayText = null) {
    addMessage(displayText || processText, 'user');
    showTypingIndicator();

    // Simulate thinking delay
    const delayMs = Math.floor(Math.random() * 500) + 1000; // 1s - 1.5s
    setTimeout(() => {
      hideTypingIndicator();
      const response = getBotResponse(processText);
      addMessage(response, 'bot');
    }, delayMs);
  }

  function showTypingIndicator() {
    aiTyping.style.display = 'flex';
    aiMessages.appendChild(aiTyping); // Move typing to bottom
    scrollToBottom();
  }

  function hideTypingIndicator() {
    aiTyping.style.display = 'none';
  }

  function addMessage(text, sender) {
    const wrapper = document.createElement('div');
    wrapper.className = `ai-msg-wrapper ${sender}`;

    const bubble = document.createElement('div');
    bubble.className = 'ai-msg-bubble';

    // Basic Markdown bold to HTML bold transformation and blue color class
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-highlight">$1</strong>');

    const time = document.createElement('div');
    time.className = 'ai-msg-time';
    const now = new Date();
    time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    wrapper.appendChild(bubble);
    wrapper.appendChild(time);

    aiMessages.appendChild(wrapper);
    scrollToBottom();
  }

  function scrollToBottom() {
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }
});
