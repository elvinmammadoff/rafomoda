document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 210) {
        document.getElementById('header').classList.add('fixed');
      } else {
        document.getElementById('header').classList.remove('fixed');
      } 
  });
}); 