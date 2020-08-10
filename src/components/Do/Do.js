import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo, dropDown } from '../../js/pageLinks';
import collaboration from '../../util/images/About/Comments.png';


const Do = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["do"])}
            <h1 className="h1 text-center">Products available through Microsoft 365</h1>
            <br></br>
            <div className=" text-center">
                <ul className="d-flex flex-wrap justify-content-center list-group list-group-horizontal-lg text-center">
                    <li className="list-group-item">Word</li>
                    <li className="list-group-item">PowerPoint</li>
                    <li className="list-group-item">Excel</li>
                    <li className="list-group-item">Outlook</li>
                    <li className="list-group-item">OneDrive</li>
                    <li className="list-group-item">Teams</li>
                    <li className="list-group-item">ToDo</li>
                    <li className="list-group-item">Calendar</li>
                    <li className="list-group-item">Skype</li>
                    <li className="list-group-item">Forms</li>
                    <li className="list-group-item">Sway</li>
                    <li className="list-group-item">OneNote</li>
                    <li className="list-group-item">Access (Desktop Only)</li>
                    <li className="list-group-item">Publisher (Desktop Only)</li>
                    <li className="list-group-item">SharePoint</li>
                    <li className="list-group-item">Bookings</li>
                    <li className="list-group-item">Yammer</li>
                    <li className="list-group-item">Stream</li>
                    <li className="list-group-item">Lists</li>
                    <li className="list-group-item">Planner</li>
                    <li className="list-group-item">Analytics</li>
                    <li className="list-group-item">PowerApps</li>
                    <li className="list-group-item">Visual Studio</li>
                    <li className="list-group-item">and Others</li>
                </ul>
                </div>
                <br></br>
            <h2 className="h2 text-center">Currently this website only supports information on:</h2>
            <br></br>
            <div className=" text-center">
                <ul className="d-flex flex-wrap justify-content-center list-group list-group-horizontal-lg text-center">
                    <li className="list-group-item">Word</li>
                    <li className="list-group-item">PowerPoint</li>
                    <li className="list-group-item">OneDrive</li>
                    <li className="list-group-item">Teams</li>
                    <li className="list-group-item">ToDo</li>
                    <li className="list-group-item">Forms</li>
                </ul>
            </div>
            <br></br>
            <p className="lead text-center">The information provided from this website, will be available either throught the NavBar on the top of the page or through the buttons provided within this page.</p>
            <br></br>
            <h2 className="h2 text-center">Where can you use Microsoft 365?</h2>
            <br></br>
            <p className="lead text-center">Microsoft 365 can be used on your <strong>computer, tablet, phone</strong> or through the <strong>web</strong> (via Chrome, or another modern web browser)</p>
            <br></br>
            <p className="lead text-center">Not all features are available on every platform yet, <strong>but they are coming later</strong>.</p>
            <br></br>
            <p className="lead text-center">One of these features is <strong>Live-Collaboration</strong>. This works on whatever platform you are on.</p>
            <br></br>
            <div className="d-flex flex-wrap justify-content-around text-center">
                        <div className="flex-grow-1">
                        <figure className="figure">
                            <img src={collaboration} alt="Real-Time collaboration in Microsoft 365" />
                            <figcaption className="figure-caption text-right">Real-Time collaboration in Microsoft 365</figcaption>
                        </figure>
                        </div>
            </div>
            <br></br>
            <p className="lead text-center">As the web is accessible to everyone, regardless of device (laptop, phone, iPad), <strong>this website focuses on the Web version of Microsoft 365</strong>.</p>
            <br></br>
            <h2 className="h2 text-center">Some Examples of how you can get started with Microsoft 365</h2>
            <br></br>
            <p className="lead text-center">Click on the cards below to learn how you can start to adapt your workflow to work with <strong>Microsoft 365 Web</strong>.</p>
            <br></br>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around text-center">
            
            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["todo"].icon} className="card-img-top" alt={dropDown["todo"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["todo"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["todo"].hash}${dropDown["todo"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["word"].icon} className="card-img-top" alt={dropDown["word"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["word"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["word"].hash}${dropDown["word"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["powerpoint"].icon} className="card-img-top" alt={dropDown["powerpoint"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["powerpoint"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["powerpoint"].hash}${dropDown["powerpoint"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

           </div></div>
           <br></br>
           <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/benefits' role="button">Click here to learn the benefits Microsoft 365 and why your organisation should be using it</a>
        </div>
        </div>

    )
}

export default Do
