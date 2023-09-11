$(document).ready(function () {
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  const menu = document.querySelector("#menu").cloneNode(1);

  hamb.addEventListener("click", hambHandler);

  function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  function renderPopup() {
    popup.appendChild(menu);
  }

  const links = Array.from(menu.children);

  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }

  $("input[id='tel']").mask("+7 (999) 999-99-99");
  $("input[id='tel-number']").mask("+7 (999) 999-99-99");

  $("#slider").on("input change", (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $(".foreground-img").css("width", `${sliderPos}%`);
    // Update the position of the slider button
    $(".slider-button").css("left", `calc(${sliderPos}% - 19px)`);
  });

  $("#slider-2").on("input change", (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $(".foreground-img-2").css("width", `${sliderPos}%`);
    // Update the position of the slider button
    $(".slider-button-2").css("left", `calc(${sliderPos}% - 19px)`);
  });

  const header = document.querySelector("#header");
  let prevScrollPos = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      // Прокрутка вверх
      header.style.top = "0";
    } else {
      // Прокрутка вниз
      header.style.top = "-100px"; // Можно изменить на 0, если хотите, чтобы header всегда был видимым при прокрутке вниз
    }

    prevScrollPos = currentScrollPos;
  });
});
