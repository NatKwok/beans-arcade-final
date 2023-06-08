import React, { useRef } from "react";
import Button from "@mui/material/Button";
import username from "../Home";

function ChangePassword() {
  const passwordRef = useRef();
  const newpasswordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    fetch("http://localhost:3001/users/password", {
      method: "PATCH",
      body: JSON.stringify({
        username: username,
        password: newpasswordRef.current.value,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify(json));
      });
  };
  return (
    <div>
      <h3 className="text" >Change Password</h3>
      <form onSubmit={handleSubmit}>

        <label className="label" htmlFor="password">New Password: </label>
        <input id="newpassword" type="password" ref={newpasswordRef} />

        <label className="label" htmlFor="password">Verify Password: </label>
        <input id="password" type="password" ref={passwordRef} />

        <br></br>
        <br></br>
        <Button className="button" type="submit" variant="outlined">
          Change Password
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
