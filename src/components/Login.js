import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(credentials));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
