// Mobile menu
document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.main-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  // Contact form: opens the visitor's email app with the message ready to send to our address.
  var f=document.querySelector('form.demo-form');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var g=function(id){var el=document.getElementById(id);return el?el.value.trim():'';};
    var to=g('interest')==='Requesting a demo'||g('interest')==='Starting a free trial'||g('interest')==='Enterprise / franchise pricing'?'hello@venixtus.com':'support@venixtus.com';
    var body='Name: '+g('name')+'\nEmail: '+g('email')+'\nCompany: '+g('company')+'\nInterested in: '+g('interest')+'\n\n'+g('message');
    var ok=document.querySelector('.form-success');
    if(ok){ok.textContent='Your email app should open with the message ready. Press send there. If nothing opens, email '+to+' directly.';ok.classList.add('show');}
    window.location.href='mailto:'+to+'?subject='+encodeURIComponent('VeniXtus QMS: '+g('interest'))+'&body='+encodeURIComponent(body);
  });}
});
