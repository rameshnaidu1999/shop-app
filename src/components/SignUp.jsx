import React, { useState } from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import "./css/Signin.css";
import { auth } from "./config/firebase";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="container signin">
      <div className="row">
        <div className="col-lg-6 col-md-10 mx-auto">
          <div className="card mt-3">
            <div className="card-body m-2">
              <Form>
                <FormGroup>
                  <label htmlFor="#username">Email</label>
                  <FormInput
                    type="email"
                    id="#username"
                    placeholder="Email"
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
                    id="#password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <Button squared block onClick={register}>
                  Sign up
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
