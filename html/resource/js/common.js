$(document).ready(function () {
    footer_Swiper();
});    


function footer_Swiper(){
    var bannerSwiper = new Swiper(".banner_zone .mySwiper", {
        //loop:true,
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".footerbtn .swiper-button-next",
          prevEl: ".footerbtn .swiper-button-prev",
        },
  });
}