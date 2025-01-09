import React from "react";

export type boardProps = {
  img: string;
  rounded: "12px" | "30px" | "9999px";
  text: string;
};

const Board = ({ img, rounded, text }: boardProps) => {
  return (
    <div>
      <img
        src={img}
        className={`${rounded} w-60 h-60 m-10 bg-black`}
        alt="board image"
      />
      <span>{text}</span>
    </div>
  );
};

export default Board;
