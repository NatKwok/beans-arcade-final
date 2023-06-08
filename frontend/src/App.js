import Home from "./components/Home.jsx";
import Board from "./components/Minesweeper/Board.jsx";
import LyricsGame from "./components/lyrics/LyricsGame.js";
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RequireAuth from "./components/RequireAuth";
import UsernameContext from "./context/UsernameContext";
import MemoryGame from "./components/MemoryGame/MemoryGame.js";
import UserDash from "./components/UserDash/UserDash";
import Logout from "./components/Logout";
import LoginButton from "./components/LoginButton";

function App() {
  const [username, setUsername] = useState(null);
  const usernameValueAndSetterToProvide = [username, setUsername]; // So we can pass down both value and setter

  return (
    <div style={{border: "8px double #EDC28F", borderRadius: "3px", textAlign: "center", boxShadow: "2px 2px 15px 5px #EDC28F, 2px 2px 15px 5px #EDC28F inset"}}>
      <UsernameContext.Provider value={usernameValueAndSetterToProvide}>
        <Routes>
          <Route path="/" element={<Home />}>
            {username ? <Route index element={<Logout />} /> : <Route index element={<LoginButton />} />}
            <Route path="/userDash" element={<UserDash />} />
            <Route path="/adminDash" element={<AdminDash />} />
            {/* <Route path="signup" element={<Signup />} /> */}
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/minesweeper" element={<RequireAuth><Board /></RequireAuth>} />
          <Route path="/lyrics" element={<RequireAuth><LyricsGame /></RequireAuth>} />
          <Route path="/memorygame" element={<RequireAuth><MemoryGame /></RequireAuth>} />
        </Routes>
      </UsernameContext.Provider>
    </div>
  );
}
export default App;
