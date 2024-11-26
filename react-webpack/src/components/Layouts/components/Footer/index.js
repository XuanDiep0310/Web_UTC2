import React from "react";
import className from "classnames/bind";
import styles from "./Footer.css";

const cx = className.bind(styles);

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="inner-wrap">
          <div class="inner-list-first">
            <div class="footer-brand-first">
              <div class="footer-brand-list">
                <img src="/assets/image/logo-icon-GCU48TCC.png" alt="logo" />
                <div class="footer-brand-text">
                  <p>Trường đại học giao thông vận tải</p>
                  <p>Phân hiệu tại tp. hồ chí minh</p>
                </div>
              </div>
              <div class="inner-address">
                <span>
                  450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Thành phố Thủ
                  Đức, TP.Hồ Chí Minh
                </span>
              </div>
            </div>
            <div class="inner-first">
              <p class="inner-content">Đào tạo</p>
              <p class="inner-contact">(028).3896.2018</p>
            </div>
            <div class="inner-first">
              <p class="inner-content">Tuyển sinh</p>
              <p class="inner-contact">(028).3896.2819</p>
            </div>
            <div class="inner-first">
              <p class="inner-content">Công tác chính trị sinh viên</p>
              <p class="inner-contact">(028).3736.0564</p>
            </div>
          </div>

          <div class="inner-horizontal"></div>

          <div class="inner-list-second">
            <div class="footer-bg-second">
              <a href="#" class="brand-bg">
                <img
                  src="./assets/image/xdgfkjghdf.png"
                  alt=""
                  class="brand-img"
                />
                <img
                  src="./assets/image/mxfdjhkgd.png"
                  alt=""
                  class="brand-img"
                />
                <img
                  src="./assets/image/dsxyhlkyl.png"
                  alt=""
                  class="brand-img"
                />
                <img
                  src="./assets/image/ewlxgfkgjfE.gif"
                  alt=""
                  class="brand-img"
                />
                <img
                  src="./assets/image/dsafxhgljhkl.png"
                  alt=""
                  class="brand-img"
                />
              </a>
            </div>
            <div class="inner-second">
              <h6 class="inner-title-second">Tuyển sinh</h6>
              <ul>
                <li>
                  <a
                    href="https://tuyensinh.utc2.edu.vn/vi/nganh-dao-tao-312"
                    target="_blank"
                  >
                    Đại học chính quy
                  </a>
                </li>
                <li>
                  <a
                    href="https://tuyensinh.utc2.edu.vn/vi/thong-bao-tuyen-sinh-308"
                    target="_blank"
                  >
                    Sau đại học
                  </a>
                </li>
                <li>
                  <a
                    href="https://tuyensinh.utc2.edu.vn/vi/thong-bao-tuyen-sinh-313"
                    target="_blank"
                  >
                    Bằng hai - Liên thông - VHVL
                  </a>
                </li>
              </ul>
            </div>

            <div class="inner-second">
              <h6 class="inner-title-second">Follow us</h6>
              <ul>
                <li>
                  <span>
                    <i class="fa-brands fa-youtube"></i>
                  </span>
                  <a
                    href="https://www.youtube.com/@GiaoThongVanTaiUTC2/"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <span>
                    <i class="fa-brands fa-square-instagram"></i>
                  </span>
                  <a
                    href="https://www.instagram.com/utc2.official/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <span>
                    <i class="fa-brands fa-tiktok"></i>
                  </span>
                  <a
                    href="https://www.tiktok.com/@utc2.official?lang=en"
                    target="_blank"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <span>
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                  <a href="https://www.facebook.com/utc2hcmc" target="_blank">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div class="inner-second">
              <h6 class="inner-title-second">Truy cập nhanh</h6>
              <ul>
                <li>
                  <a
                    href="https://dept.utc2.edu.vn/trungtamdaotao/"
                    target="_blank"
                  >
                    Trung tâm Đào tạo thực hành và Chuyển giao Công nghệ GTVT
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Tin tức sự kiện
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Đời sống sinh viên
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="inner-horizontal"></div>

          <div class="inner-list-third">
            <div class="inner-copyright">
              Bản quyền thuộc về Phân hiệu Trường Đại học GTVT tại TP. Hồ Chí
              Minh
            </div>
            <div class="inner-policy">
              <a href="#">Điều kiện</a>
              <a href="#">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
