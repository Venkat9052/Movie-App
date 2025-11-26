
import React, { useEffect } from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import "../csspages/Likedpage.css"

const WishedPage = () => {

  const { id } = useContext(UserContext);
  const [likedmovies, setLikedmovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (id == "") {
      navigate('/login');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (id !=" "){
      axios.get(`http://localhost:9000/liked_movies?id=${id}`).then(((res) => {
        setLikedmovies(res.data);
      }))
    }

  },[])

  return (
    <>
    <Navbar/>
      <div className='liked-movies'>
        {
          likedmovies.map((movie) => {
            return (
              <div className='single-movie'>
                {movie}
              </div>

            )
          })
        }
      </div>
    </>
  )
}

export default WishedPage