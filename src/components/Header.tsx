import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="h-8" />
        <nav className="space-x-4">
          <a href="#documentation" className="hover:text-gray-400">Documentation</a>
          <a href="#login" className="hover:text-gray-400">Login</a>
          <a href="#register" className="hover:text-gray-400">Registration</a>
        </nav>
      </div>
      <div className="space-x-4">
        <span>Maximum</span>
        <span>Accrual 5.12%</span>
        <span>Annual Rate 5.05%</span>
      </div>
    </header>
  );
};

export default Header;
