let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentIndex = 0; // Quay lại slide đầu tiên
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Quay lại slide cuối cùng
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide() {
  currentIndex++; // Tăng currentIndex sau mỗi lần chuyển slide
  showSlide(currentIndex); // Gọi hàm showSlide để cập nhật giao diện
}

// Tự động chuyển slide sau mỗi 3 giây
function autoSlide() {
  setInterval(() => {
    moveSlide();
  }, 3000);
}

// Gọi hàm tự động chuyển slide khi trang được tải
window.onload = () => {
  autoSlide();
};
