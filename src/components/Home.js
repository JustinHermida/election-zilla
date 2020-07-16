import React from 'react'

export const Home = () => {
  return (
    <div>
      <header>
        <h1>Elections</h1>
      </header>
      <table className="table table-striped light-background">
        <thead>
          <th>Review The Informatively Named Ballots</th>
          <th>Get Your Vote On!</th>
        </thead>
        <tbody>
          <tr>
            <td>Vote For Your Favorite Movies!</td>
            <td>
              <button type="button" className="btn btn-success">Vote</button>
            </td>
          </tr>
          <tr>
            <td>Vote For The Weirdest Museums In The US!</td>
            <td>
              <button type="button" className="btn btn-success">Vote</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}