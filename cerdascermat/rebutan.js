// =========================================================
// BABAK 2 — PERTANYAAN REBUTAN
// 20 soal setara SD kelas 4–6, tanpa Call Friend / Pilihan Ganda
// Jawaban hanya tampil saat tombol "Tampilkan Jawaban" ditekan
// =========================================================

const REBUTAN_QUESTIONS = [
  { subject:'Sejarah',   q:'Proklamasi Kemerdekaan Indonesia dibacakan oleh ....', answer:'Ir. Soekarno' },
  { subject:'PPKn',      q:'Pancasila memiliki jumlah sila sebanyak ....', answer:'5 (lima)' },
  { subject:'Matematika',q:'Hasil dari 17 × 6 adalah ....', answer:'102' },
  { subject:'IPA',       q:'Organ tubuh yang berfungsi memompa darah adalah ....', answer:'Jantung' },
  { subject:'IPS',       q:'Selat yang memisahkan Pulau Jawa dan Pulau Sumatra adalah ....', answer:'Selat Sunda' },
  { subject:'Bahasa Indonesia', q:'Kata dasar dari kata "mempersatukan" adalah ....', answer:'Satu' },
  { subject:'Sejarah',   q:'Bendera Merah Putih pertama kali dikibarkan pada tanggal ....', answer:'17 Agustus 1945' },
  { subject:'Matematika',q:'Bilangan yang habis dibagi 2 disebut bilangan ....', answer:'Genap' },
  { subject:'IPA',       q:'Perubahan wujud dari padat menjadi cair disebut ....', answer:'Mencair' },
  { subject:'PPKn',      q:'Semboyan "Bhinneka Tunggal Ika" memiliki arti ....', answer:'Berbeda-beda tetapi tetap satu jua' },
  { subject:'IPS',       q:'Suku bangsa asli Provinsi DKI Jakarta adalah suku ....', answer:'Betawi' },
  { subject:'Matematika',q:'Luas persegi dengan sisi 9 cm adalah ....', answer:'81 cm²' },
  { subject:'Sejarah',   q:'Peristiwa penculikan Soekarno-Hatta sebelum proklamasi dikenal dengan peristiwa ....', answer:'Rengasdengklok' },
  { subject:'IPA',       q:'Tumbuhan bernapas melalui bagian yang disebut ....', answer:'Stomata' },
  { subject:'Umum',      q:'Induk organisasi bulu tangkis Indonesia bernama ....', answer:'PBSI' },
  { subject:'Bahasa Indonesia', q:'Lawan kata (antonim) dari "merdeka" adalah ....', answer:'Terjajah' },
  { subject:'IPS',       q:'Danau terbesar di Indonesia adalah ....', answer:'Danau Toba' },
  { subject:'Matematika',q:'Hasil dari 100 − 37 adalah ....', answer:'63' },
  { subject:'PPKn',      q:'Sila pertama Pancasila berbunyi ....', answer:'Ketuhanan Yang Maha Esa' },
  { subject:'Sejarah',   q:'Naskah teks proklamasi diketik oleh ....', answer:'Sayuti Melik' },
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
