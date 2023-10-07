// Thiết lập mặc định là slide 1, gọi hàm hiện slide 1
let slideIndex = 1;
showSlides(slideIndex);

// Hàm điều khiến nút next và prev
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Hàm hiển thị hình ảnh theo slideIndex
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideShows");
    //Kiểm tra xem đang nằm ở slide đầu hay slide cuối
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    //Ẩn toàn bộ slides
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    //Hiển thị slide tương ứng
    slides[slideIndex - 1].style.display = "block";
}