import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVSGxpdnZI1uDfAcniOGrdU0Wp2pByjHY",
  authDomain: "agora-app-850d6.firebaseapp.com",
  projectId: "agora-app-850d6",
  storageBucket: "agora-app-850d6.appspot.com",
  messagingSenderId: "13643113872",
  appId: "1:13643113872:web:7131c4d792ba6911d9ff15",
  measurementId: "G-FK7493MX82",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
