import React, { useEffect, useState } from 'react'
import axios from '../../Axios';
import { IMAGE_URL, Base_url } from '../../constant/Constant';
import getRandomIntInclusive from '../../Util/Random';
import './Banner.css';
function Banner(props) {
      
      const [movie, setMovie] = useState({})
    useEffect(() => {
    axios.get(`${Base_url}trending/movie/day?language=en-US`)
       .then((response) => {
        const randomNum = getRandomIntInclusive(1, 20);
         console.log(randomNum); 
         console.log('first',response.data.results[0]);
         setMovie(response.data.results[randomNum]);
       })
    }, [])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie.backdrop_path? IMAGE_URL+ movie.backdrop_path : ''})` }}>
        <div className='content'>
            <h1 className='title'>{movie?.original_title}</h1>
            <div className='banner_buttons' >
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
       <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
