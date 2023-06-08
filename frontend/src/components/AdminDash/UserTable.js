import { useEffect, useState } from "react";
import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from "@mui/material";

function UserTable() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`http://localhost:3001/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const DeleteUser = ()=>{
    fetch("http://localhost:3001/users/:username", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => console.log(JSON.stringify(json)));
    
}


  return (
    <>
      <div className="App">
        <h1 className="text">Admin Dashboard</h1>
        <TableContainer>
          <Table>
            <TableHead>
              <TableCell align="right">UserID</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">HighScore</TableCell>
              <TableCell align="right">Bio</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableHead>

            {data.map((item, index) => (
              <TableBody key={index._id}>
                <TableCell align="right">{item._id}</TableCell>
                <TableCell align="right">{item.username}</TableCell>
                <TableCell align="right">{item.password}</TableCell>
                <TableCell align="right">{item.highscore}</TableCell>
                <TableCell align="right">{item.bio}</TableCell>
                <TableCell align="right">
                  <button className="adminbutton">Edit</button>
                  <button className="adminbutton" onClick={DeleteUser}>Delete</button>
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default UserTable;
