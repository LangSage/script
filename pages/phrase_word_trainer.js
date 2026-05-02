const PHRASES = [
  { id: 'greeting_help', ru: 'Чем могу помочь?', en: 'How can I help you?', parts: ['How', 'can', 'I', 'help', 'you'] },
  { id: 'guest_name', ru: 'Как вас зовут?', en: 'What is your name, please?', parts: ['What', 'is', 'your', 'name', 'please'] },
  { id: 'reservation', ru: 'У вас есть бронь?', en: 'Do you have a reservation?', parts: ['Do', 'you', 'have', 'a', 'reservation'] },
  { id: 'what_dates', ru: 'Какие даты?', en: 'What dates, please?', parts: ['What', 'dates', 'please'] },
  { id: 'how_many_people', ru: 'Сколько человек?', en: 'How many people?', parts: ['How', 'many', 'people'] },
  { id: 'with_child', ru: 'Вы с ребенком?', en: 'Are you with a child?', parts: ['Are', 'you', 'with', 'a', 'child'] },
  { id: 'child_age', ru: 'Сколько лет ребенку?', en: 'How old is your child?', parts: ['How', 'old', 'is', 'your', 'child'] },
  { id: 'birth_certificate', ru: 'Свидетельство о рождении, пожалуйста.', en: 'Birth certificate, please.', parts: ['Birth', 'certificate', 'please'] },
  { id: 'room_category', ru: 'Какая категория номера?', en: 'What room category?', parts: ['What', 'room', 'category'] },
  { id: 'room_wishes', ru: 'Есть пожелания?', en: 'Any wishes?', parts: ['Any', 'wishes'] },
  { id: 'food_package', ru: 'Какой пакет питания?', en: 'Which food package?', parts: ['Which', 'food', 'package'] },
  { id: 'daily_food', ru: 'Питание ежедневно?', en: 'Daily food package?', parts: ['Daily', 'food', 'package'] },
  { id: 'hb_info', ru: 'HB - завтрак и обед или ужин.', en: 'HB is breakfast and lunch or dinner.', parts: ['HB', 'is', 'breakfast', 'and', 'lunch', 'or', 'dinner'] },
  { id: 'fb_info', ru: 'FB - завтрак, обед и ужин.', en: 'FB is breakfast, lunch, and dinner.', parts: ['FB', 'is', 'breakfast', 'lunch', 'and', 'dinner'] },
  { id: 'confirm_lux', ru: 'Повторить: Lux с 20 по 28 марта на двух человек.', en: 'Lux category from March 20 to March 28 for two people.', parts: ['Lux', 'category', 'from', 'March', '20', 'to', 'March', '28', 'for', 'two', 'people'] },
  { id: 'is_correct', ru: 'Все верно?', en: 'Is that correct?', parts: ['Is', 'that', 'correct'] },
  { id: 'full_price', ru: 'Полная стоимость ____ рублей.', en: 'The full price is ____ rubles.', parts: ['The', 'full', 'price', 'is', '____', 'rubles'] },
  { id: 'is_ok', ru: 'Подходит?', en: 'Is it OK?', parts: ['Is', 'it', 'OK'] },
  { id: 'passport', ru: 'Паспорт, пожалуйста.', en: 'Your passport, please.', parts: ['Your', 'passport', 'please'] },
  { id: 'make_copy', ru: 'Можно сделать копию?', en: 'May I make a copy?', parts: ['May', 'I', 'make', 'a', 'copy'] },
  { id: 'fill_form', ru: 'Заполните форму.', en: 'Please fill in the form.', parts: ['Please', 'fill', 'in', 'the', 'form'] },
  { id: 'sign_here', ru: 'Подпишите здесь.', en: 'Please sign here.', parts: ['Please', 'sign', 'here'] },
  { id: 'documents_back', ru: 'Вот ваши документы.', en: 'Here are your documents.', parts: ['Here', 'are', 'your', 'documents'] },
  { id: 'room_ready', ru: 'Номер готов.', en: 'Your room is ready.', parts: ['Your', 'room', 'is', 'ready'] },
  { id: 'key_card', ru: 'Вот ваш ключ и карта гостя.', en: 'Here are your key and guest card.', parts: ['Here', 'are', 'your', 'key', 'and', 'guest', 'card'] },
  { id: 'room_left', ru: 'Ваш номер слева.', en: 'Your room is on the left.', parts: ['Your', 'room', 'is', 'on', 'the', 'left'] },
  { id: 'room_right', ru: 'Ваш номер справа.', en: 'Your room is on the right.', parts: ['Your', 'room', 'is', 'on', 'the', 'right'] },
  { id: 'second_floor', ru: 'Ваш номер на втором этаже.', en: 'Your room is on the second floor.', parts: ['Your', 'room', 'is', 'on', 'the', 'second', 'floor'] },
  { id: 'breakfast_time', ru: 'Завтрак с 7 до 10.', en: 'Breakfast is served from 7 to 10.', parts: ['Breakfast', 'is', 'served', 'from', '7', 'to', '10'] },
  { id: 'restaurant_ground', ru: 'Ресторан на первом этаже.', en: 'The restaurant is on the ground floor.', parts: ['The', 'restaurant', 'is', 'on', 'the', 'ground', 'floor'] },
  { id: 'fitness_spa_cafe', ru: 'У нас есть фитнес, спа и кафе.', en: 'We have fitness, spa, and cafe.', parts: ['We', 'have', 'fitness', 'spa', 'and', 'cafe'] },
  { id: 'website_info', ru: 'Информация на сайте.', en: 'Information is on the website.', parts: ['Information', 'is', 'on', 'the', 'website'] },
  { id: 'book_service', ru: 'Забронировать услугу для вас?', en: 'Would you like me to book it for you?', parts: ['Would', 'you', 'like', 'me', 'to', 'book', 'it', 'for', 'you'] },
  { id: 'reception_open', ru: 'Ресепшн работает 24/7.', en: 'The reception is open 24/7.', parts: ['The', 'reception', 'is', 'open', '24/7'] },
  { id: 'luggage_help', ru: 'Нужна помощь с багажом?', en: 'Do you need help with your luggage?', parts: ['Do', 'you', 'need', 'help', 'with', 'your', 'luggage'] },
  { id: 'anything_else', ru: 'Что-то еще?', en: 'Anything else?', parts: ['Anything', 'else'] },
  { id: 'nice_day', ru: 'Хорошего дня!', en: 'Have a nice day!', parts: ['Have', 'a', 'nice', 'day'] },
  { id: 'room_number_checkout', ru: 'Скажите номер комнаты.', en: 'Tell me your room number, please.', parts: ['Tell', 'me', 'your', 'room', 'number', 'please'] },
  { id: 'see_key', ru: 'Можно ключ от номера?', en: 'Can I see the key of your room?', parts: ['Can', 'I', 'see', 'the', 'key', 'of', 'your', 'room'] },
  { id: 'company_stay', ru: 'Вы проживали от компании.', en: 'You stayed with the company.', parts: ['You', 'stayed', 'with', 'the', 'company'] },
  { id: 'all_right', ru: 'Все правильно?', en: 'All right?', parts: ['All', 'right'] },
  { id: 'need_bill', ru: 'Нужен счет?', en: 'Do you need a bill?', parts: ['Do', 'you', 'need', 'a', 'bill'] },
  { id: 'pay_cash', ru: 'Будете платить наличными?', en: 'Will you pay by cash?', parts: ['Will', 'you', 'pay', 'by', 'cash'] },
  { id: 'pay_card', ru: 'Будете платить картой?', en: 'Will you pay by card?', parts: ['Will', 'you', 'pay', 'by', 'card'] },
  { id: 'taxi_need', ru: 'Вам нужно такси?', en: 'Do you need a taxi?', parts: ['Do', 'you', 'need', 'a', 'taxi'] },
  { id: 'taxi_address', ru: 'Какой адрес?', en: 'What address?', parts: ['What', 'address'] },
  { id: 'taxi_time', ru: 'На какое время?', en: 'What time?', parts: ['What', 'time'] },
  { id: 'taxi_people', ru: 'Сколько человек поедет?', en: 'How many people will go?', parts: ['How', 'many', 'people', 'will', 'go'] },
  { id: 'visit_city', ru: 'Планируете снова приехать в город?', en: 'Are you planning to visit our city again?', parts: ['Are', 'you', 'planning', 'to', 'visit', 'our', 'city', 'again'] },
  { id: 'future_booking', ru: 'Хотите забронировать номер на будущее?', en: 'Do you want to book a room for the future?', parts: ['Do', 'you', 'want', 'to', 'book', 'a', 'room', 'for', 'the', 'future'] },
  { id: 'happy_again', ru: 'Будем рады видеть вас снова.', en: 'We will be happy to see you again.', parts: ['We', 'will', 'be', 'happy', 'to', 'see', 'you', 'again'] },
  { id: 'tea_coffee', ru: 'Хотите чай или кофе?', en: 'Would you like tea or coffee?', parts: ['Would', 'you', 'like', 'tea', 'or', 'coffee'] },
  { id: 'wait_here', ru: 'Пожалуйста, подождите здесь.', en: 'Please wait here.', parts: ['Please', 'wait', 'here'] },
  { id: 'one_moment', ru: 'Один момент, пожалуйста.', en: 'One moment, please.', parts: ['One', 'moment', 'please'] },
  { id: 'i_understand', ru: 'Я понимаю.', en: 'I understand.', parts: ['I', 'understand'] },
  { id: 'let_me_check', ru: 'Я проверю.', en: 'Let me check.', parts: ['Let', 'me', 'check'] },
  { id: 'repeat_please', ru: 'Повторите, пожалуйста.', en: 'Could you repeat, please?', parts: ['Could', 'you', 'repeat', 'please'] },
  { id: 'write_here', ru: 'Напишите здесь.', en: 'Please write here.', parts: ['Please', 'write', 'here'] },
  { id: 'phone_number', ru: 'Ваш номер телефона?', en: 'Your phone number, please?', parts: ['Your', 'phone', 'number', 'please'] },
  { id: 'email_address', ru: 'Ваш email?', en: 'Your email address, please?', parts: ['Your', 'email', 'address', 'please'] }
];

