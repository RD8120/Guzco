import React, { useState } from 'react';
import { VerificationLogs } from './VerificationLogs';
import { VerificationDetails } from './VerificationDetails';
import { MerchantSettings } from './MerchantSettings';
import { DashboardOverview } from './DashboardOverview';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Shield,
  Search,
  Bell,
  User
} from 'lucide-react';

export const MerchantDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'verification-logs', label: 'Verification Logs', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    if (selectedOrder) {
      return (
        <VerificationDetails 
          orderId={selectedOrder} 
          onBack={() => setSelectedOrder(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'verification-logs':
        return <VerificationLogs onViewDetails={setSelectedOrder} />;
      case 'settings':
        return <MerchantSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">GUZCO</h1>
            </div>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300 capitalize">{activeTab.replace('-', ' ')}</span>
          </div>
          <div className="bg-white rounded-lg p-2 flex items-center">
            <img src="/amac-logo.png" alt="AMAC Logo" className="h-10 w-auto" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen p-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSelectedOrder(null);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
