const floatBox = document.querySelector(".float-box");
const question = document.querySelector(".faq");
question.addEventListener("mouseover", () => {
    floatBox.classList.add("move");
});
question.addEventListener("mouseout", ()=> {
    floatBox.classList.remove("move");
})