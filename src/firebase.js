// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { 
  getFirestore, collection, getDocs
} from "firebase/firestore";
// import { 
//   getAuth,
//   connectAuthEmulator,
//   signInWithEmailAndPassword
//  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqQpACjgr4yLlsW-FP4BRECKZSyv4R_SA",
  authDomain: "lend-and-lease.firebaseapp.com",
  projectId: "lend-and-lease",
  storageBucket: "lend-and-lease.appspot.com",
  messagingSenderId: "589013035905",
  appId: "1:589013035905:web:b4d65afdcc810679059680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);

// Marketplace collection
export const marketRef = collection(db, "marketplace")

// Storage
export const storage = getStorage();

// Collection ref
// const colRef = collection(db, 'marketplace');

// connectAuthEmulator(auth, "http://localhost:9099")

// // Login using email/password
// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value
//   const loginPassword = txtPassword.value

//   // step 1: try doing this w/o error handling, and then add try/catch
//   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

//   // step 2: add error handling
//   try {
//     await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   }
//   catch(error) {
//     console.log(`There was an error: ${error}`)
//     showLoginError(error)
//   }
// }

// // Create new account using email/password
// const createAccount = async () => {
//   const email = txtEmail.value
//   const password = txtPassword.value

//   try {
//     await createUserWithEmailAndPassword(auth, email, password)
//   }
//   catch(error) {
//     console.log(`There was an error: ${error}`)
//     showLoginError(error)
//   } 
// }

// // Monitor auth state
// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user)
//       showApp()
//       showLoginState(user)

//       hideLoginError()
//       hideLinkError()
//     }
//     else {
//       showLoginForm()
//       lblAuthState.innerHTML = `You're not logged in.`
//     }
//   })
// }

// // Log out
// const logout = async () => {
//   await signOut(auth);
// }

// btnLogin.addEventListener("click", loginEmailPassword) 
// btnSignup.addEventListener("click", createAccount)
// btnLogout.addEventListener("click", logout)

// const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9099");

// monitorAuthState();