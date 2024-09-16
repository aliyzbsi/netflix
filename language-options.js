document
  .querySelector(".selected-option")
  .addEventListener("click", function () {
    document.querySelector(".custom-select").classList.toggle("active");
  });

document.querySelectorAll(".select-option li").forEach(function (option) {
  option.addEventListener("click", function () {
    const value = this.getAttribute("data-value");
    document.querySelector(".selected-option").innerHTML = this.innerHTML;
    document.querySelector(".custom-select").classList.remove("active");
  });
});
