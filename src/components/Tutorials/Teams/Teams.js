import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';

const Teams = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["teams"])}      
            <h1 className="h1 text-center">Benefits of using Microsoft Teams</h1>
            <br></br>
            <p className="lead text-center">Microsoft Teams is the hub and main focal point of your team’s work.</p>
            <br></br>
            <p className="lead text-center">Host virtual meetings, presentations or sessions – with the built in Skype service.</p>
            <br></br>
            <p className="lead text-center">Ask for immediate feedback with Forms integration, or polls or the in meeting live chat.</p>
            <br></br>
            <p className="lead text-center">Message boards with ‘real-time’ messaging and @mentions.</p>
            <br></br>
            <p className="lead text-center">Sharing files using OneDrive and SharePoint.</p>
            <br></br>
            <p className="lead text-center">Access to outside customers or clients without need for an account.</p>
            <br></br>

            <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/benefits' role="button">Go back to the Microsoft 365 Benefits page</a>
        </div>
        </div>
    )
}

export default Teams;