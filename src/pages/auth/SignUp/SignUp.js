import React from 'react';
import './SignUp.scss';
import Input from '../../../components/input/Input';
import Button from '../../../components/buttons/button';
const SignUp = () => {
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
            labelText="Username (8 letters)"
            placeholder="Enter Username"
            handleChange={() => {}}
          />
          <Input
            id="Email"
            name="Email"
            type="text"
            labelText="Email"
            placeholder="abc@ijk.com"
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
        </div>
        <Button label={'Sign Up'} className="auth-button Button" disabled={false} />
      </form>
    </div>
  );
};

export default SignUp;