const SITUATIONS = [
  { ru: 'Гость подошел к стойке, нужно начать разговор.', en: 'How can I help you?' },
  { ru: 'Нужно узнать имя гостя.', en: 'What is your name, please?' },
  { ru: 'Нужно проверить, есть ли бронь.', en: 'Do you have a reservation?' },
  { ru: 'Гость хочет номер, нужно узнать даты.', en: 'What dates, please?' },
  { ru: 'Нужно узнать, сколько гостей будет жить.', en: 'How many people?' },
  { ru: 'Гость приехал с ребенком, нужно узнать возраст.', en: 'How old is your child?' },
  { ru: 'Для ребенка нужен документ.', en: 'Birth certificate, please.' },
  { ru: 'Нужно выбрать категорию номера.', en: 'What room category?' },
  { ru: 'Нужно узнать пожелания по номеру.', en: 'Any wishes?' },
  { ru: 'Нужно узнать пакет питания.', en: 'Which food package?' },
  { ru: 'Студент объясняет HB.', en: 'HB is breakfast and lunch or dinner.' },
  { ru: 'Студент объясняет FB.', en: 'FB is breakfast, lunch, and dinner.' },
  { ru: 'Нужно повторить данные и спросить, верно ли.', en: 'Is that correct?' },
  { ru: 'Нужно назвать полную стоимость.', en: 'The full price is ____ rubles.' },
  { ru: 'Нужно попросить паспорт.', en: 'Your passport, please.' },
  { ru: 'Нужно спросить разрешение на копию.', en: 'May I make a copy?' },
  { ru: 'Нужно попросить заполнить форму.', en: 'Please fill in the form.' },
  { ru: 'Нужно попросить подпись.', en: 'Please sign here.' },
  { ru: 'Нужно вернуть документы.', en: 'Here are your documents.' },
  { ru: 'Номер уже готов.', en: 'Your room is ready.' },
  { ru: 'Нужно выдать ключ и карту гостя.', en: 'Here are your key and guest card.' },
  { ru: 'Нужно сказать, что номер слева.', en: 'Your room is on the left.' },
  { ru: 'Нужно сказать, что номер справа.', en: 'Your room is on the right.' },
  { ru: 'Нужно сказать про второй этаж.', en: 'Your room is on the second floor.' },
  { ru: 'Гость спрашивает про завтрак.', en: 'Breakfast is served from 7 to 10.' },
  { ru: 'Нужно сказать, где ресторан.', en: 'The restaurant is on the ground floor.' },
  { ru: 'Нужно назвать услуги отеля.', en: 'We have fitness, spa, and cafe.' },
  { ru: 'Гость спрашивает, где информация.', en: 'Information is on the website.' },
  { ru: 'Нужно предложить забронировать услугу.', en: 'Would you like me to book it for you?' },
  { ru: 'Нужно сказать, что ресепшн круглосуточный.', en: 'The reception is open 24/7.' },
  { ru: 'Нужно предложить помощь с багажом.', en: 'Do you need help with your luggage?' },
  { ru: 'Разговор почти закончен, нужно спросить, нужно ли еще что-то.', en: 'Anything else?' },
  { ru: 'Нужно попрощаться.', en: 'Have a nice day!' },
  { ru: 'Check-out: нужно узнать номер комнаты.', en: 'Tell me your room number, please.' },
  { ru: 'Check-out: нужно попросить ключ.', en: 'Can I see the key of your room?' },
  { ru: 'Гость от компании, нужно проговорить это.', en: 'You stayed with the company.' },
  { ru: 'Нужно проверить, все ли правильно.', en: 'All right?' },
  { ru: 'Нужно спросить, нужен ли счет.', en: 'Do you need a bill?' },
  { ru: 'Нужно спросить про оплату наличными.', en: 'Will you pay by cash?' },
  { ru: 'Нужно спросить про оплату картой.', en: 'Will you pay by card?' },
  { ru: 'Гость просит вызвать машину.', en: 'Do you need a taxi?' },
  { ru: 'Для такси нужно узнать адрес.', en: 'What address?' },
  { ru: 'Для такси нужно узнать время.', en: 'What time?' },
  { ru: 'Для такси нужно узнать количество людей.', en: 'How many people will go?' },
  { ru: 'Нужно спросить, планирует ли гость приехать снова.', en: 'Are you planning to visit our city again?' },
  { ru: 'Нужно предложить будущую бронь.', en: 'Do you want to book a room for the future?' },
  { ru: 'Нужно сказать, что будете рады видеть гостя снова.', en: 'We will be happy to see you again.' },
  { ru: 'Гость ждет, можно предложить напиток.', en: 'Would you like tea or coffee?' },
  { ru: 'Нужно попросить подождать здесь.', en: 'Please wait here.' },
  { ru: 'Нужно выиграть немного времени.', en: 'One moment, please.' },
  { ru: 'Гость объяснил проблему, нужно показать понимание.', en: 'I understand.' },
  { ru: 'Нужно сказать, что сейчас проверите.', en: 'Let me check.' },
  { ru: 'Вы не расслышали гостя.', en: 'Could you repeat, please?' },
  { ru: 'Нужно попросить написать данные.', en: 'Please write here.' },
  { ru: 'Нужно спросить номер телефона.', en: 'Your phone number, please?' },
  { ru: 'Нужно спросить email.', en: 'Your email address, please?' }
];

