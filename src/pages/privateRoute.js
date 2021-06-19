import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import signOut from "../utils/singOut";

export default function PrivateRoute() {
  const { User } = useContext(UserContext);
  console.log("user", User);

  if (User) {
    return (
      <div>
        <h1>privete</h1>
        <button onClick={() => signOut()}>Sing Out</button>
      </div>
    );
  } else {
    return <Redirect to="/signup" />;
  }
}
