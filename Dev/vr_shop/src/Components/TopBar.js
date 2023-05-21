import React from "react";
import ShopLogo from "../Items/ShopLogo";
import LinkSet from "./LinkSet";
import SearchButton from "../Items/SearchButton";

export default function TopBar() {
  return (
    <div className="topBar">
      <ShopLogo />
      <LinkSet />
      <SearchButton />
    </div>
  );
}
