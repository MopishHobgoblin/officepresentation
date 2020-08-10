import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import step1 from '../../../util/images/EditorTutorial/OfficeWebsite.PNG';
import step2 from '../../../util/images/EditorTutorial/PowerPointNew.PNG';
import step3 from '../../../util/images/EditorTutorial/PowerPointOnline.PNG';
import step4 from '../../../util/images/EditorTutorial/WordSharePane.PNG';
import share from '../../../util/images/EditorTutorial/PowerPointShare.PNG';
import step5 from '../../../util/images/EditorTutorial/PowerPointRibbon.PNG';
import simplifiedRibbon from '../../../util/images/EditorTutorial/PowerPointSimplifiedRibbon.PNG';


const PowerPoint = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["powerpoint"])}
            <h1 className="h1 text-center">How to Start a new PowerPoint presentation on Microsoft 365 Web</h1>
            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 1:</strong> Go to <a href="https://office.com" className="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Office.com</a> and click on PowerPoint</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step1} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 2:</strong> Select a new PowerPoint presentation, a new template or one of your available files listed below.</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step2} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 3:</strong> A new PowerPoint presentation will open, this is almost identical to the desktop PowerPoint app.</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step3} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
                <div className="card-body">
                    <br></br>
                    <p className="card-text h4">Here you can do anything you would normally do with PowerPoint.</p>
                    
                </div>
            </div>
        
        <br></br>

        <div className="card text-center">
            <div className="card-body">
                <p className="card-text h4"><strong>Step 4:</strong> Click the <img src={share} alt="Share Button"/> button to get a link to invite co-workers to edit, collaborate, comment or proofread.</p>
                <br></br>
            </div>
            <div className="text-center">
                <img src={step4} className="card-img-top" alt="The Office.com homepage" style={{width: "30%"}}/>
            </div>
        </div>

        <br></br>

        <div className="card text-center">
            <div className="card-body">
                <p className="card-text h4"><strong>Optional Pro-Tip:</strong> Turn off <img src={simplifiedRibbon} alt="simplified Ribbon"/> this will give you the Desktop Look and feel you are used to:</p>
                <br></br>
            </div>
            <div className="text-center">
                <img src={step5} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
            </div>
        </div>

        <br></br>

        <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/do' role="button">Go back to the Microsoft 365 Overview</a>
        </div>

        </div>
    )
}

export default PowerPoint
