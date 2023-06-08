import {React, useState, useEffect} from "react";

function Leaderboard() {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch("http://localhost:3001/leaderboard", { method: "GET" })
        .then((data) => data.json())
        .then((json) =>  { 
            setUsers(json);
        });
    };
    
    useEffect(() => {
        fetchUsers();
    }, [])
   

  return (
    <div style={{width: "98%", display: "flex", justifyContent: "center"}}>
        <table style={{width: "50%", color: "black", backgroundColor: "white", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 10px 3px #EDC28F, 0px 0px 35px 6px sienna inset", padding: "10px", fontWeight: "bold", fontSize: "130%" }}>
            {/*
            <tr>
                <td style={{colspan: "2"}}>
                    Leaderboard
                </td>
            </tr>*/}
            {users.map(user => {
                return(
                    <tr key={user._id}>
                        <th style={{width: "50%", textAlign: "right", borderBottom: "1px solid sienna"}}>
                            {user.username} 
                        </th>
                        <td style={{ textAlign: "left", borderBottom: "1px solid sienna"}}>
                            &emsp;{user.minesweeperScore}
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
  );
}

export default Leaderboard;
