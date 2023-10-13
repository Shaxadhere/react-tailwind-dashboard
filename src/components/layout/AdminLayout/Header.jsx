import React from "react";
import Dropdown from "../../controls/Dropdown";

const Header = () => {
  return (
    <header className="shadow-sm sticky top-[0] h-[60px] w-[calc(100vw-75px)]">
      <div className="h-[60px] mx-[15px] flex items-center justify-between">
        <h4>Header</h4>
        <div className="flex gap-x-4">
            <Dropdown/>
        </div>
      </div>
    </header>
  );
};

export default Header;
