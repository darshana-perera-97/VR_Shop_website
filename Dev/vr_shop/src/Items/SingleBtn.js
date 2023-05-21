import React from 'react'

export default function SingleBtn(prop) {
  return (
    <div className="itemCenter blackBack">
      <button className="singleBtn">{prop.btnText}</button>
    </div>
  );
}
