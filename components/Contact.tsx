'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Building2, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      contactTitle: 'Contact Us',
      contactSubtitle: 'Get in touch with our team for professional electrical solutions and project consultations',
      getInTouch: 'Get in Touch',
      headOffice: 'Head Office - Mwanza',
      branchOffice: 'Branch Office - Singida',
      phone: 'Phone Numbers',
      email: 'Email Addresses',
      businessHours: 'Business Hours',
      monday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      emergencyOnly: 'Emergency Only',
      whatsappUs: 'WhatsApp Us',
      requestQuote: 'Request a Quote',
      quoteDescription: 'Tell us about your electrical project and we\'ll get back to you promptly.',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      company: 'Company/Organization',
      serviceRequired: 'Service Required',
      projectDetails: 'Project Details',
      submitQuote: 'Submit Quote Request',
      selectService: 'Select a service',
      transmission: 'Transmission & Distribution Lines',
      solar: 'Solar Power Systems',
      commercial: 'Commercial & Residential Electrical',
      hvac: 'HVAC Services',
      supply: 'General Supply',
      other: 'Other',
      locations: 'Our Locations',
      mwanzaOffice: 'Mwanza Head Office',
      singidaOffice: 'Singida Branch Office',
    },
    sw: {
      contactTitle: 'Wasiliana Nasi',
      contactSubtitle: 'Wasiliana na timu yetu kwa suluhisho za kitaalamu za umeme na ushauri wa miradi',
      getInTouch: 'Wasiliana',
      headOffice: 'Ofisi Kuu - Mwanza',
      branchOffice: 'Ofisi ya Tawi - Singida',
      phone: 'Nambari za Simu',
      email: 'Anwani za Barua Pepe',
      businessHours: 'Saa za Biashara',
      monday: 'Jumatatu - Ijumaa',
      saturday: 'Jumamosi',
      sunday: 'Jumapili',
      emergencyOnly: 'Dharura Tu',
      whatsappUs: 'WhatsApp',
      requestQuote: 'Omba Nukuu',
      quoteDescription: 'Tuambie kuhusu mradi wako wa umeme na tutakujibu haraka.',
      fullName: 'Jina Kamili',
      phoneNumber: 'Nambari ya Simu',
      emailAddress: 'Anwani ya Barua Pepe',
      company: 'Kampuni/Shirika',
      serviceRequired: 'Huduma Inayohitajika',
      projectDetails: 'Maelezo ya Mradi',
      submitQuote: 'Wasilisha Ombi',
      selectService: 'Chagua huduma',
      transmission: 'Mistari ya Usambazaji',
      solar: 'Mifumo ya Nishati ya Jua',
      commercial: 'Umeme wa Kibiashara na Makazi',
      hvac: 'Huduma za HVAC',
      supply: 'Usambazaji wa Jumla',
      other: 'Nyingine',
      locations: 'Maeneo Yetu',
      mwanzaOffice: 'Ofisi Kuu Mwanza',
      singidaOffice: 'Ofisi ya Tawi Singida',
    }
  };

  const texts = translations[language] || translations.en;

  const contactInfo = [
    {
      icon: MapPin,
      title: texts.headOffice,
      content: 'Plot No. 133, Block F, Office No. 41, Buzuruga Plaza Complex, Buzuruga, Mwanza',
    },
    {
      icon: Building2,
      title: texts.branchOffice,
      content: 'Plot No. 590 Block BB, Singida, Misuna Area',
    },
    {
      icon: Phone,
      title: texts.phone,
      content: '+255 764 420 826, +255 655 420 826, +255 620 636 307',
    },
    {
      icon: Mail,
      title: texts.email,
      content: 'baraka@elemielectrical.co.tz / elemicompany19@gmail.com',
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-4 sm:mb-6 md:mb-8 tracking-tighter uppercase">
            {texts.contactTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            {texts.contactSubtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 sm:mb-8 md:mb-12 tracking-tight uppercase border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
              {texts.getInTouch}
            </h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 md:mb-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-white border-2 sm:border-4 border-black hover:bg-black group transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-start space-x-3 sm:space-x-4 md:space-x-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black group-hover:bg-white flex items-center justify-center transition-all duration-300 shrink-0">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-black text-sm sm:text-base md:text-lg text-black group-hover:text-white mb-2 sm:mb-3 tracking-tight uppercase transition-colors duration-300">
                            {info.title}
                          </h4>
                          <p className="text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-white font-semibold leading-relaxed transition-colors duration-300 break-words">
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
            <Card className="bg-white border-2 sm:border-4 border-black mb-6 sm:mb-8">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center text-lg sm:text-xl md:text-2xl font-black text-black tracking-tight uppercase">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="break-words">{texts.businessHours}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-3 sm:py-4 border-b-2 border-black gap-2">
                    <span className="font-bold text-xs sm:text-sm md:text-base text-gray-700 uppercase tracking-wide">{texts.monday}</span>
                    <span className="font-black text-xs sm:text-sm md:text-base text-black tracking-tight whitespace-nowrap">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 sm:py-4 border-b-2 border-black gap-2">
                    <span className="font-bold text-xs sm:text-sm md:text-base text-gray-700 uppercase tracking-wide">{texts.saturday}</span>
                    <span className="font-black text-xs sm:text-sm md:text-base text-black tracking-tight whitespace-nowrap">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 sm:py-4 gap-2">
                    <span className="font-bold text-xs sm:text-sm md:text-base text-gray-700 uppercase tracking-wide">{texts.sunday}</span>
                    <span className="font-black text-xs sm:text-sm md:text-base text-black uppercase tracking-widest">{texts.emergencyOnly}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Button 
              size="lg" 
              className="w-full bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-black font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-widest uppercase transition-all duration-300 py-4 sm:py-6 md:py-8 h-auto"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" strokeWidth={3} />
              <span className="break-all">{texts.whatsappUs}: +255 764 420 826</span>
            </Button>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white border-2 sm:border-4 border-black">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight mb-3 sm:mb-4 uppercase">
                  {texts.requestQuote}
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-700 font-semibold leading-relaxed">
                  {texts.quoteDescription}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                        {texts.fullName} *
                      </label>
                      <Input 
                        placeholder="Your full name" 
                        className="h-12 sm:h-14 border-2 sm:border-4 border-black focus:border-gray-600 font-semibold text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                        {texts.phoneNumber} *
                      </label>
                      <Input 
                        placeholder="+255 XXX XXX XXX" 
                        className="h-12 sm:h-14 border-2 sm:border-4 border-black focus:border-gray-600 font-semibold text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                      {texts.emailAddress} *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="h-12 sm:h-14 border-2 sm:border-4 border-black focus:border-gray-600 font-semibold text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                      {texts.company}
                    </label>
                    <Input 
                      placeholder="Your company name" 
                      className="h-12 sm:h-14 border-2 sm:border-4 border-black focus:border-gray-600 font-semibold text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                      {texts.serviceRequired} *
                    </label>
                    <select className="w-full h-12 sm:h-14 px-3 sm:px-4 border-2 sm:border-4 border-black focus:outline-none focus:border-gray-600 font-bold text-gray-700 bg-white transition-all duration-200 uppercase text-xs sm:text-sm md:text-base">
                      <option>{texts.selectService}</option>
                      <option>{texts.transmission}</option>
                      <option>{texts.solar}</option>
                      <option>{texts.commercial}</option>
                      <option>{texts.hvac}</option>
                      <option>{texts.supply}</option>
                      <option>{texts.other}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-black text-black mb-2 sm:mb-3 uppercase tracking-wider">
                      {texts.projectDetails} *
                    </label>
                    <Textarea 
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                      rows={5}
                      className="border-2 sm:border-4 border-black focus:border-gray-600 font-semibold resize-none text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-black text-white hover:bg-white hover:text-black border-2 sm:border-4 border-black font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-widest uppercase transition-all duration-300 py-4 sm:py-6 md:py-8 mt-4 sm:mt-6 md:mt-8 hover:scale-105 h-auto"
                  >
                    <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" strokeWidth={3} />
                    <span className="break-words">{texts.submitQuote}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 sm:mb-8 md:mb-12 text-center tracking-tight uppercase border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4 inline-block w-full">
            {texts.locations}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Mwanza Office Map */}
            <div className="bg-white border-2 sm:border-4 border-black overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="bg-black text-white p-4 sm:p-6 border-b-2 sm:border-b-4 border-black">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-3 sm:mr-4 shrink-0" strokeWidth={2.5} />
                  <div className="min-w-0">
                    <p className="font-black text-base sm:text-lg md:text-xl tracking-tight uppercase break-words">
                      {texts.mwanzaOffice}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wide">
                      Buzuruga Plaza Complex
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.3856473952!2d32.8997!3d-2.5164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzAnNTkuMCJTIDMywrA1Myc1OC45IkU!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mwanza Office Location"
                ></iframe>
              </div>
            </div>

            {/* Singida Office Map */}
            <div className="bg-white border-2 sm:border-4 border-black overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="bg-black text-white p-4 sm:p-6 border-b-2 sm:border-b-4 border-black">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mr-3 sm:mr-4 shrink-0" strokeWidth={2.5} />
                  <div className="min-w-0">
                    <p className="font-black text-base sm:text-lg md:text-xl tracking-tight uppercase break-words">
                      {texts.singidaOffice}
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wide">
                      Misuna Area
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-64 sm:h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.8234567890!2d34.7456!3d-4.8147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNTMuMCJTIDM0wrA0NCc0NC4yIkU!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Singida Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}