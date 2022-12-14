/*import React from 'react'
import './'
const Login=()=>{
	return(
		<div>
			<form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="text" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;*/
import React from "react";
import { Helmet } from "react-helmet"
import './Login.css';
function Login()
{
	return(
      <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login Form
            </div>
            <div class="title signup">
               Signup Form
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked></input>
               <input type="radio" name="slide" id="signup"></input>
               <label for="login" class="slide login">Login</label>
               <label for="signup" class="slide signup">Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="./home.html" class="login" >
                  <div class="field">
                     <input type="email" placeholder="Email Address" required></input>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required></input>
                  </div>
                  <div class="pass-link">
                     <a href="./forget.html">Forgot password?</a>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Login"></input>
                  </div>
                  <div class="signup-link">
                     Not a member? <a href="">Signup now</a>
                  </div>
               </form>
               <form action="./js/reset.js" class="signup">
                  <div class="field">
                     <input type="email" placeholder="Email Address" required></input>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required></input>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Confirm password" required></input>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Signup"></input>
                  </div>
               </form> 
            </div>
         </div>
      </div>

        const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
   
        
     
  );
  }
export default Login;