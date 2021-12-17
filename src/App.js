import React, { useState } from "react";
import { AppRouter } from "../src/Router/UserRouter";
import { UserContext } from "./context/UserContext";

function App() {
  const [user, setUser] = useState({
    cedula: "40212345667",
    nombre: "qweqwewe",
    email: "e@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
