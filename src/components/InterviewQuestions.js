import React from 'react';
import '../App.sass';
import '../styles/InterviewQuestions.sass';
import { FrontEndQuestions } from '../models/FrontEndQuestions.js'

const InterviewQuestions = () => {
  return (
    <section className="interview-questions-container page-container">
      <div className="main-content">
        <h3>I would like to share with you some questions that I was asked when I apply to Frontend developer position</h3>
        {FrontEndQuestions.map(question => {
          return (
            <div>
              <p>{`${question.id}. ${question.content}`}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InterviewQuestions;
