import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class SkypeQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="skype"/>
        </div>
    )
}}

export default SkypeQuiz;
