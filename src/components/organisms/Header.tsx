import React from "react";
import Button from "../common/Button.tsx";

// Header (로그인/회원가입 버튼 포함)
const Header = () => {
  return (
    <div className="w-screen h-28 bg-slightlylighter flex items-center">
      <div className="max-w-5xl w-full mx-auto font-extrabold text-5xl flex items-center justify-between">
        <span>Pioneer</span>
        <Button
          backgroundColor="bg-white"
          text="로그인/회원가입"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default Header;
