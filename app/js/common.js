$('.cases-slider').slick({
    slidesToShow: 3,
    // variableWidth: true,
    arrows: false,
    // appendArrows: '.cases-slider__nav',
    // prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    // nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        }
    ]
});

$('.steps-slider').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.description-steps-slider',
    focusOnSelect: true,
    variableWidth: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                variableWidth: false,
            }
        }
    ]
});

$('.description-steps-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
    // asNavFor: '.steps-slider'
});

$('[name="phone"]').mask('+7(999) 999-99-99');

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end


// animate number
$(document).ready(function () {
    var target = $('.benefits__inner');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function () {
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem) {
            $({blurRadius: 5}).animate(
                {blurRadius: 0},
                {
                    duration: 3500,
                    easing: "swing",
                }
            );
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
                " "
            );
            $(".benefits__number").each(function () {
                var tcount = $(this).data("count");
                $(this).animateNumber(
                    {
                        number: tcount,
                        easing: "easeInQuad",
                        numberStep: comma_separator_number_step
                    },
                    3000
                );
            });
        }
    });
});

new WOW().init();