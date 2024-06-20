document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const carousel = document.querySelector('.carousel');
  const carouselContainer = document.querySelector('.carousel-container');
  // GSAP timeline with repeat delay
  gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 })
    .to([cards[0], cards[2], cards[4] , cards[6] , cards[8] , cards[10]], { y: -50,  duration: 5, ease: 'power1.inOut' }, 0)
    .to([cards[0], cards[2], cards[4] , cards[6] , cards[8] , cards[10]], { y: 0, duration: 5, ease: 'power1.inOut', }, 5)
    .to([cards[0], cards[2], cards[4] , cards[6] , cards[8] , cards[10]], { y: 50, duration: 5, ease: 'power1.inOut' }, 10)
    .to([cards[1], cards[3], cards[5] , cards[7] , cards[9] ], { y: 50, duration: 5, ease: 'power1.inOut' }, 0)
    .to([cards[1], cards[3], cards[5] , cards[7] , cards[9]], { y: 0, duration: 5, ease: 'power1.inOut',  }, 5)
    .to([cards[1], cards[3], cards[5] , cards[7] , cards[9]], { y: -50, duration: 5, ease: 'power1.inOut' }, 10);

  function moveCarousel() {
    gsap.to(cards, { 
      x: -carousel.scrollWidth / 2,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (carousel.scrollWidth / 2))
      }
    });
  }
  moveCarousel();
});
