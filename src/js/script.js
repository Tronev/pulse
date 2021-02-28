// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt="left"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt="right"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             },
//         ]
//         });
//   });


var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    dots: false
  });