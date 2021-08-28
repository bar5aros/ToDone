import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACHpQGsCZDc5xswKRPSsGraPAE_fjE2zQ",
  authDomain: "todone-barbarosaffan.firebaseapp.com",
  projectId: "todone-barbarosaffan",
  storageBucket: "todone-barbarosaffan.appspot.com",
  messagingSenderId: "53362312047",
  appId: "1:53362312047:web:3cf4bd9368e1dce657de9a",
  measurementId: "G-SB5EDCNGSH",
  databaseURL : "https://todone-barbarosaffan-default-rtdb.europe-west1.firebasedatabase.app/",


  // apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  // authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  // databaseURL: 'https://your-database-name.firebaseio.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
