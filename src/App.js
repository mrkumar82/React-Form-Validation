import "./styles.css";
import React from "react";
import ReactForm from "./components/ReactForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactFormikForm from "./components/ReactFormikForm";

export default function App() {
  return (
    <div className="container">
      <Router>
        <div className="links">
          <Link to="/">React Form </Link> |{" "}
          <Link to="/formikForm">React Formik Form</Link>
        </div>
        <Switch>
          <Route exact path="/" component={ReactForm} />
          <Route exact path="/formikForm" component={ReactFormikForm} />
        </Switch>
      </Router>
    </div>
  );
}
