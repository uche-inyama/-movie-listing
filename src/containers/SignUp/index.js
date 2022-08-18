import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { PostUser } from '../../redux/registrationFormSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      user: {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      }
    },
    
    onSubmit: values => {
      dispatch(PostUser(values))
      navigate('/login')
    },
  });
  return (
    <div className="registration-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input className="input-field" name="user[email]" onChange={handleChange} type="email" placeholder="email" />
        </div>
        <div className="field">
          <input className="input-field" name="user[username]" onChange={handleChange} type="text" placeholder="username"/>
        </div>
        <div className="field">
          <input className="input-field" name="user[password]" onChange={handleChange} type="password" placeholder="password" />
        </div>
        <div className="field">
          <input className="input-field" name="user[password_confirmation]" onChange={handleChange} type="password" placeholder="password confirmation" />
        </div>
        <input type="submit" className="submit-button"/>
        <div><Link to="/">Login</Link></div>
      </form>
    </div>

  );
}

export default SignUp;
