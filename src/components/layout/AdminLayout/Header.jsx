import React from "react";
import Dropdown from "../../controls/Dropdown";
import APP_IMAGES from "../../../config/constants/images";
import PathGuide from "./PathGuide";

const Header = () => {
  return (
    <header className="shadow-sm sticky top-[0] h-[60px] w-[100vw]">
      <div className="h-[60px] flex items-center">
        <div className="flex items-center justify-center h-[60px] w-[75px] border-r border-light-gray">
          <img src={APP_IMAGES.Logo} className="w-[25px] h-[29px]" />
        </div>
        <div className="flex items-center justify-between px-[20px] w-[calc(100vw-70px)]">
          <PathGuide />
          <div className="flex gap-x-4">
            <Dropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