const LEVELS = [
  { id: 5, label: '5 Собери', name: 'Собери фразу', task: 'Собери английскую фразу из слов.' },
  { id: 6, label: '6 Пропуск', name: 'Пропущенное слово', task: 'Выбери слово, которое закрывает пропуск.' },
  { id: 7, label: '7 Ситуация', name: 'Ситуация -> реплика', task: 'Выбери правильную фразу для ситуации.' }
];

const ROUND_SIZE = 12;
const FALLBACK_WORDS = [
  { word: 'reservation', translation: 'бронь', emoji: '🛎️' },
  { word: 'passport', translation: 'паспорт', emoji: '🪪' },
  { word: 'luggage', translation: 'багаж', emoji: '🧳' },
  { word: 'breakfast', translation: 'завтрак', emoji: '🍳' },
  { word: 'reception', translation: 'ресепшн', emoji: '🛎️' }
];

const audio = new Audio();
let toastTimer = null;
let currentQuestion = null;
let selectedBuild = [];
let locked = false;
let activeWord = null;
const state = {
  level: 5,
  answered: 0,
  correct: 0,
  streak: 0,
  best: JSON.parse(localStorage.getItem('phrase_trainer_best_v2') || '{}')
};

const WORD_LIST = normalizeWords([...(window.SCRIPT_WORD_EXTRAS || []), ...(window.SCRIPT_WORDS || FALLBACK_WORDS)]);
const WORD_INDEX = new Map(WORD_LIST.map(item => [item.word.toLowerCase(), item]));
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
  return String(value).toLowerCase().replace(/[^a-z0-9-]+/g, '');
}

