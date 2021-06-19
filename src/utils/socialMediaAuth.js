import firebase from "../firebase";

export const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
