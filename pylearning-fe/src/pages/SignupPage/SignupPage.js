import React, { useState } from 'react';
import styles from './SignupPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api/signup';
import LoginSpinner from '../../components/Spinner/LoginSpinner/LoginSpinner';
import { toast } from 'react-toastify';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassowrd] = useState('');
  const [incorrectEmail, setIncorrectEmail] = useState('');
  const [incorrectUsername, setIncorrectUsername] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState('');
  const [incorrectConfirmPassword, setIncorrectConfirmPassword] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const validation = () => {
    let validationFailed = false;
    if (email === '') {
      setIncorrectEmail('Email is required');
      validationFailed = true;
    } else {
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(mailformat)) {
        setIncorrectEmail('You have entered an invalid email address');
        validationFailed = true;
      } else {
        setIncorrectEmail('');
      }
    }
    if (password === '') {
      setIncorrectPassword('Password is required');
      validationFailed = true;
    } else {
      let strongPassword = new RegExp(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
      );
      if (!strongPassword.test(password)) {
        setIncorrectPassword(
          'Password should have at least 8 characters, 1 uppercase, 1 lowercase and 1 number'
        );
        validationFailed = true;
      } else {
        setIncorrectPassword('');
      }
    }
    if (confirmPassword === '') {
      setIncorrectConfirmPassword('Confirm password is required');
      validationFailed = true;
    } else {
      if (password !== confirmPassword) {
        setIncorrectConfirmPassword('Password does not match');
        validationFailed = true;
      } else {
        setIncorrectConfirmPassword('');
      }
    }
    if (username === '') {
      setIncorrectUsername('Username is required');
      validationFailed = true;
    } else {
      setIncorrectUsername('');
    }
    return validationFailed;
  };
  const onSingup = () => {
    const valitationFailed = validation();
    if (valitationFailed) return;

    setShowSpinner(true);
    const data = { username: username, email: email, password: password };
    signup(data)
      .then((res) => {
        setShowSpinner(false);
        if (res.status === 201) {
          toast.success('Sign up successful! Redirecting to login.', {
            theme: 'colored',
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      })
      .catch((err) => {
        setShowSpinner(false);
        const errCode = err.response.data.code;
        const errFields = err.response.data.fields;
        if (errCode === 'duplicate_error') {
          if (errFields.includes('username')) {
            setIncorrectUsername('Username already exists');
          }
          if (errFields.includes('email')) {
            setIncorrectEmail('Email already exists');
          }
        } else {
          toast.error('Something went wrong!', { theme: 'colored' });
        }
      });
  };

  return (
    <div className={styles.signupPageContainer}>
      <div className={styles.formContainer}>
        <div className={styles.signupHeader}>
          <h2>Create an account!</h2>
          <p>Please join us to start learning</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            type='text'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='Email'
          />
          {incorrectEmail && (
            <p className={styles.incorrect}>{incorrectEmail}</p>
          )}
          <input
            type='text'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='Username'
          />
          {incorrectUsername && (
            <p className={styles.incorrect}>{incorrectUsername}</p>
          )}
          <input
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='Password'
          />
          {incorrectPassword && (
            <p className={styles.incorrect}>{incorrectPassword}</p>
          )}
          <input
            type='password'
            onChange={(e) => {
              setConfirmPassowrd(e.target.value);
            }}
            placeholder='Confirm Password'
          />
          {incorrectConfirmPassword && (
            <p className={styles.incorrect}>{incorrectConfirmPassword}</p>
          )}
        </div>
        <button className={styles.signupBtn} onClick={onSingup}>
          {showSpinner ? <LoginSpinner /> : 'Sign up'}
        </button>
        <Link to='/login'>Already have an account?</Link>
      </div>
    </div>
  );
}
