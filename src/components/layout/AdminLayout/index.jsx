import React from "react";
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
          <div className="max-w-[500px]">
            <FormInput
              id={"email"}
              type="email"
              label={"Email"}
              placeholder={"someone@example.com"}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
