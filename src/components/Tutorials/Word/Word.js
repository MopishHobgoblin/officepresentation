import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import { dropDown } from '../../../js/pageLinks';
import jumboTron  from '../../../js/jumboTron';
import step1 from '../../../util/images/EditorTutorial/OfficeWebsite.PNG';
import step2 from '../../../util/images/EditorTutorial/WordnewDocument.PNG';
import step3 from '../../../util/images/EditorTutorial/NewWordLook.PNG';
import step4 from '../../../util/images/EditorTutorial/WordSharePane.PNG';
import share from '../../../util/images/EditorTutorial/WordShare.PNG';
import step5 from '../../../util/images/EditorTutorial/WordBanner.PNG';

const Word = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["word"])}
            <h1 className="h1 text-center">How to Start a new Word Document on Microsoft 365 Web</h1>
            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 1:</strong> Go to <a href="https://office.com" className="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Office.com</a> and click on Word</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step1} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 2:</strong> Select a new Document, a new template or one of your available files listed below.</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step2} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 3:</strong> A new Word document will open, this is almost identical to the desktop Word app.</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step3} className="card-img-top" alt="The Office.com homepage" style={{width: "95%"}}/>
                </div>
                <div className="card-body">
                    <br></br>
                    <p className="card-text h4">Here you can do anything you would normally do with word.</p>
                    
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
                <p className="card-text h4"><strong>Optional Pro-Tip:</strong> Click on the down arrow in the top right corner to switch to the classic Word Ribbon Mode:</p>
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

export default Word
