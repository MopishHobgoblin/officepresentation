
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class OneDriveQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="onedrive"/>
        </div>
    )
}}

export default OneDriveQuiz;
