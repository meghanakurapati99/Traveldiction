import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CreateAccount.css'; // Make sure this points to the correct file path

export default function CreateAccount() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Placeholder for API call
    console.log('Account details:', userDetails);
    navigate('/login'); // navigate to login page upon successful account creation
  };

  return (
    <div className='create-account-container'>
      <div className='create-account-image'>
        <img src='/images/img-9.jpg' alt='Scenic background' />
      </div>
      <div className='create-account-form'>
      <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-field'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              value={userDetails.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={userDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-field'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              value={userDetails.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='create-account-button'>Create Account</button>
        </form>
        <div>
          <p className='existing-account-link'>
          Already have an account? <Link to='/sign-up'>Log in here</Link>
          </p>
        </div> 
      </div>

      
    </div>
  );
}
