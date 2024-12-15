import React, { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa';
import DefaultLayout from '../Layout/DefaultLayout';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: ''
  });

  const [isShippingComplete, setIsShippingComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    // Validate shipping information
    if (Object.values(formData).slice(0, 6).every(field => field.trim() !== '')) {
      setIsShippingComplete(true);
      console.log('Shipping information submitted:', formData);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Payment information submitted:', formData);
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 text-[#224F34]">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Checkout</h1>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* User Information Section */}
          <form onSubmit={handleShippingSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-[#224F34] mb-4">Shipping Information</h2>
            {['name', 'email', 'address', 'city', 'state', 'zip'].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block mb-1 font-semibold capitalize">{field.replace(/^\w/, (c) => c.toUpperCase())}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  onChange={handleChange}
                  required
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())} // Placeholder for each field
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34] transition duration-200 ease-in-out"
                />
              </div>
            ))}

            {/* Submit Button for Shipping */}
            <button type='submit' 
              className='w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out'>
              Continue to Payment 
            </button> 
          </form>

          {/* Payment Options Section */}
          <div className="bg-[#224F34] text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
            <form onSubmit={handlePaymentSubmit}>
              {['cardNumber', 'cardName'].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block mb-1 font-semibold">{field.replace(/^\w/, (c) => c.toUpperCase()).replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    name={field}
                    onChange={handleChange}
                    required
                    placeholder={field.replace(/^\w/, (c) => c.toUpperCase()).replace(/([A-Z])/g, ' $1')} // Placeholder for each field
                    disabled={!isShippingComplete} // Disable if shipping is not complete
                    className={`border border-gray-300 rounded-lg text-black p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34] transition duration-200 ease-in-out ${!isShippingComplete ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                  />
                </div>
              ))}
              <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                  <label className="block mb-1 font-semibold">Expiration Date (MM/YY)</label>
                  <input
                    type="text"
                    name="expirationDate"
                    onChange={handleChange}
                    required
                    placeholder="MM/YY" // Placeholder for expiration date
                    disabled={!isShippingComplete} // Disable if shipping is not complete
                    className={`border border-gray-300 rounded-lg text-black p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34] transition duration-200 ease-in-out ${!isShippingComplete ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-semibold">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    onChange={handleChange}
                    required
                    placeholder="123" // Placeholder for CVV
                    disabled={!isShippingComplete} // Disable if shipping is not complete
                    className={`border border-gray-300 rounded-lg text-black p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34] transition duration-200 ease-in-out ${!isShippingComplete ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                  />
                </div>
              </div>

              {/* Payment Method Buttons */}
              <div className="flex space-x-6 mb-6">
                <button type='button' className={`flex items-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration=200 ease-in-out ${!isShippingComplete ? 'cursor-not-allowed opacity-50' : ''}`}>
                  <FaCreditCard size={20} className='mr-2' /> Credit Card
                </button>
                <button type='button' className={`flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration=200 ease-in-out ${!isShippingComplete ? 'cursor-not-allowed opacity-50' : ''}`}>
                  <FaPaypal size={20} className='mr=2' /> PayPal
                </button>
                <button type='button' className={`flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration=200 ease-in-out ${!isShippingComplete ? 'cursor-not-allowed opacity-50' : ''}`}>
                  <FaApplePay size={20} className='mr=2' /> Apple Pay 
                </button> 
              </div>

              {/* Submit Button for Payment */}
              <button type='submit' 
                disabled={!isShippingComplete} // Disable if shipping is not complete
                className={`w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration=200 ease-in-out ${!isShippingComplete ? 'cursor-not-allowed opacity-50' : ''}`}>
                Complete Purchase 
              </button> 
            </form>
            {/* Additional Payment Instructions or Information */}
            <p className="mt-4 text-sm">Please select your preferred payment method above.</p>
          </div>
        </div>
      </div> 
    </DefaultLayout>
  );
};

export default Checkout;