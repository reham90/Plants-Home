$(window).on('load', function() {
  $(".preloader").hide();
});
$(document).ready(function() {
  new WOW().init();



  //phone size menu onclick
  if ($(window).width() <= 991) {

      $(".menu-id").click(function(e) {
          e.preventDefault();

          $(".navgition").toggleClass("reset-left");

          $("body").toggleClass("overflow");


      });
     
      //slide down menu
      $(".menu-item-has-children").click(function(e) {
          e.preventDefault();
          $(this).find(".sub-menu ").slideToggle(400);
          $(".menu-item-has-children ").not(this).find(".sub-menu ").slideUp(400);
          if ($(window).width() <= 991) {

              $(this).toggleClass("active");
              $(".menu-item-has-children ").not(this).removeClass("active");

          }
      });
  }

  

  //fixed nav
  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      var $stickyNav = $(".top-header");
      var $stickyHeader = $("header");
      var windowWidth = $(window).width();
      // Handle fixed navigation
      $stickyNav.toggleClass("fixed-nav", scroll >= 200);
      // Handle fixed header
      if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
          $stickyHeader.addClass("fixed-header");
          $('.search-content').removeClass('height-when-close', 1000);
      }

      if (scroll === 0) {
          $stickyNav.removeClass("fixed-header");
          $stickyHeader.removeClass("fixed-header");
          $('.search-content').addClass('height-when-close', 500);
          $('.search-content').removeClass('height-when-open', 500);
          $('.search-btn').removeClass('close-search');
      }
      if (lastScroll - scroll < 0) {
          $stickyNav.removeClass("fixed-header");
          $stickyHeader.removeClass("fixed-header");
      }
      lastScroll = scroll;
  });

  var lastScroll = 0;



  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1000
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  });

  ///////// ** main-slider ** /////////
  var mainSlider = new Swiper(".main-slider .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".main-slider .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".main-slider .swiper-btn-next",
          prevEl: ".main-slider .swiper-btn-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });


 

 



  

  if ($(window).width() <= 991) {
///////// **category-section** /////////

var category = new Swiper(".category-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".category-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".category-slider .swiper-btn-next",
        prevEl: ".category-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 7,
            spaceBetween: 24,
        },
    },
});


  }

///////// **small-plants-slider-section** /////////

var smallPlants = new Swiper(".small-plants-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".small-plants-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".small-plants-slider .swiper-btn-next",
        prevEl: ".small-plants-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});

///////// **specials-section** /////////

var specials = new Swiper(".specials-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".specials-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".specials-slider .swiper-btn-next",
        prevEl: ".specials-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});

///////// **big-plants-slider-section** /////////

var bigPlants = new Swiper(".big-plants-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".big-plants-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".big-plants-slider .swiper-btn-next",
        prevEl: ".big-plants-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});


///////// **care-plants-slider-section** /////////

var carePlants = new Swiper(".care-plants-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".care-plants-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".care-plants-slider .swiper-btn-next",
        prevEl: ".care-plants-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});


///////// **alovera-plants-slider-section** /////////

var aloveraPlants = new Swiper(".alovera-plants-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".alovera-plants-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".alovera-plants-slider .swiper-btn-next",
        prevEl: ".alovera-plants-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});



 


  ///////// **testimonials-slider-section** /////////

var testimonials = new Swiper(".testimonials-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".testimonials-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonials-slider .swiper-btn-next",
        prevEl: ".testimonials-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

//////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  
/////////////////////// count down ////////////////////

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            // document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days2").innerText = Math.floor(distance / (day)),
                document.getElementById("hours2").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes2").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                // document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());
  
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 991) {
      $(".footer-accordion").click(function() {
          var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
          $(".footer-accordion").not(this).removeClass("active");
          $(this).toggleClass("active");
          if ($(this).siblings().css("max-height") == "0px") {
              $(this).siblings().css("max-height", x);
              $(this).siblings(".nav-foot").css("padding-top", "15px");
          } else {
              $(this).siblings().css("max-height", "0");
              $(this).siblings(".nav-foot").css("padding-top", "0");
          }


      });
  };

  $(".close-icon").click(function(){
    $(".greeting-bar ").remove();
  });

  const Carousel = (() => {
    const getActiveSlide = () =>
        document.querySelector(".carousel__slide.active");
    const getFirstSlide = () =>
        document.querySelector(".carousel__slider").firstElementChild;
    const getLastSlide = () =>
        document.querySelector(".carousel__slider").lastElementChild;

    const getSiblingSlide = (slide, direction) =>
        direction === "prev"
            ? slide.previousElementSibling
            : slide.nextElementSibling;

    const getNewActiveSlide = (key, activeSlide) => {
        const actions = {
            Home: getFirstSlide,
            End: getLastSlide,
            ArrowLeft: () => getSiblingSlide(activeSlide, "prev"),
            ArrowRight: () => getSiblingSlide(activeSlide, "next")
        };
        return actions[key]?.() || null;
    };

    const updateScreen = (activeSlide) => {
        const carouselScreen = document.querySelector(".image-display .screen");
        const img = activeSlide.querySelector("img").cloneNode(true);
        carouselScreen.innerHTML = "";
        carouselScreen.appendChild(img);
    };

    const scrollToActiveSlide = (activeSlide) => {
        const carouselSlider = document.querySelector(".carousel__slider");
        const { offsetLeft, offsetWidth } = activeSlide;
        const { clientWidth } = carouselSlider;

        carouselSlider.scrollTo({
            left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
            behavior: "smooth"
        });
    };

    const updateActiveSlideClass = (activeSlide) => {
        document
            .querySelectorAll(".carousel__slide.active")
            .forEach((slide) => slide.classList.remove("active"));
        activeSlide.classList.add("active");
    };

    const updateCarousel = (activeSlide) => {
        updateActiveSlideClass(activeSlide);
        updateScreen(activeSlide);
        scrollToActiveSlide(activeSlide);
        updateButtonStates(activeSlide);
    };

    const updateButtonStates = (activeSlide) => {
        const prevButton = document.querySelector(".carousel__btn.prev");
        const nextButton = document.querySelector(".carousel__btn.next");

        prevButton.disabled = !getSiblingSlide(activeSlide, "prev");
        nextButton.disabled = !getSiblingSlide(activeSlide, "next");
    };

    const handleKeydown = (e) => {
        if (!e.target.closest(".carousel__slider")) return;
        const activeSlide = getActiveSlide();
        const newActiveSlide = getNewActiveSlide(e.key, activeSlide);

        if (newActiveSlide) {
            e.preventDefault();
            updateCarousel(newActiveSlide);
        }
    };

    const handleButtonClick = (e) => {
        const activeSlide = getActiveSlide();
        const newActiveSlide = getSiblingSlide(
            activeSlide,
            e.currentTarget.classList.contains("prev") ? "prev" : "next"
        );

        if (newActiveSlide) {
            updateCarousel(newActiveSlide);
        }
    };

    const handleCarouselClick = (e) => {
        const clickedSlide = e.target.closest(".carousel__slide");
        if (clickedSlide) {
            updateCarousel(clickedSlide);
        }
    };

    const initCarousel = () => {
        const carouselSlider = document.querySelector(".carousel__slider");
        const prevButton = document.querySelector(".carousel__btn.prev");
        const nextButton = document.querySelector(".carousel__btn.next");

        updateCarousel(getFirstSlide());

        document.addEventListener("keydown", handleKeydown);
        prevButton.addEventListener("click", handleButtonClick);
        nextButton.addEventListener("click", handleButtonClick);
        carouselSlider.addEventListener("click", handleCarouselClick);
    };

    initCarousel();
})();

});