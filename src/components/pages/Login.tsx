import React from "react";
import Input from "../common/Input.tsx";
import Button from "../common/Button.tsx";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="mb-4 text-lg font font-bold">Pioneer</span>
      <Input />
      <Button backgroundColor="bg-black" textColor="text-white" text="로그인" />
      <span>아이디 찾기 | 비밀번호 찾기</span>
      <span></span>
    </div>
  );
};

export default Login;
