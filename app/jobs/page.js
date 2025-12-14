'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Car, 
  Mail, 
  Phone, 
  CheckCircle, 
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Zap,
  Shield
} from 'lucide-react';

export default function Careers() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "Join Our Team",
      pageSubtitle: "Building the future of electrical infrastructure together",
      nowHiring: "We're Hiring",
      positions: "Open Positions",
      electricianTitle: "Artisan – Electrician",
      driverTitle: "Driver",
      posts: "Posts",
      responsibilities: "Key Responsibilities",
      qualifications: "Required Qualifications",
      advantages: "Advantageous Skills",
      applyNow: "Apply Now",
      howToApply: "How to Apply",
      sendCV: "Send your CV to:",
      email: "Email",
      phone: "Phone",
      statsTitle: "Why Join Elemi Electrical?",
      teamMembers: "Team Members",
      yearsExperience: "Years in Business",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
    },
    sw: {
      pageTitle: "Jiunge na Timu Yetu",
      pageSubtitle: "Kujenga mustakabali wa miundombinu ya umeme pamoja",
      nowHiring: "Tunachukua Wafanyakazi",
      positions: "Nafasi Zilizopo",
      electricianTitle: "Artisan – Electrician",
      driverTitle: "Driver",
      posts: "Nafasi",
      responsibilities: "Majukumu Muhimu",
      qualifications: "Sifa Zinazohitajika",
      advantages: "Ujuzi wa Ziada",
      applyNow: "Omba Sasa",
      howToApply: "Jinsi ya Kuomba",
      sendCV: "Tuma CV yako kwa:",
      email: "Barua Pepe",
      phone: "Simu",
      statsTitle: "Kwa Nini Ujiunge na Elemi Electrical?",
      teamMembers: "Wanachama wa Timu",
      yearsExperience: "Miaka Katika Biashara",
      projectsCompleted: "Miradi Iliyokamilika",
      clientSatisfaction: "Kuridhika kwa Wateja",
    }
  };

  const texts = translations[language] || translations.en;

  const jobPostings = [
    {
      id: 'electrician',
      title: texts.electricianTitle,
      icon: Wrench,
      positions: 2,
      image: '/pose.png',
      responsibilities: [
        "Safe and economic maintenance of electrical plant systems",
        "Ensure compliance with company security and safety regulations",
        "Inspect electrical systems, equipment, and components to identify hazards and defects",
        "Test electrical systems and continuity of circuits using ohmmeters, voltmeters",
        "Perform overhead line tasks for high voltage and low voltage systems",
        "Climb concrete/wooden poles using spikes for line maintenance",
        "Assemble and install electrical panels, wire harnesses, and equipment",
        "Install, repair, and maintain electrical components (motors, switches, sensors, control panels)"
      ],
      qualifications: [
        "Secondary Education Certificate",
        "VETA Trade Test II or Certificate of Competence Level II",
        "Qualification in Electrical Engineering or Domestic Electric Installation",
        "From a recognized Vocational Training Institution"
      ],
      advantages: [
        "Valid driving license",
        "English language proficiency"
      ]
    },
    {
      id: 'driver',
      title: texts.driverTitle,
      icon: Car,
      positions: 2,
      image: '/car3.jpeg',
      responsibilities: [
        "Safe and timely transportation of goods, materials, and products",
        "Ensure timely pick-up and delivery according to schedule",
        "Conduct pre-trip, route, and post-trip vehicle inspections",
        "Report vehicle defects, damages, or malfunctions immediately",
        "Perform basic maintenance (oil, water, tire pressure checks)",
        "Maintain accurate delivery logs, mileage records, and fuel receipts",
        "Assist in loading and unloading goods as required",
        "Plan and follow efficient routes to minimize delivery times",
        "Maintain clear communication with dispatchers and supervisors",
        "Ensure safety of cargo and vehicle at all times"
      ],
      qualifications: [
        "Certificate of Ordinary Level Education",
        "Valid driving license with Class E",
        "Clean driving record",
        "Prior driving experience (especially with large vehicles preferred)"
      ],
      advantages: [
        "Driving experience in mining areas"
      ]
    }
  ];

  const contactInfo = {
    emails: [
      'elemielectrical19@gmail.com',
      'technical@elemielectrical.co.tz'
    ],
    phones: [
      '0757 003 380',
      '0687 827 090'
    ]
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-0">
      

        {/* Job Positions */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-16 text-center tracking-tight uppercase border-b-4 border-black pb-4 inline-block w-full">
            {texts.positions}
          </h2>
          
          <div className="space-y-16">
            {jobPostings.map((job, index) => (
              <Card 
                key={job.id}
                className="group bg-white border-4 border-black hover:bg-black transition-all duration-500 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-full overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-4 mb-4">
                        <job.icon className="w-12 h-12 text-white" />
                        <Badge className="bg-primary-600 text-white border-2 border-white font-black px-6 py-2 text-lg uppercase tracking-widest">
                          {job.positions} {texts.posts}
                        </Badge>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 md:p-12">
                    {/* Responsibilities */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-2xl font-black text-black group-hover:text-white uppercase tracking-tight transition-colors duration-300">
                          {texts.responsibilities}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-primary-600 group-hover:bg-white mt-2 mr-3 shrink-0 transition-colors duration-300"></div>
                            <span className="text-gray-800 group-hover:text-white font-medium leading-relaxed transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qualifications */}
                    <div className="mb-10">
                      <div className="flex items-center gap-3 mb-6">
                        <GraduationCap className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-2xl font-black text-black group-hover:text-white uppercase tracking-tight transition-colors duration-300">
                          {texts.qualifications}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {job.qualifications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-5 h-5 text-primary-600 group-hover:text-white mt-0.5 mr-3 shrink-0 transition-colors duration-300" />
                            <span className="text-gray-800 group-hover:text-white font-medium leading-relaxed transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advantages */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                        <h4 className="text-2xl font-black text-black group-hover:text-white uppercase tracking-tight transition-colors duration-300">
                          {texts.advantages}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {job.advantages.map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-sage-600 group-hover:bg-white mt-2 mr-3 shrink-0 transition-colors duration-300"></div>
                            <span className="text-gray-800 group-hover:text-white font-medium leading-relaxed transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Button */}
                    <Button 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black text-lg py-6 uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 border-4 border-black group-hover:border-white"
                    >
                      {texts.applyNow}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>


        {/* Contact/Apply Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-16 border-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px]"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                {texts.howToApply}
              </h3>
              <p className="text-xl text-white font-bold uppercase tracking-wide">
                {texts.sendCV}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Email Section */}
              <Card className="bg-white border-4 border-black p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-primary-600" />
                  <h4 className="text-2xl font-black text-black uppercase tracking-tight">
                    {texts.email}
                  </h4>
                </div>
                <div className="space-y-3">
                  {contactInfo.emails.map((email, i) => (
                    <a 
                      key={i}
                      href={`mailto:${email}`}
                      className="block text-gray-800 hover:text-primary-600 font-bold transition-colors duration-300 break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Phone Section */}
              <Card className="bg-white border-4 border-black p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-8 h-8 text-primary-600" />
                  <h4 className="text-2xl font-black text-black uppercase tracking-tight">
                    {texts.phone}
                  </h4>
                </div>
                <div className="space-y-3">
                  {contactInfo.phones.map((phone, i) => (
                    <a 
                      key={i}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-gray-800 hover:text-primary-600 font-bold transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </Card>
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