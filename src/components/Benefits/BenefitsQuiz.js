import React, { Component } from 'react';
import { NavBar } from '../NavBar/NavBar';
import BenefitsQuizPage from './BenefitsQuizPage';


class BenefitsQuiz extends Component{
    render() {
    return (
        <div>
            <NavBar />
            <BenefitsQuizPage product={`https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__aFqDCJUNzJWNEtGUTZZUzBMT1FMUUlFR1VGQkU3Qi4u`} />
        </div>
    )
}}

export default BenefitsQuiz;
