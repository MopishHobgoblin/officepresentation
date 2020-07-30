import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import powerpointIcon from '../../../util/images/powerpointIcon.png';

const titleInfo = {
    title: "PowerPoint",
    subHeading: `Professional Presentations, easily`,
    icon: powerpointIcon
}

const PowerPoint = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[2].hash}${dropDown[2].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default PowerPoint
