import React, { useRef } from "react";
import Button from "@mui/material/Button";

function ChangeUsername() {
  const userRef = useRef();
  const newuserRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    fetch("http://localhost:3001/users/Nathaniel/username", {
      method: "PATCH",
      body: JSON.stringify({
        username: newuserRef.current.value,
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
      <h3 className="text">Change Username</h3>
      <form onSubmit={handleSubmit}>
        
        <label className="label" htmlFor="username">New Username: </label>
        <input id="newusername" type="text" ref={newuserRef} />


        <label  className="label" htmlFor="username">Verify Username: </label>
        <input id="username" type="text" ref={userRef} />

        <br></br>
        <br></br>
        <Button className="button" type="submit" variant="outlined">
          Change Username
        </Button>
      </form>
    </div>
  );
}

export default ChangeUsername;
