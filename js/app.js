const closeMenuBtn      = document.getElementById('close-menu-button');
const openMenuButton    = document.getElementById('open-menu-button');
const twitterMenu       = closeMenuBtn.parentElement;

closeMenuBtn.addEventListener('click', _=> twitterMenu.classList.remove('open'));
openMenuButton.addEventListener('click',_=> twitterMenu.classList.add('open'));
twitterMenu.addEventListener('click',e=>e.stopPropagation());
window.addEventListener('click',e => {
  if(e.target !== openMenuButton && twitterMenu.classList.contains('open')) twitterMenu.classList.remove('open')
});