function normalizeAnswer(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9а-яё]+/gi, '');
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function choicesFrom(pool, answer, count = 4) {
  const cleanAnswer = normalizeAnswer(answer);
  const wrong = shuffle(pool.filter(item => normalizeAnswer(item) !== cleanAnswer)).slice(0, count - 1);
  return shuffle([answer, ...wrong]);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function decorateText(text) {
  return escapeHtml(text).replace(/[A-Za-z]+(?:-[A-Za-z]+)?|24\/7|____|\d+/g, (raw) => {
    const token = cleanToken(raw === '24/7' ? 'twenty-four-seven' : raw);
    const info = WORD_INDEX.get(token);
    if (!info) return raw;
    return `<span class="click-word" data-word="${escapeHtml(token)}">${raw}</span>`;
  });
}

function bindWordClicks(root = document) {
  root.querySelectorAll('.click-word').forEach(el => {
    el.addEventListener('click', event => {
      event.stopPropagation();
      showWord(el.dataset.word);
    });
  });
}

function showWord(word) {
  const token = cleanToken(word);
  const info = WORD_INDEX.get(token);
  if (!info) return;
  activeWord = token;
  $('wordPeek').innerHTML = `<b>${escapeHtml(info.emoji || '🔊')} ${escapeHtml(info.word)}</b><span>${escapeHtml(info.translation)}</span>`;
  playWord(token);
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
    showToast('Audio is not available');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.82;
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

function playWord(word) {
  const token = cleanToken(word);
  if (!token) return;
  playAudio(`../audio/words/${token}.mp3`, WORD_INDEX.get(token)?.word || token);
}

function phraseAudioPath(id) {
  return `../audio/phrases/phrase_word_trainer_${id}.mp3`;
}

function playPhrase(phrase) {
  if (!phrase) return;
  playAudio(phraseAudioPath(phrase.id), phrase.en);
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

function renderLevelTabs() {
  $('levelTabs').innerHTML = LEVELS.map(level => (
    `<button type="button" data-level="${level.id}" class="${level.id === state.level ? 'active' : ''}">${level.label}</button>`
  )).join('');
  $('levelTabs').querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => beginLevel(Number(btn.dataset.level)));
  });
}

