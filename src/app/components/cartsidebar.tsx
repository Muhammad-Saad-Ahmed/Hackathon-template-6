import React from 'react';

const CartSidebar = () => {
  return (
    <div className="w-80 bg-white shadow-lg fixed right-0 top-0 h-full p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center mb-4">
          <img
            src="/images/asgaard-sofa.jpg"
            alt="Asgaard sofa"
            className="w-16 h-16 rounded-md"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-semibold text-sm">Asgaard Sofa</h3>
            <p className="text-sm">1 x Rs. 250,000.00</p>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            &times;
          </button>
        </div>

        <div className="flex items-center mb-4">
          <img
            src="/images/casaliving-wood.jpg"
            alt="Casaliving Wood"
            className="w-16 h-16 rounded-md"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-semibold text-sm">Casaliving Wood</h3>
            <p className="text-sm">1 x Rs. 270,000.00</p>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            &times;
          </button>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">Subtotal</span>
          <span className="text-lg font-semibold text-yellow-600">Rs. 520,000.00</span>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">
            Cart
          </button>
          <button className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
            Checkout
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
