import React, { useState } from "react";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BusinessList from './BusinessList/BusinessList.js';
import BusinessCheck from './BusinessList/BusinessCheck/BusinessCheck.js';

function Business() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({}); // Store form data across steps

  const handleNextStep = (data) => {
    setFormData(prevData => ({ ...prevData, ...data })); // Merge form data
    setCurrentStep(currentStep + 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessList onNextStep={handleNextStep} />;
      case 2:
        return <BusinessCheck onNextStep={handleNextStep} />;
      // case 4:
      //   return <BusinessFinish formData={formData} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      {renderStep()}
      <Footer />
    </div>
  );
}

export default Business;
