
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  ShoppingBag, 
  Shield, 
  CheckCircle, 
  FileText, 
  AlertTriangle,
  Download,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VerificationDetailsProps {
  orderId: string;
  onBack: () => void;
}

export const VerificationDetails: React.FC<VerificationDetailsProps> = ({ orderId, onBack }) => {
  const [decision, setDecision] = useState<'accept' | 'reject' | 'hold' | null>(null);

  const handleDecision = (type: 'accept' | 'reject' | 'hold') => {
    setDecision(type);
    // Here you would typically send the decision to your backend
    console.log(`Decision made: ${type} for order ${orderId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">Verification Details</h1>
          <p className="text-gray-400">Complete verification journey for {orderId}</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Information */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Customer Information</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-gray-400 text-sm">Profile</label>
              <p className="text-white font-medium">Ankit Singh</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Email ID</label>
              <p className="text-white">ankitsingh@gmail.com</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Phone Number</label>
              <p className="text-white">+91 8987898977</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">IP Address</label>
              <p className="text-white">192.168.1.100</p>
            </div>
          </div>
        </div>

        {/* Order Information */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <ShoppingBag className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Order Information</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-gray-400 text-sm">Order ID</label>
              <p className="text-white font-medium">ORD-001</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Amount</label>
              <p className="text-white">₹15,240</p>
            </div>
            <div>
              <label className="text-gray-400 text-sm">Order Date</label>
              <p className="text-white">2024-01-15 14:30:00</p>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Risk Assessment</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">25</div>
            <p className="text-gray-400 mb-4">Risk Score</p>
            <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm inline-block">
              Low risk - proceed with verification
            </div>
          </div>
        </div>
      </div>

      {/* Verification Steps and Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verification Steps Summary */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Verification Steps Summary</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Email OTP</span>
                  <span className="text-green-400 text-sm">Completed</span>
                </div>
                <p className="text-gray-400 text-sm">OTP sent and verified successfully</p>
                <p className="text-gray-500 text-xs">03 2024-01-15 14:33:15 - Attempt: 1</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">iDIN</span>
                  <span className="text-green-400 text-sm">Completed</span>
                </div>
                <p className="text-gray-400 text-sm">Bank verification completed via iDIN</p>
                <p className="text-gray-500 text-xs">03 2024-01-15 14:35:15 - Bank: ING Bank</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">KYC Upload</span>
                  <span className="text-green-400 text-sm">Completed</span>
                </div>
                <p className="text-gray-400 text-sm">Documents uploaded and verified</p>
                <p className="text-gray-500 text-xs">03 2024-01-15 14:36:15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Documents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Uploaded Documents</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Aadhar card</p>
                  <p className="text-gray-400 text-sm">2.4 MB</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-blue-400 hover:text-blue-300">
                  <Eye className="w-4 h-4" />
                </button>
                <span className="text-green-400 text-sm">View</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">national_id.jpg</p>
                  <p className="text-gray-400 text-sm">1.8 MB</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-blue-400 hover:text-blue-300">
                  <Eye className="w-4 h-4" />
                </button>
                <span className="text-green-400 text-sm">View</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Section */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Final Decision</h3>
        </div>
        
        {!decision ? (
          <div>
            <p className="text-gray-300 mb-6">
              Based on the verification results and risk assessment, please make a decision on this claim:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => handleDecision('accept')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Accept Claim
              </Button>
              <Button
                onClick={() => handleDecision('reject')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Reject Claim
              </Button>
              <Button
                onClick={() => handleDecision('hold')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3"
              >
                <FileText className="w-5 h-5 mr-2" />
                Put on Hold
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-white">
              Decision made on 2024-01-15 14:36:00: 
              <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                decision === 'accept' ? 'bg-green-600 text-white' :
                decision === 'reject' ? 'bg-red-600 text-white' :
                'bg-orange-600 text-white'
              }`}>
                {decision.charAt(0).toUpperCase() + decision.slice(1)} Claim
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
