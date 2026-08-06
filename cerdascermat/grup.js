// =========================================================
// BABAK 1 — PERTANYAAN MASING-MASING GRUP
// Bank soal setara SD kelas 4–6
// =========================================================

const QUESTION_DATA = {
  A: {
    color: 'group-a',
    questions: [
      { subject:'PPKn',  q:'Ibu kota Nusantara ada di propinsi apa  ....', answer:'Kaltim', distractor:'Bandung' },
      { subject:'Sejarah', q:'Sumpah pemuda di ikrarkan pada tanggal ....', answer:'28 oktober 1928', distractor:'17 Agustus 1945' },
      { subject:'Matematika', q:'Bentuk pecahan sederhana dari 12/18 adalah ....', answer:'2/3', distractor:'3/2' },
      { subject:'Sejarah', q:'Presiden ketiga Republik Indonesia adalah ....', answer:'Bj Habibie', distractor:'soeharto' },
      { subject:'IPA', q:'Alat pernapasan utama pada ikan adalah ....', answer:'Insang', distractor:'Paru-paru' },
      { subject:'PPKn', q:'jumlah masing-masing bulu sayap burung garuda ada berapa  ....', answer:'17', distractor:'45' },
      { subject:'IPA', q:'Perubahan wujud dari cair menjadi padat disebut....', answer:'membeku', distractor:'menguap' },
      { subject:'Bahasa Indonesia', q:'Wayang golek adalah seni pertunjukan tradisional boneka kayu tiga dimensi yang berasal dari....', answer:'Jabar', distractor:'Jateng' },
      { subject:'IPA', q:'Planet yang terdekat dengan matahari....', answer:'Merkurius', distractor:'Venus' },
      { subject:'PPKn', q:'Bunyi sila kelima Pancasila adalah ....', answer:'Keadilan sosial bagi seluruh rakyat Indonesia', distractor:'Persatuan Indonesia' },
    ]
  },
  B: {
    color: 'group-b',
    questions: [
      { subject:'IPS', q:'Pulau terbesar di wilayah Indonesia adalah ....', answer:'Kalimantan', distractor:'Jawa' },
      { subject:'Matematika', q:'Sudut yang besarnya 90 derajat disebut sudut....', answer:'siku siku', distractor:'lancip' },
      { subject:'IPA', q:'Proses tumbuhan membuat makanannya sendiri disebut ....', answer:'Fotosintesis/asimilasi', distractor:'Respirasi' },
      { subject:'Sejarah', q:'Wakil presiden pertama Republik Indonesia adalah ....', answer:'Mohammad Hatta', distractor:'Sutan Sjahrir' },
      { subject:'PPKn', q:'Rumah adat "Rumah Gadang" berasal dari provinsi....', answer:'Sumbar', distractor:'Sumut' },
      { subject:'Matematika', q:'Sebuah segitiga memiliki alas 10 cm dan tinggi 4 cm. Luas segitiga tersebut adalah ....', answer:'20 cm', distractor:'15 cm' },
      { subject:'Umum', q:'Planet terbesar dalam tata surya adalah....', answer:'Yupiter', distractor:'Saturnus' },
      { subject:'IPA', q:'Salah satu contoh energi terbarukan adalah....', answer:'matahari,angin', distractor:'minyak bumi' },
      { subject:'PPKn', q:'Sebutkan Tokoh pejuang kemerdekaan dari aceh  ....', answer:'cut nyak dien, teuku umar', distractor:'diponegoro' },
      { subject:'IPS', q:'Ibu kota Provinsi Jawa Barat adalah ....', answer:'Bandung', distractor:'Semarang' },
    ]
  },
  C: {
    color: 'group-c',
    questions: [
      { subject:'Matematika', q:'bilangan bulat yang habis dibagi dua disebut bilangan  ....', answer:'genap', distractor:'prima' },
      { subject:'Sejarah', q:'Tokoh Pejuang wanita yang memperjuangkan hak kaum perempuan adalah ....', answer:'R.A. Kartini', distractor:'Cut Nyak Dhien' },
      { subject:'IPA', q:'Alat untuk mengukur suhu adalah....', answer:'termometer', distractor:'barometer' },
      { subject:'IPS', q:'Ibukota provinsi Jawa tengah adalah ....', answer:'semarang', distractor:'Yogyakarta' },
      { subject:'IPS', q:'Candi Borobudur adalah peninggalan agama  ....', answer:'Budha', distractor:'Hindu' },
      { subject:'Sejarah', q:'sebutkan bunyi sila ke dua ....', answer:'kemanusian yang adil dan beradab', distractor:'persatuan indonesia' },
      { subject:'IPS', q:'Tarian Saman yang mendunia berasal dari daerah....', answer:'Aceh', distractor:'Padang' },
      { subject:'Matematika', q:'katak hidup di dua alam disebut dengan hewan ...', answer:'amfibi', distractor:'reptil' },
      { subject:'PPKn', q:'Apa bunyi semboyan yang tertulis pada pita di cengkeraman kaki burung Garuda , yang berarti berbeda-beda tetapi tetap satu jua ....', answer:'Bhinneka Tunggal Ika', distractor:'Garuda Pancasila' },
      { subject:'IPA', q:'planet yang paling mirip dengan bumi dan berpotensi adanya kehidupan  ....', answer:'mars', distractor:'venus' },
    ]
  },
  D: {
    color: 'group-d',
    questions: [
      { subject:'Matematika', q:'Sebuah kubus memiliki panjang sisi 3 cm. Volume kubus tersebut adalah ....', answer:'9 cm³', distractor:'90 cm³' },
      { subject:'IPS', q:'Tari kecak berasal dari  ....', answer:'Bali', distractor:'Jatim' },
      { subject:'IPA', q:'Bagian tumbuhan yang berfungsi menyerap air adalah ....', answer:'Akar', distractor:'Daun' },
      { subject:'Matematika', q:'Sultan Hasanudin adalah pejuang kemerdekaan dari daerah  ....', answer:'makasar', distractor:'ambon' },
      { subject:'Sejarah', q:'candi prambanan peninggalan agama ....', answer:'hindu', distractor:'budha' },
      { subject:'IPS', q:'Alat musik tradisional dari Jawa Barat adalah ....', answer:'Angklung', distractor:'Gamelan' },
      { subject:'Matematika', q:'Gaya yang menarik benda ke pusat Bumi disebut ....', answer:'Gravitasi', distractor:'gesek' },
      { subject:'PPKn', q:'jumlah bulu ekor burung garuda ada berapa  ....', answer:'8', distractor:'10' },
      { subject:'IPA', q:'Perubahan wujud benda dari cair menjadi gas disebut ....', answer:'Menguap', distractor:'Mengembun' },
      { subject:'PPKn', q:'sebutkan bunyi sila ketiga pancasila ....', answer:'persatuan Indonesia', distractor:'ketuhannan yang maha Esa' },
    ]
  }
};

