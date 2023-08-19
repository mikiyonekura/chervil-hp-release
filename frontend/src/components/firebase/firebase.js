import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import{ GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWWTI1kKqCoS1J2eUg9oa1o6K-tBuQcwY",
  authDomain: "login-app-4867f.firebaseapp.com",
  projectId: "login-app-4867f",
  storageBucket: "login-app-4867f.appspot.com",
  messagingSenderId: "583696428906",
  appId: "1:583696428906:web:ca9baa6d75af5254a7ff13",
  measurementId: "G-RS8XPLEXCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };