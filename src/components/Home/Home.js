import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import { dropDown, homeInfo } from '../../js/pageLinks';
import jumboTron from '../../js/jumboTron';

const Home = () => {
    return (
    <div>
            <NavBar />
            {jumboTron(homeInfo["home"])}    
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
            {Object.keys(dropDown).map(key => {
            return (<div className="card text-center col" style={{width:"10rem", padding:"5px"}}> 
                <div className="text-center"><img src={dropDown[key].icon} className="card-img-top" alt={dropDown[key].name} style={{width: "60%"}}/></div>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown[key].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown[key].hash}${dropDown[key].link}`} className="btn btn-primary">{`Learn More`}</a>
                    </div>
                    </div>
            )})} </div></div>
    </div>
    )
}

export default Home;
