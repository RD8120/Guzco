
import React, { useState } from 'react';
import { Search, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VerificationLogsProps {
  onViewDetails: (orderId: string) => void;
}

export const VerificationLogs: React.FC<VerificationLogsProps> = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const verificationRecords = [
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Failed',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹15,240',
      riskScore: 'High'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Success',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹15,240',
      riskScore: 'Low'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Failed',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹15,240',
      riskScore: 'High'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Escalated',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'Medium'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Escalated',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'Medium'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Failed',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹15,240',
      riskScore: 'High'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Escalated',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'Medium'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Success',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'Low'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Success',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'Low'
    },
    {
      customer: 'Ankit Singh',
      email: 'ankit@gmail.com',
      orderId: 'ORD-001',
      status: 'Failed',
      dateTime: '07 Jul 2025, 11:30 AM',
      steps: ['OTP', 'iDIN', 'KYC'],
      amount: '₹9,240',
      riskScore: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-600 text-white';
      case 'Failed': return 'bg-red-600 text-white';
      case 'Escalated': return 'bg-orange-600 text-white';
      default: return 'bg-gray-600 text-white';
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">All Verification Records</h1>
        <div className="flex items-center space-x-3">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
          >
            <Filter className="w-4 h-4 mr-2" />
            Show Filters
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, order ID, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-750 border-b border-gray-700">
              <tr className="text-left text-gray-400 text-sm">
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Verification Steps</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Risk Score</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {verificationRecords.map((record, index) => (
                <tr key={index} className="text-sm hover:bg-gray-750 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-white font-medium">{record.customer}</div>
                      <div className="text-gray-400">{record.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white font-mono">{record.orderId}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{record.dateTime}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-1">
                      {record.steps.map((step, stepIndex) => (
                        <span key={stepIndex} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                          {step}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">{record.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${getRiskColor(record.riskScore)}`}>
                      {record.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => onViewDetails(record.orderId)}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-750 px-6 py-4 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Page 1 of 10</span>
            <div className="flex items-center space-x-2">
              <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-white">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-white">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
