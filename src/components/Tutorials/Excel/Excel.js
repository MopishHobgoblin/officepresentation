import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import excelIcon from '../../../util/images/excelIcon.png';

const titleInfo = {
    title: "Excel",
    subHeading: `Connect to data, model, analyse and visualise.`,
    icon: excelIcon
}

const Excel = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[1].hash}${dropDown[1].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Excel
