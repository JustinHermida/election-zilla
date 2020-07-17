import React, {useState} from 'react'

import { useParams } from 'react-router-dom'

export const EditBallot = ({ emailValid, elections, onPreviouslyVoted }) => {
  const { id } = useParams();
  const { name, questions } = elections.find(election => election.id === parseInt(id))

  // State here is local to this form with a single input filed (email).
  const [ email, setEmail ] = useState('');

  const updateQuestion = (e) => {
    // If checked is true increment the count for the question.
    // If checked is false decrement the count for the question.
  
    console.log(e.target.value)
    console.log(e.target.checked)
  }

  const changeEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }


  const validateEmail = (e) => {
    e.preventDefault()
    onValidateEmail(email);
  };

  return (
    !emailValid
    ? (
        <div className="text-center">
          <h2>Please validate yourself by entering your email.</h2>
          <form className="form-inline justify-content-center">
            <input 
              className="form-control"
              type="text"
              placeholder="Enter your email here."
              id="email"
              value={email}
              onChange={e => changeEmail(e)}
            />
            &nbsp;<button className="btn btn-primary" onClick={(e) => validateEmail(e)}> Validate</button>
          </form>
        </div>
      )
    : (
        <>
          <h1>
            {name}
          </h1>
          <table className='table light-background table-striped'>
            <thead>
              <tr>
                <th>Question</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody>
              {questions.map(question => {
                return(
                  <tr key={question.id}>
                    <td>{question.question}</td>
                    <td><input type="checkbox" value={question.id} onChange={updateQuestion}/></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      )
    
  )
}