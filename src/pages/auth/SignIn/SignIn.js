import React from 'react';
import './SignIn.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/buttons/button';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error Message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="UserId"
            name="UserId"
            type="text"
            labelText="Username/Email"
            placeholder="Enter Username/Email"
            handleChange={() => {}}
          />
          <Input
            id="Password"
            name="Password"
            type="Password"
            labelText="Password"
            placeholder="Enter Password"
            handleChange={() => {}}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" value={false} />
            Keep me signed in
          </label>
        </div>
        <Button label={'Sign In'} className="auth-button Button" disabled={false} />
        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
