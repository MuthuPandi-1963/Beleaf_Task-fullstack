import React from 'react';

const SalesProgress = () => {
  return (
    <div className=" bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full space-y-8">


        {/* Sales Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PRE-SALES Card */}
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500 relative overflow-hidden">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">PRE-SALES</h3>
              <div className="text-5xl font-bold text-blue-400 mt-2">25%</div>
              <div className="text-lg text-gray-400 mt-1">Bonus</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">25%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-1/4"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Soft Cap</span>
                  <span className="text-white">2,000,000 USD</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Hard Cap</span>
                  <span className="text-white">10,000,000 USD</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200">
              Buy Token Now
            </button>
          </div>

          {/* EARLY-BONUS Card */}
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-purple-500">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">EARLY-BONUS</h3>
              <div className="text-5xl font-bold text-purple-400 mt-2">15%</div>
              <div className="text-lg text-gray-400 mt-1">Bonus</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">15%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[15%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Soft Cap</span>
                  <span className="text-white">5,000,000 USD</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Hard Cap</span>
                  <span className="text-white">20,000,000 USD</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200">
              Buy Token Now
            </button>
          </div>

          {/* ICO SALES-WEEK 1 Card */}
          <div className="bg-gray-800 rounded-xl p-6 border-2 border-green-500">
            <div className="mb-6">
              <div className="text-2xl font-bold text-white">
                ICO SALES-WEEK 1
              </div>
              <div className="text-xl font-semibold text-green-400 mt-1">
                EARLY-BONUS
              </div>
              <div className="text-5xl font-bold text-green-400 mt-2">1%</div>
              <div className="text-lg text-gray-400 mt-1">Bonus</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">1%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[1%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Soft Cap</span>
                  <span className="text-white">10,000,000 USD</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Hard Cap</span>
                  <span className="text-white">50,000,000 USD</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200">
              Buy Token Now
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-gray-800 rounded-xl p-6 mt-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>PRE-SALES</span>
            <span>EARLY-BONUS</span>
            <span>ICO SALES-WEEK 1</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full flex">
              <div className="bg-blue-500 w-1/4"></div>
              <div className="bg-purple-500 w-[15%]"></div>
              <div className="bg-green-500 w-[1%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesProgress;