import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Skype = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["skype"])}
            {quizButton(dropDown["skype"])}
        </div>
    )
}

export default Skype
