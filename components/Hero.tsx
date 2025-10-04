'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap, Building2, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export function Hero() {
  const router = useRouter();
  const { t } = useLanguage();
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Initialize Swiper
    swiperRef.current = new Swiper('.hero-swiper', {
      modules: [Autoplay, EffectFade, Pagination],
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
    },
    {
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
      title: t('heroTitle'),
      subtitle: 'Transmission Lines • Solar Systems • Power Distribution',
    },
    {
      image: 'https://images.pexels.com/photos/442123/pexels-photo-442123.jpeg',
      title: t('heroTitle'),
      subtitle: 'Class II Electrical Contractors • Mining Operations • Infrastructure',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Swiper Container */}
      <div className="hero-swiper absolute inset-0">
        <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform scale-110"
                    style={{
                      backgroundImage: `url('${slide.image}')`,
                    }}
                  ></div>
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-800/75"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Animated Electrical Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`grid-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                        <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-yellow-400"/>
                        <circle cx="0" cy="0" r="0.5" fill="currentColor" className="text-yellow-400"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#grid-${index})`} />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative h-screen flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    {/* Icon Badge */}
                    <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400">
                        {t('established')} 2019 | Class II Contractors
                      </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-yellow-200">
                        {slide.title}
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed animate-slide-up-delay">
                      {slide.subtitle}
                    </p>
                    
                    {/* Enhanced Stats */}
                    {index === 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto animate-fade-in-delay">
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                          <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                          <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">2019</div>
                          <div className="text-xs md:text-sm text-blue-200">{t('established')}</div>
                        </div>
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                          <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                          <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">2B+</div>
                          <div className="text-xs md:text-sm text-blue-200">TZS {t('projectValue')}</div>
                        </div>
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                          <Building2 className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                          <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">50+</div>
                          <div className="text-xs md:text-sm text-blue-200">{t('majorClients')}</div>
                        </div>
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                          <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                          <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">20+</div>
                          <div className="text-xs md:text-sm text-blue-200">{t('staffMembers')}</div>
                        </div>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-slow">
                      <Button 
                        size="lg" 
                        className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-base rounded-full shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                      >
                        {t('viewProjects')}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                      onClick={() => {
                        router.push('/#quote');
                      }}    
                        size="lg" 
                        variant="outline" 
                        className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        {t('requestQuote')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Swiper Pagination */}
          <div className="swiper-pagination !bottom-8"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out 0.2s both;
          }

          .animate-slide-up-delay {
            animation: slide-up 0.8s ease-out 0.4s both;
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out 0.1s both;
          }

          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.6s both;
          }

          .animate-fade-in-slow {
            animation: fade-in 1s ease-out 0.8s both;
          }

          :global(.swiper-pagination-bullet) {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.3s;
          }

          :global(.swiper-pagination-bullet-active) {
            width: 32px;
            border-radius: 6px;
            background: linear-gradient(to right, #f59e0b, #fb923c);
          }
        `}</style>
      </section>
  );
}