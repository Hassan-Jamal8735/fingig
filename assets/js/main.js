(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $windowOn = $(window);

  $windowOn.on("load", function () {
    const body = $("body");
    body.addClass("loaded");

    setTimeout(function () {
      body.removeClass("loaded");
    }, 1500);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("svg");
    if (!svg) return;

    const tls = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Loader heading text
    if (document.querySelector(".loader-wrap-heading")) {
      tls.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 0.5,
        y: -100,
        opacity: 0,
      });
    }

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    // SVG animation
    tls
      .to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.in",
      })
      .to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.out",
      });

    // Loader wrap
    if (document.querySelector(".loader-wrap")) {
      tls
        .to(".loader-wrap", { y: -1500 })
        .to(".loader-wrap", { zIndex: -1, display: "none" });
    }
  });

  $documentOn.ready(function () {
    /* ================================
       Mobile Menu Js Start
    ================================ */

    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    $("#mobile-menu-1").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "9999",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    /* ================================
       Sidebar Toggle Js Start
    ================================ */

    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });

    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    /* ================================
       Body Overlay Js Start
    ================================ */

    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    /* ================================
       Sticky Header Js Start
    ================================ */

    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    /* ================================
       Video & Image Popup Js Start
    ================================ */

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    /* ================================
       Counterup Js Start
    ================================ */

    $(".gt-count").counterUp({
      delay: 15,
      time: 4000,
    });

    /* ================================
       Wow Animation Js Start
    ================================ */

    // new WOW().init();

    /* ================================
       Nice Select Js Start
    ================================ */

    if ($(".single-select").length) {
      $(".single-select").niceSelect();
    }

    // project Image active
    // Select all thumbs
    $(".thumb.thumb-active").each(function (index) {
      if (index === 0) {
        $(this).addClass("active");
      }
    });

    // Add hover effect
    $(".thumb.thumb-active").on("mouseenter", function () {
      $(".thumb.thumb-active").removeClass("active");
      $(this).addClass("active");
    });

    // Project slick Slider
    function initSlick() {
      const $slider = $(".project-three-slider");
      if ($slider.length === 0) return;

      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }

      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $(".array-prev"),
        nextArrow: $(".array-next"),
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            },
          },
        ],
      });

      $slider.find(".thumb").first().addClass("active");
    }

    /* ================================
       GT Team Slider Js Start
    ================================ */

    if ($(".team-slider-active").length > 0) {
      const gtInstagramSlider2 = new Swiper(".team-slider-active", {
        spaceBetween: 30,
        speed: 1300,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       GT Project Three Slider Js Start
    ================================ */
    function initSlick() {
      if ($(".project-three-slider").hasClass("slick-initialized")) {
        $(".project-three-slider").slick("unslick");
      }

      $(".project-three-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,

        prevArrow: $(".array-prev"),
        nextArrow: $(".array-next"),

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
              variableWidth: false,
            },
          },
        ],
      });
    }

    // $(document).ready(function () {
    //   initSlick();
    //   $(window).on("resize", initSlick);
    // });

    /* ================================
       GT Room Slider Js Start
    ================================ */

    if ($(".gt-room-slider").length > 0) {
      const gtRoomSlider = new Swiper(".gt-room-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1699: {
            slidesPerView: 5,
          },
          1399: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".gt-room-explore-slider").length > 0) {
      const gtRoomExploreSlider = new Swiper(".gt-room-explore-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".room-slider-3").length > 0) {
      const gtRoomSlider3 = new Swiper(".room-slider-3", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 1.8,
          },
          991: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
        Instagram Slider Js Start
    ================================ */

    if ($(".gt-instagram-slider").length > 0) {
      const gtInstagramSlider = new Swiper(".gt-instagram-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".gt-instagram-slider-2").length > 0) {
      const gtInstagramSlider2 = new Swiper(".gt-instagram-slider-2", {
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       Hero Slider Js Start
    ================================ */

    if ($(".hero-image-slider-four").length > 0) {
      const serviceImageSlider = new Swiper(".hero-image-slider-four", {
        slidesPerView: 'auto',
                spaceBetween: 20,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 4000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
      });
    }

    /* ================================
       Service Slider Js Start
    ================================ */

    if ($(".service-image-slider").length > 0) {
      const serviceImageSlider = new Swiper(".service-image-slider", {
        spaceBetween: 0,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    /* ================================
       GT Special Offer Slider Js Start
    ================================ */

    if ($(".gt-special-offer-slider").length > 0) {
      const gtSpecialOfferSlider = new Swiper(".gt-special-offer-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       GT Testimonial Slider Js Start
    ================================ */

    if ($(".testimonial-img-slider").length > 0) {
      const gtTestimonialSlider = new Swiper(".testimonial-img-slider", {
        spaceBetween: 30,
        slidesPerView: 3,
        direction: "vertical",
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".tastimonial-one-array-next",
          prevEl: ".tastimonial-one-array-prev",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    if ($(".testimonial-text-slider").length > 0) {
      const gtTestimonialSlider = new Swiper(".testimonial-text-slider", {
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        navigation: {
          nextEl: ".tastimonial-one-array-next",
          prevEl: ".tastimonial-one-array-prev",
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

    if ($('.testimonial-slider-4').length > 0) {
    const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        pagination: {
            el: ".dot2",
            clickable: true,
        },
        breakpoints: {
            1399: {
                slidesPerView: 4,
            },
             1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2.4,
            },
            767: {
                slidesPerView: 1.3,
            },
            575: {
                slidesPerView: 1.3,
            },
            0: {
                slidesPerView: 1.2,
            },
        },
    });
    }

     //>> Testimonial-slider Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        effect: "cards",
        cardsEffect: {
          perSlideOffset: 8,
          perSlideRotate: 2,
          slideShadows: false,
        },
        grabCursor: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
    }

     /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 6,
            },
            1199: {
                slidesPerView: 5.5,
            },
            991: {
                slidesPerView: 4.5,
            },
            767: {
                slidesPerView: 3.3,
            },
            575: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1.6,
            },
        },
    });
   }

    if ($(".testimonial-slider-two").length > 0) {
      const gtInstagramSlider2 = new Swiper(".testimonial-slider-two", {
        spaceBetween: 60,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 1.3,
          },
          1199: {
            slidesPerView: 1.3,
          },
          991: {
            slidesPerView: 1.3,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-three").length > 0) {
      const gtInstagramSlider2 = new Swiper(".testimonial-slider-three", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    /* ================================
       GT Project Slider Js Start
    ================================ */

    if ($(".project-page-slider").length > 0) {
      const gtInstagramSlider2 = new Swiper(".project-page-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 3.5,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          470: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".project-page-slider-two").length > 0) {
      const gtInstagramSlider2 = new Swiper(".project-page-slider-two", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 4.5,
          },
          1199: {
            slidesPerView: 3.5,
          },
          991: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          470: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

     /* ================================
      Hover Active Js Start
    ================================ */

    $(".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

   if ($('.service-box-style-4').length) {
        $(".service-box-style-4").on('click', '.service-acc-btn', function () {
            var outerBox = $(this).closest('.service-box-style-4');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.service-acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.service-acc-btn').removeClass('active');
                outerBox.find('.service-acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

   


     /* ================================
         Search Popup Toggle Js Start
      ================================ */
  
      if ($(".search-toggler").length) {
          $(".search-toggler").on("click", function(e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $("body").toggleClass("locked");
          });
      }

    /* ================================
       GSAP Js Start
    ================================ */
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      TweenMax,
      ScrollToPlugin
    );
    //   // 21. Config GSAP
    gsap.config({
      nullTargetWarn: false,
    });

    // ScrollSmoother
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    if ($("#smooth-wrapper").length && $("#smooth-content").length) {
      gsap.config({
        nullTargetWarn: false,
      });

      let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

     /* ================================
      Text Invert Js Start
    ================================ */

    const split2 = new SplitText(".text_invert-2", { type: "lines" });

    split2.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center",
            }
        });
    });

    if($('.tz-sub-tilte').length) {
      var agtsub = $(".tz-sub-tilte");

      if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-sub-anim') ){
          gsap.set(el.split.chars, {
            opacity: 0,
            x: "7",
          });
        }

        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    if($('.tz-itm-title').length) {
		var txtheading = $(".tz-itm-title");

    if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {

        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        if( $(el).hasClass('tz-itm-anim') ){
          gsap.set(el.split.chars, {
            opacity: .3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: .7,
          stagger: 0.2,
        });

      });
    }

    // Hover Move Animation
    const btnWraps = document.querySelectorAll(
      ".gt-hover-btn-wrapper, .gt-hover-btn-wrapper-two"
    );
    const strength = 0.25;
    const maxMove = 60;
    btnWraps.forEach((btnWrap) => {
      const container = btnWrap.closest(".move-btn");

      if (!container) return;

      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;

        let moveX = relX * strength;
        let moveY = relY * strength;

        moveX = Math.max(-maxMove, Math.min(maxMove, moveX));
        moveY = Math.max(-maxMove, Math.min(maxMove, moveY));

        gsap.to(btnWrap, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      container.addEventListener("mouseleave", () => {
        gsap.to(btnWrap, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });
    });

    // Text marquee animation Start//
    if ($(".rolling-text").length) {
      let direction = 1;

      const roll1 = roll(".rolling-text", { duration: 10 });

      const scroll = ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to(roll1, { timeScale: direction, overwrite: true });
          }
        },
      });
    }

    function roll(targets, vars, reverse) {
      vars = vars || {};
      vars.ease || (vars.ease = "none");

      const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10);
          },
        }),
        elements = gsap.utils.toArray(targets),
        clones = elements.map((el) => {
          let clone = el.cloneNode(true);
          el.parentNode.appendChild(clone);
          return clone;
        }),
        positionClones = () =>
          elements.forEach((el, i) =>
            gsap.set(clones[i], {
              position: "absolute",
              overwrite: false,
              top: el.offsetTop,
              left:
                el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
            })
          );

      positionClones();

      elements.forEach((el, i) =>
        tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
      );

      $(window).on("resize", function () {
        let time = tl.totalTime();
        tl.totalTime(0);
        positionClones();
        tl.totalTime(time);
      });

      return tl;
    }

    // Text marquee animation End//

    // Card Scroll (project) animation Start//
    // Project Animation
    if (typeof window === "undefined") return;
    const sv = gsap.matchMedia();

    sv.add("(min-width: 1199px)", () => {
      // ========================
      // Pin animation for desktop
      // ========================
      const tl = gsap.timeline();
      const projectpanels = document.querySelectorAll(".card-single-item");
      let baseOffset = 80;
      let offsetIncrement = 0;

      projectpanels.forEach((section, index) => {
        const topOffset = baseOffset + index * offsetIncrement;
        tl.to(section, {
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: `top ${topOffset}px`,
            end: "bottom 80%",
            endTrigger: ".card-items",
            pinSpacing: false,
            markers: false,
          },
        });
      });

      // ========================
      // Scale + fade animation for desktop
      // ========================
      gsap.utils
        .toArray(".card-items .card-single-item")
        .forEach((element, index, array) => {
          if (index === array.length - 1) return;

          const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
          gsap.to(element, {
            scale: 0.6,
            opacity: 0,
            duration: 2,
            delay: delay,
            scrollTrigger: {
              trigger: element,
              start: "top 25%",
              end: "bottom 15%",
              scrub: 4,
              markers: false,
            },
          });
        });
    });

    // Card Scroll (project) animation End//

    // btn hover animation Start
    var hoverBtns = gsap.utils.toArray(".gt-hover-btn-wrapper");

    const hoverBtnItem = gsap.utils.toArray(".gt-hover-btn-item");
    hoverBtns.forEach((btn, i) => {
      $(btn).mousemove(function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, hoverBtnItem[i], 80);
      }

      function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }
      $(btn).mouseleave(function (e) {
        gsap.to(hoverBtnItem[i], 0.5, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });

    //GSAP smooth animation

    if ($("#smooth-wrapper").length && $("#smooth-content").length) {
      gsap.config({
        nullTargetWarn: false,
      });

      let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

    // scroll Img
    gsap.to(".scroll-image", {
      x: () => {
        const img = document.querySelector(".scroll-image");
        const startRight = img.getBoundingClientRect().right;
        const endLeft = 290;
        const distance = startRight - endLeft - img.offsetWidth;
        return -distance;
      },
      scrollTrigger: {
        trigger: ".scroll-image",
        start: "top 60%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    // gt-btn-trigger-2
    if ($(".gt-btn-trigger-2").length > 0) {
      gsap.set(".gt-btn-bounce-2", {
        y: -100,
        opacity: 0,
      });
      var mybtn = gsap.utils.toArray(".gt-btn-bounce-2");
      mybtn.forEach((btn) => {
        var $this = $(btn);
        gsap.to(btn, {
          scrollTrigger: {
            trigger: $this.closest(".gt-btn-trigger-2"),
            start: "top bottom",
            markers: false,
          },
          duration: 1.2,
          ease: "power3.out",
          y: 0,
          opacity: 1,
        });
      });
    }

    // button hover animation
    $(".gt-hover-btn").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find(".gt-btn-circle-dot").css({
        top: y,
        left: x,
      });
    });

    $(".gt-hover-btn").on("mouseout", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find(".gt-btn-circle-dot").css({
        top: y,
        left: x,
      });
    });

    // btn hover animation End

    // Text on line scroll Animation Start
    $(function () {
      gt_text_invert();
      gt_text_invert_2();
      gt_text_invert_3();
      gt_text_invert_4();
    });

    function gt_text_invert() {
      const split = new SplitText(".gt_text_invert", {
        type: "lines",
        linesClass: "split-line",
      });

      split.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        });
      });
    }

    // 39. tp-text-invert-2 //
    function gt_text_invert_2() {
      const split_2 = new SplitText(".gt_text_invert_2", { type: "lines" });
      split_2.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        });
      });
    }

    // 40. tp-text-invert-3 //
    function gt_text_invert_3() {
      const split_3 = new SplitText(".gt_text_invert_3", { type: "lines" });
      split_3.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        });
      });
    }

    function gt_text_invert_4() {
      const split_3 = new SplitText(".gt_text_invert_4", { type: "lines" });
      split_3.lines.forEach((target) => {
        gsap.to(target, {
          backgroundPositionX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            scrub: 1,
            start: "top 85%",
            end: "bottom center",
          },
        });
      });
    }

    $(".hover-item").each(function () {
      const $this = $(this);
      const $content = $this.find(".cursor-content");

      $this.on("mouseenter", function () {
        const text = $(this).attr("data-cursor");
        $content.html(text);

        gsap.to($content, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(.7)",
        });
      });

      $this.on("mousemove", function (e) {
        const offset = $this.offset();
        const x = e.pageX - offset.left;
        const y = e.pageY - offset.top;

        gsap.to($content, {
          x: x,
          y: y,
          duration: 0.5,
        });
      });

      $this.on("mouseleave", function () {
        gsap.to($content, {
          scale: 0,
          duration: 0.5,
          ease: "back.in(.7)",
        });
      });
    });

    // Text on Windows  Animation Start
    // Animation-1
    let tHero = gsap.timeline();

    let heading_title = new SplitText(".sec-title-1", { type: "chars" });
    let heading_char = heading_title.chars;

    tHero.from(heading_char, {
      rotate: 20,
      ease: "back.out",
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    });

    // Animation-2
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
      });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    // Animation-3
    if (document.querySelectorAll(".cta-area").length > 0) {
      var tl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: ".cta-area",
          pin: true,
          pinSpacing: true,
          scrub: 2,
          start: "bottom 100%",
          end: "200%",
        },
      });

      // Background scale
      tl.to(".cta-area .area-bg", {
        scale: 10,
        delay: 0.1,
        ease: "power2.in",
      });

      // Title scale
      tl.to(
        ".cta-area .title",
        { fontSize: "4vw", ease: "power2.in" },
        "<" // sync with bg
      );

      // SVG width scale
      tl.to(
        ".cta-area .icon svg",
        {
          width: "25vw",
          marginBottom: "20px",
          ease: "power2.in",
        },
        "<"
      );
    }

    let hr = gsap.matchMedia();

    hr.add("(min-width: 768px)", () => {
      let panels = document.querySelectorAll(".tp-hero-2-area");
      panels.forEach((section, index) => {
        tl.to(section, {
          scrollTrigger: {
            trigger: ".tp-hero-2-wrapper",
            // pin: ".cta-area",
            scrub: 1,
            start: "top 80%",
            end: "bottom 0%",
            endTrigger: ".tp-hero-2-wrapper",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    /////////////////////////
    // HERO AREA ANIMATION
    /////////////////////////

    hr.add("(min-width: 768px)", () => {
      const heroTimeline = gsap.timeline();

      const panels = document.querySelectorAll(".tp-hero-2-area");

      panels.forEach((section) => {
        heroTimeline.to(section, {
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: "top top",
            end: "bottom top",
            pinSpacing: false,
            markers: false,
          },
        });
      });

      // Additional hero content animation
      heroTimeline
        .from(".tp-hero-2-content", { y: 100, opacity: 0, duration: 1 })
        .to(".tp-hero-2-bg", { scale: 1.1, duration: 1 });
    });

    // Text on Windows  Animation End

    // Wow type gsap animation Start
    if ($(".gt_fade_anim").length > 0) {
      gsap.utils.toArray(".gt_fade_anim").forEach((item) => {
        let zf_fade_offset = item.getAttribute("data-fade-offset") || 40,
          zf_duration_value = item.getAttribute("data-duration") || 0.75,
          zf_fade_direction = item.getAttribute("data-fade-from") || "bottom",
          zf_onscroll_value = item.getAttribute("data-on-scroll") || 1,
          zf_delay_value = item.getAttribute("data-delay") || 0.15,
          zf_ease_value = item.getAttribute("data-ease") || "power2.out",
          zf_anim_setting = {
            opacity: 0,
            ease: zf_ease_value,
            duration: zf_duration_value,
            delay: zf_delay_value,
            x:
              zf_fade_direction == "left"
                ? -zf_fade_offset
                : zf_fade_direction == "right"
                ? zf_fade_offset
                : 0,
            y:
              zf_fade_direction == "top"
                ? -zf_fade_offset
                : zf_fade_direction == "bottom"
                ? zf_fade_offset
                : 0,
          };
        if (zf_onscroll_value == 1) {
          zf_anim_setting.scrollTrigger = {
            trigger: item,
            start: "top 85%",
          };
        }
        gsap.from(item, zf_anim_setting);
      });
    }

    let controller = new ScrollMagic.Controller();
    let $elheight = window.innerHeight;
    $(".des-text-item, .des-brand-item-inner, .creative-text-wrap").each(
      function () {
        let $this = $(this);
        let $thisHeight = $(this).height();
        let scene = new ScrollMagic.Scene({
          triggerElement: $this[0],
          duration: $thisHeight,
        }).addTo(controller);
        scene.triggerHook(0.9);
        scene.on("enter", function () {
          $this.addClass("active");
        });
        if ($("body").hasClass("smooth-scroll")) {
          scrollbar.addListener(() => {
            scene.refresh();
          });
        }
      }
    );

    // Wow type gsap animation End
    let imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about__img-2",
        start: "top bottom",
        markers: false,
        scrub: 1,
        end: "bottom center",
      },
    });

    // Image pin
    imageTl.to(".about__img-2 img", {
      scale: 1.15,
      duration: 1,
    });

    gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5 });
    gsap.to(".zoom_in", {
      scrollTrigger: {
        trigger: ".zoom_in",
        start: "top center+=200",
        markers: false,
      },
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2,
      },
    });

    //  Fun Fact Panel
    let my = gsap.matchMedia();
    my.add("(min-width: 1200px)", () => {
      const wrap = document.querySelector(".gt-funfact-panel-wrap");
      if (!wrap) return;

      const sections = gsap.utils.toArray(".gt-funfact-panel");

      const cardWidth = sections[0].offsetWidth + 150;
      const visibleCards = 2;
      const totalScrollWidth = cardWidth * (sections.length - visibleCards);

      gsap.to(sections, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          pin: true,
          scrub: 1,
          start: "top 150px",
          end: () => "+=" + totalScrollWidth,
        },
      });
    });

    //  Fun Fact Panel
    let mp = gsap.matchMedia();
    mp.add("(min-width: 992px)", () => {
      const wrap = document.querySelector(".gt-funfact-panel-wrap-2");
      if (!wrap) return;

      const sections = gsap.utils.toArray(".gt-funfact-panel-2");

      const cardWidth = sections[0].offsetWidth + 0;
      const visibleCards = 2;
      const totalScrollWidth = cardWidth * (sections.length - visibleCards);

      gsap.to(sections, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          pin: true,
          scrub: 1,
          start: "top 250px",
          end: () => "+=" + totalScrollWidth,
        },
      });
    });

    // Hero Cards Scroll
    function heroCardsScroll() {
      const wrapper = document.querySelector(".hero-top-content");
      const cards = gsap.utils.toArray(".hero-top-content .card");

      if (!wrapper || cards.length === 0) return;

      let totalCards = cards.length;
      let visibleCards = 5;

      // detect card width (+ gap)
      let card = wrapper.querySelector(".card");
      let cardWidth = card.offsetWidth + 20; // +gap: 20px from SCSS
      let totalScrollWidth = cardWidth * totalCards - cardWidth * visibleCards;

      // reset GSAP if resizing
      gsap.killTweensOf(wrapper);
      ScrollTrigger.getAll().forEach((st) => st.kill());

      gsap.to(wrapper, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-area-four",
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }

    // scroll Img size big
    let width = $(window).width();

    if (width > 1199) {
      gsap.to(".scroll-img", {
        scrollTrigger: {
          trigger: ".scroll-img",
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
          onUpdate: (self) => {
            if (self.progress >= 1) {
              initParallax();
            }
          },
        },
        width: "100%",
      });

      function initParallax() {
        gsap.utils.toArray(".img-container-2").forEach((container) => {
          const img = container.querySelector("img");
          if (!container.classList.contains("parallax-initialized")) {
            container.classList.add("parallax-initialized");

            gsap.fromTo(
              img,
              { yPercent: -60, ease: "none" },
              {
                yPercent: 60,
                ease: "none",
                scrollTrigger: {
                  trigger: container,
                  scrub: true,
                  pin: false,
                },
              }
            );
          }
        });
      }
    }



    // scale animation
    let mg = gsap.matchMedia();

    mg.add("(min-width: 1024px)", () => {
      var scale = document.querySelectorAll(".scale");
      var image = document.querySelectorAll(".scale img");

      scale.forEach((item) => {
        gsap.to(item, {
          scale: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      image.forEach((image) => {
        gsap.set(image, { scale: 1.3 });
        gsap.to(image, {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    });

    mg.add("(min-width: 1024px)", () => {
      var pin_fixed = document.querySelector(".pin-element");
      if (pin_fixed && device_width > 991) {
        gsap.to(".pin-element", {
          scrollTrigger: {
            trigger: ".pin-area",
            pin: ".pin-element",
            start: "top top",
            end: "bottom bottom",
            pinSpacing: false,
          },
        });
      }

      // grow animation
      var grow = document.querySelectorAll(".grow");
      grow.forEach((item) => {
        gsap.to(item, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: item,
            scrub: 2,
            start: "top 90%",
            end: "bottom 50%",
          },
        });
      });
    });

    // text-scale-anim
    const headings = document.querySelectorAll(".text-scale-anim");
    headings.forEach((heading) => {
      const textNodes = [];

      heading.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split(" ").forEach((word, index, array) => {
            const wordSpan = document.createElement("span");
            wordSpan.classList.add("tp-word-span");
            word.split("").forEach((letter) => {
              const letterSpan = document.createElement("span");
              letterSpan.classList.add("tp-letter-span");
              letterSpan.textContent = letter;
              wordSpan.appendChild(letterSpan);
            });
            textNodes.push(wordSpan);
            if (index < array.length - 1) {
              textNodes.push(document.createTextNode(" "));
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          textNodes.push(node.cloneNode(true));
        }
      });

      heading.innerHTML = "";
      textNodes.forEach((node) => heading.appendChild(node));

      const letters = heading.querySelectorAll(".tp-letter-span");
      letters.forEach((letter) => {
        $(letter).on("mouseenter", () => {
          gsap.to(letter, {
            scaleY: 1.3,
            y: "-14%",
            duration: 0.2,
            ease: "sine",
          });
        });

        $(letter).on("mouseleave", () => {
          gsap.to(letter, {
            scaleY: 1,
            y: "0%",
            duration: 0.2,
            ease: "sine",
          });
        });
      });
    });

    const headings_bottom = document.querySelectorAll(
      ".text-scale-anim-bottom"
    );

    headings_bottom.forEach((heading) => {
      const textNodes = [];

      heading.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split(" ").forEach((word, index, array) => {
            const wordSpan = document.createElement("span");
            wordSpan.classList.add("tp-word-span");
            word.split("").forEach((letter) => {
              const letterSpan = document.createElement("span");
              letterSpan.classList.add("tp-letter-span");
              letterSpan.textContent = letter;
              wordSpan.appendChild(letterSpan);
            });
            textNodes.push(wordSpan);
            if (index < array.length - 1) {
              textNodes.push(document.createTextNode(" "));
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          textNodes.push(node.cloneNode(true));
        }
      });

      heading.innerHTML = "";
      textNodes.forEach((node) => heading.appendChild(node));

      const letters = heading.querySelectorAll(".tp-letter-span");
      letters.forEach((letter) => {
        $(letter).on("mouseenter", () => {
          gsap.to(letter, {
            scaleY: 1.3,
            y: "14%",
            duration: 0.2,
            ease: "sine",
          });
        });

        $(letter).on("mouseleave", () => {
          gsap.to(letter, {
            scaleY: 1,
            y: "0%",
            duration: 0.2,
            ease: "sine",
          });
        });
      });
    });

    // Hover Animation image spill
    // <------------hover-effect.umd.js--------------->
    if ($(".tp--hover-item").length) {
      let hoverAnimation__do = function (t, n) {
        let a = new hoverEffect({
          parent: t.get(0),
          intensity: t.data("intensity") || void 0,
          speedIn: t.data("speedin") || void 0,
          speedOut: t.data("speedout") || void 0,
          easing: t.data("easing") || void 0,
          hover: t.data("hover") || void 0,
          image1: n.eq(0).attr("src"),
          image2: n.eq(0).attr("src"),
          displacementImage: t.data("displacement"),
          imagesRatio: n[0].height / n[0].width,
          hover: !1,
        });
        t.closest(".tp--hover-item")
          .on("mouseenter", function () {
            a.next();
          })
          .on("mouseleave", function () {
            a.previous();
          });
      };
      let hoverAnimation = function () {
        $(".tp--hover-img").each(function () {
          let n = $(this);
          let e = n.find("img");
          let i = e.eq(0);
          i[0].complete
            ? hoverAnimation__do(n, e)
            : i.on("load", function () {
                hoverAnimation__do(n, e);
              });
        });
      };
      hoverAnimation();
    }

    // Make sure GSAP and ScrollTrigger are loaded

    gsap.to(".about-card.style-2 .about-card-wrapper", {
      scrollTrigger: {
        trigger: ".about-card.style-2", // element that triggers the animation
        start: "top 50%", // when top of element reaches 80% of viewport
        end: "bottom 10%", // optional, when bottom reaches 20%
        scrub: 3, // smooth scrubbing
      },
      borderRadius: "1000px", // animate border-radius
      duration: 1, // optional, affects speed if scrub: false
      ease: "power2.out",
    });

    // Award-area
    if (document.querySelectorAll(".award-area").length > 0) {
      const boxes = document.querySelectorAll(".award-area .award-box");

      gsap.from(boxes, {
        x: "100%",
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          scrub: 2,
          trigger: ".award-wrapper-box",
          start: "top 100%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });
    }

     /* ================================
       Service Panel Js Start
    ================================ */

	let sv5 = gsap.matchMedia();
	sv5.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 150;
		let offsetIncrement = 120;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 90%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});

 if (document.querySelectorAll(".hero-title-shape-2").length > 0) {

  // GSAP matchMedia initialize
  let mm = gsap.matchMedia();

  const containerMax = getComputedStyle(document.documentElement)
    .getPropertyValue("--container-max-widths")
    .trim();

  // turn into a number (strip "px")
  const containerMaxNum = parseFloat(containerMax);

  // compute the left margin in px
  const marginLeft = (containerMaxNum - window.innerWidth - 30) / 2;

  // 🔥 ACTIVE ONLY ABOVE 1399px
  mm.add("(min-width: 1400px)", () => {
    const img = document.querySelector(".hero-title-shape-2 img");

    if (!img) return; // safety check

    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 20%",
        endTrigger: ".hero-full-image",
        end: "top 20%",
        scrub: true,
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      marginLeft: "-385px",
      ease: "power1.out",
      maxWidth: "100vw",
      maxHeight: "100vh",
    });
  });
}


    // Portfolio Animation
    const device_width = window.innerWidth;

    if (device_width > 992) {
      const portfolioArea = document.querySelector(".portfolio__area");
      const portfolioText = document.querySelector(".portfolio__text");

      if (portfolioArea && portfolioText) {
        gsap.set(portfolioText, { x: "0%", opacity: 1, scale: 1 });

        let portfolioline = gsap.timeline({
          scrollTrigger: {
            trigger: portfolioArea,
            start: "top center-=200",
            pin: portfolioText,
            end: "bottom bottom+=10",
            markers: false,
            pinSpacing: false,
            scrub: 1,
          },
        });

        portfolioline.to(portfolioText, {
          x: "50%",
          duration: 1.2,
          ease: "power3.out",
        });

        portfolioline.to(portfolioText, { scale: 3, duration: 1 });
        portfolioline.to(portfolioText, { scale: 3, duration: 1 });
        portfolioline.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

        gsap.to(portfolioText, {
          scrollTrigger: {
            trigger: portfolioArea,
            start: "top center-=100",
            end: "bottom bottom+=10",
            scrub: 1,
          },
          opacity: 0,
        });
      }
    }

    if (device_width > 767) {
      const portfolioArea = document.querySelector(".testimonial__area-1");
      const portfolioText = document.querySelector(".testimonial__text-1");

      if (portfolioArea && portfolioText) {
        let portfolioline = gsap.timeline({
          scrollTrigger: {
            trigger: portfolioArea,
            start: "top center-=200",
            pin: portfolioText,
            end: "bottom bottom+=10",
            markers: false,
            pinSpacing: false,
            scrub: 1,
          },
        });

        portfolioline.to(portfolioText, { scale: 3, duration: 1 });
        portfolioline.to(portfolioText, { scale: 3, duration: 1 });
        portfolioline.to(portfolioText, { scale: 1, duration: 1 }, "+=2");

        gsap.to(portfolioText, {
          scrollTrigger: {
            trigger: portfolioArea,
            start: "top center-=100",
            end: "bottom bottom+=10",
            scrub: 1,
          },
          opacity: 0,
        });
      }
    }

    // faq shaki img
    if (document.querySelector(".design-project-item")) {
      const pw = gsap.matchMedia();
      pw.add("(min-width: 991px)", () => {
        gsap.set(".design-project-thumb.item-1", { x: -200, rotate: -10 });
        gsap.set(".design-project-thumb.item-2", { x: 200, rotate: 10 });
        document.querySelectorAll(".design-project-item").forEach((item) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 100%",
              end: "bottom center",
              scrub: 1,
            },
          });
          tl.to(item.querySelector(".design-project-thumb.item-1"), {
            x: 0,
            rotate: 0,
          }).to(
            item.querySelector(".design-project-thumb.item-2"),
            { x: 0, rotate: 0 },
            0
          );
        });
      });
    }
    // About Page sticky
    let about_thumb = gsap.matchMedia();
    about_thumb.add("(min-width: 1200px)", () => {
      if ($(".gt-sticky-wrap").length > 0) {
        ScrollTrigger.create({
          trigger: ".gt-sticky-wrap",
          start: "top 150px",
          end: "52%",
          pin: ".gt-sticky",
          pinSpacing: true,
        });
      }
    });

    //-=====================================
    /* ================================
       GSAP Js End
    ================================ */

    /* ================================
       Parallaxie Js Start
    ================================ */

    if ($(".parallaxie").length && $(window).width() > 991) {
      if ($(window).width() > 768) {
        $(".parallaxie").parallaxie({
          speed: 0.55,
          offset: 0,
        });
      }
    }

    /* ================================
       cursor Parallaxie Js Start
    ================================ */

    $(document).on("mousemove", function (e) {
      let x = e.clientX / window.innerWidth - 0.9;
      let y = e.clientY / window.innerHeight - 0.9;

      $(".parallax-layer").each(function () {
        let $this = $(this);
        let speed = parseFloat($this.data("speed")) || 20;

        gsap.to($this, {
          x: x * speed,
          y: y * speed,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    /* ================================
      Faq Custom Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          document
            .querySelector(".faq-item.active")
            ?.classList.remove("active");
          this.classList.add("active");
        });
      });
    });

    /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
      function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
          if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            let n,
              i = 0,
              o = !1;
            (window.onmousemove = function (s) {
              o ||
                (t.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (e.style.transform =
                  "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                (n = s.clientY),
                (i = s.clientX);
            }),
              $("body").on(
                "mouseenter",
                "button, a, .cursor-pointer",
                function () {
                  e.classList.add("cursor-hover"),
                    t.classList.add("cursor-hover");
                }
              ),
              $("body").on(
                "mouseleave",
                "button, a, .cursor-pointer",
                function () {
                  ($(this).is("a", "button") &&
                    $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                    t.classList.remove("cursor-hover"));
                }
              ),
              (e.style.visibility = "visible"),
              (t.style.visibility = "visible");
          }
        }
      }
      itCursor();
    }

    /* ================================
       Back To Top Button Js Start
    ================================ */

    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#gt-back-top").addClass("show");
      } else {
        $("#gt-back-top").removeClass("show");
      }
    });

    $documentOn.on("click", "#gt-back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });

    //>> Typed Text Start <<//
  document.addEventListener("DOMContentLoaded", function () {
    const typedEl = document.querySelector(".type-text");
  
    if (typedEl) {
      new Typed(typedEl, {
        strings: [
          '<span class="highlight">UI/UX</span> Designer',
          '<span class="highlight">Web</span> Designer',
          '<span class="highlight">App</span> Developer',
          '<span class="highlight">Web</span> Developer',
        ],
        typeSpeed: 120,
        backSpeed: 60,
        startDelay: 0,
        backDelay: 200,
        loop: true,
        showCursor: false,
        smartBackspace: true,
      });
    }
  });

  /* ================================
  Pre Loader Js Start
  ================================ */
})(jQuery);

// End jQuery
