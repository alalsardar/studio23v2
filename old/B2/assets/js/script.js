// Main nav
var tl = gsap.timeline({});
tl.from(".logo",1,{
	y:-200,
	opacity: 0,
});

tl.from("nav ul li",1,{
	y:-200,
	stagger: 0.2,
	opacity: 0,
});

// tl.from(".menu",1,{
// 	y:-200,
// 	opacity: 0,
// });

tl.from(".menu_each_social_icon",1,{
	y:-250,
	stagger: 0.2,
	opacity: 0,
});

// tl.from(".hero-wrap",1,{
// 	y:50,
// 	stagger: 0.4,
// 	opacity: 0,
// });

// Section 3

// tl.from(".home_sec3_title h1",1,{
// 	y:10,
// 	// stagger: 0.1,
// 	opacity: 0,
// });

// tl.from(".home_sec3_title p",1,{
// 	y:15,
// 	// stagger: 0.1,
// 	opacity: 0,
// });

// ScrollTrigger.create({
//     // trigger: '.header',
//     // scroller: '.header',
//     // start: 'top+=0% 0%',
//     // end: 'bottom+=0% 0%',
//     // animation: gsap.to('.header', {backgroundSize: '900%'}),
//     // scrub: 10,
//     // markers: true
// })


// ScrollTrigger.create({
//     trigger: '.header',
//     scroller: '.container',
//     start: 'top+=30% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('#menu_and_hero', {backgroundSize: '120%'}),
//     scrub: 2,
//     // markers: true
// })

// ScrollTrigger.create({
//     trigger: '.header',
//     scroller: '.container',
//     start: 'top+=30% 50%',
//     end: 'bottom-=40% 50%',
//     animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//     scrub: 2,
//     // markers: true
// })

// Locomotive
const Locoscroll = new LocomotiveScroll({
	el:document.querySelector("[data-scroll-container]"),
	smooth:true,
	smartphone:{
		smooth:true
	}
});


 const scroller = new LocomotiveScroll({
 	el:document.querySelector("[data-scroll-container]"),
 	smooth:true,
 	smartphone:{
		smooth:true
	}
 });

// Home page Section2
// tl.from(".home_sec2_right span",1,{
// 	y:50,
// 	// stagger: 0.9,
// 	opacity: 0.0,
// });


