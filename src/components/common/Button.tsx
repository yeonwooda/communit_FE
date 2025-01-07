import React from "react";

export type buttonProps = {
  backgroundColor:
    | "bg-lightyellow"
    | "bg-slightlylighter"
    | "bg-turquoise"
    | "bg-cornflowerblue"
    | "bg-white";
  textColor: "text-white" | "text-black";
  text: string;
  onClick?: () => void;
};

// 공통 버튼
const Button = ({ backgroundColor, text, textColor, onClick }: buttonProps) => {
  return (
    <button
      className={`${backgroundColor} ${onClick} ${textColor} text-xs p-2 rounded `}
    >
      {text}
    </button>
  );
};

export default Button;
