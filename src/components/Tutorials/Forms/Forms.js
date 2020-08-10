import React from 'react';
import {NavBar} from '../../NavBar/NavBar';
import jumboTron from "../../../js/jumboTron";
import { dropDown } from '../../../js/pageLinks';

const Forms = () => {
    return (
        <div>
            <NavBar />
            {jumboTron(dropDown["forms"])}
            <h1 className="h1 text-center">Benefits of using Microsoft Forms</h1>
            <br></br>
            <p className="lead text-center">Collecting feedback and opinions is great for any business.</p>
            <br></br>
            <p className="lead text-center">With Microsoft Forms, simple and complex forms and surveys can be created and distributed with Ease.</p>
            <br></br>
            <p className="lead text-center">Responses are automatically saved and analysed in Microsoft Forms.</p>
            <br></br>
            <p className="lead text-center">With results also exported to Excel, for more powerful data analysis uses.</p>
            <br></br>
            <p className="lead text-center">This allows the council to work with colleagues, customers and the community to ensure the best possible service is being delivered.</p>
            <br></br>
            <p className="lead text-center">This makes it easier than ever to receive feedback in ‘real-time’ allowing for issues and unforeseen problems to be identified and eliminated in a fraction of the previous time.</p>
            <br></br>
            <p className="lead text-center">Forms can be shared in a variety of ways, you can share a link, scan a QR code, embed into a website or social media posts allowing for Surveys and Feedback to be shared to the residents of Barnsley Council that previously would be unlikely to respond. This allows for Barnsley residents to have a louder voice and helps the council to serve them more effectively.</p>
            <br></br>

            <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href='#/benefits' role="button">Go back to the Microsoft 365 Benefits page</a>
        </div>
        </div>
    )
}

export default Forms
