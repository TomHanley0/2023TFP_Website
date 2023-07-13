const navLogo1 = document.getElementById('project-NavItem');
const navLink2 = document.getElementById('wetLab-NavItem');
const navLink3 = document.getElementById('modelling-NavItem');
const navLink4 = document.getElementById('humanPractices-NavItem');
const navLink5 = document.getElementById('team-NavItem');
const navLogo = document.getElementById('navBarLogo');

const tl = new TimelineMax();
const tl1 = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const tl4 = new TimelineMax();
const tl5 = new TimelineMax();

tl5.delay(1.0)
.fromTo(navLogo, 0.6, {y:-100}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

tl.delay(1.07)
.fromTo(navLogo1, 0.6, {y:-70}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

tl1.delay(1.14)
.fromTo(navLink2, 0.6, {y:-70}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

tl2.delay(1.23)
.fromTo(navLink3, 0.6, {y:-70}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

tl3.delay(1.29)
.fromTo(navLink4, 0.6, {y:-70}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

tl4.delay(1.36)
.fromTo(navLink5, 0.6, {y:-70}, { y: 0, ease: Power2.easeOut}, "-=1.1s");

