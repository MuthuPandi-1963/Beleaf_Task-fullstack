// components/crypto-dashboard.tsx
import { Card, CardContent } from "@/components/ui/card";

const CryptoDashboard = () => {
  const cryptoData = [
    { name: "silCrypto", value: "silCrypto", type: "title" },
    { name: "$0.839", value: "0.839", type: "price" },
    { name: "SecretByte", value: "SecretByte", type: "name" },
    { name: "$1.315", value: "1.315", type: "price" },
    { name: "MysticHash", value: "MysticHash", type: "title" },
    { name: "$1.004", value: "1.004", type: "price" },
    { name: "PhantomLedger", value: "PhantomLedger", type: "name" },
    { name: "$0.562", value: "0.562", type: "price" },
    { name: "MystiChain", value: "MystiChain", type: "title" },
    { name: "$0.723", value: "0.723", type: "price" },
    { name: "CipherVault", value: "CipherVault", type: "name" },
    { name: "$0.912", value: "0.912", type: "price" },
    { name: "SecretByte", value: "SecretByte", type: "title" },
    { name: "$1.315", value: "1.315", type: "price" },
    { name: "MYSTERY", value: "MYSTERY", type: "mystery" },
  ];

  return (
    <div className=" bg-black ">
      <Card className="bg-transparent border-none">
        <CardContent className="p-6 overflow-hidden">
          {/* Marquee container */}
          <div className="relative w-full overflow-hidden">
            {/* Marquee content - doubled for seamless looping */}
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set */}
              {cryptoData.map((item, index) => (
                <div
                  key={`first-${index}`}
                  className="inline-flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/30 transition-colors mx-2"
                >
                  <span className="text-gray-300 font-medium mr-3">
                    {item.name}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      item.type === "price"
                        ? "text-green-400"
                        : item.type === "mystery"
                        ? "text-purple-400"
                        : item.type === "title"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {cryptoData.map((item, index) => (
                <div
                  key={`second-${index}`}
                  className="inline-flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:bg-gray-800/30 transition-colors mx-2"
                >
                  <span className="text-gray-300 font-medium mr-3">
                    {item.name}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      item.type === "price"
                        ? "text-green-400"
                        : item.type === "mystery"
                        ? "text-purple-400"
                        : item.type === "title"
                        ? "text-yellow-400"
                        : "text-blue-400"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Add marquee animation to Tailwind config or styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CryptoDashboard;