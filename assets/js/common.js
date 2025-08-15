// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".hm-service-content-ctnr");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.id;

      tabs.forEach((t) => {
        if (t.id === tabId) {
          t.classList.add("chosen-tab");
        } else {
          t.classList.remove("chosen-tab");
        }
      });

      serviceContents.forEach((content) => {
        if (content.classList.contains(`content-for-${tabId}`)) {
          content.classList.add("content-active");
        } else {
          content.classList.remove("content-active");
        }
      });
    });
  });

  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".back-to-top-btn");
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      toTop.classList.remove("no-back-to-top");
    } else {
      toTop.classList.add("no-back-to-top");
    }
  });

  /* MAKE BACK TO TOP BUTTON STICK TO THE TOP OF THE FOOTER */
  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".back-to-top-btn");
    const footer = document.querySelector(".footer-wrapper");
    const footerTop = footer.getBoundingClientRect().top;
    const winHeight = window.innerHeight;

    if (footerTop < winHeight) {
      toTop.classList.add("above-footer");
    } else {
      toTop.classList.remove("above-footer");
    }
  });
});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });

  $(".top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  // $(".discount-cards-slider").slick({
  //   slidesToShow: 3,
  //   centerMode: true,
  //   centerPadding: "60px",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 2
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         dots: true,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 1
  //       },
  //     }
  //   ],
  // });
});
