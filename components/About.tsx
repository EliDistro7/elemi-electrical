'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Users, Lightbulb, Shield } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Lightbulb, title: t('innovative') },
    { icon: Award, title: t('skilled') },
    { icon: Shield, title: t('reliable') },
    { icon: Users, title: t('integrity') },
    { icon: Target, title: t('quality') },
    { icon: Eye, title: t('transparency') },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 tracking-tighter uppercase">
            {t('aboutTitle')}
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Director Message */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-black mb-12 tracking-tight uppercase border-b-4 border-black pb-4">
                {t('directorMessage')}
              </h3>
             <div className="bg-white border-4 border-black p-6 md:p-10 hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/elemi-boss.png"
                      alt="Managing Director"
                      className="w-32 h-32 sm:w-40 sm:h-40 object-cover border-4 border-black"
                    />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-black border-4 border-white flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <p className="font-black text-xl sm:text-2xl text-black mb-2 uppercase tracking-tight leading-tight">
                      {t('directorName')}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wider sm:tracking-widest">
                      Managing & Technical Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <div className="bg-white border-4 border-black p-10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-black p-4 mr-6">
                    <Target className="h-8 w-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-black tracking-tight uppercase">
                    {t('missionTitle')}
                  </h3>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed text-lg">
                  {t('mission')}
                </p>
              </div>

              <div className="bg-black text-white border-4 border-black p-10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-white p-4 mr-6">
                    <Eye className="h-8 w-8 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                    {t('visionTitle')}
                  </h3>
                </div>
                <p className="text-gray-200 font-medium leading-relaxed text-lg">
                  {t('vision')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-black mb-12 tracking-tight uppercase border-b-4 border-black pb-4">
              {t('valuesTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-white border-4 border-black hover:bg-black group transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-10 text-center">
                      <div className="w-20 h-20 bg-black group-hover:bg-white border-4 border-black mx-auto mb-6 flex items-center justify-center transition-all duration-300">
                        <IconComponent className="h-10 w-10 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-black text-lg text-black group-hover:text-white tracking-tight uppercase transition-colors duration-300">
                        {value.title}
                      </h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="bg-black p-12 text-white border-4 border-black hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
              
              <div className="relative z-10">
                <h4 className="text-3xl font-black mb-10 text-center tracking-tight uppercase">
                  {t('statsTitle')}
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center bg-white text-black p-8 border-4 border-white">
                    <div className="text-5xl font-black mb-3 tracking-tighter">
                      CLASS II
                    </div>
                    <div className="text-sm font-black uppercase tracking-widest">
                      Electrical Contractor
                    </div>
                  </div>
                  <div className="text-center bg-white text-black p-8 border-4 border-white">
                    <div className="text-2xl font-black mb-3 tracking-tight">
                      E2/96/06/2024
                    </div>
                    <div className="text-sm font-black uppercase tracking-widest">
                      CRB Registration
                    </div>
                  </div>
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