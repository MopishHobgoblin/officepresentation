import React from 'react';
import { dropDown } from '../js/pageLinks';

const jumboTron = (item = dropDown["excel"]) => {
    return (
    <div className="jumbotron jumbotron-fluid">
        <div className="row row-cols-1 row-cols-sm-2">
        <div className="text-center col-sm-1"><img src={item.icon} alt="Microsoft Word 365" style={{width: "10rem", marginLeft:"2rem", marginRight:"2rem"}}/></div>
            <div className="container">
                <h1 className="display-4 col text-center" style={{padding:"1rem"}}>{item.name}</h1>
                <div className="w-100"></div>
                <p className="lead col text-center" style={{padding:"0.5rem"}}>{item.subHeading}</p>
            </div>
        </div>
    </div>   
    )
}

export default jumboTron