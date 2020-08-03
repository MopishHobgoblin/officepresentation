import React from 'react';
import Iframe from 'react-iframe';
import collapse from '../../js/collapse';
import { aboutInfo } from './info';



const PageInfo = () => {
    return (
        <div>
        
            <div className="text-center"><h1 className="h1">Microsoft 365</h1></div>

            <div style={{padding: "1rem"}}>
            <p className="lead text-center">On this page you will have all of the information to know what Microsoft365 is, and what it can do for your business.</p>
            </div>
            <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 text-center">{collapse(aboutInfo)}</div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <Iframe 
              width="532px" 
              height="300px"
              src={`https://www.microsoft.com/en-us/videoplayer/embed/RE4t1lL?pid=ocpVideo1-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=en-us`}
              frameBorder="0" 
              marginWidth="0" 
              marginHeight="0" 
              styles={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} 
              AllowFullScreen 
              webkitallowfullscreen 
              mozallowfullscreen 
              msallowfullscreen/>
            </div>
        </div>

        
        </div>
    )
}

export default PageInfo
