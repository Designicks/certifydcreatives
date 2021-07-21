$('.brands-carousel').owlCarousel({
    loop: true,
    item: 4,
    margin: 5,
    nav: true,
    center: false,
    dots: false,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: 100,
    slideSpeed: 5000,
    rewind: false,
    mouseDrag: true,
    touchDarg: true,
    lazyload: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


//Clients Slider
$('.testimonial-carousel').owlCarousel({
    loop: true,
    item: 3,
    stagePadding: 30,
    margin: 40,
    nav: false,
    center: false,
    dots: false,
    dotsData: false,
    dotsEach: false,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: 100,
    slideSpeed: 5000,
    rewind: true,
    mouseDrag: true,
    touchDarg: true,
    lazyload: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//Portfolio PAge Slider
$('.portfolioCat-carousel').owlCarousel({
    loop: true,
    item: 4,
    margin: 20,
    nav: true,
    center: false,
    dots: false,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: 100,
    slideSpeed: 5000,
    rewind: false,
    mouseDrag: true,
    touchDarg: true,
    lazyload: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});