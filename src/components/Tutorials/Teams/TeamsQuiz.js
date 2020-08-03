import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class TeamsQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="teams"/>
        </div>
    )
}}

export default TeamsQuiz;
