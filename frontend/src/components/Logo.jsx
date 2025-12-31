import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Logo = () => {
  const brands = [
    { name: 'Logo-psum', color: 'text-gray-0' },
    { name: 'Logoipsum', color: 'text-gray-0' },
    { name: "logoipsum'", color: 'text-gray-0' },
    { name: 'Logo[IPSUM]', color: 'text-gray-0' },
    { name: 'Logoipsum', color: 'text-gray-0' },
    { name: 'Logoipsum', color: 'text-gray-0' },
  ];

  return (
    <div className=" bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">

            <Badge variant="secondary" className=" text-blue-600 bg-transparent text-xl">
               Supported by Global Brands
            </Badge>
          </div>
          
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="rounded-2xl border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-black text-white"
            >
              <CardContent className="px-6 flex items-center justify-center h-full">
                <div className={`text-xl font-semibold ${brand.color}`}>
                  {brand.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;