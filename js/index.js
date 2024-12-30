document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('ageModal');
    const acceptBtn = document.getElementById('acceptBtn');
    
    document.body.classList.add('modal-open');
    
    acceptBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  });


  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  