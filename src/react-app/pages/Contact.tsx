import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-grey to-emerald-growth/3 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-6xl mb-8">📞</div>
          <h1 className="text-4xl lg:text-5xl font-bold font-sora mb-6 text-charcoal-gray">
            Contact <span className="text-emerald-growth">Us</span>
          </h1>
          <p className="text-xl text-charcoal-gray/70 mb-8 font-noto-serif-kr">
            연락처
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="korean-shadow">
            <CardContent className="p-8">
              <h3 className="font-sora font-semibold text-xl mb-6 text-charcoal-gray">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-blue focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-blue focus:border-transparent"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-blue focus:border-transparent"
                />
                <textarea 
                  rows={4} 
                  placeholder="Message" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-hope-blue focus:border-transparent"
                />
                <Button variant="hope" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="korean-shadow">
              <CardContent className="p-6">
                <h3 className="font-sora font-semibold text-lg mb-4 text-charcoal-gray">
                  Seoul Office
                </h3>
                <div className="space-y-2 text-charcoal-gray/70">
                  <p className="font-noto-serif-kr text-emerald-growth">서울 본부</p>
                  <p>Seoul, South Korea</p>
                  <p>info@hephzisoftfoundation.org</p>
                  <p>+82 (0)2 XXXX XXXX</p>
                </div>
              </CardContent>
            </Card>

            <Card className="korean-shadow">
              <CardContent className="p-6">
                <h3 className="font-sora font-semibold text-lg mb-4 text-charcoal-gray">
                  Office Hours
                </h3>
                <div className="space-y-2 text-charcoal-gray/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM KST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM KST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="korean-shadow">
              <CardContent className="p-6">
                <h3 className="font-sora font-semibold text-lg mb-4 text-charcoal-gray">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-hope-blue">📘</span>
                  </div>
                  <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-hope-blue">📷</span>
                  </div>
                  <div className="w-10 h-10 bg-hope-blue/20 hover:bg-hope-blue/30 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                    <span className="text-hope-blue">🐦</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
