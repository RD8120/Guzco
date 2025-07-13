import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmailStep } from './verification/EmailStep';
import { AddressStep } from './verification/AddressStep';
import { RiskEscalationStep } from './verification/RiskEscalationStep';
import { ConsentStep } from './verification/ConsentStep';
import { SuccessStep } from './verification/SuccessStep';
import { ProgressIndicator } from './verification/ProgressIndicator';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 'email', title: 'Email Verification', component: EmailStep },
  { id: 'address', title: 'Address Details', component: AddressStep },
  { id: 'risk', title: 'Security Check', component: RiskEscalationStep },
  { id: 'consent', title: 'Legal Consent', component: ConsentStep },
  { id: 'success', title: 'Complete', component: SuccessStep },
];

export const VerificationPortal = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-[#05C4E1] text-white">
      {/* Header */}
      <header className="px-6 py-4" style={{ background: '#05C4E1' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">GUZCO</h1>
            </div>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 capitalize">Verification</span>
          </div>
          <div className="bg-white rounded-lg p-2 flex items-center">
            <img src="/amac-logo.png" alt="AMAC Logo" className="h-10 w-auto" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
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
