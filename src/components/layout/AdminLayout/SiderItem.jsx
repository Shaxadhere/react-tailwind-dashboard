import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../content/Icon";
import classNames from "classnames";
import useSettings from "../../../config/zustand/settings.store";

const SiderItem = ({ link, icon }) => {
  const { toggleSubsider } = useSettings();
  const { pathname } = useLocation();
  const isActive = pathname.split("/")[2] === link.split("/")[2];

  const onClick = () => {
    if (isActive) toggleSubsider();
  };

  return (
    <Link to={link}>
      <div
        className={`flex h-[50px] w-[50px] items-center justify-center m-[auto] hover:bg-primary-hover hover:text-primary ${classNames(
          { "bg-primary-hover text-primary": isActive }
        )}`}
        onClick={onClick}
      >
        <Icon as={icon} size={22} />
      </div>
    </Link>
  );
};

export default SiderItem;
