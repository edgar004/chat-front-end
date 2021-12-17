import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from ".././componentes/chatbot/login/Login";
import SimpleForm from ".././componentes/chatbot/SimpleForm";
// Sistema de rutas principal
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/chatbot" component={SimpleForm} />
        </Switch>
      </div>
    </Router>
  );
};
