import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamCarousel = () => {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  type Language = 'en' | 'sw';

  type TranslationTexts = {
    sectionTitle: string;
    sectionSubtitle: string;
    caption1: string;
    caption2: string;
    caption3: string;
    caption4: string;
    caption5: string;
  };

  const translations: Record<Language, TranslationTexts> = {
    en: {
      sectionTitle: 'Our Team in Action',
      sectionSubtitle: 'Meet the people behind our success',
      caption1: 'Our team planning session',
      caption2: 'Collaborating on site',
      caption3: 'Project completion celebration',
      caption4: 'On-site inspection day',
      caption5: 'Innovation workshop'
    },
    sw: {
      sectionTitle: 'Timu Yetu Kazini',
      sectionSubtitle: 'Mkutane na watu nyuma ya mafanikio yetu',
      caption1: 'Kikao chetu cha mipango',
      caption2: 'Kushirikiana kazini',
      caption3: 'Sherehe ya kukamilisha mradi',
      caption4: 'Siku ya ukaguzi wa eneo',
      caption5: 'Warsha ya ubunifu'
    }
  };

  const texts = translations[language as Language] || translations.en;

  // Sample team images - replace these URLs with your actual team photos
  const teamImages = [
     {
      url: '/elemi-boss.png',
      alt: 'Team celebration',
      caption: texts.caption3
    },
    {
      url: '/elemi1.png',
      alt: 'Team celebration',
      caption: texts.caption1
    },
    {
      url: '/elemi-car2.png',
      alt: 'Team working on project',
      caption: texts.caption2
    },
   
    {
      url: '/instructions2.png',
      alt: 'Team at construction site',
      caption: texts.caption4
    },
  
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

interface ScrollToFn {
    (index: number): void;
}

const scrollTo: ScrollToFn = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
}, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 px-4 md:px-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-4 sm:mb-6 md:mb-8 tracking-tighter uppercase">
            {texts.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {texts.sectionSubtitle}
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {teamImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-0 md:px-3"
                >
                  <div className="relative group overflow-hidden md:rounded-none border-2 sm:border-4 border-black hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 border-t-2 sm:border-t-4 border-white">
                        <p className="text-white text-sm sm:text-base md:text-lg font-black uppercase tracking-tight">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-black hover:bg-white border-2 sm:border-4 border-black transition-all hover:scale-110 shrink-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white hover:text-black transition-colors" strokeWidth={3} />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-black hover:bg-white border-2 sm:border-4 border-black transition-all hover:scale-110 shrink-0"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white hover:text-black transition-colors" strokeWidth={3} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 transition-all duration-300 border-2 border-black ${
                index === selectedIndex
                  ? 'bg-black w-8'
                  : 'bg-white w-2.5 hover:bg-gray-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;