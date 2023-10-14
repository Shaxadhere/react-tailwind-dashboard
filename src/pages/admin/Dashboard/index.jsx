import React from "react";
import FormInput from "../../../components/forms/FormInput";

const Dashboard = () => {
  return (
    <div className="max-w-[500px]">
      <FormInput
        id={"email"}
        type="email"
        label={"Email"}
        placeholder={"someone@example.com"}
      />
    </div>
  );
};

export default Dashboard;
