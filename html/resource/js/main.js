$(document).ready(function () {
    se1Box1_Swiper();
    se1Box2_Swiper();
});    

function se1Box1_Swiper(){
    var se1Box1Swiper = new Swiper(".se1Box1 .mySwiper", {
        pagination: {
          el: ".se1Box1 .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".se1Box1 .swiper-button-next",
          prevEl: ".se1Box1 .swiper-button-prev",
        },
      });
}
function se1Box2_Swiper(){
    var se1Box2Swiper = new Swiper(".se1Box2 .mySwiper", {
        pagination: {
          el: ".se1Box2 .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".se1Box2 .swiper-button-next",
          prevEl: ".se1Box2 .swiper-button-prev",
        },
      });
}
