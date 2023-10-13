import React from "react";
import APP_IMAGES from "../../../config/constants/images";
import { mainMenu } from "../../../config/constants/menus";
import { BsGrid } from "react-icons/bs";
import Sider from "./Sider";
import Header from "./Header";
import FormInput from "../../forms/FormInput";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sider />
      <div>
        <Header />
        <main className="p-[25px] h-[calc(100vh-70px)]">
          <div className="maxw-[500px]">
            <FormInput />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
