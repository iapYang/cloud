import $ from 'jquery';

import '../style/style.scss';

const $menu = $('.menu');
const $section5 = $('.home-section-5');
const $window = $(window);

$('.menu-icon').on('click', () => {
    if ($menu.hasClass('active')) {
        $menu.removeClass('active');
    } else {
        $menu.addClass('active');
    }
});

$window.on('scroll', e => {
    if (window.pageYOffset < $section5.position().top - $window.height()) return;
    if ($section5.hasClass('fadeIn')) return;

    $section5.addClass('fadeIn');
});
