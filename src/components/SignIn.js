import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import "./css/Signin.css";
import { auth } from "./config/firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="container signup">
      <div className="row">
        <div className="col-lg-6 col-md-10 mx-auto">
          <div className="card mt-3">
            <div className="card-body m-2">
              <Form>
                <FormGroup>
                  <label htmlFor="#username">Email</label>
                  <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput
                    type="password"
                    name="passowrd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button squared block onSubmit={login}>
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
