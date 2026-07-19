// =========================================================
// CERDAS CERMAT — HUT RI ke-81 — shared script
// =========================================================

/* ---------- Bunting garland generator ---------- */
(function buildBunting(){
  const wrap = document.getElementById('bunting');
  if(!wrap) return;
  const count = window.innerWidth < 640 ? 11 : 19;
  for(let i=0;i<count;i++){
    const flag = document.createElement('div');
    flag.className = 'flag';
    flag.style.animationDelay = (Math.random()*-3).toFixed(2)+'s';
    flag.style.animationDuration = (2.8 + Math.random()*1.2).toFixed(2)+'s';
    wrap.appendChild(flag);
  }
})();

/* ---------- Confetti / firework particles on jumbotron ---------- */
(function confetti(){
  const canvas = document.getElementById('confetti-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const colors = ['#FFFFFF', '#E8CE7A', '#C9A227', '#E8434A', '#FBF3E3'];

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function makeParticle(){
    return {
      x: Math.random()*w,
      y: -20 - Math.random()*h*0.5,
      r: 3 + Math.random()*4,
      speedY: 0.6 + Math.random()*1.4,
      speedX: (Math.random()-0.5)*0.6,
      rot: Math.random()*360,
      rotSpeed: (Math.random()-0.5)*4,
      color: colors[Math.floor(Math.random()*colors.length)],
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    };
  }

  const total = window.innerWidth < 640 ? 34 : 60;
  for(let i=0;i<total;i++){
    const p = makeParticle();
    p.y = Math.random()*h; // spread initial positions
    particles.push(p);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function tick(){
    if(reduceMotion){ return; }
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.y += p.speedY;
      p.x += p.speedX;
      p.rot += p.rotSpeed;
      if(p.y > h + 20){
        Object.assign(p, makeParticle());
        p.y = -10;
      }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      if(p.shape === 'rect'){
        ctx.fillRect(-p.r, -p.r*0.4, p.r*2, p.r*0.8);
      } else {
        ctx.beginPath();
        ctx.arc(0,0,p.r*0.7,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  if(!reduceMotion) requestAnimationFrame(tick);
})();

/* ---------- Scroll reveal for horizontal cards ---------- */
(function scrollReveal(){
  const cards = document.querySelectorAll('.h-card');
  if(!cards.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const idx = Number(entry.target.dataset.index || 0);
        setTimeout(()=> entry.target.classList.add('in-view'), idx*120);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(c=>io.observe(c));
})();

/* ---------- Toast helper ---------- */
let toastTimer = null;
function showToast(message){
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if(!toast || !text) return;
  text.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 3200);
}
