$(document).ready(function () {
    se1Box1_Swiper();
    se1Box2_Swiper();
    se3Board();
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
function se1Box2_Swiper(){
  var $notice = $('.tab_wrap');
  var $noticeTab = $notice.find('h4');
  var $noticeCont = $notice.find('.tab_cont');

  $noticeTab.on('click focusin', function(e) {  
      e.preventDefault();
      var tabID = this.id.split("_")[1];
      console.log('tabID',tabID);
      var $nListID = $('#list_' + tabID);
      if ($nListID.css("display") == "none") {
          $noticeTab.removeClass('on');
          $noticeCont.css('display','none');
      }
      $(this).addClass("on");
      $nListID.css('display','block');
  });
}
