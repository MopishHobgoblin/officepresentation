import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';

const Teams = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["teams"])}      
            {quizButton(dropDown["teams"])}
        </div>
    )
}

export default Teams;