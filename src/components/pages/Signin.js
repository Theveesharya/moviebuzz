import React from 'react'
import './Signin.css';


export const Signin = () => {


  return (
    <div>     
    <div class="form-wrapper">
   
    <h2>Sign In</h2>
    <form action="#">
        <div class="form-control">
            <input type="text" required/>
            <label>Email or phone number</label>
        </div>
        <div class="form-control">
            <input type="password" required/>ss
            <label>Password</label>
        </div>
        <button type="submit">Sign In</button>
        <div class="form-help"> 
            <div class="remember-me">
                <input type="checkbox" id="remember-me"/>
                <label for="remember-me">Remember me</label>
            </div>
            <a href="#">Need help?</a>
        </div>
    </form>
    <p>New to MovieBuzz? <a href="#">Sign up now</a></p>
   
</div>
</div>
  )
}
export default Signin;