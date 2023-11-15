import { useState } from "react";
import UserPool from "../UserPool";
import "./Signup.css";
function Signup() {
  // useState Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
