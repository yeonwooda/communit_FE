import React from "react";
import { sizes } from "../../styles/sizes.ts";

export type ImageProps = {
  src: string;
  size?: keyof typeof sizes.size; // "small" | "medium" | "large"
};

const Image = ({ src, size = "medium" }: ImageProps) => {
  return (
    <img
      src={src}
      style={{
        width: sizes.size[size], // sizes에서 해당 size 값 가져오기
        height: sizes.size[size], // 가로, 세로 동일한 크기로 설정
      }}
    />
  );
};

export default Image;
