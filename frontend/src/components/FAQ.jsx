import React, { useState } from 'react';
import {
  ChevronDown, ChevronUp,
  Globe,
  Shield, Lock, Key, Cpu, Users, Zap,
  Apple, Chrome,
  TabletSmartphone,
  MonitorSmartphone,
  Play
} from 'lucide-react';

const PlatformFAQ = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const platforms = [
    {
      name: "iOS",
      icon: Apple,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Android",
      icon: TabletSmartphone,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "PC",
      icon: MonitorSmartphone,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Web",
      icon: Chrome,
      color: "from-gray-800 to-gray-900"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How does blockchain ensure transaction security?",
      answer:
        "Once a transaction is recorded in a block and added to the blockchain, it cannot be altered without consensus from the network.",
      icon: Shield,
      color: "from-gray-800 to-gray-900"
    },
    {
      id: 2,
      question: "How do you store cryptocurrencies securely?",
      answer:
        "Use hardware wallets, multisig wallets, never share private keys, and enable 2FA.",
      icon: Lock,
      color: "from-gray-800 to-gray-900"
    },
    {
      id: 3,
      question: "What makes Iconic different from other platforms?",
      answer:
        "Multi-chain support, lower fees, enterprise-grade security, and cross-platform compatibility.",
      icon: Zap,
      color: "from-gray-800 to-gray-900"
    },
    {
      id: 4,
      question: "Is my personal data safe on Iconic?",
      answer:
        "End-to-end encryption, zero-knowledge proofs, and decentralized identity solutions.",
      icon: Key,
      color: "from-gray-800 to-gray-900"
    }
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div>
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <Play className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-blue-300">AVAILABLE PLATFORM</span>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              Iconic works across all devices
            </h1>

            <p className="text-sm text-gray-400 max-w-md">
              iOS, Android, PC and Web — use Iconic anywhere, anytime.
            </p>
          </div>

          {/* Platform Icons */}
          <div className="flex gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.color}
                  flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <platform.icon className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (FAQ) */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  activeFaq === index
                    ? "bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-blue-500/50"
                    : "bg-gray-800/30 border-gray-700/50"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  className="w-full p-6 flex justify-between items-center text-left"
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${faq.color} flex items-center justify-center`}
                    >
                      <faq.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{faq.question}</span>
                  </div>

                  {activeFaq === index ? (
                    <ChevronUp className="text-blue-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-700/50 text-gray-300 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformFAQ;
 