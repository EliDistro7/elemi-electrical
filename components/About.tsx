'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Eye, Users, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function About() {
  const {language} = useLanguage();

  type Language = 'en' | 'sw';

  type TranslationKeys =
    | 'aboutTitle'
    | 'aboutSubtitle'
    | 'directorMessage'
    | 'directorName'
    | 'directorTitle'
    | 'directorGreeting'
    | 'missionTitle'
    | 'mission'
    | 'visionTitle'
    | 'vision'
    | 'valuesTitle'
    | 'innovative'
    | 'skilled'
    | 'reliable'
    | 'integrity'
    | 'quality'
    | 'transparency'
    | 'statsTitle';

  type Translations = {
    [lang in Language]: Record<TranslationKeys, string>;
  };
  

  const translations: Translations = {
    en: {
      aboutTitle: 'About Us',
      aboutSubtitle: 'Leading electrical solutions provider in Tanzania with expertise in transmission lines, solar power, and comprehensive electrical services',
      directorMessage: "Director's Message",
      directorName: 'Baraka M, Mwakitwange',
      directorTitle: 'Managing Director',
      directorGreeting: 'Dear Esteemed Clients, It is with great pleasure that I welcome you to Elemi Electrical. We are a leading electrical engineering company based in Tanzania, providing a wide range of services in power infrastructure, MV & LV lines construction, solar power systems installations and general supply among other things. Our team of experts is dedicated to providing you with the best solutions for your electrical needs. At Elemi Electrical, we pride ourselves on our commitment to quality, safety, and customer satisfaction. We believe that our success is measured by the success of our clients, and we are committed to working closely with you to ensure that your projects are completed on time, within budget, and to your satisfaction. We are passionate about what we do, and we are committed to providing you with the highest level of service and expertise.',
      missionTitle: 'Our Mission',
      mission: 'The company mission is to become professional electrical contracting company committed to technical competence, reliable workmanship and ethical business practices.',
      visionTitle: 'Our Vision',
      vision: 'To be the most trusted and innovative electrical contractor in East Africa, setting industry standards through quality service delivery and cutting-edge technology.',
      valuesTitle: 'Our Core Values',
      innovative: 'Innovative',
      skilled: 'Skilled',
      reliable: 'Reliable',
      integrity: 'Integrity',
      quality: 'Quality',
      transparency: 'Transparency',
      statsTitle: 'Our Credentials',
    },
    sw: {
      aboutTitle: 'Kuhusu Sisi',
      aboutSubtitle: 'Mtoa huduma za umeme wa kiongozi Tanzania wenye ujuzi wa mistari ya usambazaji, nishati ya jua, na huduma kamili za umeme',
      directorMessage: 'Ujumbe wa Mkurugenzi',
      directorName: 'Baraka M, Mwakitwange',
      directorTitle: 'Mkurugenzi Mtendaji',
      directorGreeting: 'Wateja Wapendwa, Ni kwa furaha kubwa kuwakaribisheni kwenye Elemi Electrical. Sisi ni kampuni inayoongoza katika uhandisi wa umeme Tanzania, tukitoa huduma mbalimbali katika miundombinu ya umeme, ujenzi wa mistari ya MV & LV, mifumo ya nishati ya jua na usambazaji wa jumla miongoni mwa mambo mengine. Timu yetu ya wataalam imejitolea kukupeni suluhisho bora kwa mahitaji yenu ya umeme. Katika Elemi Electrical, tunajivunia kujitolea kwetu kwa ubora, usalama, na kuridhisha wateja. Tunaamini kwamba mafanikio yetu yanapimwa kwa mafanikio ya wateja wetu, na tumejitolea kufanya kazi kwa karibu nanyi ili kuhakikisha miradi yenu inakamilika kwa wakati, ndani ya bajeti, na kwa kuridhisha kwenu. Tuna shauku juu ya tunachofanya, na tumejitolea kukupeni kiwango cha juu zaidi cha huduma na ujuzi.',
      missionTitle: 'Dhamira Yetu',
      mission: 'Dhamira ya kampuni ni kuwa kampuni ya ukandarasi wa umeme ya kitaalamu inayojitoa kwa ujuzi wa kiufundi, ufundi wa kuaminika na mazoea ya biashara ya kimaadili.',
      visionTitle: 'Dira Yetu',
      vision: 'Kuwa mkandarasi wa umeme anayeaminika na wa kisasa zaidi Afrika Mashariki, tukiweka viwango vya tasnia kupitia utoaji wa huduma bora na teknolojia ya kisasa.',
      valuesTitle: 'Maadili Yetu',
      innovative: 'Ubunifu',
      skilled: 'Ujuzi',
      reliable: 'Kuaminika',
      integrity: 'Uadilifu',
      quality: 'Ubora',
      transparency: 'Uwazi',
      statsTitle: 'Vyeti Vyetu',
    }
  };

  const t = (key: TranslationKeys): string => translations[language][key] || key;

  const values = [
    { icon: Lightbulb, title: t('innovative') },
    { icon: Award, title: t('skilled') },
    { icon: Shield, title: t('reliable') },
    { icon: Users, title: t('integrity') },
    { icon: Target, title: t('quality') },
    { icon: Eye, title: t('transparency') },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-4 sm:mb-6 md:mb-8 tracking-tighter uppercase">
            {t('aboutTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Director Message */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 sm:mb-8 md:mb-12 tracking-tight uppercase border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
                {t('directorMessage')}
              </h3>
              <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-10 hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 mb-6 sm:mb-8 md:mb-10">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/elemi-boss.png"
                      alt="Managing Director"
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 object-cover border-2 sm:border-4 border-black"
                    />
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-black border-2 sm:border-4 border-white flex items-center justify-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1 min-w-0">
                    <p className="font-black text-lg sm:text-xl md:text-2xl text-black mb-2 uppercase tracking-tight leading-tight break-words">
                      {t('directorName')}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600 uppercase tracking-wide">
                      {t('directorTitle')}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                  {t('directorGreeting')}
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                  <div className="bg-black p-2 sm:p-3 md:p-4 mr-3 sm:mr-4 md:mr-6 shrink-0">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
                    {t('missionTitle')}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                  {t('mission')}
                </p>
              </div>

              <div className="bg-black text-white border-2 sm:border-4 border-black p-6 sm:p-8 md:p-10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                  <div className="bg-white p-2 sm:p-3 md:p-4 mr-3 sm:mr-4 md:mr-6 shrink-0">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                    {t('visionTitle')}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium leading-relaxed">
                  {t('vision')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 sm:mb-8 md:mb-12 tracking-tight uppercase border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
              {t('valuesTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-white border-2 sm:border-4 border-black hover:bg-black group transition-all duration-300 hover:-translate-y-2"
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black group-hover:bg-white border-2 sm:border-4 border-black mx-auto mb-3 sm:mb-4 md:mb-6 flex items-center justify-center transition-all duration-300">
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                      </div>
                      <h4 className="font-black text-xs sm:text-sm md:text-base lg:text-lg text-black group-hover:text-white tracking-tight uppercase transition-colors duration-300 break-words">
                        {value.title}
                      </h4>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Company Stats */}
            <div className="bg-black p-4 sm:p-6 md:p-8 lg:p-12 text-white border-2 sm:border-4 border-black hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 md:mb-10 text-center tracking-tight uppercase">
                  {t('statsTitle')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center bg-white text-black p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 tracking-tighter">
                      CLASS II
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wide sm:tracking-widest break-words">
                      Electrical Contractor
                    </div>
                  </div>
                  <div className="text-center bg-white text-black p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-white">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 sm:mb-3 tracking-tight break-all">
                      E2/96/06/2024
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wide sm:tracking-widest break-words">
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