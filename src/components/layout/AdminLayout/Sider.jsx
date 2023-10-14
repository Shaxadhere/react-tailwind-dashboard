import React from "react";
import { mainMenu } from "../../../config/constants/menus";
import Icon from "../../content/Icon";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <aside className="w-[75px]  h-[calc(100vh - 60px)] border-r border-light-gray">
      <div className="flex flex-col mt-[30px] gap-y-[20px] mx-[10px]">
        {mainMenu.map((item, index) => (
          <Link to={item.link}>
            <div
              key={index}
              className="flex h-[50px] w-[50px] items-center justify-center m-[auto] hover:bg-[#f6f7ff]"
            >
              <Icon as={item.icon} size={22} />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sider;
