import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import skypeIcon from '../../../util/images/skypeIcon.png';

const titleInfo = {
    title: "Skype",
    subHeading: `Keep in contact, remotely.`,
    icon: skypeIcon
}

const Skype = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[10].hash}${dropDown[10].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Skype