function renderStats() {
  $('scoreNow').textContent = `${state.correct}/${state.answered}`;
  $('streakNow').textContent = state.streak;
  $('bestNow').textContent = state.best[state.level] || 0;
}

function updateBest() {
  const best = state.best[state.level] || 0;
  if (state.streak > best) {
    state.best[state.level] = state.streak;
    localStorage.setItem('phrase_trainer_best_v2', JSON.stringify(state.best));
  }
}

function allWordsFor(text) {
  const found = [];
  String(text).split(/\s+/).forEach(raw => {
    const token = cleanToken(raw === '24/7' ? 'twenty-four-seven' : raw);
    if (WORD_INDEX.has(token) && !found.includes(token)) found.push(token);
  });
  return found;
}

function supportWordsFor(text) {
  return allWordsFor(text).slice(0, 18);
}

function renderSupport(text) {
  const words = supportWordsFor(text);
  $('supportWords').innerHTML = words.length ? words.map(token => {
    const item = WORD_INDEX.get(token);
    return `<button class="word-chip" type="button" data-word="${token}">${escapeHtml(item.emoji || '')} ${escapeHtml(item.word)} - ${escapeHtml(item.translation)}</button>`;
  }).join('') : '<span class="task">Нажимай на английские слова в задании.</span>';
  $('supportWords').querySelectorAll('[data-word]').forEach(btn => {
    btn.addEventListener('click', () => showWord(btn.dataset.word));
  });
}

