import React from 'react';
import Iframe from 'react-iframe';

const videoViewer = (link) => {
    return (
        <div>
             <Iframe 
              width="532px" 
              height="300px"
              src={link}
              frameBorder="0" 
              marginWidth="0" 
              marginHeight="0" 
              styles={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} 
              AllowFullScreen 
              webkitallowfullscreen 
              mozallowfullscreen 
              msallowfullscreen/>
        </div>
    )
}

export default videoViewer
