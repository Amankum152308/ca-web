// main.js - simple demo interactions
document.addEventListener('DOMContentLoaded', function(){
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you — we will contact you shortly.');
      contactForm.reset && contactForm.reset();
    });
  }
  const uploadBtn = document.getElementById('uploadBtn');
  if(uploadBtn){
    uploadBtn.addEventListener('click', function(){
      const input = document.getElementById('fileInput');
      if(!input || !input.files || input.files.length===0){
        alert('Please select files to upload.');
        return;
      }
      const names = Array.from(input.files).map(f => f.name).join(', ');
      const out = document.getElementById('uploadResult');
      out && (out.textContent = 'Files ready: ' + names + ' — This demo does not actually upload files.');
    });
  }
});
