'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function Equipment() {
  const { language } = useLanguage();

  const translations = {
    en: {
      equipmentTitle: 'Equipment & Facilities',
      equipmentSubtitle: 'Modern equipment and facilities supporting professional electrical services',
      fleetTitle: 'Fleet & Equipment Inventory',
      facilitiesTitle: 'Our Facilities',
      statsTitle: 'Equipment & Fleet Statistics',
      fleetVehicles: 'Fleet Vehicles',
      safetyItems: 'Safety Items',
      facilitySpace: 'Facility Space',
      officeLocations: 'Office Locations',
      viewDetails: 'View Details',
    },
    sw: {
      equipmentTitle: 'Vifaa na Vituo',
      equipmentSubtitle: 'Vifaa vya kisasa na vituo vinavyosaidia huduma za kitaalamu za umeme',
      fleetTitle: 'Orodha ya Magari na Vifaa',
      facilitiesTitle: 'Vituo Vyetu',
      statsTitle: 'Takwimu za Vifaa na Magari',
      fleetVehicles: 'Magari ya Usafiri',
      safetyItems: 'Vifaa vya Usalama',
      facilitySpace: 'Nafasi ya Kituo',
      officeLocations: 'Maeneo ya Ofisi',
      viewDetails: 'Tazama Maelezo',
    }
  };

  const texts = translations[language] || translations.en;

  const fleetData = [
    {
      category: 'Specialized Vehicles',
      image: '/winch1.jpeg',
      items: [
        '2 Crane Trucks (15-ton capacity)',
        '3 Pickup Trucks (4WD)',
        '2 Utility Vans',
        '2 Equipment Transport Vehicles'
      ]
    },
    {
      category: 'Electrical Tools',
      image: '/tool1.jpeg',
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
      image: '/pose.png',
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
      image: '/tool1.jpeg',
      items: [
        'Hydraulic Cable Cutters',
        'Pole Installation Equipment',
      
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
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      features: ['Administrative Offices', 'Technical Workshop', 'Equipment Storage', 'Training Facility']
    },
    {
      name: 'Branch Office',
      location: 'Singida - Misuna Area',
      size: 'Regional Operations Center',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      features: ['Local Operations', 'Equipment Depot', 'Client Services', 'Project Coordination']
    }
  ];

  return (
    <section id="equipment" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-0">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 tracking-tighter uppercase">
            {texts.equipmentTitle}
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {texts.equipmentSubtitle}
          </p>
        </div>

        {/* Fleet & Equipment */}
        <div className="mb-32">
          <h3 className="text-4xl md:text-5xl font-black text-black mb-16 text-center tracking-tight uppercase border-b-4 border-black pb-4 inline-block w-full">
            {texts.fleetTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {fleetData.map((category, index) => (
              <Card 
                key={index} 
                className="group bg-white border-4 border-black hover:bg-black transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl font-black tracking-tight text-black group-hover:text-white uppercase transition-colors duration-300">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start font-bold text-sm">
                        <div className="w-3 h-3 bg-black group-hover:bg-white border-2 border-black group-hover:border-white mt-1.5 mr-4 shrink-0 transition-colors duration-300"></div>
                        <span className="leading-relaxed text-gray-800 group-hover:text-white uppercase tracking-wide transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-32">
          <h3 className="text-4xl md:text-5xl font-black text-black mb-16 text-center tracking-tight uppercase border-b-4 border-black pb-4 inline-block w-full">
            {texts.facilitiesTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <Card 
                key={index} 
                className="group bg-white border-4 border-black hover:bg-black transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <Badge 
                      className="bg-white text-black border-2 border-white font-black px-6 py-2 text-sm uppercase tracking-widest"
                    >
                      {facility.size}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-10">
                  <h4 className="font-black text-3xl text-black group-hover:text-white mb-4 tracking-tight uppercase transition-colors duration-300">
                    {facility.name}
                  </h4>
                  <p className="text-gray-800 group-hover:text-gray-200 font-bold mb-8 leading-relaxed uppercase tracking-wide transition-colors duration-300">
                    {facility.location}
                  </p>
                  <ul className="space-y-4">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-bold">
                        <div className="w-3 h-3 bg-black group-hover:bg-white border-2 border-black group-hover:border-white mr-4 transition-colors duration-300"></div>
                        <span className="leading-relaxed text-gray-800 group-hover:text-white uppercase tracking-wide transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Equipment Stats */}
        <div className="bg-black p-16 border-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-tight uppercase">
              {texts.statsTitle}
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  9
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.fleetVehicles}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.safetyItems}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  140m²
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.facilitySpace}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.officeLocations}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250px 0;
          }
          100% {
            background-position: 250px 0;
          }
        }
      `}</style>
    </section>
  );
}