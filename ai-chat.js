/* ===================================
   ARIA AI CHATBOT LOGIC (PRO v2.0)
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Inject HTML for ARIA Widget (UI unchanged for consistency)
  const aiWidgetHTML = `
    <div class="ai-backdrop" id="aiBackdrop"></div>
    <div class="ai-widget">
      <button class="ai-toggle" id="aiToggle" aria-label="Open ARIA Assistant">
        <span class="ai-icon" id="aiToggleIcon">✦ AI</span>
        <div class="ai-badge" id="aiBadge">
          <span class="badge-dot">1</span>
          <span class="badge-tooltip">Hei! Tanya aku sesuatu 👋</span>
        </div>
      </button>
      
      <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-header">
          <div class="ai-header-left">
            <div class="ai-avatar" id="aiAvatar">✦</div>
            <div class="ai-header-text">
              <span class="ai-name">ARIA</span>
              <span class="ai-subtitle" id="aiStatusText">Online · Portfolio Assistant</span>
            </div>
          </div>
          <div class="ai-header-right">
            <button class="ai-control" id="aiMinimize">−</button>
            <button class="ai-control" id="aiClose">✕</button>
          </div>
        </div>
        
        <div class="ai-messages" id="aiMessages"></div>
        
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

  const aiElements = {
    toggle: document.getElementById('aiToggle'),
    toggleIcon: document.getElementById('aiToggleIcon'),
    badge: document.getElementById('aiBadge'),
    window: document.getElementById('aiChatWindow'),
    backdrop: document.getElementById('aiBackdrop'),
    minimize: document.getElementById('aiMinimize'),
    close: document.getElementById('aiClose'),
    messages: document.getElementById('aiMessages'),
    typing: document.getElementById('aiTyping'),
    status: document.getElementById('aiStatusText'),
    avatar: document.getElementById('aiAvatar'),
    input: document.getElementById('aiInput'),
    form: document.getElementById('aiForm'),
    quickReplies: document.getElementById('aiQuickReplies')
  };

  let isFirstOpen = true;

  // --- UI HANDLERS ---
  const toggleChat = () => aiElements.window.classList.contains('open') ? closeChat() : openChat();

  const openChat = () => {
    aiElements.window.classList.add('open');
    aiElements.backdrop.classList.add('active');
    aiElements.toggle.classList.add('active');
    aiElements.toggleIcon.textContent = '✕';
    if (aiElements.badge.style.display !== 'none') aiElements.badge.style.display = 'none';

    if (isFirstOpen) {
      isFirstOpen = false;
      initialGreet();
    }
  };

  const closeChat = () => {
    aiElements.window.classList.remove('open');
    aiElements.window.classList.add('closing');
    aiElements.backdrop.classList.remove('active');
    aiElements.toggle.classList.remove('active');
    aiElements.toggleIcon.textContent = '✦ AI';
    setTimeout(() => aiElements.window.classList.remove('closing'), 300);
  };

  const initialGreet = () => {
    updateStatus("Membangun konteks...");
    showTyping();
    setTimeout(() => {
      hideTyping();
      updateStatus("Online · Assistant");
      addMessage(`Halo! Saya **${ARIA_KNOWLEDGE.bot_identity.name}**, asisten cerdas portfolio ini. Saya sudah mempelajari seluruh data project dan skill Senja. Mau tanya apa hari ini?`, 'bot');
    }, 1200);
  };

  // --- SMART QUERY LOGIC ---
  const findBestResponse = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    let bestMatch = { score: 0, content: "" };

    // 1. Check FAQs (Keyword/Phrase Scoring)
    ARIA_KNOWLEDGE.faqs.forEach(faq => {
      let score = 0;
      faq.questions.forEach(keyword => {
        if (q.includes(keyword)) score += 5;
        if (q === keyword) score += 10;
      });
      if (score > bestMatch.score) {
        bestMatch = { score, content: faq.answer };
      }
    });

    // 2. Check Projects (Deep Search)
    ARIA_KNOWLEDGE.projects.forEach(p => {
      let score = 0;
      if (q.includes(p.id)) score += 15;
      if (q.includes(p.title.toLowerCase())) score += 10;
      p.tags.forEach(t => { if (q.includes(t.toLowerCase())) score += 3; });
      if (q.includes("fitur") || q.includes("bisa apa")) {
        if (bestMatch.score < score) {
          const featureList = p.features.map(f => `• ${f}`).join('<br>');
          bestMatch = {
            score,
            content: `Project **${p.title}** adalah ${p.description}<br><br><strong>Fitur Utama:</strong><br>${featureList}<br><br><em>Tech Details: ${p.tech_details}</em>`
          };
        }
      } else if (score > bestMatch.score) {
        bestMatch = { score, content: `Project **${p.title}** adalah ${p.description} (dibuat pakai **${p.tags.join(', ')}**). Mau tahu fiturnya?` };
      }
    });

    // 3. Simple Sentiment / Greeting
    if (q.includes("halo") || q.includes("hi") || q.includes("pagi") || q.includes("siang") || q.includes("malam")) {
      if (bestMatch.score < 2) return `Halo! Ada yang bisa saya bantu terkait portfolio Senja?`;
    }

    if (bestMatch.score < 3) {
      return "Maaf, saya belum menemukan data spesifik tentang itu di internal portfolio Senja. Coba tanya tentang project tertentu (seperti KasWarga), skill (PHP/Python), atau cara kontak!";
    }

    return bestMatch.content;
  };

  // --- MESSAGE PIPELINE ---
  const processUserMsg = (text, display = null) => {
    addMessage(display || text, 'user');
    showTyping();

    // Rotation of status messages to feel "Smart"
    const statuses = ["Membaca data...", "Mencari konteks...", "Menganalisis query...", "Menyiapkan jawaban..."];
    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      updateStatus(statuses[statusIdx % statuses.length]);
      statusIdx++;
    }, 600);

    const delay = Math.max(1000, 500 + text.length * 20); // Dynamic delay based on length

    setTimeout(() => {
      clearInterval(statusInterval);
      hideTyping();
      updateStatus("Online · Assistant");
      const response = findBestResponse(display || text);
      addMessage(response, 'bot');
    }, delay);
  };

  const addMessage = (text, sender) => {
    const wrapper = document.createElement('div');
    wrapper.className = `ai-msg-wrapper ${sender}`;

    const bubble = document.createElement('div');
    bubble.className = 'ai-msg-bubble';
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-highlight">$1</strong>');

    const time = document.createElement('div');
    time.className = 'ai-msg-time';
    time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    wrapper.appendChild(bubble);
    wrapper.appendChild(time);
    aiElements.messages.appendChild(wrapper);
    scrollToBottom();
  };

  // --- UTILS ---
  const updateStatus = (text) => aiElements.status.textContent = text;
  const showTyping = () => { aiElements.typing.style.display = 'flex'; aiElements.messages.appendChild(aiElements.typing); scrollToBottom(); aiElements.avatar.classList.add('thinking'); };
  const hideTyping = () => { aiElements.typing.style.display = 'none'; aiElements.avatar.classList.remove('thinking'); };
  const scrollToBottom = () => aiElements.messages.scrollTop = aiElements.messages.scrollHeight;

  // --- LISTENERS ---
  aiElements.toggle.addEventListener('click', toggleChat);
  aiElements.minimize.addEventListener('click', closeChat);
  aiElements.close.addEventListener('click', closeChat);
  aiElements.backdrop.addEventListener('click', closeChat);
  document.addEventListener('keydown', (e) => e.key === 'Escape' && aiElements.window.classList.contains('open') && closeChat());

  aiElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = aiElements.input.value.trim();
    if (!val) return;
    aiElements.input.value = '';
    processUserMsg(val);
  });

  aiElements.quickReplies.addEventListener('click', (e) => {
    if (e.target.classList.contains('qr-btn')) {
      const type = e.target.getAttribute('data-reply');
      if (type === 'projects') processUserMsg("Apa saja proyek terbaru Senja?", "🚀 Lihat Projects");
      if (type === 'skills') processUserMsg("Sebutkan skill dan tech stack-nya", "💼 Tech Stack");
      if (type === 'kontak') processUserMsg("Bagaimana cara menghubungi Senja?", "📩 Kontak");
    }
  });

  // Focus input when window opens
  aiElements.window.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform' && aiElements.window.classList.contains('open')) aiElements.input.focus();
  });
});
