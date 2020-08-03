import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo } from '../../js/pageLinks';
import PageInfo from './PageInfo';

const About = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["about"])}
            <PageInfo />
        </div>
    )
}

export default About
