import React, { useState, useEffect } from 'react';
import { IMAGE_URL } from '../../constant/Constant';
import axios from '../../Axios';

import './RowPost.css'

function RowPost(props) {
    const {title, small, subUrl, setUrl } = props;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${subUrl}`)
        .then((response) => {
            setMovies(response.data.results);
        })
    },[])

    const handler = (id) => {
        console.log('id recieved', id)
        axios.get(`movie/${id}/videos?language=en-US`)
        .then((response) => {

            if(response.status === 200) {
               if(response.data.results) {
                const url = response.data.results[0]
                console.log(response.data.results[0]);
                setUrl(url);
               } else {
                  
               }
            } else if(response.status === 404) {
                console.log('something went wrong');
            }
          
        })
    } 

  return (
    <div>
       <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {
                    movies.length > 0 && movies.map((movie) => {
                        console.log(movie)
                        return (
                            <div className='movie' style={{textAlign: 'center'}}>
                                <img onClick={() => handler(movie.id)} className={ small ? 'small' : 'poster' } alt='poster' src={`${IMAGE_URL + movie.backdrop_path}`} />
                                <p style={{fontSize: '10px'}}>{movie.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RowPost
