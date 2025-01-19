import React from 'react';
import '../../styles/style.css';
import UNDPLogo from '../../assets/images/undp.jpg'; // Add path to UNDP logo
import ExpoLiveLogo from '../../assets/images/expo.png'; // Add path to Expo Live logo
import GoogleLogo from '../../assets/icons/Google'; // Add path to Google logo

const Award_card = () => {
  return (
    <div className="award-card-container">
      <div className="award-card">
        <div className="award-card-undp-section">
          <img src={UNDPLogo} alt="UNDP" />
          <div className='award-card-undp-content'>
          <h6>"Asia Pacific </h6>
          <p>SDG Enterprise Award"</p>
          </div>
        </div>
        <div className='award-card-section-hr'>
        <hr className='award-card-section-hr-tag1'/>
        </div>
        <div className="award-card-expo-section">
        <h4>In Association With</h4>
          <img src={ExpoLiveLogo} alt="Expo Live" />
        </div>
        <div className='award-card-section-hr'>
          <hr className='award-card-section-hr-tag2'/>
        </div>
        <hr/>
        <div className="award-card-googleIcon-section">
          {/* <img src={GoogleLogo} alt="Google" /> */}
          <GoogleLogo className="award-card-google-icon"/>
          <h4>Winner of Google Business Group Stories</h4>
        </div>
      </div>
    </div>
  );
};

export default Award_card;
