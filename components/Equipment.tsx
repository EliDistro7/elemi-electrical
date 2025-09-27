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
      color: 'text-blue-600',
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
      color: 'text-yellow-600',
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
      color: 'text-red-600',
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
      color: 'text-green-600',
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
      features: ['Administrative Offices', 'Technical Workshop', 'Equipment Storage', 'Training Facility']
    },
    {
      name: 'Branch Office',
      location: 'Singida - Misuna Area',
      size: 'Regional Operations Center',
      icon: Building,
      features: ['Local Operations', 'Equipment Depot', 'Client Services', 'Project Coordination']
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('equipment')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern equipment and facilities supporting professional electrical services
          </p>
        </div>

        {/* Fleet & Equipment */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fleet & Equipment Inventory</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-3`}>
                      <IconComponent className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                          {item}
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
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Facilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{facility.name}</h4>
                      <p className="text-gray-600 mb-2">{facility.location}</p>
                      <Badge variant="outline" className="mb-4">{facility.size}</Badge>
                      <ul className="space-y-1">
                        {facility.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                            {feature}
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
        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Equipment & Fleet Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">9</div>
              <div className="text-sm opacity-90">Fleet Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Safety Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">140m²</div>
              <div className="text-sm opacity-90">Facility Space</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-sm opacity-90">Office Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}