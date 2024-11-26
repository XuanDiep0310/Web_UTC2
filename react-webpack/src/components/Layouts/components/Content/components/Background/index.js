import React from "react";
import className from "classnames/bind";
import styles from "./styles.css";

const cx = className.bind(styles);

function Background() {
  return (
    <div class="inner-background">
      <div class="inner-background-white">
        <div class="container">
          <div class="inner-wrap">
            <h2 class="inner-title">Nội bộ</h2>
            <span>
              Trường Đại học Giao Thông Vận Tải là nơi tuyệt vời để khám phá
              tiềm năng bản thân và trải nghiệm cuộc sống sinh viên đầy màu sắc.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
