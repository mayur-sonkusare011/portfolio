
// Initialize AOS
document.addEventListener('DOMContentLoaded', function(){
  if(window.AOS) AOS.init({duration:800,once:true});

  // Typed.js — show typed effect if available
  if(window.Typed){
    try {
      // fallback strings
      const typed = new Typed('#typed', {
        strings: ['Bioinformatics · Structural Biology · Drug Discovery', 'Automation & Reporting', 'Molecular Docking · MD Simulations'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1600,
        loop: true
      });
    } catch(e){ console.warn('Typed init error', e); }
  }

  // Resume modal handlers
  const resumeBtn = document.getElementById('resumeBtn');
  const modal = document.getElementById('resumeModal');
  const close = document.getElementById('closeResume');
  const modalBg = document.getElementById('resumeModalBg');
  function openModal(){ modal.classList.remove('hidden'); modal.style.display='flex'; document.body.style.overflow='hidden'; }
  function closeModal(){ modal.classList.add('hidden'); modal.style.display='none'; document.body.style.overflow='auto'; }
  if(resumeBtn) resumeBtn.addEventListener('click', openModal);
  if(close) close.addEventListener('click', closeModal);
  if(modalBg) modalBg.addEventListener('click', closeModal);

  // tsparticles init if available (CDN)
  if(window.tsParticles && window.tsParticles.load){
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      particles: {
        number: { value: 60 },
        color: { value: ['#4ee0ff','#8b5cf6','#f472b6'] },
        shape: { type: 'circle' },
        opacity: { value: 0.12 },
        size: { value: { min: 2, max: 6 } },
        move: { enable: true, speed: 1, direction: 'none', outMode: 'out' }
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' } },
        modes: { push: { quantity: 4 }, repulse: { distance: 100 } }
      }
    });
  }
});
