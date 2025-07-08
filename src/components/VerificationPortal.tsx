
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e53b2f15-75c6-44eb-abd2-29e329c9523c.png')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-transparent to-indigo-900/50" />
      
      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg backdrop-blur-sm bg-blue-600/90">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Identity Verification</h1>
            <p className="text-blue-100 drop-shadow-md">Secure your account in just a few steps</p>
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
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-6 border border-white/20"
            >
              <CurrentStepComponent
                data={verificationData}
                onNext={nextStep}
                onUpdate={updateData}
              />
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <div className="text-center text-sm text-blue-100">
            <p className="drop-shadow-md">🔒 Your data is encrypted and secure</p>
            <p className="mt-1 drop-shadow-md">Powered by Guzco Verification</p>
          </div>
        </div>
      </div>
    </div>
  );
};
