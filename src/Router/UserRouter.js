import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../componentes/chatbot/login/Login";

// Sistema de rutas principal
export const UserRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          
          {/* Sistema de rutas hijas */}
        </Switch>
      </div>
    </Router>
  );
};

export default UserRouter;