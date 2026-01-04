// Small interactive behaviors: menu toggle, form validation, skills animation
document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent=new Date().getFullYear();

  // menu
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle){
    toggle.addEventListener('click',()=>{
      const open = nav.style.display === 'block';
      nav.style.display = open ? '' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // form
  const form=document.getElementById('contactForm');
  const msg=document.getElementById('formMessage');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd=new FormData(form);
      if(!fd.get('name')||!fd.get('email')||!fd.get('message')){
        msg.textContent='Please fill all fields.'; msg.style.color='crimson'; return;
      }
      // simulate send
      msg.textContent='Message sent — thanks!'; msg.style.color='green';
      form.reset();
    });
  }

  // animate skills
  document.querySelectorAll('.skill-bar').forEach(bar=>{
    const level = Number(bar.dataset.level||0);
    const inner = bar.querySelector('span');
    setTimeout(()=>{ inner.style.width = level + '%'; }, 300);
  });
});
