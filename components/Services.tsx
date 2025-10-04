'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Sun, Building, Wind, Package, ArrowRight, Check, Route } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Services() {
  const router = useRouter();
  const { t, language } = useLanguage();
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const translations = {
    en: {
      ourExpertise: 'Our Expertise',
      servicesTitle: 'Comprehensive Electrical Solutions',
      servicesSubtitle: 'From power infrastructure to solar installations, we deliver excellence in every project',
      
      transmissionTitle: 'Power Transmission & Distribution',
      transmissionDesc: 'Professional construction of MV & LV lines with transformer installations for reliable power delivery.',
      transmissionFeatures: ['MV & LV Distribution Lines', 'Transformer Installations', 'Power Grid Construction', 'Electrical Safety Systems'],
      
      solarTitle: 'Solar Power Systems',
      solarDesc: 'Design and installation of efficient solar energy solutions for sustainable power generation.',
      solarFeatures: ['Solar Panel Installation', 'Grid-Tie Systems', 'Off-Grid Solutions', 'Energy Storage Systems'],
      
      commercialTitle: 'Commercial & Residential Systems',
      commercialDesc: 'Complete electrical systems for buildings including lighting, fire alarms, and power distribution.',
      commercialFeatures: ['Lighting Systems', 'Fire Alarm Systems', 'Television Systems', 'Power Distribution'],
      
      hvacTitle: 'HVAC & Refrigeration',
      hvacDesc: 'Installation and maintenance of air conditioning, refrigeration, and climate control systems.',
      hvacFeatures: ['Air Conditioning', 'Refrigeration Systems', 'Ventilation Solutions', 'Climate Control'],
      
      supplyTitle: 'Equipment & Materials Supply',
      supplyDesc: 'General supply of quality electrical equipment, materials, and installation tools.',
      supplyFeatures: ['Electrical Equipment', 'Safety Materials', 'Testing Equipment', 'Installation Tools'],
      
      learnMore: 'Learn More',
      getStarted: 'Get Started Today',
      ctaTitle: 'Ready to Power Your Project?',
      ctaSubtitle: 'Get a professional consultation and detailed quote for your electrical needs. Our team is ready to bring your vision to life.',
      requestQuote: 'Request Quote',
      viewProjects: 'View Our Projects',
    },
    sw: {
      ourExpertise: 'Utaalamu Wetu',
      servicesTitle: 'Suluhisho Kamili za Umeme',
      servicesSubtitle: 'Kutoka miundombinu ya nguvu hadi usakinishaji wa nishati ya jua, tunaleta ubora katika kila mradi',
      
      transmissionTitle: 'Usambazaji wa Nguvu za Umeme',
      transmissionDesc: 'Ujenzi wa kitaalamu wa mistari ya MV & LV pamoja na usakinishaji wa transformers kwa usambazaji wa nguvu za kuaminika.',
      transmissionFeatures: ['Mistari ya Usambazaji MV & LV', 'Usakinishaji wa Transformers', 'Ujenzi wa Gridi ya Umeme', 'Mifumo ya Usalama wa Umeme'],
      
      solarTitle: 'Mifumo ya Nishati ya Jua',
      solarDesc: 'Kubuni na kusakinisha suluhisho za nishati ya jua zenye ufanisi kwa uzalishaji endelevu wa nguvu.',
      solarFeatures: ['Usakinishaji wa Paneli za Jua', 'Mifumo ya Grid-Tie', 'Suluhisho za Off-Grid', 'Mifumo ya Kuhifadhi Nishati'],
      
      commercialTitle: 'Mifumo ya Kibiashara na Makazi',
      commercialDesc: 'Mifumo kamili ya umeme kwa majengo ikiwa ni pamoja na taa, kengele za moto, na usambazaji wa nguvu.',
      commercialFeatures: ['Mifumo ya Taa', 'Mifumo ya Kengele za Moto', 'Mifumo ya Televisheni', 'Usambazaji wa Nguvu'],
      
      hvacTitle: 'HVAC na Ubaridishaji',
      hvacDesc: 'Usakinishaji na matengenezo ya AC, ubaridishaji, na mifumo ya kudhibiti hali ya hewa.',
      hvacFeatures: ['Ubaridishaji wa Hewa', 'Mifumo ya Ubaridishaji', 'Suluhisho za Uingizaji Hewa', 'Udhibiti wa Hali ya Hewa'],
      
      supplyTitle: 'Usambazaji wa Vifaa na Nyenzo',
      supplyDesc: 'Usambazaji wa jumla wa vifaa vya umeme vya ubora, nyenzo, na zana za usakinishaji.',
      supplyFeatures: ['Vifaa vya Umeme', 'Nyenzo za Usalama', 'Vifaa vya Kupima', 'Zana za Usakinishaji'],
      
      learnMore: 'Jifunze Zaidi',
      getStarted: 'Anza Leo',
      ctaTitle: 'Uko Tayari Kuendesha Mradi Wako?',
      ctaSubtitle: 'Pata ushauri wa kitaalamu na nukuu ya kina kwa mahitaji yako ya umeme. Timu yetu iko tayari kuleta maono yako kuwa ukweli.',
      requestQuote: 'Omba Bei',
      viewProjects: 'Tazama Miradi Yetu',
    }
  };

  const texts = translations[language] || translations.en;

  const services = [
    {
      icon: Zap,
      title: texts.transmissionTitle,
      description: texts.transmissionDesc,
      features: texts.transmissionFeatures
    },
    {
      icon: Sun,
      title: texts.solarTitle,
      description: texts.solarDesc,
      features: texts.solarFeatures
    },
    {
      icon: Building,
      title: texts.commercialTitle,
      description: texts.commercialDesc,
      features: texts.commercialFeatures
    },
    {
      icon: Wind,
      title: texts.hvacTitle,
      description: texts.hvacDesc,
      features: texts.hvacFeatures
    },
    {
      icon: Package,
      title: texts.supplyTitle,
      description: texts.supplyDesc,
      features: texts.supplyFeatures
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
  {/* Hero with Video Background */}
<div className="relative h-[600px] mb-32 overflow-hidden">
  <video
    ref={videoRef}
    src="/promo1.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    muted
    playsInline
    loop
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Glass effect title - top left */}
  <div className="absolute top-6 left-6 md:top-12 md:left-12">
    <div className="inline-block backdrop-blur-xs bg-white/10 px-6 py-4 md:px-10 md:py-6 lg:px-12 lg:py-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl">
      <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter">
        {texts.servicesTitle}
      </h2>
    </div>
  </div>

  {/* Glass effect subtitle - bottom right */}
  <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
    <div className="inline-block backdrop-blur-xs bg-white/10 px-6 py-4 md:px-10 md:py-6 lg:px-12 lg:py-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl max-w-xs md:max-w-md lg:max-w-lg">
      <p className="text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wide text-right">
        {texts.servicesSubtitle}
      </p>
    </div>
  </div>
</div>


      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative bg-white border-2 border-black hover:bg-black transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <CardHeader className="text-center pb-8 pt-12 relative">
                  <div className="relative mx-auto mb-8 w-24 h-24">
                    <div className="w-full h-full bg-black group-hover:bg-white border-4 border-black flex items-center justify-center transition-all duration-500">
                      <IconComponent className="h-12 w-12 text-white group-hover:text-black transition-colors duration-500" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-black text-black group-hover:text-white transition-colors duration-300 tracking-tight uppercase">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 pb-12 px-8 relative">
                  <p className="text-gray-700 group-hover:text-gray-200 mb-8 leading-relaxed text-center font-light transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start text-sm"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-black group-hover:bg-white flex items-center justify-center mt-0.5 mr-4 transition-colors duration-300">
                          <Check className="h-4 w-4 text-white group-hover:text-black transition-colors duration-300" strokeWidth={3} />
                        </div>
                        <span className="leading-tight text-gray-900 group-hover:text-white font-medium transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                 
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bold CTA Section */}
        <div className="relative bg-black p-16 md:p-24 text-white text-center border-4 border-black overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 mb-10 font-black uppercase tracking-widest text-sm">
              <Zap className="h-5 w-5" strokeWidth={3} />
              <span>{texts.getStarted}</span>
            </div>

            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tighter uppercase">
              {texts.ctaTitle}
            </h3>
            
            <p className="text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              {texts.ctaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                  onClick={() => {
                    router.push('/#quote');
                  }}
                size="lg" 
                className="group bg-white text-black hover:bg-black hover:text-white border-4 border-white font-black px-14 py-8 text-lg uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                {texts.requestQuote}
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </Button>
              
              <Button 
                  onClick={() => {
                    router.push('/#projects');
                  }}
                size="lg" 
                className="group bg-black text-white hover:bg-white hover:text-black border-4 border-white font-black px-14 py-8 text-lg uppercase tracking-widest transition-all duration-300 hover:scale-105"
              >
                {texts.viewProjects}
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </Button>
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