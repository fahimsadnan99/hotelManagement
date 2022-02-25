import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import RoomDetais from "./components/rooms/RoomDetais";
import Search from "./components/SearchRoom/Search";
import Practice from "./components/Practice"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:id" element={<RoomDetais />}></Route>
        <Route path="/search" element={<Search />}></Route>

        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};

export default App;
