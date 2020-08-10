import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo } from '../../js/pageLinks';
//import PageInfo from './PageInfo';
import mentions from '../../util/images/About/Mentions.png';
import collaboration from '../../util/images/About/Comments.png';
import modes from '../../util/images/About/Modes.png';
import videoViewer from '../../js/videoViewer';

const About = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["about"])}
            <h1 className="display-4 text-center">Microsoft 365</h1>
            <br></br>
            <div className="container">
                <p className="lead text-center">Microsoft Office 365 (Microsoft 365) is the new subscription-based office suite provided by Microsoft that hopes to improve productivity, collaboration and efficiency between teams and organisations.</p>
                <br></br>
                {videoViewer(`https://www.microsoft.com/en-us/videoplayer/embed/RE4t1lL?pid=ocpVideo1-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=en-us`)}
                <br></br>
                <p className="lead text-center">A heavy focus on the web means that many great features, such as comments, @mentions and real-time collaboration is more accessible than before, allowing for teams to converse, assign roles, share and co-author products in a way that was previously unprecedented.</p>
                <br></br>    
                    <div className="d-flex flex-wrap justify-content-around text-center">
                        <div className="flex-grow-1">
                        <figure className="figure">
                            <img src={collaboration} alt="Real-Time collaboration in Microsoft 365" />
                            <figcaption className="figure-caption text-right">Real-Time collaboration in Microsoft 365</figcaption>
                        </figure>
                        </div>
                        <div className="flex-grow-1">
                        <figure className="figure">
                            <img src={mentions} alt="@mentions, a feature of Microsoft 365"/>
                            <figcaption className="figure-caption text-right">@mentions, a feature of Microsoft 365</figcaption>
                        </figure>
                        </div>
                        <div className="flex-grow-1">
                        <figure className="figure">
                            <img src={modes} alt="Editing modes in Microsoft 365"/>
                            <figcaption className="figure-caption text-right">Editing modes in Microsoft 365</figcaption>
                        </figure>
                        </div>
                    </div>
                <br></br>    
                <p className="lead text-center ">Microsoft 365 is a product that promotes teamwork, helps you achieve your potential for excellence making it easier to produce high quality, professional work that you can be proud of.</p>
            </div>
            <br></br>
        <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/do' role="button">Click here to learn what Microsoft 365 can do for you</a>
        </div>
        </div>
    )
}

export default About
