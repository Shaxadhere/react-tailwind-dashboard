import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

const PathGuide = () => {
  const { pathname } = useLocation();
  const splitPath = useMemo(() => pathname.split("/"), [pathname]);
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <p className="text-white text-sm">Dashboard</p>
      </div>
      {splitPath.map((item, index) => (
        <div className="flex items-center">
          <p className="text-white text-sm capitalize">{item}</p>
          {index !== splitPath.length - 1 && (
            <p className="text-white text-sm mx-2">/</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PathGuide;
