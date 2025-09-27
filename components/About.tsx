'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Users, Lightbulb, Shield } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Lightbulb, title: t('innovative'), color: 'text-yellow-500' },
    { icon: Award, title: t('skilled'), color: 'text-blue-500' },
    { icon: Shield, title: t('reliable'), color: 'text-green-500' },
    { icon: Users, title: t('integrity'), color: 'text-purple-500' },
    { icon: Target, title: t('quality'), color: 'text-red-500' },
    { icon: Eye, title: t('transparency'), color: 'text-orange-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('aboutTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('directorMessage')}</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                  alt="Managing Director"
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 mb-4">
                  "At Elemi Electrical, we are committed to delivering professional electrical contracting services with unmatched technical competence and unwavering ethical standards. Our team's dedication to innovation and quality has established us as Tanzania's trusted electrical engineering partner."
                </p>
                <p className="font-semibold text-gray-900">{t('directorName')}</p>
                <p className="text-sm text-gray-600">Managing & Technical Director</p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{t('missionTitle')}</h3>
                </div>
                <p className="text-gray-700">{t('mission')}</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <Eye className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{t('visionTitle')}</h3>
                </div>
                <p className="text-gray-700">{t('vision')}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('valuesTitle')}</h3>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${value.color}`} />
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-6 text-white">
              <h4 className="text-lg font-bold mb-4">{t('statsTitle')}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">Class II</div>
                  <div className="text-sm opacity-90">Electrical Contractor</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">E2/96/06/2024</div>
                  <div className="text-sm opacity-90">CRB Registration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}