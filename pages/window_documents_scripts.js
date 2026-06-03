const SCRIPT_SLUG = 'window_documents';

const VARIANTS = [
  {
    id: 'calm_guest',
    tab: '1 Спокойный гость',
    title: 'Скрипт 1 — спокойный гость',
    note: 'Гость спокоен, но ситуация неприятная. Главная задача: извиниться, подтвердить номер, предложить помощь и компенсацию.',
    lines: [
      {
        id: 'calm_1',
        speaker: 'Receptionist',
        text: 'Good morning, sir/madam. How may I help you?',
        ru: 'Доброе утро, сэр/мадам. Чем я могу вам помочь?'
      },
      {
        id: 'calm_2',
        speaker: 'Guest',
        text: 'When I came back to my room, the window was open and all my documents were around the room.',
        ru: 'Когда я вернулся в номер, окно было открыто, и все мои документы были разбросаны по комнате.'
      },
      {
        id: 'calm_3',
        speaker: 'Receptionist',
        text: 'I am very sorry this happened. I understand that your documents are very important.',
        ru: 'Мне очень жаль, что это произошло. Я понимаю, что ваши документы очень важны.'
      },
      {
        id: 'calm_4',
        speaker: 'Receptionist',
        text: 'May I confirm your room number, please?',
        ru: 'Могу я уточнить номер вашей комнаты, пожалуйста?'
      },
      {
        id: 'calm_5',
        speaker: 'Receptionist',
        text: 'Thank you. First, may I send our housekeeping supervisor and a maid to your room to help collect the documents and put the room in order?',
        ru: 'Спасибо. Сначала могу я отправить супервайзера housekeeping и горничную в ваш номер, чтобы помочь собрать документы и привести номер в порядок?'
      },
      {
        id: 'calm_6',
        speaker: 'Receptionist',
        text: 'What time is convenient for you? We can do it now, if you wish.',
        ru: 'Какое время удобно для вас? Мы можем сделать это сейчас, если вы хотите.'
      },
      {
        id: 'calm_7',
        speaker: 'Receptionist',
        text: 'Also, we will check the window and speak with the housekeeping team.',
        ru: 'Также мы проверим окно и поговорим с командой housekeeping.'
      },
      {
        id: 'calm_8',
        speaker: 'Receptionist',
        text: 'I cannot say yet why the window was open, but we will check it.',
        ru: 'Я пока не могу сказать, почему окно было открыто, но мы это проверим.'
      },
      {
        id: 'calm_9',
        speaker: 'Receptionist',
        text: 'Are any documents missing or damaged?',
        ru: 'Какие-нибудь документы пропали или повреждены?'
      },
      {
        id: 'calm_10',
        speaker: 'Receptionist',
        text: 'As an apology for this inconvenience, we would like to send a complimentary fruit plate to your room.',
        ru: 'В качестве извинения за это неудобство мы хотели бы отправить в ваш номер бесплатную фруктовую тарелку.'
      },
      {
        id: 'calm_11',
        speaker: 'Receptionist',
        text: 'I will also call you later to make sure everything is all right.',
        ru: 'Я также позвоню вам позже, чтобы убедиться, что все в порядке.'
      }
    ]
  },
  {
    id: 'angry_guest',
    tab: '2 Злой гость',
    title: 'Скрипт 2 — гость злой',
    note: 'Гость злится. Главная задача: признать эмоцию, быстро взять ситуацию в работу и подключить Duty Manager.',
    lines: [
      {
        id: 'angry_1',
        speaker: 'Receptionist',
        text: 'Good afternoon. How can I help you?',
        ru: 'Добрый день. Чем я могу вам помочь?'
      },
      {
        id: 'angry_2',
        speaker: 'Guest',
        text: 'This is terrible! I came back and my window was open. My documents are everywhere!',
        ru: 'Это ужасно! Я вернулся, и мое окно было открыто. Мои документы повсюду!'
      },
      {
        id: 'angry_3',
        speaker: 'Receptionist',
        text: 'I am very sorry, sir/madam. I fully understand why you are upset. I would be upset too.',
        ru: 'Мне очень жаль, сэр/мадам. Я полностью понимаю, почему вы расстроены. Я бы тоже расстроился.'
      },
      {
        id: 'angry_4',
        speaker: 'Receptionist',
        text: 'Let me help you right away.',
        ru: 'Позвольте мне помочь вам прямо сейчас.'
      },
      {
        id: 'angry_5',
        speaker: 'Receptionist',
        text: 'May I ask: are any documents missing or damaged?',
        ru: 'Можно спросить: какие-нибудь документы пропали или повреждены?'
      },
      {
        id: 'angry_6',
        speaker: 'Receptionist',
        text: 'I will inform the Duty Manager immediately.',
        ru: 'Я немедленно сообщу Duty Manager.'
      },
      {
        id: 'angry_7',
        speaker: 'Receptionist',
        text: 'With your permission, we can send the housekeeping supervisor to your room now to help collect the papers carefully.',
        ru: 'С вашего разрешения мы можем сейчас отправить супервайзера housekeeping в ваш номер, чтобы аккуратно помочь собрать бумаги.'
      },
      {
        id: 'angry_8',
        speaker: 'Receptionist',
        text: 'We will also check what happened with the window and with the room service.',
        ru: 'Мы также проверим, что произошло с окном и с room service.'
      },
      {
        id: 'angry_9',
        speaker: 'Receptionist',
        text: 'As an apology, we would like to offer you a complimentary fruit plate.',
        ru: 'В качестве извинения мы хотели бы предложить вам бесплатную фруктовую тарелку.'
      },
      {
        id: 'angry_10',
        speaker: 'Receptionist',
        text: 'We can also offer tea or coffee in the lobby while we put the room in order.',
        ru: 'Мы также можем предложить чай или кофе в лобби, пока приводим номер в порядок.'
      },
      {
        id: 'angry_11',
        speaker: 'Receptionist',
        text: 'I am sorry again. We will take care of this immediately.',
        ru: 'Еще раз извините. Мы немедленно этим займемся.'
      }
    ]
  },
  {
    id: 'document_concern',
    tab: '3 Боится за документы',
    title: 'Скрипт 3 — если гость боится, что кто-то трогал документы',
    note: 'Гость переживает за приватность документов. Главная задача: не трогать без разрешения, предложить пройти вместе и оформить incident report.',
    lines: [
      {
        id: 'concern_1',
        speaker: 'Receptionist',
        text: 'I understand your concern. Your documents are private and important.',
        ru: 'Я понимаю ваше беспокойство. Ваши документы личные и важные.'
      },
      {
        id: 'concern_2',
        speaker: 'Receptionist',
        text: 'We will not touch anything without your permission.',
        ru: 'Мы не будем ничего трогать без вашего разрешения.'
      },
      {
        id: 'concern_3',
        speaker: 'Receptionist',
        text: 'Would you like to go to the room together with the Duty Manager and the housekeeping supervisor?',
        ru: 'Хотите пройти в номер вместе с Duty Manager и супервайзером housekeeping?'
      },
      {
        id: 'concern_4',
        speaker: 'Receptionist',
        text: 'We can help you check the room, collect the documents, and make an incident report if anything is missing or damaged.',
        ru: 'Мы можем помочь вам проверить номер, собрать документы и составить incident report, если что-то пропало или повреждено.'
      },
      {
        id: 'concern_5',
        speaker: 'Receptionist',
        text: 'We will also check who entered the room and what happened with the window.',
        ru: 'Мы также проверим, кто входил в номер и что произошло с окном.'
      }
    ]
  }
];

