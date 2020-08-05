import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import quizButton from '../../../js/quizButton';
import modal from '../../../js/modal';
import { osShortcuts, reasonsForShortcuts } from './keyboardShortcuts';
import collapse from '../../../js/collapse';

const Shortcuts = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["shortcuts"])}
            <div className="text-center">
                <h1 className="h3">Click on your operating system to learn some useful keyboard shortcuts</h1>
            <br></br></div><br></br>
        <div className="btn-lg d-flex justify-content-center" role="group">
            {modal(osShortcuts, "Windows")}
            {modal(osShortcuts, "MacOS")}
            {modal(osShortcuts, "Linux")}
        </div>
                <br></br>
                <br></br>

        <div className="text-center">
            <h2 className="h3">Why should you learn keyboard shortcuts?</h2>
            <br></br>
            <p className="lead alert">Below there are 5 reasons you should learn some basic keyboard shortcuts.</p>
            <br></br>
            {collapse(reasonsForShortcuts)}
        </div>
        <br></br>
        <div className="text-center alert alert-info">
            <p className="lead">If you want to take your new Keyboard skills further, consider learning to touch type!</p>
            <p className="lead">By learning to touch type, you naturally learn to use the keyboard through use of muscle memory.</p>
            <p className="lead">It might be difficult to learn at first but, in a few weeks you can be typing faster, with more accuracy than you ever have before.</p>
            <p className="lead">You can even learn to touch type online for free by clicking the button below </p>
            <a className="btn btn-primary" href="https://typingclub.com">TypingClub</a> 
        </div>
        <br></br>
            {quizButton(dropDown["shortcuts"])}
            
        </div>
    )
}

export default Shortcuts
