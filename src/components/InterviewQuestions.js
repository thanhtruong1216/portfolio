import React from 'react'
import '../App.sass'
import '../styles/InterviewQuestions.sass'
import { FrontEndQuestions } from '../data/FrontEndQuestions.js'

const InterviewQuestions = () => {
  return (
    <section className="interview page-container">
      <div className="interview__main-content">
        <h3 style={{ textAlign: 'center' }}>Front-end interview Questions</h3>
        <p style={{ textAlign: 'center' }}>
          I would like to share with you some questions that I was asked when I apply to Frontend developer position
        </p>
        {Object.entries(FrontEndQuestions).map((arr, index) => {
          const title = arr[0].toUpperCase()
          const questions = arr[1]
          console.log('f', title)
          return (
            <div key={index}>
              <h3 className="interview__title">{title}</h3>
              {questions.map(question => (
                <p key={question.id}>{`${question.id}. ${question.content}`}</p>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InterviewQuestions
