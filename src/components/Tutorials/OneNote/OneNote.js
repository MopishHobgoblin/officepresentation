import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const OneNote = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["onenote"])}
            {quizButton(dropDown["onenote"])}
        </div>
    )
}

export default OneNote
