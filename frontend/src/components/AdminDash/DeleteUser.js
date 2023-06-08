function DeleteUser() {
  fetch("http://localhost:3001/users/", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default DeleteUser;
