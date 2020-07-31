import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Sway = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["sway"])}
            {quizButton(dropDown["sway"])}
        </div>
    )
}

export default Sway
