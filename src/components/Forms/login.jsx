import react from "react";
import { useState } from "react";
import './login.css';
import axios from "axios";
import Validate_signup from "./validation";
const Login = () => {
    const [error, setError] = useState({
    });
    const [userLogin, setUserLogin] = useState({
        logemail: "",
        logpass: "",
    });
    const [userSignup, setUserSignup] = useState({
        logname: "",
        logemail: "",
        logpass: "",
    });
    const userSignupData=
    (...prop) =>
    (event) => {
        setUserSignup({ ...userSignup, [prop]: event.target.value });
        setError({});
        console.log(userSignup);
    }
    const userData =
    (...prop) =>
    (event) => {
      setUserLogin({ ...userLogin, [prop]: event.target.value });
      console.log(userLogin);
    };
    const loginsubmit = (event) => {
        event.preventDefault();
        console.log(userLogin);
        axios.post("http://localhost:3080/user/login",userLogin).then((res)=>{
            const success={password_error:"login successful!"};
            setError(success);
        }).catch((err)=>{
            const error3={password_error:"please check your email and password"};
            setError(error3);
        })
    }
    const signupsubmit = (event) => {
        event.preventDefault();
        console.log(userSignup);
        const error1 = Validate_signup(userSignup);
        setError(error1);
        console.log(error1);
        if(!error1.valid_email || !error1.valid_password){
            console.log("validation error.");
        }
        else{
            axios.post("http://localhost:3080/user/register",userSignup).then((res)=>{
                console.log(res);
                const message={password_error:"User created!"};
                setError(message);
            }).catch((err)=>{
                const error2={password_error:"User already exists"};
                setError(error2);
            })
        }
    }
    return(
        <>   
	<a href="https://front.codes/" class="logo" target="_blank">
    </a>
<div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                      <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                      <label for="reg-log"></label>
                    <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                            <div class="card-front">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">Log In</h4>
                                        <form method="POST">
                                            <div class="form-group">
                                                <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" onChange={userData("logemail")}></input>
                                                <i class="input-icon uil uil-at"></i>
                                            </div>	
                                            <div class="form-group mt-2">
                                                <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" onChange={userData("logpass")}></input>
                                                {error && error.password_error}
                                                <i class="input-icon uil uil-lock-alt"></i>
                                            </div>
                                            <a href="#" class="btn mt-4" type="submit" onClick={loginsubmit}>submit</a>
                                        </form>
                                      </div>
                                  </div>
                              </div>
                            <div class="card-back">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">Sign Up</h4>
                                        <form method="POST">
                                            <div class="form-group">
                                                <input type="text" name="username" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" onChange={userSignupData("logname")} required></input>
                                                <i class="input-icon uil uil-user"></i>
                                            </div>	
                                            <div class="form-group mt-2">
                                                <input type="email" name="email" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" onChange={userSignupData("logemail")}></input>
                                                {error && error.email_error}
                                                <i class="input-icon uil uil-at"></i>
                                            </div>	
                                            <div class="form-group mt-2">
                                                <input type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" onChange={userSignupData("logpass")}></input>
                                                <i class="input-icon uil uil-lock-alt"></i>
                                            </div>
                                            <div class="form-group mt-2">
                                                <input type="password" name="confirmpassword" class="form-style" placeholder="Confirm Password" id="confpass" autocomplete="off" onChange={userSignupData("confpass")}></input>
                                                {error && error.password_error}
                                                <i class="input-icon uil uil-lock-alt"></i>
                                            </div>
                                            <a href="#" class="btn mt-4" type="submit" onClick={signupsubmit}>submit</a>
                                        </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div>
</>
)
}

export default Login