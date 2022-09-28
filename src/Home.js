import React from "react";

import AdminView from "./ViewAdmin";
import UserView from "./UserView";

import fire from "./firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(fire);

function Home({ user }) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "admin" ? <AdminView /> : <UserView />}
    </div>
  );
}

export default Home;