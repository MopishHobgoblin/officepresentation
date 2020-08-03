import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class SwayQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="sway"/>
        </div>
    )
}}

export default SwayQuiz;
