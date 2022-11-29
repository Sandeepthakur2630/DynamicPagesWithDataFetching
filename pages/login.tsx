import React from "react";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { loginApi } from "./network/api/userAuthApi";
const login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, tokenState }: any = useAuth();

  async function handleClick() {
    console.log("handle click is working");
    try {
      const res = await loginApi({ username: name, password });
      if (res.type === "RXSUCCESS") {
        onLogin(res.data.token);
      } else {
        alert("incorrect username or password");
      }
    } catch {
        
    }
  }
  return (
    <div>
      <h1>This is the login page</h1>
      <label htmlFor="username">Username</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="username"
      />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default login;
