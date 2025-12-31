import React, { useState } from 'react';
import { Send, MessageSquare, Mail, User, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name ]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      message: ''
    };
    
    let isValid = true;
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-white font-sans p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 rounded-full border border-blue-500/20">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ask anything from{' '}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              anywhere!
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-linear-to-r from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Form */}
          <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </div>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="E.g., John Doe"
                    className={`w-full px-4 py-4 bg-gray-900/50 border ${
                      errors.fullName 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-gray-700/50 focus:border-blue-500'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Email address</span>
                  </div>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="info@example.com"
                    className={`w-full px-4 py-4 bg-gray-900/50 border ${
                      errors.email 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-gray-700/50 focus:border-blue-500'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </div>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know your questions, feedback, or inquiries..."
                    rows={6}
                    className={`w-full px-4 py-4 bg-gray-900/50 border ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500' 
                        : 'border-gray-700/50 focus:border-blue-500'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <div className="absolute right-3 top-4">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
                <div className="mt-2 text-right">
                  <span className={`text-sm ${
                    formData.message.length > 500 ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-linear-to-r from-gray-700 to-gray-800 cursor-not-allowed' 
                    : 'bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-xl'
                } shadow-lg flex items-center justify-center gap-3`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Info & Stats */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Support</h4>
                    <p className="text-gray-300">support@iconic.com</p>
                    <p className="text-sm text-gray-400 mt-1">Typically replies within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Live Chat</h4>
                    <p className="text-gray-300">Available 24/7</p>
                    <p className="text-sm text-gray-400 mt-1">Click the chat icon in the corner</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Community Forum</h4>
                    <p className="text-gray-300">forum.iconic.com</p>
                    <p className="text-sm text-gray-400 mt-1">Join our community of 100K+ users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Stats */}
            <div className="bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-6">Response Time</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Email Support</span>
                    <span className="font-bold text-green-400">2 hours</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div className="bg-linear-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Live Chat</span>
                    <span className="font-bold text-blue-400">5 minutes</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div className="bg-linear-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Forum Response</span>
                    <span className="font-bold text-purple-400">30 minutes</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div className="bg-linear-to-r from-purple-500 to-pink-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <h4 className="font-bold text-lg mb-4">Quick Answers</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 hover:bg-gray-800/30 rounded-xl transition-colors duration-200">
                  <div className="font-medium">How do I reset my password?</div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-800/30 rounded-xl transition-colors duration-200">
                  <div className="font-medium">Where can I download the app?</div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-800/30 rounded-xl transition-colors duration-200">
                  <div className="font-medium">What are the transaction fees?</div>
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-800/30 rounded-xl transition-colors duration-200">
                  <div className="font-medium">How secure is my data?</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 mb-8">
            <div className="px-4 py-2 bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50">
              <span className="text-sm">Privacy Guaranteed</span>
            </div>
            <div className="px-4 py-2 bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50">
              <span className="text-sm">No Spam Ever</span>
            </div>
            <div className="px-4 py-2 bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50">
              <span className="text-sm">Encrypted Connection</span>
            </div>
            <div className="px-4 py-2 bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700/50">
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
          
          <p className="text-gray-400">
            We respect your privacy. Your information will never be shared with third parties.
            All communications are encrypted end-to-end.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;