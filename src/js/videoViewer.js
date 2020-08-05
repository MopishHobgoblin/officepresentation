import React from 'react';
import Iframe from 'react-iframe';

const videoViewer = (link) => {
    return (
            <div className="embed-responsive embed-responsive-16by9">
             <Iframe
              className="embed-responsive-item"
              src={link}
              allowFullScreen="true" />
        </div>
    )
}

export default videoViewer
