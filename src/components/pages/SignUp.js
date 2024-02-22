import React from 'react'
import './Signin.css';
import App from '../../App';
export const SignUp = () => {
  return (
    <div>     
    <div class="form-wrapper">
   
    <h2>Sign Up</h2>
    <form action="#">
        <div class="form-control">
            <input type="text" required/>
            <label>Email or phone number</label>
        </div>
        <div class="form-control">
            <input type="text" required/>
            <label>Username</label>
        </div>
        <div class="form-control">
            <input type="password" required/>ss
            <label>Password</label>
        </div>
        <button type="submit">Sign Up</button>
        <div class="form-help"> 
            <div class="remember-me">
                <input type="checkbox" id="remember-me"/>
                <label for="remember-me">Remember me</label>
            </div>
           
        </div>
    </form>
    <p>Alredy had an Account? <a href="#">Sign In now</a></p> 
   
</div>
</div>
  )
}
