'use client';

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Button } from '@/components/ui/button';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = () => {
    console.log('Submitted OTP:', otp);
    // Validate and handle next step
  };

  return (
    <div className="max-w-sm mx-auto mt-20 text-center space-y-6">
      <div>
        <h2 className="text-xl font-bold">Password Reset</h2>
        <p className="text-sm mt-2">
          We will send a code to <strong>ojoilyan0@gmail.com</strong>
        </p>
      </div>

      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        renderInput={(props) => (
          <input
            {...props}
            className="w-14 h-14 text-2xl text-center border-2 rounded-md border-muted focus:border-green-700 focus:outline-none"
          />
        )}
        shouldAutoFocus
        containerStyle="justify-center gap-3"
      />

      <Button
        onClick={handleSubmit}
        className="w-full h-12 bg-[#3F7C5F] hover:bg-[#36624D]"
        disabled={otp.length < 4}
      >
        Continue
      </Button>

      <div className="text-sm">
        Didn’t receive the code?{' '}
        <span className="text-green-700 font-medium cursor-pointer">
          Click to resend
        </span>
      </div>

      <div className="text-sm text-gray-600 cursor-pointer mt-2">
        ← Back to log in
      </div>
    </div>
  );
};

export default OtpScreen;
