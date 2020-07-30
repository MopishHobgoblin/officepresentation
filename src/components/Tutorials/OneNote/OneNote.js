import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import onenoteIcon from '../../../util/images/onenoteIcon.png';

const titleInfo = {
    title: "OneNote",
    subHeading: `All of your notes, in one place. Everywhere.`,
    icon: onenoteIcon
}

const OneNote = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[5].hash}${dropDown[5].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default OneNote
