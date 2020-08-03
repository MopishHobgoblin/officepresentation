
import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class ExcelQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="excel"/>
        </div>
    )
}}

export default ExcelQuiz;
