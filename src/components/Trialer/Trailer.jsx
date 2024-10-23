import React from 'react'
import YouTube from 'react-youtube';
import './Trailer.css'

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
};

function Trailer(props) {
    
    const { videoId, setUrl } = props;

  return  (
    <div className='trailer'>
        <div className='trailer-app'>
        <div className=''>
        <YouTube videoId={videoId} opts={opts}  />

        </div>
        <div className='button-countainer'>
            <button onClick={() => setUrl({})} className='close-button'>Close</button>
        </div>
        </div>
    </div>
  )

}

export default Trailer
