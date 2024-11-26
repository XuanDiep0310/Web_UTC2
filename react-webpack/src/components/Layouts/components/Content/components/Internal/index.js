import React from "react";
import className from "classnames/bind";
import styles from "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import component
import { faAngleRight, faLanguage } from "@fortawesome/free-solid-svg-icons"; // Import icon cụ thể\
import UTC2Smart from "~/assets/images/170820230642_N0zM9_desktop.webp";
import ThongBao from "~/assets/images/170820230639_orslU_desktop.webp";
import LichCongTac from "~/assets/images/170820230641_JRBjx_desktop.webp";
import VanBanPhapQuy from "~/assets/images/041020230333_ENVuI_desktop.webp";
import CongViecNoiBo from "~/assets/images/041020230334_LN8zI_desktop.webp";
import DSDinhVuCong from "~/assets/images/101120231003_3csdM_desktop.webp";

const cx = className.bind(styles);

function Internal() {
  return (
    <div class="section-internal">
      <div class="container">
        <div class="inner-wrap">
          <div class="inner-breadcrumb">
            <a href="./index.html">Trang chủ</a>
            <a>/</a>
            <a href="#">Nội bộ</a>
          </div>

          <div class="inner-list-box">
            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={ThongBao}
                  alt=""
                />
              </div>
              <h4 class="inner-title">Thông báo</h4>
              <span class="inner-desc">
                Tổng hợp các thông báo của nhà trường
              </span>
              <a
                href="https://utc2.edu.vn/noi-bo/thong-bao"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>

                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>

            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={LichCongTac}
                  alt=""
                />
              </div>
              <h4 class="inner-title">Lịch công tác</h4>
              <span class="inner-desc">
                Lịch công tác sẽ được cập nhật hàng tuần
              </span>
              <a
                href="./lichCongTac.html"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>

                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>

            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={UTC2Smart}
                  alt=""
                />
              </div>
              <h4 class="inner-title">UTC2 Smart</h4>
              <span class="inner-desc">
                Công cụ, phần mềm quản lý dành cho CBVC trường Đại học UTC2
              </span>
              <a
                href="https://sohoa.utc2.edu.vn/Administration/User/adminView?ReturnUrl=%2f"
                target="_blank"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>

                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>

            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={VanBanPhapQuy}
                  alt=""
                />
              </div>
              <h4 class="inner-title">Văn bản pháp quy</h4>
              <span class="inner-desc">
                Tổng hợp Văn bản - Quy định và Thủ tục hành chính
              </span>
              <a
                href="https://utc2.edu.vn/bai-viet/van-ban-phap-quy"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>

                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>

            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={CongViecNoiBo}
                  alt=""
                />
              </div>
              <h4 class="inner-title">Công việc nội bộ</h4>
              <span class="inner-desc">Tổng hợp công việc nội bộ</span>
              <a
                href="https://utc2.edu.vn/chi-tiet-bai-viet/cong-viec-noi-bo"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>

            <div class="inner-box">
              <div class="inner-icon">
                <img
                  src={DSDinhVuCong}
                  alt=""
                />
              </div>
              <h4 class="inner-title">Danh sách Dịch vụ công</h4>
              <span class="inner-desc">
                Danh sách Dịch vụ công dành cho GV - CBCNV
              </span>
              <a
                href="https://utc2.edu.vn/chi-tiet-bai-viet/danh-sach-dich-vu-cong-gv-cbcnv"
                class="button button-one inner-button-it"
              >
                <span>Xem thêm</span>

                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internal;
