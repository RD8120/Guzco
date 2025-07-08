
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmailStep } from './verification/EmailStep';
import { AddressStep } from './verification/AddressStep';
import { RiskEscalationStep } from './verification/RiskEscalationStep';
import { ConsentStep } from './verification/ConsentStep';
import { SuccessStep } from './verification/SuccessStep';
import { ProgressIndicator } from './verification/ProgressIndicator';

const steps = [
  { id: 'email', title: 'Email Verification', component: EmailStep },
  { id: 'address', title: 'Address Details', component: AddressStep },
  { id: 'risk', title: 'Security Check', component: RiskEscalationStep },
  { id: 'consent', title: 'Legal Consent', component: ConsentStep },
  { id: 'success', title: 'Complete', component: SuccessStep },
];

export const VerificationPortal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationData, setVerificationData] = useState({
    email: '',
    otp: '',
    postcode: '',
    houseNumber: '',
    riskScore: 0,
    consent: false,
    signature: '',
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const updateData = (data: Partial<typeof verificationData>) => {
    setVerificationData(prev => ({ ...prev, ...data }));
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1L5 6v3h10V6l-5-5zM8 8v2h4V8H8z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Identity Verification</h1>
          <p className="text-gray-600">Secure your account in just a few steps</p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator currentStep={currentStep} totalSteps={steps.length - 1} />

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-6"
          >
            <CurrentStepComponent
              data={verificationData}
              onNext={nextStep}
              onUpdate={updateData}
            />
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>🔒 Your data is encrypted and secure</p>
          <p className="mt-1">Powered by Guzco Verification</p>
        </div>
      </div>
    </div>
  );
};
