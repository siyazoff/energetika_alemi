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
    // body.classList.toggle("noscroll");
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
    // body.classList.remove("noscroll");
  }

  $("input[id='tel']").mask("+7 (999) 999-99-99");
  $("input[id='tel-number']").mask("+7 (999) 999-99-99");

  let prevScrollpos = window.scrollY;
  window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0px";
    } else if (currentScrollPos == 0) {
      document.getElementById("header").style.top = "0px";
    } else {
      document.getElementById("header").style.top = "-205px";
    }
    prevScrollpos = currentScrollPos;
  });

  document.addEventListener("change", function (event) {
    if (event.target && event.target.matches(".change")) {
      event.preventDefault();

      var inputField = event.target;
      var inputLabels = document.querySelector(".abs_lab");

      if (inputField.value) {
        inputLabels.classList.add(".label-focus");
      } else {
        inputLabels.classList.remove(".label-focus");
      }
    }
  });

  const inputs = document.querySelectorAll(".change");

  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      if (event.target.value.length) {
        event.target.classList.add("full");
      } else {
        event.target.classList.remove("full");
      }
    });
  });

  $(".search-open").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".search-div").removeClass("active");
    } else {
      $(this).addClass("active");
      $(".search-div").addClass("active");
    }
  });

  $(".sorting .name-btn").click(function () {
    if ($(".sorting").hasClass("active")) {
      $(".sorting").removeClass("active");
    } else {
      $(".sorting").addClass("active");
    }
  });
});

jQuery(document).ready(function ($) {
  if ($(".wrapper-products .grid").find(".item").length > 6) {
    $(".more-items").click(function () {
      $(".wrapper-products .grid .item:nth-child(n+7)").slideToggle("");
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
        $(this).html("Скрыть");
      } else {
        $(this).html("Загрузить Еще —");
      }
    });
  } else {
    $(".more-items").hide();
  }
});
