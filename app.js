const leftBlock = document.querySelector(".one");
const rightBlock = document.querySelector(".two");
const nameBlock = document.querySelector(".name");
const rname = document.querySelector(".rname");
const lname = document.querySelector(".lname");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const projArr = [1, 2, 3, 4, 5];

const tl = new TimelineMax();

tl.fromTo(leftBlock, 1, { height: "0%" }, { height: "100%" })
  .fromTo(rightBlock, 1, { height: "100%" }, { height: "00%" }, "-=1")
  .fromTo(nav, 1, { height: "100vh" }, { height: "10vh" })
  .fromTo(
    nameBlock,
    1,
    { top: "40%", left: "27%" },
    { top: "0%", left: "0%", fontSize: "0px" },
    "-=1"
  )
  .fromTo(rname, 0.3, { color: "#d30004" }, { color: "#ffffff" }, "-=1")
  .to(lname, 0.3, { color: "#ffffff" }, "-=1")
  .fromTo(links, 1, { opacity: "0" }, { opacity: "1" })
  .fromTo(logo, 1, { opacity: "0" }, { opacity: "1" }, "-=1");

// window.onscroll = function () {
//   // strt;
// };
