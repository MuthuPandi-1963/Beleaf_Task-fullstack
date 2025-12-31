"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { User, Mail, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        message: ""
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl shadow-2xl border-0 overflow-hidden bg-linear-to-r from-purple-600 to-blue-600  ">
        {/* Header Section */}
        <div className="bp-8 md:p-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">GET IN TOUCH</h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Ask anything from anywhere! We're here to help and answer any questions you might have.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <CardContent className="p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-purple-600" />
                  <Label htmlFor="fullName" className="text-base font-semibold">
                    Full Name
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="E.g. John"
                    required
                    className="pl-10 h-14 text-base border-gray-200 border-2 focus:border-purple-500"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-100" />
                </div>
                <p className="text-sm text-gray-100 italic">Enter your full name as per official records</p>
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-600" />
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email Address
                  </Label>
                </div>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="info@"
                    required
                    className="pl-10 h-14 text-base border-gray-200 border-2 focus:border-purple-500"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-100" />
                </div>
                <p className="text-sm text-gray-100 italic">We'll never share your email with anyone else</p>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple-600" />
                <Label htmlFor="message" className="text-base font-semibold">
                  Message
                </Label>
              </div>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let us know"
                  required
                  className="min-h-40 text-base border-gray-200 border-2 focus:border-purple-500 pt-4"
                />
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-100" />
              </div>
              <p className="text-sm text-gray-100 italic">Describe your question or request in detail</p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full md:w-auto min-w-50 mx-auto flex items-center justify-center gap-2 text-base font-semibold h-14 px-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    PROCESSING...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    SUBMIT
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}