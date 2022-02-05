const popup = document.querySelector('.popup');
const popupMenuBtn = document.querySelector('.header__menubtn');
const popupCloseBtn = document.querySelector('.popup__closebtn');

popupMenuBtn.addEventListener('click', function() {
  popup.classList.add('popup__opened');
})

popupCloseBtn.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
})
