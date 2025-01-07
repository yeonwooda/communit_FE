import React from "react";

// buttonProps 타입 정의
export type buttonProps = {
  backgroundColor:
    | "bg-lightyellow"
    | "bg-slightlylighter"
    | "bg-turquoise"
    | "bg-cornflowerblue"
    | "bg-white"
    | "bg-black";
  textColor: "text-white" | "text-black";
  text: string;
  fontSize: "sm" | "md" | "lg";
  onClick?: () => void;
};

// Button 컴포넌트
const Button = ({
  backgroundColor,
  textColor,
  text,
  onClick,
  fontSize,
}: buttonProps) => {
  return (
    <button
      className={`${backgroundColor} ${textColor}  ${fontSize} w-fit p-3 rounded-lg`} // 동적으로 borderRadiusClass 적용
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
