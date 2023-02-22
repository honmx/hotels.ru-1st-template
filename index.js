const FAQBtns = document.querySelectorAll(".accordion");

FAQBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.parentNode.children[1].classList.toggle("active");
  })
});