import { useState, useContext } from "react";
import { AccountContext } from "./Account";
import "./Signup.css";
function Login() {
  // useState Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  // handle form submit
  function handleSubmit(event) {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged In!", data);
      })
      .catch((err) => {
        console.log("LFailed to Login", err);
      });

    setEmail("");
    setPassword("");
  }

  // return JSX code
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
