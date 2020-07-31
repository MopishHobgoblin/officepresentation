import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Excel = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["excel"])}
            {quizButton(dropDown["excel"])}
        </div>
    )
}

export default Excel
