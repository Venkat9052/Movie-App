
import { React, useEffect, useRef } from 'react'
import "../csspages/Loginpage.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/Usercontext'
import axios from 'axios'
import Navbar from './Navbar'


const Loginpage = () => {

  const { id, setid } = useContext(UserContext);
  const navigate = useNavigate();

  //variables of login credintials
  const email = useRef(null);
  const password = useRef(null);


  const Login = () => {
    if (email.current.value == "" || password.current.value == "") {
      alert("mandatory to fill all feilds");
    } else {
      axios.get(`http://localhost:9000/login?email=${email.current.value}&password=${password.current.value}`).then((res) => {

        if (res.data.login == false) {
          alert(res.data.alert)
        }
        else {
          setid(res.data.id)
          navigate("/")
        }


      })

    }
  }

  return (
    <>
    {/* Navbar */}
    <Navbar/>
  {/* // Login Page  */}
  <div className='Wholepage'>
    
  <div className='Login-container'>
    <div className='login-main-container'>
      <div className="login-header">
        <h2 id="login-header"> User-Login</h2>
      </div>
      <div className="login-email">
        <input type="email" id="email" placeholder='' ref={email} />
        <label htmlFor="email">User Email </label>
      </div>

      <div className="login-password">
        <input type="password" id="user-pass" placeholder='' ref={password} />
        <label htmlFor="user-pass">Password </label>
        <button id="pass-button"></button>
      </div>

      <div className="login-forgotpass">
        <p id="forgotpass">forgot password <span>?</span></p>
        <Link to="/signup" className="new-register">
          signup <span>/</span> new registration
        </Link>

      </div>

      <div className="login-button">
        <button id="login-button" onClick={Login}>Login </button>
      </div>

    </div>
  </div>
  </div>
</>
)}

export default Loginpage