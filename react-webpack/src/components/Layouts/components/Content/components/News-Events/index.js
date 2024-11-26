import React from "react";
import className from "classnames/bind";
import styles from "./styles.css";

const cx = className.bind(styles);

function NewsEvents() {
  return (
    <div class="inner-news-events">
      <div class="container">
        <div class="inner-wrap">
          <h2 class="inner-title inner-title-left">Tin tức & Sự kiện</h2>
          <div class="list-box">
            <div class="inner-box">
              <a href="#">
                <div class="inner-image">
                  <img
                    src="./assets/image/101020241018_plECI_desktop.webp"
                    alt=""
                  />
                </div>
                <h6 class="inner-desc">
                  ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TRƯỜNG ĐẠI HỌC GIAO
                  THÔNG VẬN TẢI - PHÂN HIỆU TẠI TP. HỒ CHÍ MINH LẦN THỨ XI,
                  NHIỆM KỲ 2024 - 2027
                </h6>
              </a>
            </div>
            <div class="inner-box-list">
              <div class="inner-box-item">
                <a href="#">
                  <div class="inner-image">
                    <img
                      src="./assets/image/280920240802_xpFW8_desktop.webp"
                      alt=""
                    />
                  </div>
                  <h6 class="inner-desc">
                    Thông báo về việc tuyển sinh đào tạo từ xa trình độ đại học
                    năm 2024
                  </h6>
                </a>
              </div>
              <div class="inner-box-item">
                <a href="#">
                  <div class="inner-image">
                    <img
                      src="./assets/image/200920240524_6gd68_desktop.webp"
                      alt=""
                    />
                  </div>
                  <h6 class="inner-desc">
                    Chương trình Đối thoại giữa lãnh đạo Phân hiệu với đại diện
                    sinh viên năm học 2024-2025
                  </h6>
                </a>
              </div>
              <div class="inner-box-item">
                <a href="#">
                  <div class="inner-image">
                    <img
                      src="./assets/image/130920240235_WuXoO_desktop.webp"
                      alt=""
                    />
                  </div>
                  <h6 class="inner-desc">
                    Phân hiệu Trường Đại học Giao thông vận tải tại Thành phố Hồ
                    Chí Minh chia sẻ khó khăn cùng đồng bào bị ảnh hưởng do
                    thiên tai, lũ lụt
                  </h6>
                </a>
              </div>
            </div>
          </div>
          <div class="inner-button">
            <a href="#" class="button button-one">
              Xem tất cả tin tức
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsEvents;
