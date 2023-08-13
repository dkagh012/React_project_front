import React from 'react';
import BusinessInput from './BusinessInput/BusinessInput';

function BusinessList({ onNextStep }) {
  return (
    <div className='container'>
      <BusinessInput onNextStep={onNextStep} /> {/* onNextStep 함수 전달 */}
    </div>
  );
}

export default BusinessList;
