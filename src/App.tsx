import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout.tsx";
import Home from "./components/pages/Home.tsx";
import Login from "./components/pages/Login.tsx";
import FreeBoard from "./components/pages/FreeBoard.tsx";
import InfoBoard from "./components/pages/InfoBoard.tsx";
import Restaurants from "./components/pages/Restaurants.tsx";
import Attractions from "./components/pages/Attractions.tsx";
import AuthLinks from "./components/molecules/AuthLinks.tsx";
import SignupForm from "./components/organisms/Signup.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="authlinks" element={<AuthLinks />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="freeboard" element={<FreeBoard />} />
          <Route path="infoboard" element={<InfoBoard />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="restaurants" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