const audio = new Audio();
const WORDS = normalizeWords([...(window.SCRIPT_WORD_EXTRAS || []), ...(window.SCRIPT_WORDS || [])]);
const WORD_INDEX = new Map(WORDS.map(item => [item.word.toLowerCase(), item]));
let activeVariant = VARIANTS[0].id;
let toastTimer = null;

const $ = (id) => document.getElementById(id);

function normalizeWords(words) {
  const seen = new Set();
  return words
    .map(item => ({
      word: String(item.word || item.Word || '').trim(),
      translation: String(item.translation || item.Translation || '').trim(),
      emoji: String(item.emoji || item.Emoji || '').trim()
    }))
    .filter(item => {
      if (!item.word) return false;
      const key = item.word.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function cleanToken(value) {
  return String(value)
    .toLowerCase()
    .replace('room service', 'room-service')
    .replace('duty manager', 'duty-manager')
    .replace(/[^a-z0-9-]+/g, '');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function decorateText(text) {
  return escapeHtml(text).replace(/[A-Za-z]+(?:-[A-Za-z]+)?|\d+/g, (raw) => {
    const token = cleanToken(raw);
    const info = WORD_INDEX.get(token);
    if (!info) return raw;
    return `<span class="word" data-word="${escapeHtml(token)}">${raw}</span>`;
  });
}

function phraseAudioPath(id) {
  return `../audio/phrases/${SCRIPT_SLUG}_${id}.mp3`;
}

function wordAudioPath(word) {
  return `../audio/words/${cleanToken(word)}.mp3`;
}

function showToast(text) {
  const toast = $('toast');
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}

function speakFallback(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Audio not available');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.84;
  window.speechSynthesis.speak(utterance);
}

function playAudio(src, fallbackText) {
  window.speechSynthesis?.cancel();
  audio.pause();
  audio.src = src;
  audio.currentTime = 0;
  audio.playbackRate = 1;
  audio.play().catch(() => speakFallback(fallbackText));
}

function playLine(line) {
  playAudio(phraseAudioPath(line.id), line.text);
}

function showWord(token) {
  const info = WORD_INDEX.get(token);
  if (!info) return;
  document.querySelectorAll('.word.active').forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`.word[data-word="${CSS.escape(token)}"]`).forEach(el => el.classList.add('active'));
  $('wordPeek').innerHTML = `<b>${escapeHtml(info.emoji || '🔊')} ${escapeHtml(info.word)}</b><span>${escapeHtml(info.translation || 'нет перевода')}</span>`;
  playAudio(wordAudioPath(info.word), info.word);
}

function renderTabs() {
  $('tabs').innerHTML = VARIANTS.map(variant => (
    `<button class="tab ${variant.id === activeVariant ? 'active' : ''}" type="button" data-id="${variant.id}">${escapeHtml(variant.tab)}</button>`
  )).join('');
  $('tabs').querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeVariant = tab.dataset.id;
      render();
    });
  });
}