const GROUP_LABELS = { A:'Grup A', B:'Grup B', C:'Grup C', D:'Grup D' };

let currentGroup = 'A';

function iconCallFriend(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
}
function iconChoices(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`;
}
function iconKey(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`;
}

function renderTabs(){
  const tabWrap = document.getElementById('group-tabs');
  tabWrap.innerHTML = Object.keys(QUESTION_DATA).map(key => `
    <button class="group-tab ${key === currentGroup ? 'active' : ''}" data-group="${key}" onclick="switchGroup('${key}')">
      ${GROUP_LABELS[key]}
      <span class="badge-count">10 soal</span>
    </button>
  `).join('');
}

function renderQuestions(){
  const list = document.getElementById('question-list');
  const groupInfo = QUESTION_DATA[currentGroup];
  const colorClass = groupInfo.color;

  list.innerHTML = groupInfo.questions.map((item, i) => {
    const qid = `${currentGroup}-${i}`;
    // randomize option order
    const flip = Math.random() < 0.5;
    const options = flip ? [item.answer, item.distractor] : [item.distractor, item.answer];

    return `
    <div class="question-card ${colorClass}" style="--gc: var(--${colorClass}); animation-delay:${i * 0.05}s">
      <div class="question-top">
        <span class="question-number">${i + 1}</span>
        <span class="question-subject">${item.subject} &nbsp;•&nbsp; ${GROUP_LABELS[currentGroup]}</span>
      </div>
      <p class="question-text">${item.q}</p>

      <div class="question-actions">
        <button class="btn-help btn-callfriend" onclick="openCallFriend()">
          ${iconCallFriend()} Call Friend
        </button>
        <button class="btn-help btn-pg" onclick="toggleChoices('${qid}')">
          ${iconChoices()} Pilihan Ganda
        </button>
        <button class="btn-help btn-key" onclick="toggleKey('${qid}')">
          ${iconKey()} Lihat Kunci
        </button>
      </div>

      <div class="mc-options" id="mc-${qid}">
        ${options.map(opt => `
          <button class="mc-option" onclick="selectOption(this, '${escapeAttr(opt)}', '${escapeAttr(item.answer)}')">${opt}</button>
        `).join('')}
      </div>

      <div class="answer-key" id="key-${qid}">
        Kunci jawaban: <strong>${item.answer}</strong>
      </div>
    </div>
    `;
  }).join('');
}

function escapeAttr(str){
  return String(str).replace(/'/g, "\\'");
}

function switchGroup(key){
  currentGroup = key;
  renderTabs();
  renderQuestions();
  window.scrollTo({ top: document.getElementById('question-list').offsetTop - 100, behavior:'smooth' });
}

function toggleChoices(qid){
  const el = document.getElementById(`mc-${qid}`);
  if(!el) return;
  el.classList.toggle('show');
}

function toggleKey(qid){
  const el = document.getElementById(`key-${qid}`);
  if(!el) return;
  el.classList.toggle('show');
}

function selectOption(btn, chosen, correctAnswer){
  const group = btn.parentElement;
  const buttons = group.querySelectorAll('.mc-option');
  buttons.forEach(b => {
    b.disabled = true;
    if(b.textContent === correctAnswer){
      b.classList.add('correct');
    }
  });
  if(chosen !== correctAnswer){
    btn.classList.add('wrong');
  }
}

/* ---------- Call Friend modal ---------- */
function openCallFriend(){
  const modal = document.getElementById('callfriend-modal');
  if(modal) modal.classList.add('show');
}
function closeCallFriend(){
  const modal = document.getElementById('callfriend-modal');
  if(modal) modal.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('group-tabs')){
    renderTabs();
    renderQuestions();
  }
});
