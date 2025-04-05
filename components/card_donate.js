import React, { useState } from 'react';

const DonateHere = () => {
  const [activeTab, setActiveTab] = useState('oneTime');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: ''
  });
  const [donationSuccess, setDonationSuccess] = useState(false);

  const presetAmounts = [100, 500, 1000, 2000, 5000];

  const handleDonorInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmountSelect = (amt) => {
    setAmount(amt);
    setCustomAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    console.log({
      donationType: activeTab,
      amount: amount || customAmount,
      donorInfo,
      paymentMethod,
      cardDetails
    });
    setDonationSuccess(true);
  };

  const resetForm = () => {
    setAmount('');
    setCustomAmount('');
    setDonorInfo({
      name: '',
      email: '',
      phone: '',
      anonymous: false
    });
    setPaymentMethod('creditCard');
    setCardDetails({
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: ''
    });
    setDonationSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Support Our Environmental Mission
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Your donation helps us protect the planet and promote sustainability
          </p>
        </div>

        {donationSuccess ? (
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-3 text-2xl font-medium text-gray-900">
              Thank You for Your Donation!
            </h2>
            <p className="mt-2 text-gray-600">
              Your contribution of ₹{amount || customAmount} has been received successfully.
              We've sent a receipt to your email.
            </p>
            <div className="mt-8">
              <button
                onClick={resetForm}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Donation Type Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('oneTime')}
                  className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'oneTime' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  One-Time Donation
                </button>
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'monthly' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  Monthly Donation
                </button>
              </nav>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              {/* Donation Amount */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Select {activeTab === 'monthly' ? 'Monthly' : ''} Donation Amount
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountSelect(amt)}
                      className={`py-3 px-4 border rounded-md text-center font-medium ${amount === amt ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    placeholder="Other amount"
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <span className="text-gray-500 sm:text-sm pr-3">.00</span>
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Your Information</h2>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={donorInfo.name}
                      onChange={handleDonorInfoChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={donorInfo.phone}
                      onChange={handleDonorInfoChange}
                      className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="anonymous"
                          name="anonymous"
                          type="checkbox"
                          checked={donorInfo.anonymous}
                          onChange={handleDonorInfoChange}
                          className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="anonymous" className="font-medium text-gray-700">
                          Make this an anonymous donation
                        </label>
                        <p className="text-gray-500">
                          Your name won't appear in our public donor lists
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="creditCard"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === 'creditCard'}
                      onChange={() => setPaymentMethod('creditCard')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label htmlFor="creditCard" className="ml-3 block text-sm font-medium text-gray-700">
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="upi"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label htmlFor="upi" className="ml-3 block text-sm font-medium text-gray-700">
                      UPI Payment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="netBanking"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === 'netBanking'}
                      onChange={() => setPaymentMethod('netBanking')}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label htmlFor="netBanking" className="ml-3 block text-sm font-medium text-gray-700">
                      Net Banking
                    </label>
                  </div>
                </div>

                {/* Card Details (shown only when credit card selected) */}
                {paymentMethod === 'creditCard' && (
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        required
                        value={cardDetails.cardNumber}
                        onChange={handleCardDetailsChange}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        id="expiry"
                        required
                        value={cardDetails.expiry}
                        onChange={handleCardDetailsChange}
                        placeholder="MM/YY"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        required
                        value={cardDetails.cvv}
                        onChange={handleCardDetailsChange}
                        placeholder="123"
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        id="nameOnCard"
                        required
                        value={cardDetails.nameOnCard}
                        onChange={handleCardDetailsChange}
                        className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                )}

                {/* UPI Instructions (shown only when UPI selected) */}
                {paymentMethod === 'upi' && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      After submitting this form, you'll be redirected to your UPI app to complete the payment.
                    </p>
                  </div>
                )}

                {/* Net Banking Instructions (shown only when net banking selected) */}
                {paymentMethod === 'netBanking' && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      After submitting this form, you'll be redirected to your bank's website to complete the payment.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={!amount && !customAmount}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${amount || customAmount ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                >
                  Donate ₹{amount || customAmount || '0'}
                </button>
              </div>

              {/* Security Info */}
              <div className="mt-6 flex items-center justify-center">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-sm text-gray-600">
                  Secure payment processing. Your information is protected.
                </span>
              </div>
            </form>
          </div>
        )}

        {/* Impact Section */}
        {!donationSuccess && (
          <div className="mt-12 bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">How Your Donation Helps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-green-800">Plant Trees</p>
                  <p className="mt-1 text-sm text-green-600">
                    ₹500 plants 5 trees in deforested areas
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-green-800">Clean Water</p>
                  <p className="mt-1 text-sm text-green-600">
                    ₹1000 provides clean water for a family
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-green-800">Renewable Energy</p>
                  <p className="mt-1 text-sm text-green-600">
                    ₹2000 installs solar panels in rural schools
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateHere;