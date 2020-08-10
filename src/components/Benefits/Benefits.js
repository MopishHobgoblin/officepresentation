import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import jumboTron from '../../js/jumboTron';
import { homeInfo, dropDown } from '../../js/pageLinks';


const Benefits = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(homeInfo["benefits"])}
            <h2 className="h1 text-center">A Brief Overview</h2>
            <br></br>
            <p className="lead text-center">Microsoft 365 is a versatile system that can be worked with from anyone, anywhere on many devices.</p>
            <br></br>
            <p className="lead text-center">This helps to create diversity in the workplace, it accommodates for remote-working the same as if you were in the office.</p>
            <br></br>
            <p className="lead text-center">This allows for different talent pools and specialities to be tapped, as well as accommodating for members of the community.</p>
            <br></br>
            <p className="lead text-center">Microsoft 365’s remote capabilities means that staff members or collaborators don’t necessarily have to be in an office let alone based in Barnsley.</p>
            <br></br>
            <p className="lead text-center">In fact, a collaborator of a project doesn’t need to be an employee of Barnsley Council at all. Microsoft 365 gives you the ability to work directly with Barnsley Residents giving them not only a voice, but an input into Council projects.</p>
            <br></br>
            <p className="lead text-center">The ability to collaborate and use communicative features can help with service delivery. Microsoft 365 allows forums, meetings, direct contact, comments and notes to be used in a way that can be easily used and help streamline feedback to promote ideas from colleagues which will identify positive / issues / problems sooner as it would bypass the ‘usual’ escalation / comments process through management which can be time cumbersome.</p>
            <br></br>
            <p className="lead text-center">Promoting S.M.A.R.T.E.R working practices.</p>
            <br></br>
            <h2 className="h2 text-center">Key Features of Microsoft 365</h2>
            <br></br>
            <p className="lead text-center">Colleagues can help edit, deliver notes or ask questions in order to work more effectively. This feature helps to maintain excellence as teams can work together more quickly and efficiently than ever before. Helping council members create something that they can be proud to deliver to customers.</p>
            <br></br>
            <p className="lead text-center">Documents can be shared to customers and colleagues in view only mode with the click of a button, giving the council the ability to keep documents up to date ensuring nobody has outdated information.</p>
            <br></br>
            <p className="lead text-center">As documents can be shared in ‘real-time’ promoting efficiency which only helps to achieve a modern and efficient council, that exhibits honesty and excellence at it’s very core.</p>
            <br></br>
            <p className="lead text-center">As customers and colleagues have access to ‘real-time’ collaboration, it is easier than ever to promote S.M.A.R.T.E.R working practices on both an individual and a team level. This can help to promote the best working practices, streamline services, reduce cost, minimise human input and reduce maintenance times.</p>
            <br></br>
            <h2 className="h2 text-center">Click on the cards below to learn about the Benefits of specific Microsoft 365 products</h2>
            <br></br>
            
            <div className="container">
                <div className="d-flex flex-wrap justify-content-around text-center">
            
            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["teams"].icon} className="card-img-top" alt={dropDown["teams"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["teams"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["teams"].hash}${dropDown["teams"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["onedrive"].icon} className="card-img-top" alt={dropDown["onedrive"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["onedrive"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["onedrive"].hash}${dropDown["onedrive"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

            <div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown["forms"].icon} className="card-img-top" alt={dropDown["forms"].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown["forms"].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown["forms"].hash}${dropDown["forms"].link}`} className="btn btn-primary">{`Learn More`}</a>
                </div>
            </div>

           </div></div>
           <br></br>
           <h2 className="h2 text-center">Are you now an expert on Microsoft 365?</h2>
           <br></br>
           <p className="lead text-center">Click the button below to access the quiz and prove your Microsoft 365 knowledge.</p>
           <br></br>
           <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`#/benefitsquiz`} role="button">Take the Quiz</a>
        </div>




        </div>
    )
}

export default Benefits
