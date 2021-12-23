const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    reponsive: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  $(window).resize(function(){
      $(".projects").css({
          height: "100%"
        });
      $(".project").css({
        height: "100%"
      });
      $(".flip-card").css({
        height:"100%"
      })
      $(".flip-card-inner").css({
        height:"100%"
      })
      $(".flip-card-front").css({
        height:"100%"
      })
  });