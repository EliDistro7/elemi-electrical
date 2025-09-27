'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Sun, Building, Wind, Package, ArrowRight } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      title: t('transmissionTitle'),
      description: t('transmissionDesc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: ['MV & LV Distribution Lines', 'Transformer Installations', 'Power Grid Construction', 'Electrical Safety Systems']
    },
    {
      icon: Sun,
      title: t('solarTitle'),
      description: t('solarDesc'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      features: ['Solar Panel Installation', 'Grid-Tie Systems', 'Off-Grid Solutions', 'Energy Storage Systems']
    },
    {
      icon: Building,
      title: t('commercialTitle'),
      description: t('commercialDesc'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: ['Lighting Systems', 'Fire Alarm Systems', 'Television Systems', 'Power Distribution']
    },
    {
      icon: Wind,
      title: t('hvacTitle'),
      description: t('hvacDesc'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Air Conditioning', 'Refrigeration Systems', 'Ventilation Solutions', 'Climate Control']
    },
    {
      icon: Package,
      title: t('supplyTitle'),
      description: t('supplyDesc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Electrical Equipment', 'Safety Materials', 'Testing Equipment', 'Installation Tools']
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto ${service.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {t('learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Electrical Project?</h3>
          <p className="text-xl mb-6 opacity-90">Get a professional consultation and detailed quote for your electrical needs.</p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            {t('requestQuote')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}