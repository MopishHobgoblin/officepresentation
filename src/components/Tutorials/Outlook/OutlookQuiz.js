
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class OutlookQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="outlook"/>
        </div>
    )
}}

export default OutlookQuiz;
