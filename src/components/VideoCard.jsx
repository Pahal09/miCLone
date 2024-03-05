import React from 'react'
import '../styles/VideoCard.css'

const VideoCard = ({ name, image, index }) => {
    const play = <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" fill='white' /></svg>;
    return (
        <div className='videoCard' style={{ background: `url(${image}) no-repeat` }}>
            <a href="">{play}</a>
            <b>{name}</b>
        </div>
    )
}

export default VideoCard