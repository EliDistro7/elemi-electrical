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
    <section id="projects" className="py-24 bg-background-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display font-black text-text-primary mb-6 tracking-tight">
            {t('projectsTitle')}
          </h2>
          <p className="text-xl font-medium text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass rounded-4xl overflow-hidden hover:shadow-primary-lg transition-all duration-300 hover:-translate-y-1 border border-border-light group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={`font-semibold px-3 py-1.5 rounded-xl ${
                      project.status === 'Completed' 
                        ? 'bg-accent-gradient text-white shadow-green' 
                        : 'bg-secondary-gradient text-white shadow-yellow'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-xl mb-3 text-text-primary leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="text-text-secondary font-medium mb-6 leading-relaxed text-base">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm font-medium text-text-secondary">
                    <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                      <Building2 className="h-4 w-4 text-primary-600" strokeWidth={2.5} />
                    </div>
                    <span className="truncate">{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-text-secondary">
                    <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                      <MapPin className="h-4 w-4 text-green-600" strokeWidth={2.5} />
                    </div>
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-text-secondary">
                    <div className="w-8 h-8 bg-warning-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                      <Calendar className="h-4 w-4 text-warning-600" strokeWidth={2.5} />
                    </div>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center text-base font-bold text-primary-600">
                    <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                      <DollarSign className="h-4 w-4 text-primary-600" strokeWidth={2.5} />
                    </div>
                    <span className="font-mono tracking-tight">{project.value}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full font-display font-semibold border-2 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-500 rounded-2xl py-3"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-20 glass-strong rounded-4xl p-10 shadow-primary-lg border border-border-light">
          <h3 className="text-display-xs font-display font-bold text-center mb-12 text-text-primary tracking-tight">
            Project Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white bg-opacity-50 rounded-3xl p-8 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-display font-black text-primary-600 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
                2B+
              </div>
              <div className="text-text-secondary font-semibold uppercase tracking-wide text-sm">
                Total Project Value (TZS)
              </div>
            </div>
            <div className="text-center bg-white bg-opacity-50 rounded-3xl p-8 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-display font-black text-green-600 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-text-secondary font-semibold uppercase tracking-wide text-sm">
                Major Projects Completed
              </div>
            </div>
            <div className="text-center bg-white bg-opacity-50 rounded-3xl p-8 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-display font-black text-warning-600 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-text-secondary font-semibold uppercase tracking-wide text-sm">
                International Clients
              </div>
            </div>
            <div className="text-center bg-white bg-opacity-50 rounded-3xl p-8 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-5xl font-display font-black text-purple-600 mb-3 tracking-tight group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-text-secondary font-semibold uppercase tracking-wide text-sm">
                Regions Covered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}