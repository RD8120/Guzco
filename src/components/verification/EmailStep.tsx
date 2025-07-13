import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

interface EmailStepProps {
  data: any;
  onNext: () => void;
  onUpdate: (data: any) => void;
}

export const EmailStep: React.FC<EmailStepProps> = ({ data, onNext, onUpdate }) => {
  const [email, setEmail] = useState(data.email || '');
  const [otp, setOtp] = useState(data.otp || '');
  const [showOtp, setShowOtp] = useState(!!data.email);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSendOtp = async () => {
    if (!email) return;
    
    setIsVerifying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsVerifying(false);
    setShowOtp(true);
    onUpdate({ email });
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      onUpdate({ otp });
      onNext();
    }
  };

  if (!showOtp) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Let's start with your email
          </h2>
          <p className="text-gray-600">
            We'll send you a secure code to verify your identity
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full h-12 text-lg text-black"
              autoFocus
            />
          </div>

          <Button
            onClick={handleSendOtp}
            disabled={!email || isVerifying}
            className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
          >
            {isVerifying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              'Send verification code'
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Check your email!
        </h2>
        <p className="text-gray-600">
          We just sent you a 6-digit code at
        </p>
        <p className="font-medium text-gray-900">{email}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification code
          </label>
          <Input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
            className="w-full h-12 text-lg text-center tracking-widest text-black"
            autoFocus
            maxLength={6}
          />
        </div>

        <Button
          onClick={handleVerifyOtp}
          disabled={otp.length !== 6}
          className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
        >
          Verify & Continue
        </Button>

        <button
          onClick={handleSendOtp}
          className="w-full text-blue-600 hover:text-blue-700 text-sm"
        >
          Didn't receive the code? Send again
        </button>
      </div>
    </div>
  );
};
