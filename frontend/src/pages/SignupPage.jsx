
import React, { useEffect, useState, useRef } from 'react'
import "../csspages/Signup.css"
import UserContext from '../context/Usercontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar'




const SignupPage = () => {

  const{setid}=useContext(UserContext);
  const navigate = useNavigate();

  //variable declaration of input feilds 

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);
  const contact = useRef(null);


  //this is code for toggle password
  const [pass, setpass] = useState("");
  const [showpass, setshowpass] = useState(false);


  //this is state variables of confirm password
  const [confirmpass, setconfirmpass] = useState("");
  const [showconfirmpass, setshowconfirmpass] = useState(false);

  //function to toggle password
  const Toggle = () => {
    setshowpass((prevState) => !prevState);
  }
  //function to toggle confirm password
  const confirmToggle = () => {
    setshowconfirmpass((prevState) => !prevState);
  }


  



  //main logic for backend connectivity
  const signup = () => {

    if (fullname.current.value == '' || email.current.value == '' ||
      contact.current.value == '' || password.current.value == '' ||
      confirmpassword.current.value == '') {

      alert('check all feilds must be filled');

    }
    else{

      if(password.current.value == confirmpassword.current.value){

        axios.get(`http://localhost:9000/signup?fullname=${fullname.current.value}&email=${email.current.value}&contact=${contact.current.value}&password=${password.current.value}&confirmpassword=${confirmpassword.current.value}`)
        .then((res)=>{
          console.log(res.data);
          setid(res.data);
          navigate('/login');
        });

      }
      else{
        alert('password must be match with confirm password');
      }

    }

  }





  return (
    <>
    {/* //Navbar */}
    <Navbar/>

    <div className='Wholepage'>

    {/* // this page returns sign up form   */}

    <div className="signup-container">

      {/* /* signup header */}

      <div className="signup-header">
        <h2 id="signup-header">Sign up</h2>
      </div>


      {/* signup main form */}

      <div className="fullname">
        <input id="fullname" name="fullname" type="text" placeholder='' ref={fullname}></input>
        <label htmlFor='fullname'>Fullname </label>
      </div>

      <div className="email">
        <input id="email" name="email" type="text" placeholder='' ref={email}></input>
        <label htmlFor='email'>Email </label>
      </div>

      <div className="contact">
        <input type="text" id="contact" placeholder='' ref={contact} />
        <label htmlFor="contact" >Contact </label>
      </div>

      <div className="password">
        <input id="password" name="password" type={showpass ? "text" : "password"} placeholder=''
          ref={password} onChange={(e) => setpass(e.target.value)}
          ></input>
        <label htmlFor='password'>Password </label>
        <button id="toggle1" onClick={Toggle}> {showpass ? "👁️" : "🙈"} </button>

      </div>

      <div className="confirm-password">
        <input id="confirm-password" name="confirm-password" type={showconfirmpass ? "text" : "password"} placeholder=''
          ref={confirmpassword} onChange={(e) => setconfirmpass(e.target.value)}></input>
        <label htmlFor='confirm-password'>Confirm-Password </label>
        <button id='toggle2' onClick={confirmToggle}>{showconfirmpass ? "👁️" : "🙈"}</button>

      </div>
      {/* register button to register the new user */}
      <div className="register">
        <button id="register" onClick={signup}>Register</button>
      </div>

    </div>
    
    </div>
</>
  )
}

export default SignupPage