import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";

function App() {
  return (
    <>
      <h1>Welcome To Cognito Tutorial</h1>
      <Account>
        <Status />
        <hr />
        <Signup />
        <hr />
        <Login />
        <hr />
        <Settings />
      </Account>
    </>
  );
}

export default App;
