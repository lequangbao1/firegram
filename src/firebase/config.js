import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAWXLiTLErAhOyfw1Rspx1ZHIi1VSzMoGo",
  authDomain: "firegram-cloning.firebaseapp.com",
  projectId: "firegram-cloning",
  storageBucket: "firegram-cloning.appspot.com",
  messagingSenderId: "738581906074",
  appId: "1:738581906074:web:825bfe08ea7f84624e9523",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
