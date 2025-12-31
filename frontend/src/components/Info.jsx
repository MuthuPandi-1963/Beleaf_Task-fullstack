import React, { useState, useEffect } from 'react';

const Info = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 15,
    minutes: 57,
    seconds: 30
  });

  // Sales information data
  const salesInfo = [
    { label: "PUBLIC SALES START IN", value: "JANUARY 01, 2025" },
    { label: "SALE ENDS", value: "DECEMBER 30, 2026" },
    { label: "TOKEN SUPPLY", value: "499,000,000" },
    { label: "T. ALLOCATED FOR ICO", value: "299,000,000" },
    { label: "HARD CAP", value: "JANUARY 01, 2025" },
    { label: "SOFT CAP", value: "JANUARY 01, 2025" },
    { label: "TOKEN VALUE", value: "JANUARY 01, 2025" },
    { label: "ACCEPTED", value: "ETH, BTC, SHIV, CRT" },
  ];

  // Progress calculation
  const totalCoin = 3499000;
  const raisedCoin = 5723;
  const softCap = 57000;
  const hardCap = 2500000;
  const progressPercentage = (raisedCoin / totalCoin) * 100;

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };
        
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              newTime.hours = 23;
              
              if (newTime.days > 0) {
                newTime.days -= 1;
              }
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black to-black text-white font-sans p-6 md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Token Sales Progress */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h2 className="text-xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Token sales progress
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">TOTAL COIN</p>
                <p className="text-xl font-bold">{formatNumber(totalCoin)}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">RAISED</p>
                <p className="text-xl font-bold">{formatNumber(raisedCoin)} COIN</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">SOFT CAP</p>
                <p className="text-xl font-bold">{formatNumber(softCap)}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">HARD CAP</p>
                <p className="text-xl font-bold">{formatNumber(hardCap)}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Progress</span>
                <span className="text-sm font-medium">{progressPercentage.toFixed(2)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-linear-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>0</span>
                <span>{formatNumber(totalCoin)}</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6">Token sale ends in:</h3>
              <div className="flex justify-between max-w-md">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-gray-900 rounded-xl p-4 w-20 h-20 flex items-center justify-center mb-2">
                      <span className="text-xl font-bold">
                        {value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-gray-400 uppercase text-sm">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Register Button */}
            <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group">
              <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center group-hover:bg-white">
                <div className="w-3 h-3 bg-white rounded-sm group-hover:bg-blue-600"></div>
              </div>
              <span className="text-lg">REGISTER & BUY TOKEN</span>
            </button>
          </div>

          {/* Right Column: Sales Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <h2 className="text-xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sales information
            </h2>

            <div className="space-y-2">
              {salesInfo.map((item, index) => (
                <div key={index} className="border-b border-gray-700/50 pb-2 last:border-0 last:pb-0">
                  <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                  <p className="text-md font-semibold break-word">
                    {item.label === "ACCEPTED" ? (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.value.split(', ').map((currency, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-900/70 rounded-lg text-sm font-medium border border-gray-700/50"
                          >
                            {currency}
                          </span>
                        ))}
                      </div>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            {/* <div className="mt-10 p-6 bg-linear-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50">
              <h3 className="font-bold text-lg mb-3">Investment Details</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Minimum investment: 0.1 ETH</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Early bird bonus: +15% tokens</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>KYC verification required</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;