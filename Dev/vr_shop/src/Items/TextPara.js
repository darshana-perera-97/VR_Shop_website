import React from "react";
import SingleBtn from "./SingleBtn";

export default function TextPara() {
  return (
    <div className="textPara">
      <p className="para1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br /> Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
      </p>
      <SingleBtn btnText ="Explore Now"/>
    </div>
  );
}
