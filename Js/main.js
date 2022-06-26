

var swiper = new Swiper(".slider-container", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {


        300: {
        slidesPerView: 1,
        
      },

      640: {
        slidesPerView: 1,
        
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1060: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

     
    },


  });


  

  $('.view').magnificPopup({
   type: 'image',
   gallery: {
   enabled: true
       },
    removalDelay: 300,
    mainClass: 'mfp-fade',

  
});
  


const videos = document.querySelector('.play-videos');

const playVideo = document.querySelector('#my-video');

const closeVideo = document.querySelector('.close-btn');

const openVideo = document.querySelector('.play-btn');


function ok () {

    videos.style.display = 'none'
}

function playFun (file) {
    playVideo.src = file;

    videos.style.display = 'block';
}


const nav = document.querySelector('.navbar');

const logo = document.querySelector('.spa');



window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
      nav.classList.add('scrollon');
      logo.classList.add('white');
    }
    else {
      nav.classList.remove('scrollon')
      logo.classList.remove('white');
    }
}




// NAV MENU TOGGLE 

const openNav = document.querySelector('.open-nav-btn');

const open = document.querySelector('nav');

const closeNav = document.querySelector('.close-nav-btn');

const navbarCollape = document.querySelectorAll('.nav-link');

const navLength = navbarCollape.length;


console.log(navLength)


openNav.addEventListener('click', () => {

    open.classList.add('show')
})

      
closeNav.addEventListener('click', () => {

    open.classList.remove('show')
})


navbarCollape.forEach(function (a) {
    a.addEventListener('click', () => {

      open.classList.remove('show');

    })
})




for (let i = 0; i < navLength; i++) {
  navbarCollape[i].addEventListener('click', function () {

    let active = document.getElementsByClassName('active');
    active[0].className = active[0].className.replace(' active', '');
    this.className += ' active';
  });
}

