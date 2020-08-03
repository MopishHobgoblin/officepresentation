import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class ShortcutsQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="shortcuts"/>
        </div>
    )
}}

export default ShortcutsQuiz;
