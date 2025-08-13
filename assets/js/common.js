// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".hm-service-content-ctnr");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.id;

      // tabs.forEach((t) => {
      //   if (t.id === tabId) {
      //     t.classList.add("chosen-tab");
      //   } else {
      //     t.classList.remove("chosen-tab");
      //   }

      //   // const serviceContent = document.querySelector( `.content-for-${tabId}`);
      //   // if (t.classList.contains("chosen-tab")) {
      //   //   serviceContent.classList.add("content-active");
      //   // } else {
      //   //   serviceContent.classList.remove("content_active");
      //   // }
      // });

      serviceContents.forEach(content) {
        if(content.classList.contains(`content-for-${tabId}`)) {
          content.classList.add("content-active");
        } else {
          content.classList.remove("content-active");
        }
      }
    });
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
    infinite: true,
    arrows: false,
    dots: true,
  });
});
