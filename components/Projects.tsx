'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, MapPin, Building2 } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'North Mara Gold Mine - Power Distribution',
      client: 'Barrick Gold Corporation',
      value: 'USD 850,000',
      location: 'Tarime, Mara Region',
      year: '2023',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg',
      description: 'Complete electrical infrastructure upgrade including MV/LV distribution lines and transformer installations.',
    },
    {
      title: 'Giza Cable Industries - Power Networks',
      client: 'Giza Cable Industries',
      value: 'TZS 713,000,000',
      location: 'Dar es Salaam',
      year: '2023',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      description: 'Industrial power distribution networks and electrical safety systems installation.',
    },
    {
      title: 'TANESCO Rural Electrification',
      client: 'TANESCO/REA',
      value: 'TZS 450,000,000',
      location: 'Kigoma Region',
      year: '2022',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/16058344/pexels-photo-16058344.jpeg',
      description: 'Rural electrification project covering multiple villages with MV lines and distribution transformers.',
    },
    {
      title: 'China Civil Engineering - MV Lines',
      client: 'China Civil Engineering Corporation',
      value: 'USD 320,000',
      location: 'Kagera Region',
      year: '2022',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg',
      description: 'Medium voltage transmission line construction and electrical infrastructure development.',
    },
    {
      title: 'Solar Power Installation Project',
      client: 'Mining Contractor Ltd',
      value: 'TZS 280,000,000',
      location: 'Mwanza Region',
      year: '2023',
      status: 'Ongoing',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg',
      description: 'Large-scale solar power system installation with battery storage and grid integration.',
    },
    {
      title: 'Industrial HVAC Systems',
      client: 'Manufacturing Company',
      value: 'TZS 180,000,000',
      location: 'Arusha Region',
      year: '2023',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
      description: 'Complete HVAC system installation for industrial facility including cooling and ventilation.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('projectsTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="h-4 w-4 mr-2 text-blue-600" />
                    {project.client}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-blue-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {project.value}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Project Achievements</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2B+</div>
              <div className="text-gray-600">Total Project Value (TZS)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Major Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">International Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Regions Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}