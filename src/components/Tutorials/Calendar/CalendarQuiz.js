
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class CalendarQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="calendar"/>
        </div>
    )
}}

export default CalendarQuiz;
