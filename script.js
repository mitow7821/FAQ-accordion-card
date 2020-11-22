let question = document.querySelectorAll(".question");
let box = document.querySelector(".box");

question.forEach((link) => {
  link.addEventListener("click", () => {
    link.parentElement.classList.toggle("active");
    box.classList.toggle("active");
    //allows to animate position change
    link.nextElementSibling.style.position = "relative";
    setTimeout(() => {
      link.nextElementSibling.style.position = "absolute";
    }, 250);
  });
});
