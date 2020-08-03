
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class OneNoteQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="onenote"/>
        </div>
    )
}}

export default OneNoteQuiz;
