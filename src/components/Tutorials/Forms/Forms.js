import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import formsIcon from '../../../util/images/formsIcon.png';

const titleInfo = {
    title: "Forms",
    subHeading: `Surveys, Quizzes, Forms. Quickly and Easily.`,
    icon: formsIcon
}

const Forms = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[4].hash}${dropDown[4].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Forms
