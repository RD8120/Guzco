import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, ArrowRight, CheckCircle, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MainLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/favicon.ico" alt="favicon" className="h-8 w-8" />
              <h1 className="text-2xl font-bold text-gray-900">GUZCO</h1>
            </div>
            <img src="/amac-logo.png" alt="AMAC Logo" className="h-10 w-auto" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the appropriate portal based on your role. Customers can verify their identity 
            for claims, while merchants can review and manage verification requests.
          </p>
        </div>

        {/* Portal Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Customer Portal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Portal</h3>
              <p className="text-gray-600">
                Verify your identity to complete your claim process securely and quickly.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Email verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Address confirmation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Identity verification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Digital consent</span>
              </div>
            </div>

            <Button 
              onClick={() => navigate('/verification')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
            >
              Start Verification
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Merchant Portal */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800 hover:shadow-2xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Merchant Dashboard</h3>
              <p className="text-gray-300">
                Review verification requests, analyze risk scores, and manage claims efficiently.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Analytics & reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Risk assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Verification logs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Settings & configuration</span>
              </div>
            </div>

            <Button 
              onClick={() => navigate('/merchant')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
            >
              Access Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            🔒 All data is encrypted and processed securely according to GDPR and Dutch regulations
          </p>
        </div>
      </div>
    </div>
  );
};
