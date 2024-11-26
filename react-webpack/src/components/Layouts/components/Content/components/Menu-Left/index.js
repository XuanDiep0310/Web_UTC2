import React from "react";
import className from "classnames/bind";
import styles from "./styles.css";

const cx = className.bind(styles);

function MenuLeft() {
  return (
    <div className={cx("menu-left")}>
      <div className={cx("menu-left-color")}>
        <div className={cx("inner-wrap")}>
          <a href="#" className={cx("header-brand")}>
            <img src="/assets/image/logo-icon-GCU48TCC.png" alt="logo" />
            <div className={cx("header-brand-text")}>
              <p>Trường đại học giao thông vận tải</p>
              <p>Phân hiệu tại TP. Hồ Chí Minh</p>
            </div>
          </a>
          <div className={cx("inner-menu-left")}>
            <ul className={cx("inner-list-left")}>
              <li className={cx("inner-item")}>
                <a href="./gioi_thieu_chung.html" className={cx("list-gt")}>
                  <span>Giới thiệu chung</span>
                </a>
                <i className={cx("ti-angle-down", "inner-show-gtc")}></i>
                <ul className={cx("menu-nav-link", "list-gtc")}>
                  <li>
                    <a href="#" className={cx("inner-item-gtc")}>
                      Các phòng ban và trung tâm
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-gtc")}>
                      Các khoa và bộ môn
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-gtc")}>
                      Cơ sở vật chất
                    </a>
                  </li>
                </ul>
              </li>

              <li className={cx("inner-item")}>
                <a href="./daoTao.html" className={cx("list-dt")}>
                  <span>Đào tạo</span>
                </a>
                <i className={cx("ti-angle-down", "inner-show-dt")}></i>
                <ul className={cx("menu-nav-link", "list-train")}>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Quy trình giải quyết công việc
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Lịch học - thi trực tuyến
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Hướng dẫn học - thi trực tuyến
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Thông báo đào tạo
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Ngành/Chuyên ngành đào tạo
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Chương trình đào tạo
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Kế hoạch năm học
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      TKB - Lịch thi - Lịch xe
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Danh sách lớp
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Báo cáo tự đánh giá 05 chương
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-dt")}>
                      Quy chế đào tạo
                    </a>
                  </li>
                </ul>
              </li>

              <li className={cx("inner-item")}>
                <a href="./doiSongSinhVien.html" className={cx("list-sl")}>
                  <span>Đời sống sinh viên</span>
                </a>
                <i className={cx("ti-angle-down", "inner-show-ds")}></i>
                <ul className={cx("menu-nav-link", "list-ds")}>
                  <li>
                    <a href="#" className={cx("inner-item-ds")}>
                      Cơ hội việc làm
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-ds")}>
                      Hoạt động Đoàn thanh niên
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-ds")}>
                      Hoạt động Hội sinh viên
                    </a>
                  </li>
                </ul>
              </li>

              <li className={cx("inner-item")}>
                <a href="#" className={cx("list-bn", "background-yellow")}>
                  <span>Nội bộ</span>
                </a>
                <i className={cx("ti-angle-down", "inner-show-nb")}></i>
                <ul className={cx("menu-nav-link", "list-nb")}>
                  <li>
                    <a href="#" className={cx("inner-item-nb")}>
                      Thông báo
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-nb")}>
                      Lịch công tác tuần
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-nb")}>
                      Văn bản pháp quy
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-nb")}>
                      UTC2 Smart
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-nb")}>
                      Công việc nội bộ
                    </a>
                  </li>
                </ul>
              </li>

              <li className={cx("inner-item")}>
                <a href="./dangDoanThe.html" className={cx("list-tdd")}>
                  <span>Đảng - Đoàn thể</span>
                </a>
                <i className={cx("ti-angle-down", "inner-show-ddt")}></i>
                <ul className={cx("menu-nav-link", "list-ddt")}>
                  <li>
                    <a href="#" className={cx("inner-item-ddt")}>
                      Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí
                      Minh
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-ddt")}>
                      Thông báo
                    </a>
                  </li>
                  <li>
                    <a href="#" className={cx("inner-item-ddt")}>
                      Công đoàn
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;
