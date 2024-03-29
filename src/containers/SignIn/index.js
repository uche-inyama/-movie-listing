import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { userSignIn } from '../../redux/sessionsSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      user: {
        email: '',
        password: '',
      }
    },
    
    onSubmit: (values) => {
      dispatch(userSignIn(values))
      setTimeout(() => {
        navigate('/movies')
      }, 1000)
    },
  });

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input className="input-field" name="user[email]" onChange={handleChange} type="email" placeholder="Email" />
        </div>
        <div className="field">
          <input className="input-field" name="user[password]" onChange={handleChange} type="password" placeholder="Password" />
        </div>
        <input type="submit" className="submit-button"/>
        <div><Link to="/signup" className="sign-up-link">Sign up</Link></div>
      </form>
    </div>

  );
}

export default Login;
