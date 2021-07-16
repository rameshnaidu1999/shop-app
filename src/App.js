import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import "./components/css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SingleProduct from "./components/SingleProduct";

/* ui-libraries */

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { useStateValue } from "./StateProvider";
import { auth } from "./components/config/firebase";
import { useEffect } from "react";

const App = () => {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user logged in....
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <div>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/products/:id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
