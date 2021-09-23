import React from 'react'

const Video = () => {
    return (
        <div>
      <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src="https://portfolio.zenchirecords.com/public/movies/octo_frontpage.mp4" />
      </video>
    </div>
    )
}

export default Video



