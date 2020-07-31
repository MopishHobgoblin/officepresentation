import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Calendar = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["calendar"])}
            {quizButton(dropDown["calendar"])}
        </div>
    )
}

export default Calendar
