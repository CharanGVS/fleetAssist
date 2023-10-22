import React from 'react';
import './ForgotPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import '../auth-tabs/AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg';
// import Button from '../../../components/buttons/button';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">ForgotPassword</div>
              </li>
            </ul>
            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts alert-error" role="alert">
                  Error Message
                </div> */}
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
                  </div>

                  <Link to={'/'}>
                    <span className="back-to-login">
                      <FaArrowLeft className="arrow-left" />
                      Back to Sign In
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
