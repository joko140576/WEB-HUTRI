// =========================================================
// PAPAN NILAI — perolehan nilai Babak 1 & Babak 2
// =========================================================

const GROUPS = ['A', 'B', 'C', 'D'];
const STORAGE_KEY = 'cc-hutri81-nilai';
const CHART_MAX = 200; // skala referensi grafik (babak1 maks 100 + babak2 maks 100)
const CHART_HEIGHT_PX = 150; // tinggi maksimum batang agar tidak menabrak label/nilai/mahkota di atasnya

function loadScores(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){ /* abaikan, pakai default */ }
  return {
    babak1: { A: 0, B: 0, C: 0, D: 0 },
    babak2: { A: 0, B: 0, C: 0, D: 0 }
  };
}

let scores = loadScores();

function saveScores(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(scores)); }catch(e){ /* storage penuh/diblokir, lanjut tanpa simpan */ }
}

function totals(){
  const out = {};
  GROUPS.forEach(g=>{
    out[g] = (Number(scores.babak1[g]) || 0) + (Number(scores.babak2[g]) || 0);
  });
  return out;
}

function updateChart(){
  const t = totals();
  const max = Math.max(CHART_MAX * 0.4, ...GROUPS.map(g=>t[g]), 1);
  const leaderVal = Math.max(...GROUPS.map(g=>t[g]));
  const hasAnyScore = GROUPS.some(g => t[g] > 0);

  GROUPS.forEach(g=>{
    const val = t[g];
    const bar = document.querySelector(`.chart-bar[data-g="${g}"]`);
    const valueEl = document.querySelector(`.chart-value[data-g="${g}"]`);
    const crown = document.querySelector(`.chart-crown[data-g="${g}"]`);
    if(!bar) return;
    const pct = Math.max(val / max, 0);
    bar.style.height = Math.max(pct * CHART_HEIGHT_PX, 4) + 'px';
    valueEl.textContent = val;
    const isLeader = hasAnyScore && val === leaderVal && val > 0;
    crown.classList.toggle('show', isLeader);
  });
}

function buildInputs(){
  ['babak1','babak2'].forEach(babak=>{
    GROUPS.forEach(g=>{
      const input = document.querySelector(`input[data-babak="${babak}"][data-g="${g}"]`);
      if(!input) return;
      input.value = scores[babak][g];
      input.addEventListener('input', ()=>{
        let v = parseInt(input.value, 10);
        if(isNaN(v)) v = 0;
        scores[babak][g] = v;
        saveScores();
        updateChart();
      });
    });
  });
}

function resetScores(){
  if(!confirm('Reset semua nilai Babak 1 dan Babak 2 untuk seluruh grup?')) return;
  scores = {
    babak1: { A: 0, B: 0, C: 0, D: 0 },
    babak2: { A: 0, B: 0, C: 0, D: 0 }
  };
  saveScores();
  document.querySelectorAll('input[data-babak]').forEach(inp=> inp.value = 0);
  updateChart();
  if(typeof showToast === 'function') showToast('Semua nilai telah direset. 🔄');
}

document.addEventListener('DOMContentLoaded', ()=>{
  buildInputs();
  updateChart();
  const resetBtn = document.getElementById('reset-nilai-btn');
  if(resetBtn) resetBtn.addEventListener('click', resetScores);
});
