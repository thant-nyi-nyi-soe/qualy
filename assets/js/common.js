// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-ctnr");

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-ctnr");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      header.style.display = "flex";
    } else {
      header.style.display = "none";
    }
  });

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

  // MAKE BACK TO TOP BUTTON DISAPPER AT THE TOP OF THE PAGE
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

  // FOOTER TOGGLES

  const ftrToggles = document.querySelectorAll(".arrow-left-side");

  console.log(ftrToggles.innerHTML);

  ftrToggles.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      arrow.classList.toggle("arrow-hide");
    });
  });

  //MAKE BANNER STICK TO THE TOP OF THE FOOTER

  window.addEventListener("scroll", () => {
    const banner = document.querySelector(".contact-banner-section");
    const footer = document.querySelector(".footer-wrapper");
    const footerTop = footer.getBoundingClientRect().top;
    const winHeight = window.innerHeight;

    if (footerTop < winHeight) {
      banner.classList.add("banner-above-footer");
    } else {
      banner.classList.remove("banner-above-footer");
    }
  });

  // // MAKE BANNER EXIT BUTTON INTERACTIVE

  // const exit = document.querySelector(".top-con-exit-btn");
  // console.log(exit);

  // if (exit) {
  //   exit.addEventListener("click", () => {
  //     const banner = document.querySelector(".contact-banner-section");
  //     if (banner) {
  //       banner.classList.add("banner-removed");
  //     }
  //   });
  // }
});

// Your jQuery code goes here
$(function () {
  // TOP SLIDER
  $(".top-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
  // DISCOUNT CARDS SLIDER
  $(".discount-cards-slider").slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          infinite: true,
          centerMode: true,
          centerPadding: "calc((100% - 380px) / 2)",
          variableWidth: true,
        },
      },
      {
        breakpoint: 9999,
        settings: "unslick",
      },
    ],
  });
});
