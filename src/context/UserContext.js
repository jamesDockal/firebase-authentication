import React, { createContext, useState, useContext } from "react";
import firebase from "../firebase";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [User, setUser] = useState({});

  firebase.auth().onAuthStateChanged((user) => {
    // console.log("User: ", user);
    setUser(user);
  });

  return (
    <UserContext.Provider
      value={{
        User,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
