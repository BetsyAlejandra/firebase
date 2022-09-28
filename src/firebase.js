import { initializeApp } from "firebase/app";

//informacion de la aplicacion copiada desde firebase
const config = {
  apiKey: "AIzaSyBVRFUmACHbNtAkHH_McQUjKuHTw_0Q9Do",
  authDomain: "autenticacionreact-3e721.firebaseapp.com",
  projectId: "autenticacionreact-3e721",
  storageBucket: "autenticacionreact-3e721.appspot.com",
  messagingSenderId: "150371310684",
  appId: "1:150371310684:web:c012c3e9644d89f7125a99",
  measurementId: "G-XER3EFRDD9"
  };
  const fire = initializeApp(config);
  export default fire