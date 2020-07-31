import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Forms = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["forms"])}
            {quizButton(dropDown["forms"])}
        </div>
    )
}

export default Forms
