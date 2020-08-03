import React, { Component } from 'react';
import { NavBar } from '../../NavBar/NavBar';
import QuizPage from '../../../js/quizPage';

class ToDoQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <QuizPage product="todo"/>
        </div>
    )
}}

export default ToDoQuiz;
