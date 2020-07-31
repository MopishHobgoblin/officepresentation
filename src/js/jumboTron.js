import React from 'react';
import { dropDown } from '../js/pageLinks';

const jumboTron = (item = dropDown["excel"]) => {
    return (
    <div className="jumbotron jumbotron-fluid">
        <img src={item.icon} alt="Microsoft Word 365" style={{float: "left", maxWidth: "10em", marginLeft: "2em", marginRight: "2em", marginTop: "-1em", backgroundColor:"none"}}/>
            <div className="container">
                <h1 className="display-4">{item.name}</h1>
                <p className="lead">{item.subHeading}</p>
            </div>
    </div>   
    )
}

export default jumboTron