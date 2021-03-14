
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt="right"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: false,
                arrows: false
              }
            },
        ]
        });

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
			$(this)
			  .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
			  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
		  });

		function toggleSlide(item) {
			$(item).each(function(i){
				$(this).on('click', function(e){
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
				})
			});
		};

		toggleSlide('.catalog-item__link');
		toggleSlide('.catalog-item__back');

    // modal

    $('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
    });
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

// валидатор формы

	function valideForms(form) {
		$(form).validate({
			rules : {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Введите свое имя",
				phone: "Введите свой номер телефона",
				email: {
				  required: "Введите свою почту",
				  email: "Неправильно введен адрес почты"
				}
			  }
		});
	};
	valideForms('#order form');
	valideForms('#consultation form');
	valideForms('#consultation-form');

	$('input[name=phone]').mask("+7 (999) 999-9999");

	$('form').submit(function(e){
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val('');
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
			return false;
		});
	});

// СТРЕЛКА ВВЕРХ СКРОЛ
	$(Window).scroll( function () {
		if($(this).scrollTop() > 1600){
			$('.pageUp').fadeIn();
		} else {
			$('.pageUp').fadeOut();
		}
	}); 

	$("a[href=#up]").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
});

	new WOW().init();
  });

// тини слайдер 

// const slider = tns({
// 	container: '.carousel__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	nav: false,
// 	controls: false

// });

// document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
//   });
// document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
//   });

