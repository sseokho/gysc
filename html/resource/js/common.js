$(document).ready(function () {
    footer_Swiper();
});    


function footer_Swiper(){
    var bannerSwiper = new Swiper(".banner_zone .mySwiper", {
        loop:true,
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
            delay: 1000,
        },
        navigation: {
          nextEl: ".footerbtn .swiper-button-next",
          prevEl: ".footerbtn .swiper-button-prev",
        },
  });

  $('.footerbtn .swiper-button-pause').click(function(){
		if($(this).hasClass('off')){
			$(this).removeClass('off');
			bannerSwiper.autoplay.start();
		}else{
			$(this).addClass('off');
			bannerSwiper.autoplay.stop();
		}
	});
}