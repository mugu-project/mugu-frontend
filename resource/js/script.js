$(document).ready(function () {
    // AOS
    AOS.init({
        once: true,
        duration: 2000,
    });

    // HeaderProfile_DropDownEvent
    const headerProfile_Btn = $('.h-profile__box');
    const headerProfile_Menu =$('.h-profile__menu');

    headerProfile_Menu.hide();

    headerProfile_Btn.click(function(){
        $(this).find('.h-profile').toggleClass('active');
        headerProfile_Menu.slideToggle();
    });

    // MobileMenu_OnOffEvent
    const mobileMenu_OnBtn = $('.h-mobile__btn--open');
    const mobileMenu_OffBtn = $('.h-mobile__btn--close');
    const mobileMenu = $('.h-mobile__box');

    mobileMenu.hide();

    mobileMenu_OnBtn.click(function(){
        mobileMenu.fadeIn();
    });
    mobileMenu_OffBtn.click(function(){
        mobileMenu.fadeOut();
    });

    // MobileProfile_DropDownEvent
    const mobileProfile_Btn = $('.h-mobile__profile-box');
    const mobileProfile_Menu =$('.h-mobile__profile-lnb');

    mobileProfile_Menu.hide();

    mobileProfile_Btn.click(function(){
        $(this).toggleClass('active');
        mobileProfile_Menu.slideToggle();
    });

    // MainVisualSwiper
    const mainVisualSwiper = new Swiper(".mv-cnt", {
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    // MainProductsSwiper
    const mainProductsSwiper = new Swiper(".mainPrd", {
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
          },
    });
});