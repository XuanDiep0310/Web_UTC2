import React from "react";
import className from "classnames/bind";
import styles from "./Content.css";
import MenuLeft from "./components/Menu-Left";
import Background from "./components/Background";
import Internal from "./components/Internal";
import NewsEvents from "./components/News-Events";

const cx = className.bind(styles);

function Content() {
  return (
    <main>
      <MenuLeft />
      <Background />
      <Internal />
      <NewsEvents />
    </main>
  );
}

export default Content;
