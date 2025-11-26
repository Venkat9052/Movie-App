import React, { useEffect } from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import "../csspages/Homepage.css"

const Homepage = () => {
  const{id} = useContext(UserContext);
  const navigate = useNavigate(); 
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    if(id == ""){
      navigate('/login');
    }
  },[id,navigate]);

  useEffect(() => {
    axios.get("http://localhost:9000/movies").then((res) => {
      setMovies(res.data);
    });

  },[])

  const Like = (movie)=>{
      axios.get(`http://localhost:9000/liked?id=${id}&movie=${movie}`).then((res)=>{
        
      })

      }

     
  return (
    
    <>
      <Navbar />
      <hr></hr>
     
        <div className='all-movies'>
        
            {
              movies.map((movie) => {
                return (
                  <div className='single-movie'>
                    {movie}
                    <button className='likebutton' onClick={()=>Like(movie)}>&hearts;</button>
                  </div>

                )
              })
            }

          </div>

    </>
  )

}

export default Homepage