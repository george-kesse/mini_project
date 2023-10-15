/** toggle icon navbar */
let menuIcon =document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

/*scroll section */
let sections =document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector( 'header nav a[href*='+ id +']' ).classList.add('active');
            })
        }
    })

    /* sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY >100);

    /**remove  toggle icon and navbar when click on navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');

    }
/* scroll reveall*/
ScrollReveal({ /*reset: true ,*/
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , .heading', { origin:'top'});
ScrollReveal().reveal('.home-img , .service-container ,.porfolio-box , .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left'});
 /* typed js*/
 /*const typed = new typed('.multiple-text', {
    Strings:['Frontend Developer','Tutor','Network Administrator'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

 }); */

 
    const typed = new Typed('#multiple-text ', {
      strings: ['Frontend Developer', 'Network Administrator'],
      typeSpeed: 100,
      typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    });


