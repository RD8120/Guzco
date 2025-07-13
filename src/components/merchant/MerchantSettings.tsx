
import React, { useState } from 'react';
import { Settings, Shield, Users, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MerchantSettings = () => {
  const [activeTab, setActiveTab] = useState('integration');
  const [legalWarningText, setLegalWarningText] = useState(
    'By proceeding with this verification, you confirm that you are the rightful owner of this claim and understand that providing false information may result in legal consequences.'
  );
  const [privacyPolicyUrl, setPrivacyPolicyUrl] = useState('https://yourdomain.com/privacypolicy');
  const [termsOfServiceUrl, setTermsOfServiceUrl] = useState('https://yourdomain.com/termsofservice');

  const tabs = [
    { id: 'integration', label: 'Integration', icon: Settings },
    { id: 'legal', label: 'Legal & GDPR', icon: Shield },
    { id: 'team', label: 'Team', icon: Users },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-gray-400">Configure your verification system and integrations</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-700 p-1 rounded-lg w-fit">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'integration' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">API Configuration</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Legal Warning Text</label>
              <textarea
                value={legalWarningText}
                onChange={(e) => setLegalWarningText(e.target.value)}
                className="w-full h-24 bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                placeholder="Enter the legal warning text that appears during verification..."
              />
              <p className="text-gray-400 text-sm mt-2">
                This text will be displayed prominently during the consent step of verification.
              </p>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Privacy Policy URL</label>
              <input
                type="url"
                value={privacyPolicyUrl}
                onChange={(e) => setPrivacyPolicyUrl(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                placeholder="https://yourdomain.com/privacypolicy"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Terms of Service URL</label>
              <input
                type="url"
                value={termsOfServiceUrl}
                onChange={(e) => setTermsOfServiceUrl(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                placeholder="https://yourdomain.com/termsofservice"
              />
            </div>

            <div className="pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                Save settings
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'legal' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Legal & GDPR Compliance</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-800 mb-2">Legal Warning Configuration</h4>
              <p className="text-red-700 text-sm mb-4">
                Configure how legal warnings are displayed to users during verification. This ensures compliance 
                with Dutch fraud prevention laws.
              </p>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-red-800 text-sm">Display prominent legal warning during consent</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-red-800 text-sm">Require explicit acknowledgment of legal consequences</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-red-800 text-sm">Log all legal consent interactions</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">Data Retention Policy</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="retention" className="mr-2" defaultChecked />
                  <span className="text-gray-300">7 years (Dutch financial regulation compliance)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="retention" className="mr-2" />
                  <span className="text-gray-300">5 years (Standard business practice)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="retention" className="mr-2" />
                  <span className="text-gray-300">Custom period</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">GDPR Rights</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-gray-300">Enable data subject access requests</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-gray-300">Allow data correction requests</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-gray-300">Enable right to erasure (with legal exceptions)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Team Management</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">AS</span>
                </div>
                <div>
                  <p className="text-white font-medium">Admin User</p>
                  <p className="text-gray-400 text-sm">admin@guzco.com</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Admin</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">MR</span>
                </div>
                <div>
                  <p className="text-white font-medium">Manager User</p>
                  <p className="text-gray-400 text-sm">manager@guzco.com</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Manager</span>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Add Team Member
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
