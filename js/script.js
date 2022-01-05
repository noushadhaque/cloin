// =============venobox for service part 2==================

$(document).ready(function(){
    $('.venobox').venobox(); 
});

// =============venobox for service part 2==================

// =============counter up for fact section=================

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// =============counter up for fact section=================
// =============slick for testi section=====================
$('.testi-main').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });
// =============slick for testi section======================
// =============slick for client section=====================
$('.client-slider').slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
  ]
});
// =============slick for client section=====================