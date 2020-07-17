import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => {
  return (<>
    <header className="tool-header">
      <h1>Thanks for Voting!</h1>
    </header>
    <Link to="/" className="btn btn-primary">View The Elections</Link>
  </>)
}