// =========================================================
// BABAK 1 — PERTANYAAN MASING-MASING GRUP
// Bank soal setara SD kelas 4–6
// =========================================================

const QUESTION_DATA = {
  A: {
    color: 'group-a',
    questions: [
      { subject:'PPKn',  q:'Ibu kota negara Republik Indonesia adalah ....', answer:'Jakarta', distractor:'Bandung' },
      { subject:'Sejarah', q:'Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal ....', answer:'17 Agustus 1945', distractor:'17 Agustus 1950' },
      { subject:'Matematika', q:'Hasil dari 12 × 8 adalah ....', answer:'96', distractor:'86' },
      { subject:'Sejarah', q:'Presiden pertama Republik Indonesia adalah ....', answer:'Ir. Soekarno', distractor:'Mohammad Hatta' },
      { subject:'IPA', q:'Alat pernapasan utama pada ikan adalah ....', answer:'Insang', distractor:'Paru-paru' },
      { subject:'PPKn', q:'Lambang negara Indonesia adalah ....', answer:'Garuda Pancasila', distractor:'Burung Cendrawasih' },
      { subject:'Matematika', q:'Pecahan 3/4 jika diubah menjadi persen adalah ....', answer:'75%', distractor:'34%' },
      { subject:'Bahasa Indonesia', q:'Bahasa persatuan bangsa Indonesia adalah ....', answer:'Bahasa Indonesia', distractor:'Bahasa Jawa' },
      { subject:'IPA', q:'Planet yang dijuluki "planet merah" adalah ....', answer:'Mars', distractor:'Venus' },
      { subject:'PPKn', q:'Bunyi sila kelima Pancasila adalah ....', answer:'Keadilan sosial bagi seluruh rakyat Indonesia', distractor:'Persatuan Indonesia' },
    ]
  },
  B: {
    color: 'group-b',
    questions: [
      { subject:'IPS', q:'Pulau terbesar di wilayah Indonesia adalah ....', answer:'Kalimantan', distractor:'Jawa' },
      { subject:'Matematika', q:'Hasil dari 144 : 12 adalah ....', answer:'12', distractor:'14' },
      { subject:'IPA', q:'Proses tumbuhan membuat makanannya sendiri disebut ....', answer:'Fotosintesis', distractor:'Respirasi' },
      { subject:'Sejarah', q:'Wakil presiden pertama Republik Indonesia adalah ....', answer:'Mohammad Hatta', distractor:'Sutan Sjahrir' },
      { subject:'PPKn', q:'Warna bendera negara Indonesia adalah ....', answer:'Merah Putih', distractor:'Merah Kuning' },
      { subject:'Matematika', q:'FPB (Faktor Persekutuan Terbesar) dari 12 dan 18 adalah ....', answer:'6', distractor:'3' },
      { subject:'Umum', q:'Induk organisasi sepak bola Indonesia bernama ....', answer:'PSSI', distractor:'PBSI' },
      { subject:'IPA', q:'Hewan yang berkembang biak dengan cara bertelur disebut ....', answer:'Ovipar', distractor:'Vivipar' },
      { subject:'PPKn', q:'Lagu kebangsaan Indonesia berjudul ....', answer:'Indonesia Raya', distractor:'Garuda Pancasila' },
      { subject:'IPS', q:'Ibu kota Provinsi Jawa Barat adalah ....', answer:'Bandung', distractor:'Semarang' },
    ]
  },
  C: {
    color: 'group-c',
    questions: [
      { subject:'Matematika', q:'Hasil dari 25 × 4 adalah ....', answer:'100', distractor:'90' },
      { subject:'Sejarah', q:'Pahlawan wanita yang memperjuangkan pendidikan kaum perempuan adalah ....', answer:'R.A. Kartini', distractor:'Cut Nyak Dhien' },
      { subject:'IPA', q:'Alat pernapasan utama pada manusia adalah ....', answer:'Paru-paru', distractor:'Jantung' },
      { subject:'Matematika', q:'KPK (Kelipatan Persekutuan Terkecil) dari 4 dan 6 adalah ....', answer:'12', distractor:'24' },
      { subject:'IPS', q:'Candi Borobudur terletak di provinsi ....', answer:'Jawa Tengah', distractor:'Jawa Timur' },
      { subject:'Sejarah', q:'Proklamator kemerdekaan Indonesia adalah Soekarno dan ....', answer:'Mohammad Hatta', distractor:'Sutan Sjahrir' },
      { subject:'IPS', q:'Gunung tertinggi di Indonesia adalah ....', answer:'Puncak Jaya', distractor:'Gunung Semeru' },
      { subject:'Matematika', q:'1 kilogram sama dengan .... gram', answer:'1.000 gram', distractor:'100 gram' },
      { subject:'PPKn', q:'Semboyan negara Indonesia adalah ....', answer:'Bhinneka Tunggal Ika', distractor:'Garuda Pancasila' },
      { subject:'IPA', q:'Sumber energi utama bagi kehidupan di bumi berasal dari ....', answer:'Matahari', distractor:'Bulan' },
    ]
  },
  D: {
    color: 'group-d',
    questions: [
      { subject:'Matematika', q:'Hasil dari 15 + 27 adalah ....', answer:'42', distractor:'32' },
      { subject:'IPS', q:'Tari Saman berasal dari provinsi ....', answer:'Aceh', distractor:'Bali' },
      { subject:'IPA', q:'Bagian tumbuhan yang berfungsi menyerap air adalah ....', answer:'Akar', distractor:'Daun' },
      { subject:'Matematika', q:'Hasil dari 9² (9 pangkat 2) adalah ....', answer:'81', distractor:'18' },
      { subject:'Sejarah', q:'Konferensi yang mengakui kedaulatan Indonesia oleh Belanda adalah ....', answer:'Konferensi Meja Bundar', distractor:'Perjanjian Linggarjati' },
      { subject:'IPS', q:'Alat musik tradisional dari Jawa Barat adalah ....', answer:'Angklung', distractor:'Gamelan' },
      { subject:'Matematika', q:'Bilangan prima terkecil adalah ....', answer:'2', distractor:'1' },
      { subject:'PPKn', q:'Hewan yang menjadi lambang negara Indonesia adalah ....', answer:'Garuda', distractor:'Elang' },
      { subject:'IPA', q:'Perubahan wujud benda dari cair menjadi gas disebut ....', answer:'Menguap', distractor:'Mengembun' },
      { subject:'PPKn', q:'Hari Kemerdekaan Indonesia diperingati setiap tanggal ....', answer:'17 Agustus', distractor:'1 Juni' },
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
