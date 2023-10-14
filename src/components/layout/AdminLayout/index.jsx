import React from "react";
import Sider from "./Sider";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sider />
        <main className="h-[calc(100vh-60px)] w-[calc(100vw-75px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
