import "../../App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import { Button } from "@mui/material";

function UserDash() {

  return (
    <>
      <div className="App">
        <div className="nav">
          <Button className="button" variant="outlined">Home</Button>
          <Button className="button" variant="outlined">Logout</Button>
        </div>
        <div>
          <h1 className="text">User Dashboard</h1>

          <h1 className="text">Profile Picture</h1>
          <label className="label">Upload Profile Picture: </label>
          <Button className="button" variant="outlined">
            <input accept="image/*" multiple type="file" />
          </Button>
          <br></br>
          <br></br>
          <div id="user">
            <ChangeUsername />
          </div>
          <div id="pass">
            <ChangePassword />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDash;
