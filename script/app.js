const timelineMax = new TimelineMax();

//welcome animation
const hero = document.querySelector(".hero");
const headline = document.querySelector(".headline");
const secondaryheadline = document.querySelector(".secondary-headline");
const navlinks = document.querySelector(".nav-links");

timelineMax.fromTo(hero, 3, {height: "0%"}, {height: "100%", ease:Power2.easeInOut})
.fromTo(headline, 1, {opacity: 0, x: 150, left: "0%"}, {opacity: 1, x:0, left: 40 })
.fromTo(secondaryheadline, 1, {opacity: 0, x: 150, left: "0%"}, {opacity: 1, x:0, left: 40 })
.fromTo(navlinks, 1, {opacity: 0}, {opacity: 1});


const project = document.querySelector("#projects");

project.addEventListener("scroll", () => {
    console.log("test");
})