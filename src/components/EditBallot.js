import React, {useState} from 'react'

import { useParams } from 'react-router-dom'

export const EditBallot = ({ elections }) => {
  console.log(elections)
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

  // Check the state of the user before doing anything else.
  const userValid = () => {
    // Cases where user is not valid.
    // 1. They are not in the voter db.
    // 2. They have already voted on this election.
    return false
  }

  const validateEmail = (e) => {
    
    e.preventDefault()
    console.log(`Validating ${email}`)
  }

  return (
    !userValid() 
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
            &nbsp;<button className="btn btn-primary" onClick={e=> validateEmail(e)}> Validate</button>
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