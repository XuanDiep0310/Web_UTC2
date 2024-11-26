import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
