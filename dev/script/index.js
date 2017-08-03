import $ from 'jquery';

import '../style/style.scss';

const $menu = $('.menu');

$('.menu-icon').on('click', () => {
    if ($menu.hasClass('active')) {
        $menu.removeClass('active');
    } else {
        $menu.addClass('active');
    }
});
