import firebase from "../firebase";

const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(
      () => {
        console.log("Signed Out");
      },
      (error) => {
        console.error("Sign Out Error", error);
      }
    );
};

export default signOut;
