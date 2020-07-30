import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import todoIcon from '../../../util/images/todoIcon.png';

const titleInfo = {
    title: "ToDo",
    subHeading: `Keep on track, Know what's left.`,
    icon: todoIcon
}

const ToDo = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[3].hash}${dropDown[3].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default ToDo
