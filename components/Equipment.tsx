'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Wrench, Shield, Building, Zap, HardHat } from 'lucide-react';

export function Equipment() {
  const { t } = useLanguage();

  const fleetData = [
    {
      category: 'Specialized Vehicles',
      icon: Truck,
      gradient: 'from-primary-500 to-primary-700',
      items: [
        '2 Crane Trucks (15-ton capacity)',
        '3 Pickup Trucks (4WD)',
        '2 Utility Vans',
        '2 Equipment Transport Vehicles'
      ]
    },
    {
      category: 'Electrical Tools',
      icon: Zap,
      gradient: 'from-yellow-400 to-warning-600',
      items: [
        'Cable Pulling Equipment',
        'Power Quality Analyzers',
        'Insulation Testers',
        'Digital Multimeters',
        'Oscilloscopes'
      ]
    },
    {
      category: 'Safety Equipment',
      icon: Shield,
      gradient: 'from-error-500 to-error-700',
      items: [
        '100+ Safety Helmets',
        'Personal Protective Equipment',
        'Safety Harnesses',
        'Insulated Tools',
        'Emergency Response Kits'
      ]
    },
    {
      category: 'Construction Tools',
      icon: Wrench,
      gradient: 'from-green-500 to-green-700',
      items: [
        'Hydraulic Cable Cutters',
        'Pole Installation Equipment',
        'Concrete Mixers',
        'Welding Equipment',
        'Power Drills & Tools'
      ]
    }
  ];

  const facilities = [
    {
      name: 'Head Office & Workshop',
      location: 'Mwanza - Buzuruga Plaza Complex',
      size: '140m² (60m² Office + 80m² Workshop)',
      icon: Building,
      gradient: 'from-primary-500 to-primary-700',
      features: ['Administrative Offices', 'Technical Workshop', 'Equipment Storage', 'Training Facility']
    },
    {
      name: 'Branch Office',
      location: 'Singida - Misuna Area',
      size: 'Regional Operations Center',
      icon: Building,
      gradient: 'from-green-500 to-green-700',
      features: ['Local Operations', 'Equipment Depot', 'Client Services', 'Project Coordination']
    }
  ];

  return (
    <section id="equipment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display font-black text-text-primary mb-6 tracking-tight">
            {t('equipment')}
          </h2>
          <p className="text-xl font-medium text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Modern equipment and facilities supporting professional electrical services
          </p>
        </div>

        {/* Fleet & Equipment */}
        <div className="mb-20">
          <h3 className="text-display-xs font-display font-bold text-text-primary mb-12 text-center tracking-tight">
            Fleet & Equipment Inventory
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="glass rounded-4xl border border-border-light hover:shadow-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 group"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${category.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-medium group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-10 w-10 text-white" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl font-display font-bold tracking-tight text-text-primary">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start font-medium text-text-secondary">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mt-2.5 mr-4 shrink-0`}></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-20">
          <h3 className="text-display-xs font-display font-bold text-text-primary mb-12 text-center tracking-tight">
            Facilities
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {facilities.map((facility, index) => (
              <Card 
                key={index} 
                className="glass-strong rounded-4xl border border-border-light hover:shadow-primary transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${facility.gradient} rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 shrink-0`}>
                      <Building className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-2xl text-text-primary mb-3 tracking-tight">
                        {facility.name}
                      </h4>
                      <p className="text-text-secondary font-medium mb-3 leading-relaxed">
                        {facility.location}
                      </p>
                      <div className="mb-6">
                        <Badge 
                          variant="outline" 
                          className="bg-background-300 text-primary-700 border-primary-300 font-semibold px-4 py-2 rounded-xl"
                        >
                          {facility.size}
                        </Badge>
                      </div>
                      <ul className="space-y-3">
                        {facility.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center font-medium text-text-secondary">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${facility.gradient} mr-4`}></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Stats */}
        <div className="bg-primary-gradient rounded-4xl p-10 text-white shadow-primary-lg hover:shadow-primary transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 opacity-90"></div>
          <div className="relative z-10">
            <h3 className="text-display-xs font-display font-bold text-center mb-12 tracking-tight">
              Equipment & Fleet Statistics
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-5xl font-display font-black mb-3 tracking-tight">
                  9
                </div>
                <div className="text-base font-semibold opacity-90 uppercase tracking-wide">
                  Fleet Vehicles
                </div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-5xl font-display font-black mb-3 tracking-tight">
                  100+
                </div>
                <div className="text-base font-semibold opacity-90 uppercase tracking-wide">
                  Safety Items
                </div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl font-display font-black mb-3 tracking-tight font-mono">
                  140m²
                </div>
                <div className="text-base font-semibold opacity-90 uppercase tracking-wide">
                  Facility Space
                </div>
              </div>
              <div className="text-center bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-5xl font-display font-black mb-3 tracking-tight">
                  2
                </div>
                <div className="text-base font-semibold opacity-90 uppercase tracking-wide">
                  Office Locations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}