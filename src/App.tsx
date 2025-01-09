import React from "react";
import Header from "./components/organisms/Header.tsx";
import AuthForm from "./components/molecules/AuthForm.tsx";
import Board from "./components/common/Board.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <Board
        img="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002601.png"
        rounded="30px"
        text="자유게시판"
      />
    </div>
  );
};

export default App;
