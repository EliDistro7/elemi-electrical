'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  MapPin,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Award,
  ArrowUpRight,
} from 'lucide-react';

export function FeaturedProject() {
  const { language } = useLanguage();
  const [activeMedia, setActiveMedia] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      eyebrow: 'Featured Project',
      title: 'Barrick Bulyanhulu',
      subtitle: '2 MVA Transformer & Switchgear Installation',
      description:
        "Full-scope supply, installation, testing and commissioning of a 2 MVA Power Transformer and associated HV/MV Switchgear at Barrick Gold's Bulyanhulu underground gold mine — one of East Africa's most demanding electrical infrastructure deployments.",
      client: 'Barrick Gold Corporation',
      location: 'Bulyanhulu, Kahama, Tanzania',
      year: '2024',
      value: 'Confidential',
      status: 'Completed',
      specs: [
        { label: 'Transformer Rating', value: '2 MVA' },
        { label: 'Voltage', value: '33kV / 11kV' },
        { label: 'Switchgear Type', value: 'HV/MV Panel' },
        { label: 'Standard', value: 'IEC 60076' },
      ],
      viewProject: 'View Full Details',
      gallery: 'Project Gallery',
      mediaLabel: ['Site Crew', 'Field Engineer', 'Site Footage'],
    },
    sw: {
      eyebrow: 'Mradi Maalum',
      title: 'Barrick Bulyanhulu',
      subtitle: 'Ufungaji wa Transformer ya 2 MVA na Switchgear',
      description:
        'Usambazaji kamili, ufungaji, upimaji na uzinduzi wa Transformer ya Nguvu ya 2 MVA na Switchgear ya HV/MV katika mgodi wa dhahabu wa chini ya ardhi wa Barrick Bulyanhulu — moja ya miundombinu ya umeme yenye mahitaji makubwa zaidi Afrika Mashariki.',
      client: 'Barrick Gold Corporation',
      location: 'Bulyanhulu, Kahama, Tanzania',
      year: '2024',
      value: 'Siri',
      status: 'Imekamilika',
      specs: [
        { label: 'Ukubwa wa Transformer', value: '2 MVA' },
        { label: 'Voltage', value: '33kV / 11kV' },
        { label: 'Aina ya Switchgear', value: 'HV/MV Panel' },
        { label: 'Kiwango', value: 'IEC 60076' },
      ],
      viewProject: 'Tazama Maelezo Kamili',
      gallery: 'Picha za Mradi',
      mediaLabel: ['Timu ya Mradi', 'Mhandisi', 'Video ya Mradi'],
    },
  };

  const texts = translations[language] || translations.en;

  // Media items: image1, image2, video
  const mediaItems = [
    { type: 'image', src: '/bul1.jpeg', fallback: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg' },
    { type: 'image', src: '/bul2.jpeg', fallback: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg' },
    { type: 'video', src: '/barrick.mp4' },
    { type: 'video', src: '/barrick2.mp4' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMediaChange = (idx: number) => {
    setActiveMedia(idx);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const prev = () => handleMediaChange((activeMedia - 1 + mediaItems.length) % mediaItems.length);
  const next = () => handleMediaChange((activeMedia + 1) % mediaItems.length);

  const current = mediaItems[activeMedia];

  return (
    <section
      ref={sectionRef}
      id="featured-project"
      className="py-24 bg-white overflow-hidden"
    >
      {/* ── HEADER ── */}
      <div
        className={`max-w-7xl mx-auto px-4 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-black" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-black flex items-center gap-2">
            <Award className="w-4 h-4" strokeWidth={3} />
            {texts.eyebrow}
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter uppercase leading-none">
          {texts.title}
        </h2>
        <p className="text-xl md:text-2xl font-light text-gray-500 mt-3 tracking-wide">
          {texts.subtitle}
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        className={`max-w-7xl mx-auto px-0 grid lg:grid-cols-2 gap-0 border-4 border-black transition-all duration-700 delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* LEFT: Media Viewer */}
        <div className="relative bg-black group">
          {/* Main media display */}
          <div className="relative overflow-hidden">
            {current.type === 'image' ? (
              <img
                key={activeMedia}
                src={current.src}
                alt={texts.mediaLabel[activeMedia]}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (current.fallback) target.src = current.fallback;
                }}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="relative w-full h-full bg-black">
                <video
                  ref={videoRef}
                  src={current.src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  onEnded={() => setIsVideoPlaying(false)}
                />
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                  aria-label={isVideoPlaying ? 'Pause' : 'Play'}
                >
                  <div
                    className={`w-20 h-20 border-4 border-white flex items-center justify-center transition-all duration-300 ${
                      isVideoPlaying
                        ? 'opacity-0 group-hover/btn:opacity-100 bg-black/50'
                        : 'opacity-100 bg-black/40 hover:bg-white hover:border-black'
                    }`}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-8 h-8 text-white" strokeWidth={3} />
                    ) : (
                      <Play className="w-8 h-8 text-white group-hover/btn:text-black transition-colors" strokeWidth={3} />
                    )}
                  </div>
                </button>
              </div>
            )}

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={3} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </button>

            {/* Media label overlay */}
            <div className="absolute bottom-4 left-4 bg-white border-2 border-white px-3 py-1">
              <span className="text-xs font-black uppercase tracking-widest text-black">
                {texts.mediaLabel[activeMedia]}
              </span>
            </div>

            {/* Status badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-white text-black border-2 border-white font-black px-4 py-1 text-xs uppercase tracking-widest">
                {texts.status}
              </Badge>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex border-t-4 border-white/20">
            {mediaItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleMediaChange(i)}
                className={`flex-1 relative h-20 overflow-hidden transition-all duration-200 ${
                  activeMedia === i ? 'ring-4 ring-inset ring-white' : 'opacity-50 hover:opacity-80'
                }`}
                aria-label={`Media ${i + 1}`}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`thumb-${i}`}
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      if (item.fallback) t.src = item.fallback;
                    }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Project Info */}
        <div className="bg-white border-l-4 border-black flex flex-col">
          {/* Description */}
          <div className="p-8 md:p-10 border-b-4 border-black flex-1">
            <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">
              {texts.description}
            </p>

            {/* Meta info */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Building2, value: texts.client },
                { icon: MapPin, value: texts.location },
                { icon: Calendar, value: texts.year },
                { icon: Zap, value: texts.value },
              ].map(({ icon: Icon, value }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wide text-black">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-black text-white border-4 border-black hover:bg-white hover:text-black font-black uppercase tracking-widest py-6 text-sm transition-all duration-300 group">
              <span className="flex items-center justify-center gap-3">
                {texts.viewProject}
                <ArrowUpRight
                  className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  strokeWidth={3}
                />
              </span>
            </Button>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-2">
            {texts.specs.map((spec, i) => (
              <div
                key={i}
                className={`p-6 border-black group hover:bg-black transition-colors duration-300 ${
                  i % 2 === 0 ? 'border-r-4' : ''
                } ${i < 2 ? 'border-b-4' : ''}`}
              >
                <div className="text-2xl font-black text-black group-hover:text-white tracking-tight transition-colors duration-300">
                  {spec.value}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-gray-300 mt-1 transition-colors duration-300">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM ACCENT BAR ── */}
      <div
        className={`max-w-7xl mx-auto px-4 mt-0 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="border-4 border-t-0 border-black bg-black px-8 py-4 flex items-center justify-between flex-wrap gap-4">
          <span className="text-white font-black text-xs uppercase tracking-[0.3em]">
            {texts.gallery} — {activeMedia + 1} / {mediaItems.length}
          </span>
          <div className="flex gap-2">
            {mediaItems.map((_, i) => (
              <button
                key={i}
                onClick={() => handleMediaChange(i)}
                className={`transition-all duration-300 ${
                  activeMedia === i
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to media ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}