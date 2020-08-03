import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Shortcuts = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["shortcuts"])}
            {quizButton(dropDown["shortcuts"])}
        </div>
    )
}

export default Shortcuts
