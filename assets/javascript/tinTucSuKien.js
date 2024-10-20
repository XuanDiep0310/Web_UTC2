let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;  // Quay lại slide đầu tiên
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  // Quay lại slide cuối cùng
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Cập nhật trạng thái của các nút tròn
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}

// Tự động chuyển slide sau mỗi 3 giây
function autoSlide() {
    setInterval(() => {
        currentIndex++;  // Tăng currentIndex sau mỗi lần chuyển slide
        showSlide(currentIndex);  // Gọi hàm showSlide để cập nhật giao diện
    }, 3000); 
}

// Gọi hàm tự động chuyển slide khi trang được tải
window.onload = () => {
    autoSlide();
    updateDots();  // Cập nhật nút tròn đầu tiên khi trang load
};
