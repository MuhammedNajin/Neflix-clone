import React, {useState, useEffect, useContext } from 'react'
import { SearchContext } from '../../contexts/searchContext';
import axios from '../../Axios';

import './navbar.css'

function Navbar(props) {
    const [qeury, setQeury] = useState('');
    const { setSearchResult } = useContext(SearchContext);
    function handler() {
       axios.get(`/search/collection?query=${qeury}`)
       .then((responce) => {
          console.log(responce.data.results);
          setSearchResult(responce.data.results);
       })
    }
  return (
    <div className='navbar'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
        <div className='search-container'>
            <input value={qeury} onChange={(e) => setQeury(e.target.value)} id='search-input'  type="search" placeholder='Search...' />
            <button onClick={(e) => handler()} id='search-button'>Search</button>
        </div>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
    </div>
  )
}

export default Navbar
