// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const hambg = document.querySelector(".header-hambg");
    const overlay = document.querySelector(".overlay");

    hambg.addEventListener("click", () => {
      hambg.classList.toggle("hambg-active");

      hambgToggle(hambg, overlay);
    });

    overlay.addEventListener("click", () => {
      hambg.classList.remove("hambg-active");

      hambgToggle(hambg, overlay);
    });
  }, 1000);

  function hambgToggle(hambg, overlay) {
    const accor = document.querySelector(".hambg-accordion");
    const body = document.querySelector("body");

    if (hambg.classList.contains("hambg-active")) {
      overlay.classList.add("dimmed");
      accor.classList.add("accordion-active");
      body.classList.add("no-scroll");
    } else {
      overlay.classList.remove("dimmed");
      accor.classList.remove("accordion-active");
      body.classList.remove("no-scroll");
    }
  }

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
      toTop.classList.add("show-back-to-top");
    } else {
      toTop.classList.remove("show-back-to-top");
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

  // MAKE BANNER EXIT BUTTON INTERACTIVE

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".banner-exit-btn");
    if (btn) {
      const banner = document.querySelector(".contact-banner-section");
      if (banner) {
        banner.classList.add("banner-removed");
      }
    }
  });

  // // PAGINATION {
  // const items = document.querySelectorAll(".news-card");
  // const pagination = document.querySelector(".pagination");

  // const itemsPerPage = 1;
  // let currentPage = 1;

  // function showPage(page) {
  //   const start = (page - 1) * itemsPerPage;
  //   const end = start + itemsPerPage;

  //   items.forEach((item, index) => {
  //     item.hidden = !(index >= start && index < end);
  //   });
  // }

  // function renderPagination() {
  //   pagination.innerHTML = "";
  //   const pageCount = Math.ceil(items.length / itemsPerPage);
  //   const maxButtons = 4;
  //   let startPage = 1;
  //   let endPage = pageCount;

  //   if (pageCount > maxButtons) {
  //     if (currentPage <= Math.floor(maxButtons / 2)) {
  //       startPage = 1;
  //       endPage = maxButtons;
  //     } else if (currentPage + Math.floor(maxButtons / 2) >= pageCount) {
  //       startPage = pageCount - maxButtons + 1;
  //       endPage = pageCount;
  //     } else {
  //       startPage = currentPage - Math.floor(maxButtons / 2);
  //       endPage = currentPage + Math.floor(maxButtons / 2) - 1;
  //     }
  //   }

  //   // First page + dots
  //   if (startPage > 1) {
  //     const firstBtn = document.createElement("button");
  //     firstBtn.textContent = "1";
  //     firstBtn.addEventListener("click", () => {
  //       currentPage = 1;
  //       showPage(currentPage);
  //       renderPagination();
  //     });
  //     pagination.appendChild(firstBtn);

  //     const dots = document.createElement("span");
  //     dots.textContent = "...";
  //     pagination.appendChild(dots);
  //   }

  //   // Page buttons
  //   for (let i = startPage; i <= endPage; i++) {
  //     const button = document.createElement("button");
  //     button.textContent = i;
  //     if (i === currentPage) button.classList.add("current-page");

  //     button.addEventListener("click", () => {
  //       currentPage = i;
  //       showPage(currentPage);
  //       renderPagination();
  //     });

  //     button.classList.add("pagination-btn");
  //     pagination.appendChild(button);
  //   }

  //   // Last page + dots
  //   if (endPage < pageCount) {
  //     const dots = document.createElement("span");
  //     dots.textContent = "...";
  //     pagination.appendChild(dots);

  //     const lastBtn = document.createElement("button");
  //     lastBtn.textContent = pageCount;
  //     lastBtn.addEventListener("click", () => {
  //       currentPage = pageCount;
  //       showPage(currentPage);
  //       renderPagination();
  //     });
  //     pagination.appendChild(lastBtn);
  //   }
  // }

  // // Initialize
  // showPage(currentPage);
  // renderPagination();
  // }

  const pagiBtns = document.querySelectorAll(".pag-btns");

  pagiBtns.forEach((pagBtn) => {
    pagBtn.addEventListener("click", () => {
      pagiBtns.forEach((i) => {
        i.classList.remove("current-page");
      });
      pagBtn.classList.add("current-page");
    });
  });

  const headerService = document.querySelector(".header-service");
  const dropdown = document.querySelector(".service-dropdown");

  if (headerService) {
    headerService.addEventListener("click", () => {
      console.log("clicked");
      dropdown.style.display = "flex";
    });
  }
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

  $(".works-slider").slick({
    slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: true,

  });
});
