import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';
import step1 from '../../../util/images/EditorTutorial/OfficeWebsite.PNG';
import step2 from '../../../util/images/EditorTutorial/ToDoFullscreen.PNG';
import step3 from '../../../util/images/EditorTutorial/ToDoNewList.PNG';
import step4 from '../../../util/images/EditorTutorial/ToDoNewTask.PNG';
import step5 from '../../../util/images/EditorTutorial/ToDoCreateInvitationLink.PNG';
import step6 from '../../../util/images/EditorTutorial/ToDoShareList.PNG';

const ToDo = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["todo"])}
            <h1 className="h1 text-center">How to Create a new list for you workflow with Microsoft ToDo</h1>
            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 1:</strong> Go to <a href="https://office.com" className="btn btn-secondary btn-md" tabindex="-1" role="button" aria-disabled="true">Office.com</a> and click on ToDo</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step1} className="card-img-top" alt="The Office.com homepage" style={{width: "80%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 2:</strong> Click on the “+” icon to the left-hand side</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step2} className="card-img-top" alt="The Office.com homepage" style={{width: "40%"}}/>
                </div>
            </div>

            <br></br>

            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text h4"><strong>Step 3:</strong> Type a name for your new list and press the Enter key</p>
                    <br></br>
                </div>
                <div className="text-center">
                    <img src={step3} className="card-img-top" alt="The Office.com homepage" style={{width: "40%"}}/>
                </div>
            </div>
        
        <br></br>

        <div className="card text-center">
            <div className="card-body">
                <p className="card-text h4"><strong>Step 4:</strong> Add a new task to your list</p>
                <br></br>
            </div>
            <div className="text-center">
                <img src={step4} className="card-img-top" alt="The Office.com homepage" style={{width: "40%"}}/>
            </div>
        </div>

        <br></br>

        <div className="card text-center">
            <div className="card-body">
                <p className="card-text h4"><strong>Step 5:</strong> Share your list by clicking the icon and click the Create invitation link button</p>
                <br></br>
            </div>
            <div className="text-center">
                <img src={step5} className="card-img-top" alt="The Office.com homepage" style={{width: "40%"}}/>
            </div>
        </div>

        <br></br>

        <div className="card text-center">
            <div className="card-body">
                <p className="card-text h4"><strong>Step 6:</strong> Share your link with team members to collaborate</p>
                <br></br>
            </div>
            <div className="text-center">
                <img src={step6} className="card-img-top" alt="The Office.com homepage" style={{width: "40%"}}/>
            </div>
        </div>
        <br></br>
        <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/do' role="button">Go back to the Microsoft 365 Overview</a>
        </div>
</div>
)
}

export default ToDo
