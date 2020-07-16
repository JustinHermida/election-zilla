import React from 'react'
import { Link } from 'react-router-dom';

export const Layout = ({children}) => {
  return(
    <>
      <div className="App">
      <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand text-shadow" to="/">
            <strong>ElectionZilla</strong>
            {' '}
            <img src="assets/img/logo.jpg" alt="ElectionZilla Logo" class="rounded-circle" width="60" height="60"/>
          </Link>
          <button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler float-right" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
            <div
                className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation"><Link className="nav-link text-shadow" to="/"><strong>Elections</strong></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link text-shadow" to="/voter-registration"><strong>Register To Vote</strong></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link text-shadow" to="/view-voters"><strong>View Voters</strong></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link text-shadow" to="/view-results"><strong>View Results</strong></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link text-shadow" to="/new-election"><strong>New Election</strong></Link></li>
                </ul>
        </div>
        </div>
      </nav>
      <header className="masthead" style={{background: "url('assets/img/bg-pattern.png'), linear-gradient(to left, #7b4397, #dc2430)", height: "100%"}}>
        <div className="container main">
          {children}
        </div>
      </header>
      <footer>
          <div className="container">
              <p>&copy; ElectionZilla 2020. All Rights Reserved. All results are kept secret and away from the general public to ensure maximum manipulatability of all elections.</p>
          </div>
      </footer>
      </div>
    </>
  )
}