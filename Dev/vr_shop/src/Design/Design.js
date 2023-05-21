import React from "react";
import TopBar from "../Components/TopBar";
import MainBanner from "../Components/MainBanner";
import EventSet from "../Components/EventSet";

export default function Design() {
  return (
    <div className="mainPage">
      <TopBar />
      <MainBanner />
      <EventSet/>
    </div>
  );
}
