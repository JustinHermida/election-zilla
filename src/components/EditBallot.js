import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import {VoteQuestion} from "./VoteQuestion";

export const EditBallot = ({ emailValid, elections, previouslyVoted, onEmailValid, onVote, onCastVote }) => {
  const { id } = useParams();
  const { name, questions } = elections.find(election => election.id === parseInt(id));

  // State here is local to this form with a single input filed (email).
  const [ email, setEmail ] = useState('');


  const changeEmail = (e) => {
    setEmail(e.target.value)
  };

  const validateEmail = (e) => {
    e.preventDefault();
    onEmailValid(email, id);
  };

  const castVote = () => {
      onCastVote(id, previouslyVoted.voterId);
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
    : (!previouslyVoted.voted
        ? (
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
                {questions.map(question => <VoteQuestion key={question.id} ballotId={id} question={question} onVote={onVote} />)}
              </tbody>
            </table>
            <Link to="/success" onClick={castVote} className="btn btn-primary">Cast Vote</Link>
          </>
        )
      : (<>
        You already Voted Pick a different Election!
      </>)
      )
  )
};