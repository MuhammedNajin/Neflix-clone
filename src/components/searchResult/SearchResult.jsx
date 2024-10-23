import React, { useState } from "react";
import { IMAGE_URL } from "../../constant/Constant";
import { SearchContext } from "../../contexts/searchContext";
import "./SearchResult.css"; // Import your CSS for styling

function SearchResult(props) {
  const { searchResults } = props;
  console.log( 'search reasult', searchResults)
  return (
    <div className="search-result-container" >
        { searchResults && searchResults.map((movie) => (
          <div className="search-result">
          <img
            className="search-result-image"
            src={movie.backdrop_path ? `${IMAGE_URL}/${movie?.backdrop_path}`: 'https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq' }
            alt=""
          />
          <div className="search-result-info">
            <h3>{movie?.name}</h3>
            <p>{movie?.overview}</p>
          </div>
        </div>
        ))}
    </div>
  );
}

export default SearchResult;
