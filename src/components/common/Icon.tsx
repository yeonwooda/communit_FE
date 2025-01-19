import React from "react";

type IconProps = {
  icon: React.ReactNode;
};

const Icon = ({ icon }: IconProps) => {
  return <div className="flex">{icon}</div>;
};

export default Icon;
