var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

if(noButton) {
  noButton.addEventListener('click', closeModal());
}


backdrop.addEventListener('click', function() {
  closeModal();
  mobileNav.classList.remove('open');
});

function closeModal() {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if(modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
})