import React, { useState } from 'react';
import { Check, ChevronRight, Shield, Zap, DollarSign, Lock, Play } from 'lucide-react';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('core-features');

  const features = [
    {
      id: 1,
      title: "Lower transaction fee",
      description: "A decentralized all-in-one platform accessible to consumers & brands with lower transaction fees & operational costs.",
      icon: DollarSign,
      color: "from-gray-000 to-white-600",
    },
    {
      id: 2,
      title: "Secure & flexibility",
      description: "Our site provides secure encryption and flexible, customizable options for a safe, personalized experience.",
      icon: Shield,
      color: "from-gray-000 to-white-600"
    },
    {
      id: 3,
       title: "C2C transactions",
          description: "C2C transactions involve direct exchanges of goods or services between consumers, usually via online platforms.",
      icon: Zap,
      color: "from-gray-000 to-white-600"
    }
  ];

  return (
    <div className=" bg-linear-to-br from-gray-900 via-black to-gray-900 text-white font-sans p-6 md:p-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center leading-tight">
            Most powerful &{' '}
            <span className="bg-linear-to-r from-gray-400 to-white/95 bg-clip-text text-transparent">
              optimize solutions
            </span>
          </h1>

          {/* Tab Selector */}
        <div className="flex items-center gap-x-4 justify-center md:justify-center">
              <Play className='text-blue-500 text-xl' />
              <h1 className="text-xl font-bold leading-tight">
                Why Choose Us
              </h1>
            </div>
                 <p className=" text-center font-bold text-4xl mb-6 mt-2">Core Features of Iconic</p>

          {/* Divider */}
          <div className="relative h-px bg-linear-to-r from-transparent via-gray-600 to-transparent">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>

                  {/* Sub-features */}
                  {feature.subFeatures && feature.subFeatures.map((subFeature, index) => (
                    <div key={index} className="mt-8 pt-8 border-t border-gray-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                        <h4 className="text-xl font-semibold">{subFeature.title}</h4>
                      </div>
                      <p className="text-gray-400 pl-8">{subFeature.description}</p>
                    </div>
                  ))}

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                </div>
              ))}
            </div>
        </div>

      </div>
    
  );
};

export default Solutions;