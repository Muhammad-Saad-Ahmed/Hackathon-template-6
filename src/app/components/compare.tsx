import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Dimensions</th>
              <th className="border border-gray-300 px-4 py-2">Product 1</th>
              <th className="border border-gray-300 px-4 py-2">Product 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Width</td>
              <td className="border border-gray-300 px-4 py-2">265.32 cm</td>
              <td className="border border-gray-300 px-4 py-2">265.32 cm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Height</td>
              <td className="border border-gray-300 px-4 py-2">76 cm</td>
              <td className="border border-gray-300 px-4 py-2">76 cm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Depth</td>
              <td className="border border-gray-300 px-4 py-2">167.76 cm</td>
              <td className="border border-gray-300 px-4 py-2">167.76 cm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Weight</td>
              <td className="border border-gray-300 px-4 py-2">45 KG</td>
              <td className="border border-gray-300 px-4 py-2">65 KG</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Seat Height</td>
              <td className="border border-gray-300 px-4 py-2">41.52 cm</td>
              <td className="border border-gray-300 px-4 py-2">41.52 cm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Leg Height</td>
              <td className="border border-gray-300 px-4 py-2">5.46 cm</td>
              <td className="border border-gray-300 px-4 py-2">5.46 cm</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Warranty</h2>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Warranty Summary</th>
                <th className="border border-gray-300 px-4 py-2">Product 1</th>
                <th className="border border-gray-300 px-4 py-2">Product 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Warranty Period</td>
                <td className="border border-gray-300 px-4 py-2">1 Year</td>
                <td className="border border-gray-300 px-4 py-2">1.2 Year</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Service Type</td>
                <td className="border border-gray-300 px-4 py-2">Email: operations@trevfurniture.com</td>
                <td className="border border-gray-300 px-4 py-2">Email: support@xyz.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Covered in Warranty</td>
                <td className="border border-gray-300 px-4 py-2">Manufacturing Defects</td>
                <td className="border border-gray-300 px-4 py-2">Manufacturing Defects</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Not Covered</td>
                <td className="border border-gray-300 px-4 py-2">Natural Wear & Tear</td>
                <td className="border border-gray-300 px-4 py-2">Natural Wear & Tear</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Domestic Warranty</td>
                <td className="border border-gray-300 px-4 py-2">1 Year</td>
                <td className="border border-gray-300 px-4 py-2">3 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
