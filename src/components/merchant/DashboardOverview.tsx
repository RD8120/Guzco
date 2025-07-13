
import React from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

export const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Claims',
      value: '€2,45,870',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Verified Claims',
      value: '23',
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      title: 'Pending Reviews',
      value: '7',
      change: '-3%',
      trend: 'down',
      icon: Clock,
      color: 'orange'
    }
  ];

  const recentActivity = [
    {
      id: 'ORD-001',
      email: 'ankit@gmail.com',
      status: 'Failed',
      timestamp: '07 Jul 2025, 11:30 AM',
      amount: '€2,45,870',
      riskScore: 'High',
      action: 'view-details'
    },
    {
      id: 'ORD-001',
      email: 'ankit@gmail.com',
      status: 'Success',
      timestamp: '07 Jul 2025, 11:30 AM',
      amount: '€2,45,870',
      riskScore: 'Low',
      action: 'view-details'
    },
    {
      id: 'ORD-001',
      email: 'ankit@gmail.com',
      status: 'Failed',
      timestamp: '07 Jul 2025, 11:30 AM',
      amount: '€2,45,870',
      riskScore: 'High',
      action: 'view-details'
    },
    {
      id: 'ORD-001',
      email: 'ankit@gmail.com',
      status: 'Escalated',
      timestamp: '07 Jul 2025, 11:30 AM',
      amount: '€9,240',
      riskScore: 'Medium',
      action: 'view-details'
    },
    {
      id: 'ORD-001',
      email: 'ankit@gmail.com',
      status: 'Success',
      timestamp: '07 Jul 2025, 11:30 AM',
      amount: '€9,240',
      riskScore: 'Low',
      action: 'view-details'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Escalated': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-orange-400';
      case 'High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-600 flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Verification Trends Chart */}
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Verification Trends</h3>
          <div className="flex items-end space-x-4 h-48">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-700 rounded-t relative" style={{ height: `${Math.random() * 100 + 50}px` }}>
                  <div className="absolute bottom-0 w-full bg-blue-500 rounded-t" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                  <div className="absolute bottom-0 w-full bg-green-500 rounded-t" style={{ height: `${Math.random() * 40 + 10}%` }}></div>
                </div>
                <span className="text-gray-400 text-xs mt-2">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Score Chart */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Chart</h3>
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-700"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${54 * 2.51} 251.2`}
                className="text-green-500"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={`${20 * 1.88} 188.4`}
                className="text-orange-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">54</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Low Risk</span>
              <span className="text-white">30</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Medium</span>
              <span className="text-white">15</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">High Risk</span>
              <span className="text-white">10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent Verification Activity</h3>
            <span className="text-gray-400 text-sm">30 days this month</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-750">
              <tr className="text-left text-gray-400 text-sm">
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Verification Steps</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Risk Score</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentActivity.map((item, index) => (
                <tr key={index} className="text-sm">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white font-medium">Ankit Singh</div>
                      <div className="text-gray-400">{item.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{item.id}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{item.timestamp}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">OTP</span>
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">iDIN</span>
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">KYC</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${getRiskColor(item.riskScore)}`}>
                      {item.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
