import React from 'react';
import { dropDown } from './pageLinks';

const quizButton = (item = dropDown["word"]) => {
    return (
        <div>
        <a className="btn btn-primary btn-lg container-sm d-flex justify-content-center" href={`${item.hash}${item.progressLink}`} role="button">Take the Quiz</a>
        </div>
    )
}

export default quizButton
