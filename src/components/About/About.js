import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo } from '../../js/pageLinks';

const About = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["about"])}
        </div>
    )
}

export default About
