import React from 'react';
import logo from "../images/logo_fsa.png"
import { Link } from 'react-router-dom';
import "../App.css";


function Homepage() {
 return (
 <div className='main-container'>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

  <img alt="fsa_logo" src={logo} />
    <h1> Welcome to FSA Biz Card</h1>
      <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/Create' className='link create'>Create New Card</Link></button>
      </div>
      <div className='form-one-button'>
        <button className='submit-button'><Link to='/dbc/Update' className='link update'>Update Card</Link></button>
      </div>
 </div>
 );
};
export default Homepage;

