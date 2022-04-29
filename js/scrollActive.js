const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar a");
console.log(navLi);
window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current + "Section")) {
        li.classList.add("active");
      }
    });
  };