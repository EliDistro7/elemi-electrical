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
      color: 'text-primary-700',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      shadowColor: 'shadow-primary',
      features: ['MV & LV Distribution Lines', 'Transformer Installations', 'Power Grid Construction', 'Electrical Safety Systems']
    },
    {
      icon: Sun,
      title: t('solarTitle'),
      description: t('solarDesc'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      shadowColor: 'shadow-yellow',
      features: ['Solar Panel Installation', 'Grid-Tie Systems', 'Off-Grid Solutions', 'Energy Storage Systems']
    },
    {
      icon: Building,
      title: t('commercialTitle'),
      description: t('commercialDesc'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      shadowColor: 'shadow-green',
      features: ['Lighting Systems', 'Fire Alarm Systems', 'Television Systems', 'Power Distribution']
    },
    {
      icon: Wind,
      title: t('hvacTitle'),
      description: t('hvacDesc'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      shadowColor: 'shadow-primary',
      features: ['Air Conditioning', 'Refrigeration Systems', 'Ventilation Solutions', 'Climate Control']
    },
    {
      icon: Package,
      title: t('supplyTitle'),
      description: t('supplyDesc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      shadowColor: 'shadow-yellow',
      features: ['Electrical Equipment', 'Safety Materials', 'Testing Equipment', 'Installation Tools']
    },
  ];

  return (
    <section id="services" className="py-20 bg-background-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-md text-text-primary mb-6 text-balance">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed text-pretty">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:${service.shadowColor}-lg hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-white border-border-light hover:border-border-medium`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto ${service.bgColor} ${service.borderColor} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary font-display">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className={`w-full border-border-default text-text-secondary hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 font-medium group-hover:shadow-medium`}
                  >
                    {t('learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-primary-gradient rounded-3xl p-8 md:p-12 text-white text-center shadow-primary-lg relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-display-sm mb-6 text-balance font-display">
              Ready to Start Your Electrical Project?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed text-pretty">
              Get a professional consultation and detailed quote for your electrical needs.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold px-8 py-3 hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              {t('requestQuote')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}