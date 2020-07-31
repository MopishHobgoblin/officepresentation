import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import { dropDown } from '../../../js/pageLinks';
import jumboTron  from '../../../js/jumboTron';
import quizButton from '../../../js/quizButton';

const Word = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["word"])}
            {quizButton(dropDown["word"])}
        </div>
    )
}

export default Word
