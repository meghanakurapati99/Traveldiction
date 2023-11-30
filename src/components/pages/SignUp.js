import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-8.jpg' alt='Camels in the desert'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <label>Email</label> <br></br>
            <input type='text' placeholder='johndoe@gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <p className='Forgot Password'><span> Forgot Password? </span></p>
            <button type='submit' className='btn-sign'>Login</button>
          </form>
          <div>
            <p className='Do not have-account'>Don't have an account? 
              <Link to="/CreateAccount" className='create-account-link'>Create new account</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}