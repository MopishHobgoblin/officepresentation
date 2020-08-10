import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import OneDriveFeatureList from './headlineFeatures';
import quizButton from '../../../js/quizButton';
import share from '../../../util/images/EditorTutorial/WordShare.PNG';


const OneDrive = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["onedrive"])}
            <h1 className="h1 text-center">The key benefits of using OneDrive</h1>
            <br></br>
            <p className="lead text-center">Microsoft 365 automatically links and syncs your files within OneDrive, saving you time, effort and helping you have access to your documents wherever you are, on whatever device you want.</p>
            <br></br>
            <p className="lead text-center">This can help the council as it migrates important files away from local servers. This can help with data redundancy, accessibility and ability to work from anywhere.</p>
            <br></br>
            <p className="lead text-center">Due to nature of the Web, your office files are always up to date and never need updating. Saving time on software updates that hamper and cease productivity and availability.</p>
            <br></br>
            <p className="lead text-center">Sharing is easily completed in Microsoft 365. With no downloads sharing and collaborating is as easy as pressing the <img src={share} alt="share button"/> button. </p>
            <br></br>
            <h1 className="h1 text-center">Additionally, there are many great benefits of using OneDrive some are listed below</h1>
            <br></br>
            <OneDriveFeatureList />
            <br></br>

            <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/benefits' role="button">Go back to the Microsoft 365 Benefits page</a>
        </div>
            
        </div>
    )
}

export default OneDrive