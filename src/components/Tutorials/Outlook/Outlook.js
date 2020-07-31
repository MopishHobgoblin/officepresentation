import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Outlook = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["outlook"])}
            {quizButton(dropDown["outlook"])}
        </div>
    )
}

export default Outlook
