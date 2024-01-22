/*MAIN*/
/*
anime({
    targets: '#home .white-box',
    width: '450px',
    translateX: 0,
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate',
});
*/

anime({
    targets: 'h1, .direccion',
    translateX: -60,
    easing: 'easeInOutQuad',
    duration: 1800,
    direction: 'reverse',
    delay: anime.stagger(200),
    opacity: [1, 0],
});


/*SOMOS*/
/*
anime({
    targets: '#somos #direccion, #somos .white-box, #servicios .precio',
    translateY: -60,
    easing: 'easeInOutQuad',
    duration: 1000,
    direction: 'reverse',
    delay: anime.stagger(400),
    opacity: [1, 0]
});
*/

/*SERVICIOS*/

/*anime({
    targets: '.book-here',
    translateY: 60,
    easing: 'easeInOutQuad',
    duration: 1000,
    direction: 'reverse',
    delay: anime.stagger(400),
    opacity: [1, 0]
});*/

/*BIENESTAR*/
/*
anime({
    targets: '.dimensiones',
    translateX: 60,
    easing: 'easeInOutQuad',
    duration: 1000,
    direction: 'reverse',
    delay: anime.stagger(400),
    opacity: [1, 0]
});
*/

/*BODY AND MIND*/

anime({
    targets: '#body-and-mind .logo, #body-and-mind p',
    translateY: 60,
    easing: 'easeInOutQuad',
    duration: 1000,
    direction: 'reverse',
    delay: anime.stagger(400),
    opacity: [1, 0]
});


/*
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var animation = anime({
        targets: '.seek-anim-demo .el',
        translateX: 270,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine'
        // El autoplay se manejará automáticamente sin la necesidad de la opción explícita.
      });
  
      var seekProgressEl = document.querySelector('.seek-anim-demo .progress');
      seekProgressEl.oninput = function() {
        animation.seek(animation.duration * (seekProgressEl.value / 100));
      };
    }, 1000); // Ajusta el valor según sea necesario
  });
  */