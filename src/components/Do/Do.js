import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo } from '../../js/pageLinks';


const Do = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["do"])}
        </div>
    )
}

export default Do
