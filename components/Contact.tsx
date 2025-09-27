'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building2, MessageCircle } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('headOffice'),
      content: 'Plot No. 133, Block F, Office No. 41, Buzuruga Plaza Complex, Buzuruga, Mwanza',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      icon: Building2,
      title: t('branchOffice'),
      content: 'Plot No. 590 Block BB, Singida, Misuna Area',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: Phone,
      title: t('phone'),
      content: '+255 764 420 826 / +255 655 420 826 / +255 620 636 307',
      gradient: 'from-warning-500 to-warning-700'
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'baraka@elemielectrical.co.tz / elemicompany19@gmail.com',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display font-black text-text-primary mb-6 tracking-tight">
            {t('contactTitle')}
          </h2>
          <p className="text-xl font-medium text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-display-xs font-display font-bold text-text-primary mb-10 tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass rounded-4xl border border-border-light hover:shadow-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 group"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-bold text-lg text-text-primary mb-3 tracking-tight">
                            {info.title}
                          </h4>
                          <p className="text-text-secondary font-medium leading-relaxed">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="glass rounded-4xl border border-border-light shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl font-display font-bold text-text-primary tracking-tight">
                  <div className="w-12 h-12 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-primary mr-4">
                    <Clock className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border-light">
                    <span className="font-semibold text-text-secondary">Monday - Friday</span>
                    <span className="font-bold text-text-primary font-mono">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border-light">
                    <span className="font-semibold text-text-secondary">Saturday</span>
                    <span className="font-bold text-text-primary font-mono">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-text-secondary">Sunday</span>
                    <span className="font-bold text-warning-600">Emergency Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <Button 
                variant="success" 
                size="lg" 
                className="w-full font-display font-bold text-lg tracking-tight"
              >
                <MessageCircle className="mr-3 h-6 w-6" strokeWidth={2.5} />
                WhatsApp Us: +255 764 420 826
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-strong rounded-4xl border border-border-light shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-display font-bold text-text-primary tracking-tight mb-3">
                  Request a Quote
                </CardTitle>
                <p className="text-text-secondary font-medium leading-relaxed">
                  Tell us about your electrical project and we'll get back to you promptly.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Your full name" 
                        className="h-12 rounded-2xl border-2 border-border-default focus:border-primary-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="+255 XXX XXX XXX" 
                        className="h-12 rounded-2xl border-2 border-border-default focus:border-primary-500 font-medium font-mono"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="h-12 rounded-2xl border-2 border-border-default focus:border-primary-500 font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                      Company/Organization
                    </label>
                    <Input 
                      placeholder="Your company name" 
                      className="h-12 rounded-2xl border-2 border-border-default focus:border-primary-500 font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                      Service Required *
                    </label>
                    <select className="w-full h-12 px-4 border-2 border-border-default rounded-2xl focus:outline-none focus:ring-0 focus:border-primary-500 font-medium text-text-secondary bg-white transition-all duration-200">
                      <option>Select a service</option>
                      <option>Transmission & Distribution Lines</option>
                      <option>Solar Power Systems</option>
                      <option>Commercial & Residential Electrical</option>
                      <option>HVAC Services</option>
                      <option>General Supply</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wide">
                      Project Details *
                    </label>
                    <Textarea 
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={5}
                      className="rounded-2xl border-2 border-border-default focus:border-primary-500 font-medium resize-none"
                    />
                  </div>
                  
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full font-display font-bold text-lg tracking-tight mt-8"
                  >
                    Submit Quote Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="glass rounded-4xl border border-border-light shadow-soft">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-display font-bold text-text-primary tracking-tight">
                Our Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background-300 rounded-3xl p-8 h-64 flex items-center justify-center hover:bg-background-400 transition-all duration-300 group border-2 border-border-light hover:border-primary-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-gradient rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-primary group-hover:shadow-primary-lg transition-all duration-300 group-hover:scale-110">
                      <MapPin className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="font-display font-bold text-lg text-text-primary mb-2 tracking-tight">
                      Mwanza Head Office
                    </p>
                    <p className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                      Interactive Map
                    </p>
                  </div>
                </div>
                <div className="bg-background-300 rounded-3xl p-8 h-64 flex items-center justify-center hover:bg-background-400 transition-all duration-300 group border-2 border-border-light hover:border-green-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-gradient rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-green group-hover:shadow-green-lg transition-all duration-300 group-hover:scale-110">
                      <MapPin className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="font-display font-bold text-lg text-text-primary mb-2 tracking-tight">
                      Singida Branch Office
                    </p>
                    <p className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                      Interactive Map
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}