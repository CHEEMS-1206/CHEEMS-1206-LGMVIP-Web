import React, { useState } from "react";
import "./App.css";

function App() {
  const loadUser = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    const dataResponse = jsonResponse.data
    // console.log(dataResponse)
    // console.log(response);
    setUser(dataResponse);
    // console.log(setUser)
  };
  let [users, setUser] = useState([]);

  return (
    <div className="App">
      <h1>Our team</h1>
      <button onClick={loadUser}>List Members</button>
      <ul>
        {users.map(({ id, first_name, last_name, email, avatar }) => (
          <ol key={id}>
            <li> Name : {first_name} {last_name}
            </li>
            <li> Email : {email}</li>
            <img src={avatar} alt='img'></img>
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default App;