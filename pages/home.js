import React from "react";
import About from "../src/components/About";
import Awesome from "../src/components/Awesome";
import Awesome2 from "../src/components/Awesome2";
import Flag from "../src/components/Flag";
import Header from "../src/components/Header";
import Production from "../src/components/Production";
import Tree from "../src/components/Tree";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Awesome />
      {/* <Tree /> */}
      <Production />
      <About />
      <Awesome2 />
      <Flag />
    </div>
  );
}
