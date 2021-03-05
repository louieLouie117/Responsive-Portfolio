import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import modules from "../modules/RegLogin.modules.css"


const SignIn = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const login = (event) => {
      event.preventDefault();
      axios
        .post(
          "http://localhost:8000/api/login",
          { email, password },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        //   setLoggedIn();
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(err.response.data.msg);
        });
    };

    return (
        <div className="reg-container">
            <form onSubmit={login}>
                
                <input 
                placeholder="email"
                onChange={e => {setEmail(e.target.value)}}
                value={email}
                />

                <input 
                placeholder="password"
                type="password"
                onChange={e => {setPassword(e.target.value)}}
                value={password}
                />
       

       <input type="submit" value="Sign In"/>
            </form>
        <p className="error-message">{errorMessage ? errorMessage : ""}</p>
          
        </div>
    )
}



export default SignIn
