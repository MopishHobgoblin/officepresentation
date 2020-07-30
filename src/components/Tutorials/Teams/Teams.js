import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import teamsIcon from '../../../util/images/teamsIcon.png';

const titleInfo = {
    title: "Teams",
    subHeading: `Work remotely, work together. Work as a Team.`,
    icon: teamsIcon
}

const Teams = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(titleInfo)}
            <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${dropDown[8].hash}${dropDown[8].progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default Teams;