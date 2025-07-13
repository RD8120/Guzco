
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, CreditCard, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface RiskEscalationStepProps {
  data: any;
  onNext: () => void;
  onUpdate: (data: any) => void;
}

export const RiskEscalationStep: React.FC<RiskEscalationStepProps> = ({ data, onNext, onUpdate }) => {
  const [riskScore, setRiskScore] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');

  useEffect(() => {
    // Simulate risk calculation
    const timer = setTimeout(() => {
      const score = Math.floor(Math.random() * 100);
      setRiskScore(score);
      onUpdate({ riskScore: score });
      
      setTimeout(() => {
        setShowOptions(true);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onUpdate({ verificationMethod: method });
    onNext();
  };

  const getRiskLevel = () => {
    if (riskScore < 30) return { level: 'Low', color: 'green', message: 'Standard verification required' };
    if (riskScore < 70) return { level: 'Medium', color: 'yellow', message: 'Additional verification needed' };
    return { level: 'High', color: 'red', message: 'Enhanced security check required' };
  };

  const risk = getRiskLevel();

  if (!showOptions) {
    return (
      <div className="space-y-6 text-center">
        <Shield className="w-16 h-16 text-blue-600 mx-auto" />
        <h2 className="text-xl font-semibold text-gray-900">
          Security Assessment
        </h2>
        <p className="text-gray-600">
          We're analyzing your request for additional security...
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-700">Risk Analysis</span>
            <div className="flex items-center space-x-2">
              <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full" />
              <span className="text-blue-600">{riskScore}%</span>
            </div>
          </div>

          {riskScore > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border-2 ${
                risk.color === 'green' ? 'bg-green-50 border-green-200' :
                risk.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center">
                <AlertTriangle className={`w-5 h-5 mr-3 ${
                  risk.color === 'green' ? 'text-green-600' :
                  risk.color === 'yellow' ? 'text-yellow-600' :
                  'text-red-600'
                }`} />
                <div>
                  <p className={`font-medium ${
                    risk.color === 'green' ? 'text-green-900' :
                    risk.color === 'yellow' ? 'text-yellow-900' :
                    'text-red-900'
                  }`}>
                    Risk Level: {risk.level}
                  </p>
                  <p className={`text-sm ${
                    risk.color === 'green' ? 'text-green-700' :
                    risk.color === 'yellow' ? 'text-yellow-700' :
                    'text-red-700'
                  }`}>
                    {risk.message}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Extra verification needed
        </h2>
        <p className="text-gray-600">
          To protect your account, we need additional verification. Choose your preferred method:
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleMethodSelect('idin')}
          className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
        >
          <div className="flex items-center">
            <CreditCard className="w-6 h-6 text-blue-600 mr-4" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Bank ID (iDIN)</p>
              <p className="text-sm text-gray-600">Verify instantly with your Dutch bank</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleMethodSelect('kyc')}
          className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all"
        >
          <div className="flex items-center">
            <Eye className="w-6 h-6 text-blue-600 mr-4" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Document Upload</p>
              <p className="text-sm text-gray-600">Upload ID document for manual review</p>
            </div>
          </div>
        </button>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-blue-600 mt-1 mr-3" />
          <div>
            <p className="font-medium text-blue-900">Why do we need this?</p>
            <p className="text-sm text-blue-700">
              We detected unusual activity patterns. This extra step helps protect both you and our merchants from fraud.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
