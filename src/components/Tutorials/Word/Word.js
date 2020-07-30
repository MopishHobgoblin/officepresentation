import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import { dropDown } from '../../../js/pageLinks';
import jumboTron  from '../../../js/jumboTron';
import wordIcon from '../../../util/images/wordIcon.png';


const titleInfo = {
    title: "Word 365",
    subHeading: `Everything you need to know about Word 365`,
    icon: wordIcon
}


const Word = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[0].hash}${dropDown[0].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Word
