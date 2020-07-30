import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import outlookIcon from '../../../util/images/outlookIcon.png';

const titleInfo = {
    title: "Outlook",
    subHeading: `Business Class Email`,
    icon: outlookIcon
}

const Outlook = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[6].hash}${dropDown[6].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Outlook
