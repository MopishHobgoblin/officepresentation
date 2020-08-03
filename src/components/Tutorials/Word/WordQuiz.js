import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class WordQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="word"/>
        </div>
    )
}}

export default WordQuiz;
