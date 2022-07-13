// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";

// const config = {
//   apiKey: "AIzaSyDiudO_w04qg895pOPm-YfT4gxEvfy_2ZA",
//   authDomain: "kmlkantlogger.firebaseapp.com",
//   projectId: "kmlkantlogger",
//   storageBucket: "kmlkantlogger.appspot.com",
//   messagingSenderId: "37582330991",
//   appId: "1:37582330991:web:880fd28dd6ec2d0187019a"
// };

// const firebase = initializeApp(config);
// const db = getFirestore();

// export default firebase;

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const config = {
  apiKey: "AIzaSyDiudO_w04qg895pOPm-YfT4gxEvfy_2ZA",
  authDomain: "kmlkantlogger.firebaseapp.com",
  projectId: "kmlkantlogger",
  storageBucket: "kmlkantlogger.appspot.com",
  messagingSenderId: "37582330991",
  appId: "1:37582330991:web:880fd28dd6ec2d0187019a"
};

const firebase = initializeApp(config);
const db = getFirestore();

export default firebase;

// import firebase from "firebase";

// const config = {
//   apiKey: "AIzaSyCDhiKTrPiT25MHjUgo2oBlC8Q9B9GXI6s",
//   authDomain: "campuzone-395ff.firebaseapp.com",
//   projectId: "campuzone-395ff",
//   storageBucket: "campuzone-395ff.appspot.com",
//   messagingSenderId: "617668146341",
//   appId: "1:617668146341:web:94ee1d16606a17c311c94c"
// };

// firebase.initializeApp(config);

// export default firebase;
