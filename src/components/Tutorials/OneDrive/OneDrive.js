import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import OneDriveFeatureList from './headlineFeatures';
import quizButton from '../../../js/quizButton';


const OneDrive = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["onedrive"])}
            
            <OneDriveFeatureList />
            {quizButton(dropDown["onedrive"])}
        </div>
    )
}

export default OneDrive