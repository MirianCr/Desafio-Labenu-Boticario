ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 400
    });
    ScrollReveal().reveal('header .col-1',{
        delay: 500,
        origin: 'left'
    });
    ScrollReveal().reveal('header .col-2',{
        delay: 500,
        origin: 'right'
    });
    ScrollReveal().reveal('.section-two h4',{
        delay: 500,
        origin: 'bottom'
    });
    ScrollReveal().reveal('h1, h2, h3 ,h4',{
        delay: 500,
        origin: 'top'
    });
    ScrollReveal().reveal('.section-two .row img, .section-three .row .col, .section-four .row .col, .row .col',{
        delay: 500,
        origin: 'bottom',
        interval: 200
    });