function makeQuestion() {
  if (state.level === 5) {
    const item = sample(PHRASES.filter(p => p.parts.length <= 9));
    const extras = shuffle(WORD_LIST.map(w => w.word))
      .filter(word => !item.parts.some(part => normalizeAnswer(part) === normalizeAnswer(word)))
      .slice(0, item.parts.length <= 4 ? 2 : 3);
    return {
      type: 'build',
      phrase: item,
      prompt: item.ru,
      answer: item.parts.join(' '),
      target: item.parts,
      bank: shuffle([...item.parts, ...extras]),
      support: item.en
    };
  }
  if (state.level === 6) {
    const item = sample(PHRASES.filter(p => p.parts.some(part => WORD_INDEX.has(cleanToken(part)))));
    const candidates = item.parts.filter(part => WORD_INDEX.has(cleanToken(part)));
    const gap = sample(candidates);
    const blank = item.parts.map(part => part === gap ? '____' : part).join(' ');
    return {
      type: 'choice',
      phrase: item,
      prompt: blank,
      answer: gap,
      choices: choicesFrom(WORD_LIST.map(w => w.word), gap),
      support: item.en
    };
  }
  const situation = sample(SITUATIONS);
  const phrase = PHRASES.find(item => normalizeAnswer(item.en) === normalizeAnswer(situation.en)) || { id: 'custom', en: situation.en };
  return {
    type: 'choice',
    phrase,
    prompt: situation.ru,
    answer: situation.en,
    choices: choicesFrom(PHRASES.map(p => p.en), situation.en),
    support: situation.en
  };
}

function beginLevel(level) {
  state.level = level;
  state.answered = 0;
  state.correct = 0;
  state.streak = 0;
  renderLevelTabs();
  renderStats();
  nextQuestion();
}

function nextQuestion() {
  if (state.answered >= ROUND_SIZE) {
    renderRoundEnd();
    return;
  }
  locked = false;
  selectedBuild = [];
  currentQuestion = makeQuestion();
  const level = LEVELS.find(item => item.id === state.level);
  $('levelName').textContent = level.name;
  $('taskText').textContent = level.task;
  $('prompt').innerHTML = decorateText(currentQuestion.prompt);
  bindWordClicks($('prompt'));
  $('feedback').className = 'feedback';
  $('feedback').textContent = 'Выберите ответ.';
  $('nextBtn').textContent = 'Дальше';
  $('nextBtn').disabled = true;
  $('options').hidden = currentQuestion.type === 'build';
  $('buildZone').hidden = currentQuestion.type !== 'build';
  renderSupport(currentQuestion.support);
  if (currentQuestion.type === 'build') renderBuild();
  else renderOptions(currentQuestion.choices);
}

function renderRoundEnd() {
  locked = true;
  const percent = Math.round((state.correct / ROUND_SIZE) * 100);
  $('levelName').textContent = LEVELS.find(item => item.id === state.level).name;
  $('prompt').textContent = `${state.correct}/${ROUND_SIZE}`;
  $('taskText').textContent = percent >= 80 ? 'Раунд сдан.' : 'Нужно еще один круг.';
  $('options').hidden = true;
  $('buildZone').hidden = true;
  $('feedback').className = percent >= 80 ? 'feedback good' : 'feedback bad';
  $('feedback').textContent = percent >= 80 ? 'Хорошо. Это уже похоже на экзамен.' : 'Нормально. Здесь решает повторение, а не талант.';
  $('nextBtn').disabled = false;
  $('nextBtn').textContent = state.level < 7 ? 'Следующий режим' : 'Повторить';
  renderSupport('');
}

function renderOptions(choices) {
  $('options').innerHTML = choices.map(choice => (
    `<div class="option" role="button" tabindex="0" data-value="${escapeHtml(choice)}">${decorateText(choice)}</div>`
  )).join('');
  $('options').querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => handleChoice(option.dataset.value, option));
    option.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        option.click();
      }
    });
  });
  bindWordClicks($('options'));
}

