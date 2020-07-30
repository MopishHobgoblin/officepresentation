import React from 'react';
const titleInfo = {
    title: "Error",
    subHeading: "Operator",
    icon: ""
}

const jumboTron = (jumboTronInfo = titleInfo) => {
    return (
    <div className="jumbotron jumbotron-fluid">
        <img src={jumboTronInfo.icon} alt="Microsoft Word 365" style={{float: "left", maxWidth: "10em", marginLeft: "2em", marginRight: "2em", marginTop: "-1em", backgroundColor:"none"}}/>
            <div className="container">
                <h1 className="display-4">{jumboTronInfo.title}</h1>
                <p className="lead">{jumboTronInfo.subHeading}</p>
            </div>
    </div>   
    )
}

export default jumboTron