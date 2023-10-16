import React from "react";
import FormInput from "../../../components/forms/FormInput";
import Toast from "../../../components/feedback/toast";

const Dashboard = () => {
  return (
    <div className="max-w-[1000px]">
      <FormInput
        id={"email"}
        type="email"
        label={"Email"}
        placeholder={"someone@example.com"}
      />
      <Toast/>
    </div>
  );
};

export default Dashboard;
