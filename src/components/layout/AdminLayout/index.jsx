import React from "react";
import APP_IMAGES from "../../../config/constants/images";
import { mainMenu } from "../../../config/constants/menus";
import { BsGrid } from "react-icons/bs";
import Sider from "./Sider";
import Header from "./Header";

const Content = () => {
  return (
    <div className="h-[calc(100vh-70px)]">
      <h5>Content</h5>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sider />
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default AdminLayout;
