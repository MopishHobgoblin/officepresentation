import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import onedriveIcon from '../../../util/images/onedriveIcon.png';
import OneDriveFeatureList from './headlineFeatures';

const titleInfo = {
    title: "OneDrive",
    subHeading: `All of your notes, in one place. Everywhere.`,
    icon: onedriveIcon
}

const OneDrive = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            
            <OneDriveFeatureList />
            
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[11].hash}${dropDown[11].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default OneDrive