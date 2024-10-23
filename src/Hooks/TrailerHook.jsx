import React, {useState} from 'react'

export function useTrailer() {
     const [trailerUrl, setUrl] = useState({});

     return [ trailerUrl, setUrl ];
}


