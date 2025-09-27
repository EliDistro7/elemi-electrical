'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Users, Lightbulb, Shield } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Lightbulb, title: t('innovative'), gradient: 'from-yellow-400 to-yellow-600' },
    { icon: Award, title: t('skilled'), gradient: 'from-primary-500 to-primary-700' },
    { icon: Shield, title: t('reliable'), gradient: 'from-green-500 to-green-700' },
    { icon: Users, title: t('integrity'), gradient: 'from-purple-500 to-purple-700' },
    { icon: Target, title: t('quality'), gradient: 'from-error-500 to-error-700' },
    { icon: Eye, title: t('transparency'), gradient: 'from-warning-500 to-warning-700' },
  ];

  return (
    <section id="about" className="py-24 bg-background-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display font-black text-text-primary mb-6 tracking-tight">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl font-medium text-text-secondary max-w-4xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Director Message */}
            <div>
              <h3 className="text-display-xs font-display font-bold text-primary-600 mb-6 tracking-tight">
                {t('directorMessage')}
              </h3>
              <div className="glass-strong rounded-4xl p-8 shadow-primary hover:shadow-primary-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                      alt="Managing Director"
                      className="w-20 h-20 rounded-2xl object-cover shadow-medium"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary-gradient rounded-full border-2 border-white flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg text-text-primary mb-1">
                      {t('directorName')}
                    </p>
                    <p className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
                      Managing & Technical Director
                    </p>
                  </div>
                </div>
                <blockquote className="text-text-secondary leading-relaxed font-medium text-base border-l-4 border-primary-300 pl-6 italic">
                  "At Elemi Electrical, we are committed to delivering professional electrical contracting services with unmatched technical competence and unwavering ethical standards. Our team's dedication to innovation and quality has established us as Tanzania's trusted electrical engineering partner."
                </blockquote>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="glass rounded-4xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-primary-500">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-gradient p-3 rounded-2xl shadow-primary mr-4">
                    <Target className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                    {t('missionTitle')}
                  </h3>
                </div>
                <p className="text-text-secondary font-medium leading-relaxed text-lg">
                  {t('mission')}
                </p>
              </div>

              <div className="glass rounded-4xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-warning-500">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-gradient p-3 rounded-2xl shadow-yellow mr-4">
                    <Eye className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary tracking-tight">
                    {t('visionTitle')}
                  </h3>
                </div>
                <p className="text-text-secondary font-medium leading-relaxed text-lg">
                  {t('vision')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-display-xs font-display font-bold text-text-primary mb-10 tracking-tight">
              {t('valuesTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass rounded-3xl border border-border-light hover:shadow-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 group"
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-medium group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-display font-bold text-lg text-text-primary tracking-tight">
                        {value.title}
                      </h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="bg-primary-gradient rounded-4xl p-8 text-white shadow-primary-lg hover:shadow-primary transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 opacity-90"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-bold mb-8 text-center tracking-tight">
                  {t('statsTitle')}
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center bg-white bg-opacity-10 rounded-3xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                    <div className="text-4xl font-display font-black mb-2 tracking-tight">
                      Class II
                    </div>
                    <div className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                      Electrical Contractor
                    </div>
                  </div>
                  <div className="text-center bg-white bg-opacity-10 rounded-3xl p-6 backdrop-blur-sm border border-white border-opacity-20">
                    <div className="text-2xl font-mono font-bold mb-2 tracking-tight">
                      E2/96/06/2024
                    </div>
                    <div className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                      CRB Registration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}