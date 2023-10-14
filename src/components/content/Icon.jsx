import React from "react";

const Icon = ({ as, ...rest }) => {
  const IconComponent = as;
  return <IconComponent {...rest} />;
};

export default Icon;
