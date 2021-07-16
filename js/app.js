window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-scroll").style.display = "block";
    document.getElementById("navbar-scroll").style.backgroundColor = "#fff";
    document.getElementById("navbar-scroll").style.boxShadow =
      "0px 4px 8px 0px rgba(0,0,0,0.2)";
    document.getElementById("navbar").style.display = "none";
    // mobile menu scroll ===================
    document.getElementById("mobile_header").style.backgroundColor = "#000";
  } else {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navbar-scroll").style.display = "none";
    document.getElementById("navbar-scroll").style.boxShadow = "none";
    // mobile menu scroll ===================
    document.getElementById("mobile_header").style.backgroundColor =
      "transparent";
  }
}
function hide() {
  document.getElementById("search-top").style.visibility = "hidden";
}

function search() {
  document.getElementById("search-top").style.visibility = "visible";
}

// mobile_menu ==================================
function openNav() {
  document.getElementById("mobile_link").style.marginRight = "0";
}

function closeNav() {
  document.getElementById("mobile_link").style.marginRight = "-100%";
}
// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  autoplay: 4000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
