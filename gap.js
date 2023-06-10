const btnDarkMode = document.querySelector('.dark-mode-btn')

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    document.body.classList.toggle('dark-mode')
}

var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
/* ------  Каталог ------ */
const btnMore = document.querySelector('.btn-more')
const hidCard = document.querySelectorAll('#hidden-card')
const btnScr = document.querySelector('.btn-skr')

btnMore.onclick = function () {
  hidCard.forEach(function(card) {
    card.classList.toggle('hidden')

    if ( card.classList.contains('hidden')) {
      btnMore.textContent = "Показать еще"
    } else {
      btnMore.textContent = "Закрыть"
    }
  })
}


/* ------  Плавный скрол по ссылкам ------ */

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault()
    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

/*
btnScr.onclick = function () {
  hidCard.forEach(function(cards) {
    cards.classList.add('hidden')

  })
} */