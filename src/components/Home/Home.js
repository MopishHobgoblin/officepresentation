import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import { dropDown, homeInfo } from '../../js/pageLinks';
import jumboTron from '../../js/jumboTron';

const Home = () => {
    return (
    <div>
            <NavBar />
            {jumboTron(homeInfo["home"])}    
            <div className="d-flex flex-wrap">
            {Object.keys(dropDown).map(key => {
            return (<div className="card text-center" style={{width:"10rem", margin:"1rem"}}>
                <img src={dropDown[key].icon} className="card-img-top" alt={dropDown[key].name} style={{width: "100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{dropDown[key].name}</h5>
                        {/*<p className="card-text">{dropDown[key].subHeading}</p>*/}
                        <a href={`${dropDown[key].hash}${dropDown[key].link}`} className="btn btn-primary">{`Learn More`}</a>
                    </div>
                    </div>
            )})} </div>
    </div>
    )
}

export default Home;
