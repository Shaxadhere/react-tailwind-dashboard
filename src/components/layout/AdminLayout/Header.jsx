import React from "react";
import Dropdown from "../../controls/Dropdown";
import APP_IMAGES from "../../../config/constants/images";

const Header = () => {
  return (
    <header className="shadow-sm sticky top-[0] h-[60px] w-[100vw]">
      <div className="h-[60px] flex items-center justify-between">
        <div className="flex items-center justify-center h-[60px] w-[75px] border-r border-light-gray">
          <img src={APP_IMAGES.Logo} className="w-[25px] h-[29px]" />
        </div>
        <div className="flex gap-x-4">
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
