import React from "react";
import TextPara from "../Items/TextPara";
import SingleBtn from "../Items/SingleBtn";

export default function MainBanner() {
  return (
    <div className="mainBanner">
      <div>
        <p className="mainTitle">Welcome</p>
        <p className="mainTitle">To The Ceek</p>
        <p className="mainTitle1">VR</p>
        <p className="mainTitle2">METAVERSE</p>
      </div>
      <TextPara />

    </div>
  );
}