function renderScript() {
  const variant = VARIANTS.find(item => item.id === activeVariant) || VARIANTS[0];
  $('script').innerHTML = `
    <section class="intro">
      <h2>${escapeHtml(variant.title)}</h2>
      <p>${escapeHtml(variant.note)}</p>
    </section>
    ${variant.lines.map(line => `
      <article class="line ${line.speaker === 'Guest' ? 'guest' : ''}">
        <button class="play" type="button" data-line="${escapeHtml(line.id)}" title="Слушать">▶</button>
        <div>
          <p class="speaker">${escapeHtml(line.speaker)}</p>
          <div class="english">${decorateText(line.text)}</div>
          <div class="translation">${escapeHtml(line.ru)}</div>
        </div>
      </article>
    `).join('')}
  `;

  $('script').querySelectorAll('.play').forEach(btn => {
    const line = variant.lines.find(item => item.id === btn.dataset.line);
    btn.addEventListener('click', () => playLine(line));
  });
  $('script').querySelectorAll('.word').forEach(word => {
    word.addEventListener('click', event => {
      event.stopPropagation();
      showWord(word.dataset.word);
    });
  });
}

function setTheme(choice) {
  const picked = choice || localStorage.getItem('script_theme') || 'auto';
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const actual = picked === 'auto' ? (dark ? 'dark' : 'light') : picked;
  document.documentElement.setAttribute('data-theme', actual);
  $('themeBtn').textContent = actual === 'dark' ? '☾' : '☼';
}

function cycleTheme() {
  const current = localStorage.getItem('script_theme') || 'auto';
  const next = current === 'auto' ? 'light' : current === 'light' ? 'dark' : 'auto';
  localStorage.setItem('script_theme', next);
  setTheme(next);
}

function render() {
  renderTabs();
  renderScript();
}

$('themeBtn').addEventListener('click', cycleTheme);
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
if (systemDark.addEventListener) systemDark.addEventListener('change', () => setTheme());
setTheme();
render();
