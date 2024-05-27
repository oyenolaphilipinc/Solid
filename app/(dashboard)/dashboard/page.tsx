"use client"
import { useState } from 'react';

const Dashboard = () => {
  const [purchases] = useState([
    { id: 1, name: 'NFT Marketplace', date: '2024-05-27', price: '$50' },
    { id: 2, name: 'Blockchain Landing', date: '2024-05-20', price: '$50' },
    { id: 3, name: 'Decentalized Polling', date: '2024-05-15', price: '$50' },
  ]);

  const [featuredTemplates] = useState([
    { id: 1, name: 'NFT Marketplace', price: '$50' },
    { id: 2, name: 'Creative Portfolio', price: '$50' },
    { id: 3, name: 'eCommerce Pro', price: '$50' },
  ]);

  return (
    <main className="flex-1 p-4 bg-gray-50 mt-16 text-gray-900">
      <h2 className="text-2xl font-semibold mb-4">Welcome Back Philip</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium mb-2">Templates Bought</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium mb-2">Templates Worth</h3>
          <p className="text-2xl font-bold">$100</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium mb-2">Referrals</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-medium mb-2">Active Subscriptions</h3>
          <p className="text-2xl font-bold">75</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Recent Purchases</h3>
      <div className="bg-white p-4 rounded shadow mb-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Template</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="border-b">
                <td className="px-4 py-2">{purchase.name}</td>
                <td className="px-4 py-2">{purchase.date}</td>
                <td className="px-4 py-2">{purchase.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mb-4">Featured Templates</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredTemplates.map((template) => (
          <div key={template.id} className="bg-white p-4 rounded shadow">
            <h4 className="text-lg font-medium mb-2">{template.name}</h4>
            <p className="text-xl font-bold">{template.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
