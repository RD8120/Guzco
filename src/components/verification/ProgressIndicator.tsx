
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / (totalSteps + 1)) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-blue-100 mb-2 drop-shadow-md">
        <span>Step {currentStep + 1} of {totalSteps + 1}</span>
        <span>{Math.round(progress)}% complete</span>
      </div>
      <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-2 border border-white/30">
        <motion.div
          className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full shadow-sm"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};
