'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, MapPin, Building2, ArrowRight } from 'lucide-react';

export function Projects() {
  const { language } = useLanguage();

  const translations = {
    en: {
      projectsTitle: 'Our Projects',
      projectsSubtitle: 'Delivering excellence across Tanzania with proven track record in major electrical infrastructure projects',
      completed: 'Completed',
      ongoing: 'Ongoing',
      viewDetails: 'View Details',
      achievementsTitle: 'Project Achievements',
      totalValue: 'Total Project Value (TZS)',
      majorProjects: 'Major Projects Completed',
      internationalClients: 'International Clients',
      regionsCovered: 'Regions Covered',
    },
    sw: {
      projectsTitle: 'Miradi Yetu',
      projectsSubtitle: 'Kutoa ubora kote Tanzania na rekodi iliyothibitishwa katika miradi mikubwa ya miundombinu ya umeme',
      completed: 'Imekamilika',
      ongoing: 'Inaendelea',
      viewDetails: 'Tazama Maelezo',
      achievementsTitle: 'Mafanikio ya Miradi',
      totalValue: 'Jumla ya Thamani ya Miradi (TZS)',
      majorProjects: 'Miradi Mikubwa Iliyokamilika',
      internationalClients: 'Wateja wa Kimataifa',
      regionsCovered: 'Mikoa Iliyofikiwa',
    }
  };

  const texts = translations[language] || translations.en;

  const projects = [
    {
      title: 'North Mara Gold Mine - Power Distribution',
      client: 'Barrick Gold Corporation',
      value: 'USD 850,000',
      location: 'Tarime, Mara Region',
      year: '2023',
      status: 'completed',
      image: '/mara1.jpeg',
      description: 'Complete electrical infrastructure upgrade including MV/LV distribution lines and transformer installations.',
    },
    {
      title: 'Giza Cable Industries - Power Networks',
      client: 'Giza Cable Industries',
      value: 'TZS 713,000,000',
      location: 'Dar es Salaam',
      year: '2023',
      status: 'completed',
      image: '/giza.png',
      description: 'Industrial power distribution networks and electrical safety systems installation.',
    },
    {
      title: 'TANESCO Rural Electrification',
      client: 'TANESCO/REA',
      value: 'TZS 450,000,000',
      location: 'Kigoma Region',
      year: '2022',
      status: 'completed',
      image: 'https://images.pexels.com/photos/16058344/pexels-photo-16058344.jpeg',
      description: 'Rural electrification project covering multiple villages with MV lines and distribution transformers.',
    },
    {
      title: 'China Civil Engineering - MV Lines',
      client: 'China Civil Engineering Corporation',
      value: 'USD 320,000',
      location: 'Kagera Region',
      year: '2022',
      status: 'completed',
      image: '/MV1.png',
      description: 'Medium voltage transmission line construction and electrical infrastructure development.',
    },
    {
      title: 'Solar Power Installation Project',
      client: 'Mining Contractor Ltd',
      value: 'TZS 280,000,000',
      location: 'Mwanza Region',
      year: '2023',
      status: 'ongoing',
      image: '/solar2.png',
      description: 'Large-scale solar power system installation with battery storage and grid integration.',
    },
    {
      title: 'Industrial HVAC Systems',
      client: 'Manufacturing Company',
      value: 'TZS 180,000,000',
      location: 'Arusha Region',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg',
      description: 'Complete HVAC system installation for industrial facility including cooling and ventilation.',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 tracking-tighter uppercase">
            {texts.projectsTitle}
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {texts.projectsSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-white border-4 border-black hover:bg-black transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              
                <div className="absolute top-6 right-6">
                  <Badge 
                    className={`font-black px-6 py-2 text-sm uppercase tracking-widest border-2 ${
                      project.status === 'completed' 
                        ? 'bg-white text-black border-white' 
                        : 'bg-black text-white border-white'
                    }`}
                  >
                    {project.status === 'completed' ? texts.completed : texts.ongoing}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-10">
                <h3 className="font-black text-2xl mb-4 text-black group-hover:text-white leading-tight tracking-tight uppercase transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-200 font-medium mb-8 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm font-bold">
                    <div className="w-10 h-10 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mr-4 shrink-0 transition-all duration-300">
                      <Building2 className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-black group-hover:text-white uppercase tracking-wide transition-colors duration-300 truncate">{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm font-bold">
                    <div className="w-10 h-10 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mr-4 shrink-0 transition-all duration-300">
                      <MapPin className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-black group-hover:text-white uppercase tracking-wide transition-colors duration-300 truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm font-bold">
                    <div className="w-10 h-10 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mr-4 shrink-0 transition-all duration-300">
                      <Calendar className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <span className="text-black group-hover:text-white uppercase tracking-widest transition-colors duration-300">{project.year}</span>
                  </div>
                  <div className="flex items-center text-lg font-black">
                    <div className="w-10 h-10 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mr-4 shrink-0 transition-all duration-300">
                      <DollarSign className="h-5 w-5 text-white group-hover:text-black transition-colors duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-black group-hover:text-white tracking-tight transition-colors duration-300">{project.value}</span>
                  </div>
                </div>

                <Button 
                  className="w-full font-black border-4 border-black bg-transparent text-black group-hover:bg-white group-hover:border-white group-hover:text-black py-6 text-base uppercase tracking-widest transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    {texts.viewDetails}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="bg-black p-16 border-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-tight uppercase">
              {texts.achievementsTitle}
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  2B+
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.totalValue}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  15+
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.majorProjects}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.internationalClients}
                </div>
              </div>
              <div className="text-center bg-white p-10 border-4 border-white hover:-translate-y-2 transition-all duration-300 group">
                <div className="text-6xl font-black text-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-black font-black uppercase tracking-widest text-sm">
                  {texts.regionsCovered}
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