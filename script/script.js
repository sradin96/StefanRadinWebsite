$('.header__menu-btn').on('click', function() {
    $('.header__list').toggleClass('open-list');
    $('.header__menu').toggleClass('open-menu');
})

$('.home-js').on('click', homeScroll);

$('.about-js').on('click', aboutScroll);

$('.projects-js').on('click', projectsScroll);

$('.contact-js').on('click', contactScroll);

function homeScroll() {
    $('.header__list').removeClass('open-list');
    $('.header__menu').removeClass('open-menu');
    $('html, body').animate({
        scrollTop: $('.banner').offset().top - 100
    }, 800);
}

function aboutScroll() {
    $('.header__list').removeClass('open-list');
    $('.header__menu').removeClass('open-menu');
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 100
    }, 800);
}

function projectsScroll() {
    $('.header__list').removeClass('open-list');
    $('.header__menu').removeClass('open-menu');
    $('html, body').animate({
        scrollTop: $('.projects').offset().top - 100
    }, 800);
}

function contactScroll() {
    $('.header__list').removeClass('open-list');
    $('.header__menu').removeClass('open-menu');
    $('html, body').animate({
        scrollTop: $('.contact').offset().top - 100
    }, 800);
}

$('.form__btn').on('click', function(e){ 
    if($('.email-js').val().length === 0) {
        $('.warning-email').addClass('warning-error');
        e.preventDefault();
    }
    if($('.name-js').val().length === 0) {
        $('.warning-email').addClass('warning-error');
        e.preventDefault();
    }
    if($('.textarea-js').val().length === 0) {
        $('.warning-email').addClass('warning-error');
        e.preventDefault();
    }
}) 

$('.email-js').blur(function() {
    if($('.email-js').val().length === 0 ) {
        $('.warning-email').addClass('warning-error');
    }
    else {
        $('.warning-email').removeClass('warning-error');
    }
});

$('.name-js').blur(function() {
    if($('.name-js').val().length === 0 ) {
        $('.warning-name').addClass('warning-error');
    }
    else {
        $('.warning-name').removeClass('warning-error');
    }
});

$('.textarea-js').blur(function() {
    if($('.textarea-js').val().length === 0 ) {
        $('.warning-textarea').addClass('warning-error');
    } else {
        $('.warning-textarea').removeClass('warning-error');
    }
});

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}