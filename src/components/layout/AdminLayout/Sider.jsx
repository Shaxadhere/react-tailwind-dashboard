import React from "react";
import { mainMenu } from "../../../config/constants/menus";
import Icon from "../../content/Icon";
import { Link } from "react-router-dom";
import SiderItem from "./SiderItem";

const Sider = () => {
  return (
    <aside className="w-[75px]  h-[calc(100vh - 60px)] border-r border-light-gray">
      <div className="flex flex-col mt-[30px] gap-y-[20px] mx-[10px]">
        {mainMenu.map((item, index) => (
          <SiderItem icon={item.icon} link={item.link} key={index} />
        ))}
      </div>
    </aside>
  );
};

export default Sider;
