// =========================================================
// BABAK 2 — PERTANYAAN REBUTAN
// 20 soal setara SD kelas 4–6, tanpa Call Friend / Pilihan Ganda
// Jawaban hanya tampil saat tombol "Tampilkan Jawaban" ditekan
// =========================================================

const REBUTAN_QUESTIONS = [
  { subject:'Sejarah',   q:'Jepang menyerah kepada sekutu karena tragedi bom atom di daerah  ....', answer:'Nagasaki & Hirosyima' },
  { subject:'PPKn',      q:'Apa kepanjangan dari DPR ....', answer:'Dewan Perwakilan Rakyat' },
  { subject:'Matematika',q:'Sebutkan contoh bilangan prima  ....', answer:'2,3,5,7,11' },
  { subject:'IPA',       q:'Organ tubuh yang berfungsi memompa darah adalah ....', answer:'Jantung' },
  { subject:'IPS',       q:'Dari manakah asalnya pejuang kemerdekaan Tuanku Imam bonjol  ....', answer:'Sumatera Barat' },
  { subject:'Bahasa Indonesia', q:'Apa arti pribahasa besar pasak daripada tiang " adalah ....', answer:'besar pengeluaran daripada penghasilan' },
  { subject:'Sejarah',   q:'Sebutkan bagian bagian dari organ mata manusia  ....', answer:'lensa, pupil, iris , retina' },
  { subject:'Matematika',q:'Siapa Pencipta lagu Indonesia Raya  ....', answer:'WR Supratman' },
  { subject:'IPA',       q:'Perubahan wujud dari gas  menjadi cair disebut ....', answer:'Mengembun / kondensasi' },
  { subject:'PPKn',      q:'Semboyan "Bhinneka Tunggal Ika" memiliki arti ....', answer:'Berbeda-beda tetapi tetap satu jua' },
  { subject:'IPS',       q:'Suku bangsa asli DKI Jakarta adalah suku ....', answer:'Betawi' },
  { subject:'Matematika',q:'Planet dalam tatasurya kita yang memiliki cincin adalah ', answer:'Saturnus' },
  { subject:'Sejarah',   q:'Daerah atau tempat Peristiwa penculikan Soekarno-Hatta sebelum proklamasi adalah  ....', answer:'Rengasdengklok' },
  { subject:'IPA',       q:'Organ vital manusia Tempat menyaring darah dan membuang sisa metabolisme adalah  ....', answer:'Ginjal' },
  { subject:'Umum',      q:'Jakarta utara memiliki stadiun megah yaitu JIS , apa kepanjangan dari JIS ...', answer:'Jakarta Internasional Stadium' },
  { subject:'IPS', q:'pakaian ikonik koteka dan tas noken adalah ciri kas dari daerah....', answer:'Papua' },
  { subject:'IPS',       q:'Untuk proses Fotosintesis tumbuhan membutuhkan apa saja  ....', answer:'Air, Co2 dan matahari' },
  { subject:'Matematika',q:'Serangan Umum 01 maret di jogyakarta antara pejuang Indonesia dengan Belanda di pimpin oleh  ....', answer:'letkol Suharto' },
  { subject:'PPKn',      q:'sila ke 5 pancasila disimbolkan dengan apa  ....', answer:' Padi dan kapas ' },
  { subject:'Sejarah',   q:'saat ini kita memperingati Dirgahayu kemerdekaan RI yang ke berapa  ....', answer:'81 Tahun ' },
];

function iconEye(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
}
function iconCheck(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
}

function renderRebutan(){
  const list = document.getElementById('rebutan-list');
  if(!list) return;

  list.innerHTML = REBUTAN_QUESTIONS.map((item, i) => {
    const qid = `reb-${i}`;
    return `
    <div class="question-card" style="--gc: var(--red-bright); animation-delay:${i * 0.04}s">
      <div class="question-top">
        <span class="question-number">${i + 1}</span>
        <span class="question-subject">${item.subject} &nbsp;•&nbsp; Rebutan</span>
      </div>
      <p class="question-text">${item.q}</p>

      <div class="question-actions">
        <button class="btn-help btn-reveal" id="btn-${qid}" onclick="revealAnswer('${qid}')">
          ${iconEye()} Tampilkan Jawaban
        </button>
      </div>

      <div class="answer-reveal" id="ans-${qid}">
        ${iconCheck()} <span>Jawaban benar: <strong>${item.answer}</strong></span>
      </div>
    </div>
    `;
  }).join('');
}

function revealAnswer(qid){
  const answerBox = document.getElementById(`ans-${qid}`);
  const btn = document.getElementById(`btn-${qid}`);
  if(!answerBox || !btn) return;
  answerBox.classList.add('show');
  btn.classList.add('revealed');
  btn.innerHTML = `${iconCheck()} Jawaban Ditampilkan`;
  btn.disabled = true;
}

document.addEventListener('DOMContentLoaded', renderRebutan);
