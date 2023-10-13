import React from "react";
import { mainMenu } from "../../../config/constants/menus";
import { BsGrid } from "react-icons/bs";
import APP_IMAGES from "../../../config/constants/images";

const Sider = () => {
  return (
    <aside className="shadow-sm w-[75px]  h-[100vh]">
      <div className="flex items-center justify-center h-[60px] shadow-md shadow-inner">
        <img src={APP_IMAGES.Logo} className="w-[25px] h-[29px]" />
      </div>
      <div className="flex flex-col mt-[30px] gap-y-[20px] mx-[10px]">
        {mainMenu.map((item, index) => (
          <div
            key={index}
            className="flex h-[50px] w-[50px] items-center justify-center m-[auto] hover:bg-[#f6f7ff]"
          >
            <BsGrid size={22} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sider;
