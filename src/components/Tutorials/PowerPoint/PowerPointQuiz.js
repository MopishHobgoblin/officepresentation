import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class PowerPointQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="powerpoint"/>
        </div>
    )
}}

export default PowerPointQuiz;
