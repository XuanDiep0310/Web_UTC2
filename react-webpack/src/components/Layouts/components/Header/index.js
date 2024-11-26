import React from "react";
import className from "classnames/bind";
import styles from "./Header.css";

const cx = className.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("header-top")}>
        <div className={cx("container-fluid")}>
          <div className={cx("inner-wrap")}>
            <a href="#" className={cx("header-brand")}>
              <img src="" alt="logo" />
              <div className={cx("header-brand-text")}>
                <p>Trường đại học giao thông vận tải</p>
                <p>Phân hiệu tại tp. hồ chí minh</p>
              </div>
            </a>
            <div className={cx("inner-menu")}>
              <ul className={cx("inner-list")}>
                <li>
                  <a href="/sinhVien.html">Sinh viên</a>
                </li>
                <li>
                  <a href="/cuuSinhVien.html">Cựu sinh viên</a>
                </li>
                <li>
                  <a href="https://thuvien.utc2.edu.vn" target="_blank">
                    Thư viện
                  </a>
                </li>
                <li>
                  <a href="./nghienCuu.html">Nghiên cứu</a>
                </li>
                <li>
                  <a href="./dangDoanThe.html">Đảng - Đoàn thể</a>
                </li>
                <li>
                  <a href="./noiBo.html" className={cx("noiBo")}>
                    Nội bộ
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("nav-link hov")}>
                    {/* <i className={cx('')}fa-solid fa-magnifying-glass"></i> */}
                    <input
                      type="text"
                      placeholder="Tìm kiêm từ khoá..."
                      className={cx("input-search")}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <i className={cx('')}fa-solid fa-bars"></i> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("header-bottom")}>
        <div className={cx("container")}>
          <div className={cx("inner-wrap")}>
            <ul className={cx("inner-list inner-list-two")}>
              <li>
                <a
                  className={cx("color-content")}
                  href="./gioi_thieu_chung.html"
                >
                  Giới thiệu chung
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="./daoTao.html">
                  Đào tạo
                </a>
              </li>
              <li>
                <a
                  className={cx("color-content")}
                  href="./doiSongSinhVien.html"
                >
                  Đời sống sinh viên
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="#">
                  Tuyển sinh
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="./tinTucSuKien.html">
                  Tin tức - Sự kiện
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="./lichCongTac.html">
                  Lịch công tác
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="#">
                  UTC2 360
                </a>
              </li>
              <li>
                <a className={cx("color-content")} href="#">
                  Website TA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
