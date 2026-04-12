// Initialize AOS
document.addEventListener('DOMContentLoaded', function(){
  if(window.AOS) AOS.init({duration:800,once:true});

  // Typed.js — show typed effect if available
  if(typeof Typed !== 'undefined'){
    try {
      const typed = new Typed('#typed', {
        strings: ['Bioinformatics Scientist...', 'Research Professional...', 'Computational Biologist...'],
        typeSpeed: 70, // Slower typing speed
        backSpeed: 30, // Slower backspacing
        backDelay: 2000,
        loop: true,
        cursorChar: '|'
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

  // tsparticles init if available (CDN) - Neon Theme
  if(window.tsParticles && window.tsParticles.load){
    tsParticles.load('tsparticles', {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: ['#00ff88', '#00e1ff', '#10b981'] },
        shape: { type: 'circle' },
        opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
        size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 1, sync: false } },
        links: { enable: true, distance: 130, color: '#00e1ff', opacity: 0.5, width: 2 },
        move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, outMode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onHover: { enable: true, mode: 'trail' }, onClick: { enable: true, mode: 'push' }, resize: true },
        modes: { trail: { delay: 0.005, quantity: 5, particles: { color: { value: "#00ff88" } } }, push: { quantity: 4 } }
      },
      retina_detect: true
    });
  }

  // Custom GSAP Animations
  if(window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Stagger cards in sections
    const sections = gsap.utils.toArray('.section');
    sections.forEach((sec) => {
      const cards = sec.querySelectorAll('.card');
      if(cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }
});
