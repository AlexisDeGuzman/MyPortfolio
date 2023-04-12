/*================== toggle icon navbar ==================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};


/*==================SCROLL SECTIONS ACTIVE LINK==================*/

//method to select all 'section' and 'header nav a' elements on the page and stores them in a variable
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

// scroll event listener
// makes a function for scroll event on window object
window.onscroll = () => {
	sections.forEach(sec => {  //loops over each section element on the page.
		let top = window.scrollY;  //scrollY property returns the number of pixels that the document has been scrolled vertically from the top of the page.
		let offset = sec.offsetTop - 150; // offsetTop property of the section element returns the distance between the top of the section element and the top of the page.
		let height = sec.offsetHeight; //offsetHeight property of the section element returns the height of the section element.
		let id = sec.getAttribute('id'); //getAttribute() method is used to retrieve the id attribute of the section element.

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			})
		}
	})
	/*================== STICKY NAVBAR ==================*/
	let header = document.querySelector('header')

	header.classList.toggle('sticky', window.scrollY > 100); //syntax classList.toggle(adds or removes, condition (true = adds, false = removes) )

	/*================== remove toggle icon and navbar when click navbar link (scroll) ==================*/
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

	/*================== scroll reveal ==================*/
ScrollReveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================== typed js ==================*/
/*
-go to https://github.com/mattboldt/typed.js
-copy this to your html <script src="https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js"></script>
-delete the text in span tag
-add class on span tag to be used in this js file
-do this:
*/
const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });