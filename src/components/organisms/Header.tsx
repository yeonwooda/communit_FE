import React from "react";
import Button from "../common/Button.tsx";

// Header (로그인/회원가입 버튼 포함)
const Header = () => {
  return (
    <div className="w-screen h-28 bg-slightlylighter flex items-center">
      <div className="max-w-5xl w-full mx-auto font-extrabold flex items-center justify-between text-red">
        <span className="text-2xl">Pioneer</span>
        <Button
          backgroundColor="bg-white"
          text="로그인/회원가입"
          textColor="text-black"
          fontSize="lg"
        />
      </div>
    </div>
  );
};

export default Header;
