import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo } from '../../js/pageLinks';


const Benefits = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["benefits"])}
        </div>
    )
}

export default Benefits
