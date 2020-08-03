import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { dropDown } from './pageLinks';


class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            product: props.product
        };
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
              src={dropDown[`${this.state.product}`].progressURL} 
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


export default QuizPage 
