import React, { useState, useEffect } from 'react';
import styles from './LoginPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/login';
import LoginSpinner from '../../components/Spinner/LoginSpinner/LoginSpinner';
import { toast } from 'react-toastify';

export default function Login() {
  const [userNameOrEmail, setUserNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState('');
  const [emailRequired, setEmailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [loginSpinner, setLoginSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const validation = () => {
    if (password === '' || userNameOrEmail === '') {
      if (password === '') {
        setPasswordRequired(true);
      }
      if (userNameOrEmail === '') {
        setEmailRequired(true);
      }
      return true;
    }
    return false;
  };

  const onLogin = () => {
    if (validation()) {
      return;
    }

    setLoginSpinner(true);
    const data = { username_or_email: userNameOrEmail, password: password };
    login(data)
      .then((res) => {
        setLoginSpinner(false);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.access_token);
          navigate('/');
        }
      })
      .catch((err) => {
        setLoginSpinner(false);
        const errCode = err.response.data.code;
        const errMsg = err.response.data.message;
        if (errCode === 'unauthorized') {
          setIncorrect(errMsg);
        } else {
          toast.error('Something went wrong!', { theme: 'colored' });
        }
      });
  };
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.formContainer}>
        <div className={styles.loginHeader}>
          <h2>Welcome back!</h2>
          <p>We are so excited to see you again</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            type='text'
            onChange={(e) => {
              setUserNameOrEmail(e.target.value);
            }}
            placeholder='Email or Username'
          />
          {emailRequired && <p className={styles.incorrect}>required</p>}
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordRequired && <p className={styles.incorrect}>required</p>}
        </div>
        {incorrect && <p className={styles.incorrect}>{incorrect}</p>}
        <button className={styles.loginBtn} onClick={onLogin}>
          {loginSpinner ? <LoginSpinner /> : 'Sign in'}
        </button>
        <div className={styles.userActionContainer}>
          <Link to='/signup'>Sign up</Link>
          <Link className={styles.forgotPassword} to='/forgotPassword'>
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
}
