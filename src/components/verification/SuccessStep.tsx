
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SuccessStepProps {
  data: any;
  onNext: () => void;
  onUpdate: (data: any) => void;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ data }) => {
  const handleReturnToMerchant = () => {
    // In a real app, this would redirect back to the merchant
    window.close();
  };

  const verificationId = `GZ-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
      </motion.div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          You're all set! 🎉
        </h2>
        <p className="text-gray-600 text-lg">
          Your identity has been successfully verified
        </p>
      </div>

      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <Package className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <p className="font-medium text-green-900">Verification Complete</p>
            <p className="text-sm text-green-700">ID: {verificationId}</p>
          </div>
        </div>
        
        <div className="space-y-2 text-sm text-green-700">
          <p>✅ Email verified</p>
          <p>✅ Address confirmed</p>
          <p>✅ Security checks passed</p>
          <p>✅ Legal consent recorded</p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600">
          Thank you for completing the verification process. Your order dispute has been processed 
          and the merchant has been notified.
        </p>

        <div className="flex flex-col space-y-3">
          <Button
            onClick={handleReturnToMerchant}
            className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
          >
            Return to Store
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Track your order status
          </button>
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          🔒 Your data is secure and will be handled according to our privacy policy. 
          Verification typically takes 1-2 business days to process.
        </p>
      </div>
    </motion.div>
  );
};
