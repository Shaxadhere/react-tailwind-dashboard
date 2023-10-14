import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../content/Icon";
import useSettings from "../../../config/zustand/settings.store";

const Subsider = ({ title, sidebarOptions }) => {
  const { state } = useSettings();
  const { pathname } = useLocation();

  return (
    <aside
      className={`fixed h-[100vh] w-[240px] overflow-y-auto shadow-md p-[0.5rem]1 ${classNames(
        { hidden: !state?.subsider }
      )}`}
    >
      <h3 className="font-bold text-[15px]">{title}</h3>
      <div className="flex flex-col gap-y-[6px] mt-[10px]">
        {sidebarOptions?.map((item, index) => {
          const isActive = item.link === pathname;
          return (
            <Link to={item.link}>
              <div
                key={index}
                className={`flex m-[1.5px] rounded-none items-center pointer py-[4px] px-[10px] font-bold text-[15px]
               ${classNames({ "bg-[#eaeaea]": isActive })}`}
                role="group"
              >
                {item.icon && <Icon as={item.icon} className={"mr-[5px]"} />}
                <p>{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Subsider;
