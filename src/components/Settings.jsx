import { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

export default function Settings() {
  const { getSession } = useContext(AccountContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, [getSession]);

  return (
    <div>
      {loggedIn && (
        <>
          <h1>Settings</h1>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  );
}
