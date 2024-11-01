// click bar
const bar = document.querySelector(
  ".header .header-top .inner-wrap .inner-menu .inner-list li:nth-last-child(1)"
);
const menuLeft = document.querySelector(".menu-left");
const closeMenu = document.querySelector(".menu-left .menu-left-color");
bar.addEventListener("click", () => {
  menuLeft.style.display = "block";
});
document.addEventListener("click", (event) => {
  if (!closeMenu.contains(event.target) && !bar.contains(event.target)) {
    closeMenu.style.display = "none";
    menuLeft.style.display = "none";
  }
});
bar.addEventListener("click", () => {
  menuLeft.style.display = "block";
  closeMenu.style.display = "block";
});
// Tìm tất cả các nút "inner-show" và thêm sự kiện click cho từng nút
document
  .querySelectorAll(
    ".inner-show-gtc, .inner-show-dt, .inner-show-ds, .inner-show-sv, .inner-show-csv, .inner-show-nc, .inner-show-ddt, .inner-show-nb"
  )
  .forEach((button) => {
    button.addEventListener("click", () => {
      // Xác định các phần tử liên quan đến nút được click
      let content, col;

      if (button.classList.contains("inner-show-gtc")) {
        content = button.closest("li.inner-item").querySelector(".list-gtc");
        col = button.closest("li.inner-item").querySelector("a.list-gt");
      } else if (button.classList.contains("inner-show-dt")) {
        content = button.closest("li.inner-item").querySelector(".list-train");
        col = button.closest("li.inner-item").querySelector("a.list-dt");
      } else if (button.classList.contains("inner-show-ds")) {
        content = button.closest("li.inner-item").querySelector(".list-ds");
        col = button.closest("li.inner-item").querySelector("a.list-sl");
      } else if (button.classList.contains("inner-show-sv")) {
        content = button.closest("li.inner-item").querySelector(".list-sv");
        col = button.closest("li.inner-item").querySelector("a.list-vs");
      } else if (button.classList.contains("inner-show-csv")) {
        content = button.closest("li.inner-item").querySelector(".list-csv");
        col = button.closest("li.inner-item").querySelector("a.list-c");
      } else if (button.classList.contains("inner-show-nc")) {
        content = button.closest("li.inner-item").querySelector(".list-nc");
        col = button.closest("li.inner-item").querySelector("a.list-cn");
      } else if (button.classList.contains("inner-show-ddt")) {
        content = button.closest("li.inner-item").querySelector(".list-ddt");
        col = button.closest("li.inner-item").querySelector("a.list-tdd");
      } else if (button.classList.contains("inner-show-nb")) {
        content = button.closest("li.inner-item").querySelector(".list-nb");
        col = button.closest("li.inner-item").querySelector("a.list-bn");
      }

      // Thay đổi trạng thái hiển thị của nội dung và thêm/xóa lớp theo trạng thái
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.classList.add("up");
        col.classList.add("active");
      } else {
        content.style.display = "none";
        button.classList.remove("up");
        col.classList.remove("active");
      }
    });
  });

//
// Search
const search = document.querySelector(
  ".header .header-top .inner-wrap .inner-menu .inner-list a.nav-link"
);
const searchIcon = document.querySelector(
  ".header .header-top .inner-wrap .inner-menu .inner-list a.nav-link i"
);
const searchOut = document.querySelector(
  ".header .header-top .inner-wrap .inner-menu .inner-list .input-search"
);
search.addEventListener("click", () => {
  searchOut.style.display = "inline";
  search.style.padding = "0";
  searchIcon.style.left = "35px";
  searchIcon.style.color = "#525252";
  search.classList.remove("hov");
});

document.addEventListener("click", (event) => {
  if (!search.contains(event.target) && !searchOut.contains(event.target)) {
    searchOut.style.display = "none";
    search.style.padding = "15px 16px";
    searchIcon.style.left = "0";
    searchIcon.style.color = "#ffffff";
    search.classList.add("hov");
  }
});

// Tạo biến tham chiếu đến modal và hình ảnh trong modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// Lấy tất cả các hình ảnh trong phần tử .inner-box
const images = document.querySelectorAll(".inner-box img");

// Thêm sự kiện click vào từng hình ảnh
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block"; // Hiển thị modal
    modalImage.src = image.src; // Gán nguồn ảnh cho modal
  });
});

// Đóng modal khi người dùng click vào nút close
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Đóng modal khi người dùng click ra ngoài modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Slider-one
const sliderOne = document.querySelector(".slide-one .inner-list-image");
const slidesOne = document.querySelectorAll(".slide-one .slides-one");
let st = 0;

let autoPlaySliderOne = setInterval(() => {
  st += 1;
  if (st >= 3) {
    st = 0;
  } else if (st < 0) {
    st = totalSlides - 1;
  }
  sliderOne.style.transform = `translateX(-${st * 100}%)`;
}, 3000);
// Slider auto phần Chứng Nhân
const slider = document.querySelector(".inner-center .inner-list-cer");
const slides = document.querySelectorAll(
  ".inner-center .inner-list-cer .inner-box"
);
const size_slides = slides.length;
let a = 4;
let b = 25;
let start_slides = 0;
let autoPlay = setInterval(() => {
  let d = window.innerWidth;
  if (d <= 992 && d > 576) {
    a = 2;
    b = 50;
  } else if (d <= 576) {
    a = 1;
    b = 100;
  } else {
    a = 4;
    b = 25;
  }
  start_slides += a;
  if (start_slides >= size_slides) {
    start_slides = 0;
  }
  sliderToScroll();
}, 3000);

function sliderToScroll() {
  if (start_slides + a > size_slides) {
    const tmp = start_slides + a - size_slides;
    slider.style.transform = `translateX(-${(start_slides - tmp) * b}%)`;
  } else {
    slider.style.transform = `translateX(-${start_slides * b}%)`;
  }
}
// Dừng autoplay khi hover
slider.addEventListener("mouseover", () => {
  clearInterval(autoPlay);
});

// Tiếp tục autoplay khi không hover
slider.addEventListener("mouseout", () => {
  autoPlay = setInterval(() => {
    start_slides += a;
    if (start_slides >= size_slides) {
      start_slides = 0;
    }
    sliderToScroll();
  }, 3000);
});

// slider-study
// Slider-one
const sliderStudy = document.querySelector(".study-school .inner-slide-study");
let s = 0;

let autoPlaySliderStudy = setInterval(() => {
  s += 1;
  if (s >= 10) {
    s = 0;
  } else if (s < 0) {
    s = 9;
  }
  sliderStudy.style.transform = `translateX(-${s * 100}%)`;
}, 3000);
