import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import calendarIcon from '../../../util/images/calendarIcon.png';

const titleInfo = {
    title: "Calendar",
    subHeading: `Schedule and share meetings and event times.`,
    icon: calendarIcon
}

const Calendar = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[9].hash}${dropDown[9].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Calendar
