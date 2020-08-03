
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class FormsQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="forms"/>
        </div>
    )
}}

export default FormsQuiz;
