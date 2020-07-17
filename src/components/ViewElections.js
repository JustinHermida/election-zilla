import React from "react";
import { Link } from 'react-router-dom'

export const ViewElections = ({ elections }) => {
    return (
    <div>
      <header>
        <h1>Elections</h1>
      </header>
      <table className="table table-striped light-background">
        <thead>
          <tr>
            <th>Review The Informatively Named Ballots</th>
            <th>Get Your Vote On!</th>
          </tr>
        </thead>
        <tbody>
          {!elections.length
            ? <tr><td colSpan="2">There are no elections.</td></tr>
            : elections.map(election => {
              return (
                <tr key={election.id}>
                  <td>{election.name}</td>
                  <td>
                    <Link className="btn btn-success" to={`/ballots/${election.id}`}>Vote</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    )
};