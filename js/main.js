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

$(document).ready(function () {
  $(".my_accordion .item").click(function () {
    $(this).toggleClass("active");
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

jQuery(document).ready(function ($) {
  if ($(".wrapper-news-btn .wrapper-news").find(".news-item").length > 6) {
    $(".load-more-news").click(function () {
      $(
        ".wrapper-news-btn .wrapper-news .news-item:nth-child(n+7)"
      ).slideToggle("");
      $(".wrapper-news-btn .wrapper-news .news-item:nth-child(n+7)").css(
        "display",
        "flex"
      );
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
        $(this).html("Скрыть");
      } else {
        $(this).html("Загрузить Еще —");
      }
    });
  } else {
    $(".load-more-news").hide();
  }
});

const items = document.querySelectorAll(
  ".projects .wrapper-projects .right-wrap .item"
);

items.forEach((item) => {
  const image = item.querySelector(".hover-image");

  item.addEventListener("mouseenter", (e) => {
    image.style.opacity = 0.5;
    item.addEventListener("mousemove", moveImage);
  });

  item.addEventListener("mouseleave", () => {
    image.style.opacity = 0;
    item.removeEventListener("mousemove", moveImage);
  });

  function moveImage(e) {
    const top = item.getBoundingClientRect().top;
    const left = item.getBoundingClientRect().left;
    const x = e.clientX - left;
    const y = e.clientY - top;

    image.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// console.log("hello world");

// $(document).ready(function () {
//   const $hamb = $("#hamb");
//   const $popup = $("#popup");
//   const $body = $("body");

//   const $menu = $("#menu").clone().appendTo($popup);

//   $hamb.on("click", function (e) {
//     e.preventDefault();
//     $popup.toggleClass("open");
//     $hamb.toggleClass("active");
//   });

//   $menu.on("click", "a", function () {
//     $popup.removeClass("open");
//     $hamb.removeClass("active");
//   });

//   $("input[id='tel'], input[id='tel-number']").mask("+7 (999) 999-99-99");

//   let prevScrollPos = window.scrollY;
//   const $header = $("#header");

//   $(window).on("scroll", function () {
//     const currentScrollPos = window.scrollY;
//     $header.css(
//       "top",
//       prevScrollPos > currentScrollPos || currentScrollPos === 0
//         ? "0px"
//         : "-205px"
//     );
//     prevScrollPos = currentScrollPos;
//   });

//   $(".change").on("change", function () {
//     const $input = $(this);
//     const $label = $input.next(".abs_lab");
//     $label.toggleClass("label-focus", $input.val());
//   });

//   $(".change").on("blur", function () {
//     const $input = $(this);
//     $input.toggleClass("full", $input.val().length > 0);
//   });

//   $(".search-open").on("click", function () {
//     $(this).toggleClass("active");
//     $(".search-div").toggleClass("active");
//   });

//   $(".sorting .name-btn").on("click", function () {
//     $(".sorting").toggleClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".my_accordion .item").on("click", function () {
//     $(this).toggleClass("active");
//   });
// });

// $(document).ready(function () {
//   const $grid = $(".wrapper-products .grid");
//   const $items = $grid.find(".item");

//   if ($items.length > 6) {
//     $(".more-items").on("click", function () {
//       $items.slice(6).slideToggle();
//       $(this)
//         .toggleClass("open")
//         .html($(this).hasClass("open") ? "Скрыть" : "Загрузить Еще —");
//     });
//   } else {
//     $(".more-items").hide();
//   }
// });

// $(document).ready(function () {
//   const $newsWrapper = $(".wrapper-news-btn .wrapper-news");
//   const $newsItems = $newsWrapper.find(".news-item");

//   if ($newsItems.length > 6) {
//     $(".load-more-news").on("click", function () {
//       $newsItems.slice(6).slideToggle().css("display", "flex");
//       $(this)
//         .toggleClass("open")
//         .html($(this).hasClass("open") ? "Скрыть" : "Загрузить Еще —");
//     });
//   } else {
//     $(".load-more-news").hide();
//   }
// });

// $(document).ready(function () {
//   $(".projects .wrapper-projects .right-wrap .item")
//     .on("mouseenter", function () {
//       const $item = $(this);
//       const $image = $item.find(".hover-image");

//       $image.css("opacity", 0.5);
//       $item.on("mousemove", function (e) {
//         const top = $item.offset().top;
//         const left = $item.offset().left;
//         const x = e.clientX - left;
//         const y = e.clientY - top;

//         $image.css("transform", `translate(${x}px, ${y}px)`);
//       });
//     })
//     .on("mouseleave", function () {
//       const $image = $(this).find(".hover-image");
//       $image.css("opacity", 0);
//       $(this).off("mousemove");
//     });
// });

// //new item

// $(document).ready(function () {
//   const hamb = document.querySelector("#hamb");
//   const popup = document.querySelector("#popup");
//   const body = document.body;

//   const menu = document.querySelector("#menu").cloneNode(1);

//   hamb.addEventListener("click", hambHandler);

//   function hambHandler(e) {
//     e.preventDefault();
//     popup.classList.toggle("open");
//     hamb.classList.toggle("active");
//     // body.classList.toggle("noscroll");
//     renderPopup();
//   }

//   function renderPopup() {
//     popup.appendChild(menu);
//   }

//   const links = Array.from(menu.children);

//   links.forEach((link) => {
//     link.addEventListener("click", closeOnClick);
//   });

//   function closeOnClick() {
//     popup.classList.remove("open");
//     hamb.classList.remove("active");
//     // body.classList.remove("noscroll");
//   }

//   $("input[id='tel']").mask("+7 (999) 999-99-99");
//   $("input[id='tel-number']").mask("+7 (999) 999-99-99");

//   let prevScrollpos = window.scrollY;
//   window.addEventListener("scroll", () => {
//     let currentScrollPos = window.scrollY;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.top = "0px";
//     } else if (currentScrollPos == 0) {
//       document.getElementById("header").style.top = "0px";
//     } else {
//       document.getElementById("header").style.top = "-205px";
//     }
//     prevScrollpos = currentScrollPos;
//   });

//   document.addEventListener("change", function (event) {
//     if (event.target && event.target.matches(".change")) {
//       event.preventDefault();

//       var inputField = event.target;
//       var inputLabels = document.querySelector(".abs_lab");

//       if (inputField.value) {
//         inputLabels.classList.add(".label-focus");
//       } else {
//         inputLabels.classList.remove(".label-focus");
//       }
//     }
//   });

//   const inputs = document.querySelectorAll(".change");

//   inputs.forEach((input) => {
//     input.addEventListener("blur", (event) => {
//       if (event.target.value.length) {
//         event.target.classList.add("full");
//       } else {
//         event.target.classList.remove("full");
//       }
//     });
//   });

//   $(".search-open").click(function () {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//       $(".search-div").removeClass("active");
//     } else {
//       $(this).addClass("active");
//       $(".search-div").addClass("active");
//     }
//   });

//   $(".sorting .name-btn").click(function () {
//     if ($(".sorting").hasClass("active")) {
//       $(".sorting").removeClass("active");
//     } else {
//       $(".sorting").addClass("active");
//     }
//   });

//   const items = document.querySelectorAll(
//     ".projects .wrapper-projects .right-wrap .item"
//   );

//   items.forEach((item) => {
//     const image = item.querySelector(".hover-image");

//     item.addEventListener("mouseenter", (e) => {
//       image.style.opacity = 0.7;
//       item.addEventListener("mousemove", moveImage);
//     });

//     item.addEventListener("mouseleave", () => {
//       image.style.opacity = 0;
//       item.removeEventListener("mousemove", moveImage);
//     });

//     function moveImage(e) {
//       const top = item.getBoundingClientRect().top;
//       const left = item.getBoundingClientRect().left;
//       const x = e.clientX - left;
//       const y = e.clientY - top;

//       image.style.transform = `translate(${x}px, ${y}px)`;
//     }
//   });
// });

// $(document).ready(function () {
//   $(".my_accordion .item").click(function () {
//     $(this).toggleClass("active");
//   });
// });

// jQuery(document).ready(function ($) {
//   if ($(".wrapper-products .grid").find(".item").length > 6) {
//     $(".more-items").click(function () {
//       $(".wrapper-products .grid .item:nth-child(n+7)").slideToggle("");
//       $(this).toggleClass("open");
//       if ($(this).hasClass("open")) {
//         $(this).html("Скрыть");
//       } else {
//         $(this).html("Загрузить Еще —");
//       }
//     });
//   } else {
//     $(".more-items").hide();
//   }
// });

// jQuery(document).ready(function ($) {
//   if ($(".wrapper-news-btn .wrapper-news").find(".news-item").length > 6) {
//     $(".load-more-news").click(function () {
//       $(
//         ".wrapper-news-btn .wrapper-news .news-item:nth-child(n+7)"
//       ).slideToggle("");
//       $(".wrapper-news-btn .wrapper-news .news-item:nth-child(n+7)").css(
//         "display",
//         "flex"
//       );
//       $(this).toggleClass("open");
//       if ($(this).hasClass("open")) {
//         $(this).html("Скрыть");
//       } else {
//         $(this).html("Загрузить Еще —");
//       }
//     });
//   } else {
//     $(".load-more-news").hide();
//   }
// });
