import { useContext, useState } from "react";
import { AccountContext } from "./Account";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession } = useContext(AccountContext);

  function handleSubmit(event) {
    event.preventDefault();
    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    });
  }
  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          id="currentPassword"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="newPassword">New Password</label>
        <input
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
