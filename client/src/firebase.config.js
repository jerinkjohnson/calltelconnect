
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiX0_NDZKkSY63_J1G_zPb91hYvHzjbRs",
  authDomain: "calltelconnect.firebaseapp.com",
  projectId: "calltelconnect",
  storageBucket: "calltelconnect.appspot.com",
  messagingSenderId: "642530175753",
  appId: "1:642530175753:web:ce8dd6c125fba99f5581d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);