function renderBuild() {
  $('answerLine').innerHTML = selectedBuild.length ? selectedBuild.map(item => (
    `<span class="selected-word">${decorateText(item.word)}</span>`
  )).join('') : '<span class="task">...</span>';
  $('bank').innerHTML = currentQuestion.bank.map((word, index) => {
    const used = selectedBuild.some(item => item.index === index);
    return `<button class="bank-word" type="button" data-index="${index}" ${used ? 'disabled' : ''}>${escapeHtml(word)}</button>`;
  }).join('');
  $('bank').querySelectorAll('.bank-word').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.index);
      selectedBuild.push({ index, word: currentQuestion.bank[index] });
      renderBuild();
    });
  });
  bindWordClicks($('answerLine'));
}

function markAnswered(isCorrect, answerText) {
  locked = true;
  state.answered += 1;
  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    $('feedback').className = 'feedback good';
    $('feedback').innerHTML = `Правильно: ${decorateText(answerText)}`;
  } else {
    state.streak = 0;
    $('feedback').className = 'feedback bad';
    $('feedback').innerHTML = `Правильно: ${decorateText(answerText)}`;
  }
  bindWordClicks($('feedback'));
  updateBest();
  renderStats();
  $('nextBtn').disabled = false;
  playPhrase(currentQuestion.phrase);
}

function handleChoice(value, option) {
  if (locked) return;
  const isCorrect = normalizeAnswer(value) === normalizeAnswer(currentQuestion.answer);
  document.querySelectorAll('.option').forEach(item => {
    if (normalizeAnswer(item.dataset.value) === normalizeAnswer(currentQuestion.answer)) item.classList.add('correct');
  });
  if (!isCorrect) option.classList.add('wrong');
  markAnswered(isCorrect, currentQuestion.answer);
}

function checkBuildAnswer() {
  if (locked || currentQuestion?.type !== 'build') return;
  const selected = selectedBuild.map(item => item.word).join(' ');
  const isCorrect = normalizeAnswer(selected) === normalizeAnswer(currentQuestion.answer);
  markAnswered(isCorrect, currentQuestion.answer);
}

function clearBuildAnswer() {
  if (locked) return;
  selectedBuild = [];
  renderBuild();
}

function showHint() {
  if (!currentQuestion) return;
  $('feedback').className = 'feedback';
  $('feedback').innerHTML = `Подсказка: ${decorateText(currentQuestion.answer)}`;
  bindWordClicks($('feedback'));
  renderSupport(currentQuestion.answer);
}

function playCurrent() {
  if (!currentQuestion) return;
  playPhrase(currentQuestion.phrase);
}

function renderDictionary() {
  const q = $('dictSearch').value.trim().toLowerCase();
  const useful = allWordsFor(PHRASES.map(p => p.en).join(' '));
  const core = useful.map(token => WORD_INDEX.get(token)).filter(Boolean);
  const list = core.filter(item => {
    return !q || item.word.toLowerCase().includes(q) || item.translation.toLowerCase().includes(q);
  });
  $('wordGrid').innerHTML = list.map(item => (
    `<div class="word-card">
      <div>
        <div class="word-en">${escapeHtml(item.emoji || '')} ${escapeHtml(item.word)}</div>
        <div class="word-ru">${escapeHtml(item.translation)}</div>
      </div>
      <button class="mini-play" type="button" data-word="${escapeHtml(item.word)}" title="Слушать">▶</button>
    </div>`
  )).join('');
  $('wordGrid').querySelectorAll('[data-word]').forEach(btn => {
    btn.addEventListener('click', () => showWord(btn.dataset.word));
  });
}

$('themeBtn').addEventListener('click', cycleTheme);
$('listenBtn').addEventListener('click', playCurrent);
$('hintBtn').addEventListener('click', showHint);
$('nextBtn').addEventListener('click', () => {
  if (state.answered >= ROUND_SIZE) beginLevel(state.level < 7 ? state.level + 1 : 5);
  else nextQuestion();
});
$('clearBuild').addEventListener('click', clearBuildAnswer);
$('checkBuild').addEventListener('click', checkBuildAnswer);
$('dictSearch').addEventListener('input', renderDictionary);

const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
if (systemDark.addEventListener) systemDark.addEventListener('change', () => setTheme());
setTheme();
renderDictionary();
beginLevel(5);
