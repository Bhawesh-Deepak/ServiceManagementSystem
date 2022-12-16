import React,{useState} from 'react'
import LoginForm from '../components/Login/LoginForm'
import OTPLogin from '../components/Login/OTPLogin'
import {Form, Formik, Field, ErrorMessage } from 'formik'


export default function Login() {
   
   const [loginForm, setLoginForm]= useState(false); 
  return (
      loginForm ? (<LoginForm LoginForm={loginForm} setLoginForm={setLoginForm} />)
          : (<OTPLogin LoginForm={loginForm} setLoginForm={setLoginForm} />)
  )
}
