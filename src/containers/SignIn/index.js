import React from 'react'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { userSignIn } from '../../redux/sessionsSlice';
import { setClassName } from '../../helper';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const setClassName = () => {
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     const container = document.querySelector('.container');
  //     container.removeAttribute('.container');
  //     container.setAttribute('className', 'container-login')
  //   }
  // }



  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      user: {
        email: '',
        password: '',
      }
    },
    
    onSubmit: values => {
      dispatch(userSignIn(values))
      setTimeout(() => {
        navigate('/movies')
      }, 300)
    },
  });

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input className="input-field" name="user[email]" onChange={handleChange} type="email" placeholder="email" />
        </div>
        <div className="field">
          <input className="input-field" name="user[password]" onChange={handleChange} type="password" placeholder="password" />
        </div>
        <input type="submit" className="submit-button"/>
        <div><Link to="/signup">Sign up</Link></div>
      </form>
    </div>

  );
}

export default Login;
