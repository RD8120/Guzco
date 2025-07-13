import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Home } from 'lucide-react';

interface AddressStepProps {
  data: any;
  onNext: () => void;
  onUpdate: (data: any) => void;
}

const mockAddresses = {
  '1012AB': { street: 'Kalverstraat', city: 'Amsterdam' },
  '1000AA': { street: 'Damrak', city: 'Amsterdam' },
  '3011AD': { street: 'Coolsingel', city: 'Rotterdam' },
  '2511CV': { street: 'Binnenhof', city: 'Den Haag' },
};

export const AddressStep: React.FC<AddressStepProps> = ({ data, onNext, onUpdate }) => {
  const [postcode, setPostcode] = useState(data.postcode || '');
  const [houseNumber, setHouseNumber] = useState(data.houseNumber || '');
  const [addressDetails, setAddressDetails] = useState<any>(null);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    if (postcode.length === 6 && houseNumber) {
      validateAddress();
    }
  }, [postcode, houseNumber]);

  const validateAddress = async () => {
    setIsValidating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const details = mockAddresses[postcode as keyof typeof mockAddresses];
    if (details) {
      setAddressDetails({
        ...details,
        fullAddress: `${details.street} ${houseNumber}, ${postcode} ${details.city}`
      });
    } else {
      setAddressDetails(null);
    }
    setIsValidating(false);
  };

  const handleContinue = () => {
    onUpdate({ postcode, houseNumber, addressDetails });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Your address details
        </h2>
        <p className="text-gray-600">
          We need to verify your Dutch address for security
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postcode
          </label>
          <Input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase().replace(/[^0-9A-Z]/g, '').slice(0, 6))}
            placeholder="1012AB"
            className="h-12 text-lg text-black"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            House number
          </label>
          <Input
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            placeholder="123"
            className="h-12 text-lg text-black"
          />
        </div>
      </div>

      {isValidating && (
        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
          <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full mr-3" />
          <span className="text-blue-600">Validating address...</span>
        </div>
      )}

      {addressDetails && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-green-600 mt-1 mr-3" />
            <div>
              <p className="font-medium text-green-900">Address found</p>
              <p className="text-green-700">{addressDetails.fullAddress}</p>
            </div>
          </div>
        </div>
      )}

      {postcode.length === 6 && houseNumber && !addressDetails && !isValidating && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">Address not found. Please check your postcode and house number.</p>
        </div>
      )}

      <Button
        onClick={handleContinue}
        disabled={!addressDetails}
        className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
      >
        Continue with verification
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Try postcodes: 1012AB, 1000AA, 3011AD, or 2511CV for demo
      </p>
    </div>
  );
};
