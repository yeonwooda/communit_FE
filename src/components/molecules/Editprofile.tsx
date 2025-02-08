import React from "react";
import Image from "../common/image.tsx";
import { sizes } from "../../styles/sizes.ts";
import Text from "../common/Text.tsx";

const Editprofile = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-7 border-b-2 border-blue-500">
        <Image src="/images/프로필.png" size="large" />
        <span
          className="mt-3 font-semibold mb-6"
          style={{ fontSize: sizes.fontSize.sm }}
        >
          사진 수정
        </span>
      </div>
      <div>
        <Text text="이름" />
        <Text text="사용자 이름" />
        <Text text="소개" />
      </div>
    </>
  );
};

export default Editprofile;
