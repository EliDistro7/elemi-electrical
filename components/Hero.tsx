'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap, Building2, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Swiper from 'swiper';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

export function Hero() {
  const router = useRouter();
  const { t } = useLanguage();
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.hero-swiper', {
      modules: [Autoplay, EffectCreative, Pagination],
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ['-120%', 0, -500],
        },
        next: {
          shadow: true,
          translate: ['120%', 0, -500],
        },
      },
      autoplay: { 
        delay: 6000, 
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      grabCursor: true,
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
      },
    });

    return () => swiperRef.current?.destroy();
  }, []);

  const slides = [
    {
      image: '/mara1.png',
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      badge: { icon: Zap, text: 'Class II Electrical Contractors' }
    },
    {
      image: '/proj1.jpeg',
      title: 'Industrial Power Solutions',
      subtitle: 'Transmission Lines • Solar Systems • Power Distribution',
      badge: { icon: Building2, text: 'Mining & Infrastructure' }
    },
    {
      image: '/instructions2.png',
      title: 'Expert Engineering',
      subtitle: 'Certified Professionals • Quality Assurance • Safety First',
      badge: { icon: Award, text: 'Established 2019' }
    },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Swiper Container */}
      <div className="hero-swiper absolute inset-0">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => {
            const BadgeIcon = slide.badge.icon;
            return (
              <div key={index} className="swiper-slide relative">
                
                {/* Background Image with Lighter Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                >
                  {/* Lighter Dark Overlay - More Image Visible */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-gray-900/40 to-black/50"></div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-screen flex items-center justify-center">
                  <div className="max-w-6xl mx-auto px-6 lg:px-8 text-white">
                    <div className="text-center space-y-8">
                      
                      {/* Badge with Better Contrast */}
                      <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 animate-fade-in shadow-2xl">
                        <BadgeIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium tracking-wider text-yellow-300 uppercase">
                          {slide.badge.text}
                        </span>
                      </div>

                      {/* Main Title with Text Shadow for Readability */}
                      <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-yellow-200 via-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                          {slide.title}
                        </h1>
                        
                        {/* Subtitle with Better Readability */}
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed max-w-4xl mx-auto tracking-wide drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* CTA Buttons with Ample Spacing */}
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-slow">
                        <Button
                         onClick={() => router.push('/#projects')}
                          size="lg"
                          className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-600 text-white px-10 py-7 text-lg font-semibold rounded-2xl shadow-2xl shadow-yellow-400/25 hover:shadow-3xl hover:shadow-orange-500/40 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                        >
                          {t('viewProjects')}
                          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>

                        <Button
                          onClick={() => router.push('/#quote')}
                          size="lg"
                          variant="outline"
                          className="group border-2 border-white/60 bg-black/40 backdrop-blur-2xl text-white hover:bg-white hover:text-blue-900 px-10 py-7 text-lg font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:border-white shadow-xl"
                        >
                          <Phone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                          {t('requestQuote')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Pagination */}
        <div className="swiper-pagination !bottom-10 space-x-2"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-lg bg-black/30 shadow-xl">
            <div className="w-1.5 h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-slide-up { 
          animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both; 
        }
        
        .animate-slide-up-delay { 
          animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both; 
        }
        
        .animate-fade-in { 
          animation: fade-in 1s ease-out 0.4s both; 
        }
        
        .animate-fade-in-slow { 
          animation: fade-in 1.2s ease-out 0.8s both; 
        }

        /* Custom Pagination Styles */
        :global(.swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        :global(.swiper-pagination-bullet-active) {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(45deg, #f59e0b, #fb923c);
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        /* Swiper Creative Effect Enhancements */
        :global(.swiper-slide) {
          opacity: 1 !important;
        }
        
        :global(.swiper-slide-active) {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}