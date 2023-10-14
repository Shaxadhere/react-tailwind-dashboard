import React, { Fragment } from "react";
import { Outlet } from "react-router";
import classNames from "classnames";    
import Subsider from "../AdminLayout/Subsider";
import useSettings from "../../../config/zustand/settings.store";

const OperationLayout = ({ sidebarOptions, title }) => {
  const { state } = useSettings();

  return (
    <Fragment>
      <Subsider sidebarOptions={sidebarOptions} title={title} />
      <div
        className={classNames({
          "w-[calc(100vw - 240px)] ml-[240px]": state?.subsider,
        })}
      >
        <Outlet />
      </div>
    </Fragment>
  );
};

export default OperationLayout;
