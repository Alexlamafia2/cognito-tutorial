import { useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "./Account";

export default function ChangeEmail() {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  function handleSubmit(event) {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });
      });
    });
  }
  return (
    <div>
      <h2>Change Email</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newEmail">New Email</label>
        <input
          id="newEmail"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Change Email</button>
      </form>
    </div>
  );
}
