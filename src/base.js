import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCncmJ3rFJaK_EKUPdibmvbyuCVCKtK6ps",
  authDomain: "wesbro-tutorial.firebaseapp.com",
  projectId: "wesbro-tutorial",
  //   storageBucket: "wesbro-tutorial.appspot.com",
  //   messagingSenderId: "313112313389",
  //   appId: "1:313112313389:web:fdaad1a503df3191f8c2a4",
  //   measurementId: "G-JJM51TQGMK",
});

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
