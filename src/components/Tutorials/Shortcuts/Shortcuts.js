import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';
import modal from '../../../js/modal';
import { osShortcuts } from './keyboardShortcuts';

const Shortcuts = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["shortcuts"])}
            {quizButton(dropDown["shortcuts"])}
            {modal(osShortcuts, "Windows")}
            {modal(osShortcuts, "MacOS")}
            {modal(osShortcuts, "Linux")}
        </div>
    )
}

export default Shortcuts
