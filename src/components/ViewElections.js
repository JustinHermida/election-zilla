import React from "react";

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
                <tr>
                  <td>{election.name}</td>
                  <td>
                    <button type="button" className="btn btn-success">Vote</button>
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