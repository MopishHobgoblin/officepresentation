import React from 'react';
import Iframe from 'react-iframe';
import { dropDown } from '../../../js/pageLinks';

class ProgressCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {height: props.height};
      }
    
    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
      }
    
    render() {
        return (
        <div>
              <Iframe 
              width="100%" 
              height={this.state.height} 
              src={dropDown[0].progressURL} 
              frameBorder="0" 
              marginWidth="0" 
              marginHeight="0" 
              styles={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} 
              AllowFullScreen 
              webkitallowfullscreen 
              mozallowfullscreen 
              msallowfullscreen/>
        </div>
    )
    }
}


export default ProgressCheck
