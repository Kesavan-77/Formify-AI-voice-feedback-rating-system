import React from 'react';
import Logo from '../Assets/Formify-02.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
    <p className='text-center text-light fs-5 fw-bold' style={{height: '40px',background: 'linear-gradient(0.25turn, #38B2AC, #704CFF)'}}>LIMITED TIME OFFER: Unlock exclusive savings! Enjoy a 50% discount on handpicked plans for a limited time only.</p>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light" style={{height: '80px'}}>
      <div className="container">
        <a className="navbar-brand" href="#"><Link to='/'><img src={Logo} alt='logo' height='50px'  /></Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Feature</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Resource</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Usecases</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>
          </ul>
          <span className="d-grid gap-4 d-md-block">
            <button type="button" className="btn btn-light" style={{marginRight: '10px'}}><Link to='/login' style={{color: '#000',textDecoration: 'none'}}>Sign in</Link></button>
            <button type="button" className="btn btn-primary"><Link to='/signup' style={{color: '#000',textDecoration: 'none'}}>Sign Up</Link></button>
          </span>
        </div>
      </div>
    </nav>
    <hr style={{color: 'grey'}} />
    </div>
  );
}
