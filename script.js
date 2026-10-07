const progress=document.getElementById('progress'),clock=document.getElementById('clock');
function update(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max?(scrollY/max)*100:0}%`}
addEventListener('scroll',update,{passive:true});update();
function time(){const d=new Date();clock.textContent=[d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':')}
time();setInterval(time,1000);
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${(i%4)*70}ms`;observer.observe(el)});