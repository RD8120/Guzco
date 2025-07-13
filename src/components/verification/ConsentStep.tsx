import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Clock, MapPin, Wifi, AlertTriangle } from 'lucide-react';

interface ConsentStepProps {
  data: any;
  onNext: () => void;
  onUpdate: (data: any) => void;
}

export const ConsentStep: React.FC<ConsentStepProps> = ({ data, onNext, onUpdate }) => {
  const [consent, setConsent] = useState(false);
  const [signature, setSignature] = useState('');
  const [signatureMethod, setSignatureMethod] = useState<'type' | 'draw'>('type');

  const currentTimestamp = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const handleSubmit = () => {
    if (consent && signature) {
      onUpdate({ 
        consent, 
        signature, 
        timestamp: new Date().toISOString(),
        ipAddress: '192.168.1.100', // Mock IP
        location: 'Amsterdam, Netherlands' // Mock location
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      {/* Legal Warning Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-red-600 mr-3" />
          <FileText className="w-12 h-12 text-red-600" />
        </div>
        <h2 className="text-xl font-bold text-red-600 mb-2">
          ⚠️ LEGAL CONSENT & SIGNATURE REQUIRED
        </h2>
        <p className="text-red-700 font-semibold">
          Legal verification required - False claims may result in prosecution
        </p>
      </div>

      {/* Legal Warning Banner */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-800 mb-2">LEGAL WARNING</h3>
            <p className="text-red-700 font-medium text-sm">
              By proceeding with this verification, you confirm that you are the rightful owner of this claim 
              and understand that providing false information may result in legal consequences under Dutch law.
            </p>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <div className="border border-gray-200 rounded-lg">
        <div className="p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
          <h3 className="font-medium text-gray-900">Verification Terms & Conditions</h3>
        </div>
        <ScrollArea className="h-32 p-4">
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <strong>Data Processing:</strong> By proceeding, you consent to the processing of your personal data 
              for identity verification and fraud prevention purposes.
            </p>
            <p>
              <strong>Information Sharing:</strong> Your verification data may be shared with trusted partners 
              and relevant authorities for security purposes.
            </p>
            <p>
              <strong>Retention:</strong> We will retain your verification data for up to 7 years as required 
              by Dutch financial regulations.
            </p>
            <p>
              <strong>Rights:</strong> You have the right to access, correct, or delete your personal data 
              in accordance with GDPR.
            </p>
          </div>
        </ScrollArea>
      </div>

      {/* Verification Details */}
      <div className="p-4 bg-gray-50 rounded-lg space-y-3">
        <h4 className="font-medium text-gray-900 mb-3">Verification Details</h4>
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Timestamp: {currentTimestamp}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Wifi className="w-4 h-4 mr-2" />
            <span>IP Address: 192.168.1.100</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Location: Amsterdam, Netherlands</span>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setSignatureMethod('type')}
            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
              signatureMethod === 'type' 
                ? 'border-blue-600 bg-blue-50 text-blue-700' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Type signature
          </button>
          <button
            onClick={() => setSignatureMethod('draw')}
            className={`flex-1 p-3 rounded-lg border-2 transition-all ${
              signatureMethod === 'draw' 
                ? 'border-blue-600 bg-blue-50 text-blue-700' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Draw signature
          </button>
        </div>

        {signatureMethod === 'type' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type your full name as signature
            </label>
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="John Doe"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-lg font-cursive text-black"
              style={{ fontFamily: 'cursive' }}
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Draw your signature below
            </label>
            <div 
              className="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
              onClick={() => setSignature('John Doe')} // Mock signature for demo
            >
              {signature ? (
                <span className="text-2xl font-cursive text-blue-600">{signature}</span>
              ) : (
                <span className="text-gray-500">Tap to sign</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Consent Checkbox with Legal Warning */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="consent" className="text-sm font-bold text-red-800 leading-relaxed">
            ⚠️ I UNDERSTAND THE LEGAL CONSEQUENCES: I have read and agree to the verification terms and conditions. 
            I consent to the processing of my personal data for identity verification and fraud prevention purposes. 
            I confirm this claim is legitimate and understand that false claims may result in prosecution.
          </label>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!consent || !signature}
        className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 font-bold"
      >
        ⚠️ LEGALLY SIGN & COMPLETE VERIFICATION
      </Button>
    </div>
  );
};
