import firebase from "../firebase";

const signUpWithEmailAndPassword = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      return user;
    })
    .catch((e) => {
      console.log("error to sign up", e.message);
      const formated = e.message.toString();
      throw new Error(formated);
    });

export default signUpWithEmailAndPassword;
