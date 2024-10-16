var openTab = (event, tabName) => {
    // Ẩn tất cả các nội dung tab
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Xóa trạng thái active cho tất cả các tab
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }

    // Hiển thị tab được chọn
    document.getElementById(tabName).style.display = "block";
    // Thêm class active vào tab được chọn
    event.currentTarget.className += " active-tab";
}
