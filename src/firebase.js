import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCe5qOfaY9R9dwsWbltY78TGKG2qNeOHn4",
  authDomain: "react-blog-dac0f.firebaseapp.com",
  projectId: "react-blog-dac0f",
  storageBucket: "react-blog-dac0f.appspot.com",
  messagingSenderId: "903138698193",
  appId: "1:903138698193:web:165c267d119fa3ac6ab6f0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
