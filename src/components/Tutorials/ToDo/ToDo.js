import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const ToDo = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["todo"])}
            {quizButton(dropDown["todo"])}
        </div>
    )
}

export default ToDo
