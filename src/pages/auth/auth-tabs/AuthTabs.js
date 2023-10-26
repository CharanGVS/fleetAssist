import { useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const authTabs = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [type, setType] = useState('Sign In');
  return (
    <>
      <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="environment">DEV</div>
        <div className="container-wrapper-auth">
          <div className="tabs">
            <div className="tabs-auth">
              <ul className="tab-group">
                <li className={`tab${type === 'Sign In' ? ' active' : ''}`} onClick={() => setType('Sign In')}>
                  <button className="signIn">Sign In</button>
                </li>
                <li className={`tab ${type === 'Sign Up' ? 'active' : ''}`} onClick={() => setType('Sign Up')}>
                  <button className="signUp">Sign Up</button>
                </li>
              </ul>
              {type === 'Sign In' && (
                <div className="tab-item">
                  <SignIn />
                </div>
              )}
              {type === 'Sign Up' && (
                <div className="tab-item">
                  <SignUp />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default authTabs;
