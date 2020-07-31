import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const PowerPoint = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["powerpoint"])}
            {quizButton(dropDown["powerpoint"])}
        </div>
    )
}

export default PowerPoint
