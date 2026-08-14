(() => {
  'use strict';
  const d = document;
  const w = window;
  const reduceMotion = w.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const projects = {
    savesip:{title:'SaveSip',meta:'UX/UI • Branding • Capstone',image:'assets/images/current/image23.jpg',text:'A gamified drink-spending tracker that helps young adults see how repeat café purchases add up while keeping financial wellness approachable. The project evolved from Cup$i into a warmer product system with mascots, logging, challenges, savings feedback, comparison tools, and a social recipe layer.',tags:['UX/UI','Product thinking','Gamification','Brand system','Wireframes']},
    recipe:{title:'Cozy Recipe Builder',meta:'UX/UI • Personalization • Web',image:'assets/images/current/image10.jpg',text:'A guided recipe experience designed around flavor, texture, ingredients, cooking method, smart swaps, saved collections, and playful prompts. The goal is to reduce endless recipe scrolling by turning the craving itself into the starting point.',tags:['Personalization','UI design','Information architecture','Interaction design','Web']},
    fein:{title:'FE!N — Travis Scott',meta:'Poster • Typography • Music',image:'assets/images/new/fein-travis-scott.jpg',text:'An experimental music poster using distorted outlined letterforms, repeated FE!N typography, grain, monochrome imagery, and a vivid magenta overlay to build a dark, high-energy visual rhythm.',tags:['Poster design','Typography','Texture','Music graphics']},
    airbnb:{title:'Airbnb Escape',meta:'Advertising • Photo Composite',image:'assets/images/new/airbnb-composite.jpg',text:'A photo-manipulation concept that turns a blank white surface into a literal reveal of a vacation destination. The hand-pulled transition uses depth, masking, perspective, and brand placement to sell the feeling of escaping into travel.',tags:['Photo compositing','Advertising','Masking','Perspective','Brand concept']},
    iguard:{title:'iGuard Sanitizer',meta:'Product Advertising • Information Design',image:'assets/images/new/iguard-ad.jpg',text:'A clean product-ad concept combining a central sanitizer form, lemon imagery, icon-based features, and a cool blue palette to communicate utility, freshness, and portability.',tags:['Product ad','Information hierarchy','Icons','Composition']},
    bluemoon:{title:'Blue Moon',meta:'Surreal Composite • Digital Art',image:'assets/images/new/blue-moon.jpg',text:'A surreal moon-scape featuring a luminous tree and a glowing fissure across a planetary surface. The piece explores atmosphere, light, scale, and impossible landscape storytelling.',tags:['Digital art','Surrealism','Lighting','Compositing']},
    selena:{title:'Selena Gomez Type Portrait',meta:'Typography • Editorial Poster',image:'assets/images/new/selena-gomez-poster.jpg',text:'A black-and-white celebrity portrait integrated with vertically stacked typographic forms. Blue-toned imagery inside the letterforms creates contrast while keeping the composition minimal and editorial.',tags:['Typography','Editorial design','Portrait treatment','Composition']},
    march:{title:'March Madness',meta:'Sports Poster • Event Graphics',image:'assets/images/new/march-madness-poster.jpg',text:'A bold basketball event poster using oversized type, a close-cropped ball, orange accents, smoke, and strong hierarchy to create tournament energy.',tags:['Sports graphics','Poster design','Hierarchy','Event design']},
    snickers:{title:'Snickers Orbit',meta:'Photo Manipulation • Product Concept',image:'assets/images/new/snickers-composite.jpg',text:'A surreal product composition where chocolate ribbons wrap around a floating candy center while smaller pieces orbit the scene, using depth, blur, and warm tonal control.',tags:['Photoshop','Photo manipulation','Depth','Product visual']},
    degree:{title:'Degree Cool Rush',meta:'Product Advertising • Composite',image:'assets/images/new/degree-ad.jpg',text:'A product-placement composition that situates Degree deodorant within a lush green environment, using blur, reflection, and contrast to emphasize freshness and performance.',tags:['Advertising','Product placement','Compositing','Atmosphere']},
    mcdonalds:{title:"McDonald's — Tasty. Flavorful. Treat",meta:'Food Advertising • Campaign',image:'assets/images/new/mcdonalds-ad.jpg',text:'A food-ad layout with an oversized burger hero image, falling fries, a muted red brand field, and clear social/contact hierarchy to create appetite appeal and instant recognition.',tags:['Food advertising','Campaign design','Art direction','Hierarchy']},
    coffee:{title:'Coffee Pop-Out',meta:'Social Media Composite • Photo Manipulation',image:'assets/images/new/coffee-popout.jpg',text:'A playful social-media composition where pouring coffee breaks outside the visual frame and interacts with foreground hands and cups, creating a layered illusion of depth.',tags:['Social media','Compositing','Masking','Depth illusion']},
    burger:{title:'Burger Poster',meta:'Food Advertising • Poster Design',image:'assets/images/current/image5.jpg',text:'A dramatic food-ad poster using close-up product imagery, warm light, texture, and bold hierarchy to make the burger feel cinematic and craveable.',tags:['Food advertising','Poster','Composition','Art direction']},
    summer:{title:'Summer Alt Sounds',meta:'Poster • Experimental Typography',image:'assets/images/current/image13.jpg',text:'A music-poster experiment using expressive typography, texture, collage, and visual rhythm.',tags:['Typography','Poster','Music graphics','Texture']},
    underwater:{title:'Underwater Composite',meta:'Photo Manipulation • Visual Storytelling',image:'assets/images/current/image14.jpg',text:'A surreal underwater scene created through masking, color control, compositing, and narrative image-building.',tags:['Photo manipulation','Masking','Mood','Surreal narrative']},
    double:{title:'Double Exposure',meta:'Digital Art • Composite',image:'assets/images/current/image9.jpg',text:'A portrait-driven double exposure merging human silhouette, city imagery, and light into a layered visual narrative.',tags:['Double exposure','Digital art','Photo composite','Narrative']},
    cookies:{title:'Cookie Website',meta:'Web Design • Food Branding',image:'assets/images/current/image3.jpg',text:'A food-focused website concept using atmospheric photography, large editorial type, interface layering, and warm hierarchy.',tags:['Web design','UI hierarchy','Food branding','Layout']},
    water:{title:'Water Graphic',meta:'Educational Graphic • Advertising',image:'assets/images/current/image12.jpg',text:'An educational visual that turns hydration information into an attention-first advertising composition using image manipulation and strong hierarchy.',tags:['Information design','Advertising','Hierarchy','Photo editing']}
  };

  const reveal = [...d.querySelectorAll('.reveal')];
  if (reduceMotion) reveal.forEach(el => el.classList.add('visible'));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } }), {threshold:.12,rootMargin:'0px 0px -7% 0px'});
    reveal.forEach(el => io.observe(el));
  }

  const progressBar = d.getElementById('progressBar');
  const floaters = [...d.querySelectorAll('[data-float]')];
  let scrollTick = false;
  const updateScroll = () => {
    const y = w.scrollY;
    const max = Math.max(d.documentElement.scrollHeight - w.innerHeight, 1);
    progressBar.style.width = `${Math.min(100, y / max * 100)}%`;
    if (!reduceMotion) floaters.forEach(el => { el.style.translate = `0 ${y * Number(el.dataset.float) * .08}px`; });
    scrollTick = false;
  };
  w.addEventListener('scroll', () => { if (!scrollTick) { scrollTick = true; requestAnimationFrame(updateScroll); } }, {passive:true});
  updateScroll();

  const menuButton = d.getElementById('menuButton');
  const mobileNav = d.getElementById('mobileNav');
  const setMenu = open => { mobileNav.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  const navLinks = [...d.querySelectorAll('.desktop-nav a[href^="#"]')];
  const navSections = navLinks.map(a => d.querySelector(a.getAttribute('href'))).filter(Boolean);
  const nio = new IntersectionObserver(entries => entries.forEach(e => { if (!e.isIntersecting) return; navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${e.target.id}`)); }), {rootMargin:'-40% 0px -52% 0px'});
  navSections.forEach(s => nio.observe(s));

  const filters = [...d.querySelectorAll('.filter')];
  const workCards = [...d.querySelectorAll('.work-card')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filters.forEach(x => x.classList.toggle('active', x === btn));
    workCards.forEach(card => card.classList.toggle('is-hidden', f !== 'all' && card.dataset.category !== f));
  }));

  const dialog = d.getElementById('projectDialog');
  const dialogClose = d.getElementById('dialogClose');
  const dialogImage = d.getElementById('dialogImage');
  const dialogMeta = d.getElementById('dialogMeta');
  const dialogTitle = d.getElementById('dialogTitle');
  const dialogText = d.getElementById('dialogText');
  const dialogTags = d.getElementById('dialogTags');
  const openProject = key => {
    const p = projects[key]; if (!p) return;
    dialogImage.src = p.image; dialogImage.alt = `${p.title} project image`; dialogMeta.textContent = p.meta; dialogTitle.textContent = p.title; dialogText.textContent = p.text;
    dialogTags.replaceChildren(...p.tags.map(t => { const s = d.createElement('span'); s.textContent = t; return s; }));
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open','');
  };
  d.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => openProject(el.dataset.project)));
  dialogClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

  if (!reduceMotion && w.matchMedia('(pointer:fine)').matches) {
    const dot = d.getElementById('cursorDot'), ring = d.getElementById('cursorRing'); let mx = 0,my = 0,rx = 0,ry = 0;
    w.addEventListener('pointermove', e => { mx=e.clientX; my=e.clientY; dot.style.left=`${mx}px`; dot.style.top=`${my}px`; });
    const cursorLoop = () => { rx += (mx-rx)*.14; ry += (my-ry)*.14; ring.style.left=`${rx}px`; ring.style.top=`${ry}px`; requestAnimationFrame(cursorLoop); }; cursorLoop();
    d.querySelectorAll('a,button,.tilt').forEach(el => { el.addEventListener('mouseenter',()=>ring.classList.add('is-hover')); el.addEventListener('mouseleave',()=>ring.classList.remove('is-hover')); });

    d.querySelectorAll('.tilt').forEach(card => {
      card.addEventListener('pointermove', e => { const r=card.getBoundingClientRect(); const px=(e.clientX-r.left)/r.width-.5; const py=(e.clientY-r.top)/r.height-.5; card.style.transform=`perspective(900px) rotateX(${py*-8}deg) rotateY(${px*10}deg) translateZ(4px)`; });
      card.addEventListener('pointerleave',()=>{card.style.transform='';});
    });
    d.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => { const r=el.getBoundingClientRect(); el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`; });
      el.addEventListener('pointerleave',()=>{el.style.transform='';});
    });
  }

  const archive = d.getElementById('archiveStrip'); let dragging=false,startX=0,startLeft=0;
  archive.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;startLeft=archive.scrollLeft;archive.setPointerCapture(e.pointerId);});
  archive.addEventListener('pointermove',e=>{if(dragging) archive.scrollLeft=startLeft-(e.clientX-startX);});
  archive.addEventListener('pointerup',()=>dragging=false); archive.addEventListener('pointercancel',()=>dragging=false);

  if (!reduceMotion) {
    const canvas = d.getElementById('sparkCanvas'); const ctx=canvas.getContext('2d'); let sparks=[];
    const resize=()=>{canvas.width=Math.floor(w.innerWidth*devicePixelRatio);canvas.height=Math.floor(w.innerHeight*devicePixelRatio);ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}; resize(); w.addEventListener('resize',resize);
    const addSpark=(x,y)=>{sparks.push({x,y,vx:(Math.random()-.5)*.35,vy:-.25-Math.random()*.35,life:1,size:1+Math.random()*2,h:Math.random()>.5?335:270}); if(sparks.length>90)sparks.shift();};
    w.addEventListener('pointermove',e=>{if(Math.random()>.72)addSpark(e.clientX,e.clientY);},{passive:true});
    const loop=()=>{ctx.clearRect(0,0,w.innerWidth,w.innerHeight);sparks=sparks.filter(s=>s.life>.02);sparks.forEach(s=>{s.x+=s.vx;s.y+=s.vy;s.life*=.965;ctx.globalAlpha=s.life;ctx.fillStyle=`hsl(${s.h} 85% 64%)`;ctx.beginPath();ctx.arc(s.x,s.y,s.size,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;requestAnimationFrame(loop);};loop();
  }
})();
