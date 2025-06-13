import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

function Login() {

  const [state,setState] = useState(true)

  const {showUserLogin,setShowUserLogin,user,setUser} = useContext(AppContext)

  //**Handle the form */
  const handleForm = async(event) => {
    setUser(true)
    setShowUserLogin(false)
  }
  return (
    <div  onClick={()=>setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 bg-black/40 pt-25'>
      <StyledWrapper className='flex justify-center'>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="heading">{state ? "Login" : "Sing Up"}</div>
        <form action={handleForm} className="form" >
          {!state  && <input required className="input" type="text" name="name" id="email" placeholder="name" />}
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required className="input" type="text" name="password" id="password" placeholder="Password" />
          {state && <span className="forgot-password"><a href="#">Forgot Password ?</a></span>}
          <button className="login-button pointer-cursive" type="submit">
            {state ? "login" : "create account"}
          </button>
          </form>
        <p>{state ? "Create on Account?" :"Already have account?"} <span className='cursive cursor-pointer text-primary' onClick={() => setState((pre) => pre ? false : true)}>Click here</span></p>
      </div>
    </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .container {
    max-width: 350px;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 30px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color:#4fbf8b ;
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input::-moz-placeholder {
    color: #4fbf8b;
  }

  .form .input::placeholder {
    color: gray;
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }

  .form .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .form .forgot-password a {
    font-size: 11px;
    color: #4fbf8b;
    text-decoration: none;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background-color: #4fbf8b;
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .login-button:hover{
    cursor:pointer
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
  }
  }`;
  

export default Login