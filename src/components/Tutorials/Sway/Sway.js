import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import swayIcon from '../../../util/images/swayIcon.png';

const titleInfo = {
    title: "Sway",
    subHeading: `Interactive reports. Presentations and Stories`,
    icon: swayIcon
}

const Sway = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[7].hash}${dropDown[7].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}


export default Sway
