var elHeaderSection = document.querySelector('.header-section')
var elHeaderSectionButton = document.querySelector('.js-header-button');


if(elHeaderSectionButton){
  elHeaderSectionButton.addEventListener('click', function() {
    elHeaderSection.classList.toggle('header-section--open');
  });
}