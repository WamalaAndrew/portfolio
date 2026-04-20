import React, { useState } from 'react';
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  Building2, 
  Gavel, 
  Landmark, 
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Newspaper
} from 'lucide-react';

import heroImg from './assets/hero.jpeg';
import aboutImg from './assets/about.jpeg';
import insightsImg from './assets/insights.jpeg';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl tracking-tighter uppercase leading-none">
                Counsel Mwebaza<br/><span className="text-gray-500">Suzan Faridah</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-gray-500 transition-colors">Philosophy</a>
              <a href="#credentials" className="text-sm font-medium hover:text-gray-500 transition-colors">Credentials</a>
              <a href="#portfolio" className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-gray-700 transition-colors">Portfolio</a>
              <a href="#insights" className="text-sm font-medium hover:text-gray-500 transition-colors">Insights</a>
              
              <button className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2 group">
                Retain My Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-base font-medium">Philosophy</a>
              <a href="#credentials" className="block px-3 py-2 text-base font-medium">Credentials</a>
              <a href="#portfolio" className="block px-3 py-2 text-base font-bold">Portfolio</a>
              <a href="#insights" className="block px-3 py-2 text-base font-medium">Insights</a>
              <div className="px-3 py-2">
                <button className="bg-black text-white w-full px-6 py-3 text-sm font-medium">
                  Retain My Services
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Taking New Clients
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] uppercase mb-6">
            Executive <br className="hidden lg:block"/> Legal Counsel.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
            Advocate of the High Court of Uganda. Specialized in Corporate & Commercial Practice, Land Transactions, Criminal proceedings, Civil Litigation and all manner of Legal work. Transformed by Grace ❤️
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portfolio" className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-900 transition-colors shadow-lg shadow-black/10 text-center">
              View Representative Matters
            </a>
            <a href="#credentials" className="border border-gray-300 px-8 py-4 text-sm font-medium hover:border-black hover:bg-gray-50 transition-colors text-center">
              Review Credentials
            </a>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none relative">
          <div className="absolute inset-0 bg-gray-100 translate-x-4 translate-y-4 -z-10"></div>
          <img 
            src={heroImg} 
            alt="Counsel Mwebaza Suzan Faridah" 
            className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 border border-gray-200"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 3. AFFILIATIONS / MEMBERSHIPS */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Professional Memberships & Recognitions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tighter uppercase text-center leading-none">Uganda Law<br/>Society</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight uppercase text-center leading-none">East African<br/>Law Society</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight uppercase text-center leading-none">LDC<br/>Alumni</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight uppercase text-center leading-none">High Court<br/>Advocate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / PHILOSOPHY */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[1.1] mb-8">
              Dedicated Representation. Transformative Results.
            </h2>
            <div className="space-y-6 text-gray-600 mb-10 text-lg">
              <p>
                Navigating the Ugandan legal landscape requires more than just academic knowledge; it requires resilience, practical strategy, and unwavering dedication to the client's best interests.
              </p>
              <p>
                I provide comprehensive legal services ranging from complex corporate and commercial practices to sensitive land transactions and rigorous civil and criminal litigation. As an Advocate, my commitment is to ensure justice is served and your rights are aggressively protected in and out of the courtroom.
              </p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-16 opacity-30" />
          </div>
          <div className="flex-1 relative order-first md:order-last">
            <div className="aspect-square bg-gray-100 p-8 flex items-center justify-center">
               <div className="w-full h-full border border-gray-300 p-2">
                 <img 
                    src={aboutImg} 
                    alt="Lawyer presenting" 
                    className="w-full h-full object-cover grayscale-[30%]"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREDENTIALS & EXPERIENCE (THE RESUME) */}
      <section id="credentials" className="py-24 bg-[#f5f5f5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Education & Bar */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">The Pedigree</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12">Credentials</h2>
              
              <div className="space-y-12">
                 <div>
                    <h3 className="flex items-center gap-3 text-lg font-bold uppercase mb-6"><GraduationCap className="w-6 h-6"/> Education</h3>
                    <div className="border-l-2 border-black pl-5 ml-[11px] space-y-8">
                       <div className="relative">
                          <div className="absolute w-3 h-3 bg-black rounded-full -left-[27px] top-1.5"></div>
                          <div className="font-bold text-lg leading-tight uppercase tracking-tight">Post-Graduate Diploma<br/>in Legal Practice</div>
                          <div className="text-gray-600 mt-1">Law Development Centre, Kampala</div>
                          <div className="text-sm text-gray-500 mt-2 italic">Bar Course</div>
                       </div>
                       <div className="relative">
                          <div className="absolute w-3 h-3 bg-black rounded-full -left-[27px] top-1.5"></div>
                          <div className="font-bold text-lg leading-tight uppercase tracking-tight">Bachelor of Laws (LLB)<br/>Honors</div>
                          <div className="text-gray-600 mt-1">Mountains of the Moon University</div>
                       </div>
                    </div>
                 </div>
                 
                 <div>
                    <h3 className="flex items-center gap-3 text-lg font-bold uppercase mb-6"><Award className="w-6 h-6"/> Admissions</h3>
                    <ul className="pl-12 list-disc space-y-3 text-gray-800 font-medium marker:text-gray-400">
                      <li>The High Court of Uganda</li>
                      <li>All Courts Subordinate Thereto</li>
                      <li>Uganda Law Society (ULS)</li>
                      <li>East African Law Society (EALS)</li>
                    </ul>
                 </div>
              </div>
            </div>
            
            {/* Right Column: Career Timeline */}
            <div className="lg:col-span-7">
              <h3 className="flex items-center gap-3 text-lg font-bold uppercase mb-8 lg:mt-24"><Briefcase className="w-6 h-6"/> Career History</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-300">
                
                {/* Timeline Item 1 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-[3px] top-2 w-4 h-4 bg-black border-4 border-[#f5f5f5] rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <div className="font-bold text-xl uppercase tracking-tight">Advocate</div>
                      <time className="font-mono text-sm font-bold bg-gray-100 px-2 py-1">Present</time>
                    </div>
                    <div className="font-medium text-gray-500 mb-4">Luzige Lubega Kavuma & Co. Advocates</div>
                    <p className="text-sm text-gray-600 leading-relaxed">Practicing across a wide spectrum of legal disciplines including Corporate & Commercial Practice, sophisticated Land Transactions, Criminal proceedings, and Civil Litigation in Kampala and beyond.</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-12 group">
                  <div className="absolute left-[3px] top-2 w-4 h-4 bg-gray-400 border-4 border-[#f5f5f5] rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <div className="font-bold text-xl uppercase tracking-tight">Enrolled Advocate</div>
                      <time className="font-mono text-sm font-bold bg-gray-100 px-2 py-1">Nov 28, 2024</time>
                    </div>
                    <div className="font-medium text-gray-500 mb-4">High Court of Uganda</div>
                    <p className="text-sm text-gray-600 leading-relaxed">Officially enrolled on the Roll of Advocates of Uganda, joining the national bar to formally represent clients at all levels of the judiciary. "Transformed by Grace."</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. REPRESENTATIVE MATTERS (PORTFOLIO CORE) */}
      <section id="portfolio" className="py-32 bg-[#111111] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">The Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-tight">Representative<br/>Matters</h2>
              <p className="text-gray-400 text-lg">A curated selection of recent victories and complex transactions, strictly anonymized to preserve attorney-client confidentiality privileges.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            
            {/* Matter 1 */}
            <div className="bg-[#151515] p-10 hover:bg-[#1a1a1a] transition-colors relative group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-gray-600 px-3 py-1">Corporate & Commercial</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 leading-tight tracking-tight uppercase">Complex Commercial Structuring</h3>
              <div className="space-y-6 text-gray-300 text-sm">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Challenge</h4>
                  <p>A regional enterprise faced structural disputes among shareholders threatening their operational capacity and compliance with the Companies Act.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Strategy</h4>
                  <p>Drafted comprehensive shareholder agreements and restructured the corporate governance framework to ensure clear dispute resolution mechanisms.</p>
                </div>
                <div className="bg-white/5 p-4 border-l-2 border-white">
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">The Result</h4>
                  <p className="text-white">Averted corporate dissolution, aligning the board's interests and securing the ongoing profitability of the enterprise.</p>
                </div>
              </div>
            </div>

            {/* Matter 2 */}
            <div className="bg-[#151515] p-10 hover:bg-[#1a1a1a] transition-colors relative group">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-gray-600 px-3 py-1">Land Transactions</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 leading-tight tracking-tight uppercase">Prime Real Estate Conveyance</h3>
              <div className="space-y-6 text-gray-300 text-sm">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Challenge</h4>
                  <p>Client sought to acquire multiple hectares of prime land heavily encumbered with historical caveats and conflicting third-party claims.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Strategy</h4>
                  <p>Conducted rigorous due diligence at the land registry, systematically discharging invalid caveats and negotiating undisputed title transfers.</p>
                </div>
                <div className="bg-white/5 p-4 border-l-2 border-white">
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">The Result</h4>
                  <p className="text-white">Successfully secured a clean Certificate of Title for the client, paving the way for a major commercial development project.</p>
                </div>
              </div>
            </div>

             {/* Matter 3 */}
             <div className="bg-[#151515] p-10 hover:bg-[#1a1a1a] transition-colors relative group">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-gray-600 px-3 py-1">Civil Litigation</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 leading-tight tracking-tight uppercase">High-Stakes Contract Enforcement</h3>
              <div className="space-y-6 text-gray-300 text-sm">
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Challenge</h4>
                  <p>Client suffered significant damages due to a persistent breach of a multimillion-shilling procurement contract by a key supplier.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">The Strategy</h4>
                  <p>Instituted civil proceedings in the High Court while aggressively pursuing prejudgment attachments to secure the supplier's assets.</p>
                </div>
                <div className="bg-white/5 p-4 border-l-2 border-white">
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">The Result</h4>
                  <p className="text-white">Procured a favorable judgment with full recovery of damages and costs, restoring the client's financial position.</p>
                </div>
              </div>
            </div>

             {/* Matter 4 - Contact Overlay */}
             <div className="bg-black p-10 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center items-center text-center">
              <Scale className="w-16 h-16 text-white mb-6 opacity-50" />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Your Matter Could Be Next</h3>
              <p className="text-gray-400 mb-8 max-w-sm">Every case requires a tailored, aggressive approach. Let's discuss the strategy for your unique situation.</p>
              <button className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto">
                Request Strategy Session
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. INSIGHTS & MEDIA (THOUGHT LEADERSHIP) */}
      <section id="insights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">Thought Leadership</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Insights & Media</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Featured Article */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-200 relative">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-1 z-10 flex items-center gap-2">
                  <Newspaper className="w-4 h-4" /> Publication
                </div>
                <img src={insightsImg} alt="Law Journal" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:underline underline-offset-4 leading-tight">The Evolving Landscape of Corporate Law in Uganda</h3>
              <p className="text-gray-600 mb-4">An analysis of recent amendments in the Companies Act and URSB regulations, and what these regulatory shifts mean for corporate governance and liability in East African businesses.</p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200 pt-4 block">October 12, 2024 • 8 Min Read</span>
            </div>

            {/* List of articles/talks */}
            <div className="flex flex-col justify-between">
              {[
                { type: "Keynote Speech", title: "Navigating Hostile Takeovers in the Post-Pandemic Era", org: "Global Finance Summit", date: "Aug 2024" },
                { type: "Opinion Editorial", title: "Why Most Non-Competes Will Fail in 2025 Courtrooms", org: "Business Insider Legal", date: "Jul 2024" },
                { type: "Panelist", title: "Women in High-Stakes Litigation: Breaking the Boardroom Ceiling", org: "Women in Law Expo", date: "May 2024" },
                { type: "Whitepaper", title: "Defensive Structuring for Biotech Startups", org: "Mwebaza Substack", date: "Feb 2024" },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer border-b border-gray-200 pb-6 mb-6 last:mb-0 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">{item.type}</span>
                      <h4 className="text-xl font-bold tracking-tight mb-2 group-hover:text-gray-500 transition-colors leading-tight">{item.title}</h4>
                      <p className="text-sm text-gray-800 font-medium">{item.org}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-400 shrink-0 bg-gray-50 px-2 py-1">{item.date}</span>
                  </div>
                </div>
              ))}
              
              <button className="mt-8 border border-black px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors self-start">
                View Full Archive
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#fbfbfb] border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">Client Perspectives</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">Endorsements</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {[
              { 
                name: "Kato Emmanuel", 
                role: "Director, Katon Logistics Ltd", 
                quote: "When we faced relentless breaches of contract by a regional supplier, Suzan's swift action in the Commercial Court not only recovered our funds but protected our business. She is a phenomenal advocate.",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&q=80"
              },
              { 
                name: "Namatovu Sarah", 
                role: "Property Developer", 
                quote: "Purchasing mailo land in Wakiso is a minefield of historical caveats and disputes. Suzan meticulously conducted the due diligence and cleared the title, ensuring our development proceeded without a hitch.",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&fit=crop&q=80"
              },
              { 
                name: "Dr. Mukasa Brian", 
                role: "Founder, TechHub Kampala", 
                quote: "Scaling our startup meant dealing with complex URSB compliance and aggressive investor terms. Having Suzan as our corporate counsel has been the best strategic decision we've made. She protects our interests fiercely.",
                image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=150&fit=crop&q=80"
              }
            ].map((item, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[450px] p-10 border border-gray-200 bg-white snap-start">
                <div className="flex text-black mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-800 mb-10 italic leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={item.image} alt={`${item.name} Avatar`} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA (INTAKE FORM UI INTRO) */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="border-[1.5px] border-black p-12 md:p-20 relative bg-[#fbfbfb]">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-black -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-black translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-black -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-black translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-tight">
              Request a Case Evaluation
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
              I accept a limited number of clients per quarter to ensure the highest standard of representation. Please fill out our secure intake form to begin the triage process.
            </p>
            <button className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors inline-flex items-center gap-3">
              Begin Secure INTAKE <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest">100% Confidential • No Obligation</p>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#111111] text-white pt-20 pb-10 border-t text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Col 1 */}
            <div>
              <span className="font-bold text-2xl tracking-tighter uppercase mb-6 block leading-none">
                Counsel Mwebaza<br/><span className="text-gray-500">Suzan Faridah</span>
              </span>
              <p className="text-gray-400 mb-6 italic leading-relaxed">
                Corporate & Commercial Practice, Land Transactions, Civil Litigation, and Criminal Proceedings.
              </p>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <p>Luzige Lubega Kavuma & Co. Advocates<br/>Kampala, Uganda</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>0777085526 / 0704412642</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>legal@mwebazacounsel.com</p>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Portfolio</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">The Philosophy</a></li>
                <li><a href="#credentials" className="hover:text-white transition-colors">Education & Admissions</a></li>
                <li><a href="#credentials" className="hover:text-white transition-colors">Career Timeline</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Representative Matters</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Media & Speeches</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Connect & Resources</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="https://x.com/SuzanFaridah25" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X (Twitter) Profile</a></li>
                <li><a href="https://www.linkedin.com/in/suzan-faridah-mwebaza-0a4497384" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Secure Client Portal Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wire Instructions</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Legal Briefing</h4>
              <p className="text-gray-400 mb-4">Subscribe targeting major shifts in commercial law and corporate compliance.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Corporate Email" 
                  className="bg-[#1a1a1a] border border-gray-800 text-white px-4 py-3 w-full text-sm focus:ring-1 focus:ring-white outline-none"
                  required
                />
                <button type="submit" className="bg-white text-black px-4 py-3 font-bold hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Counsel Mwebaza Suzan Faridah. All rights reserved.
            </p>
            <div className="text-gray-600 text-xs max-w-2xl text-center md:text-right leading-relaxed">
              DISCLAIMER: The information contained in this website is provided for informational purposes only, and should not be construed as legal advice on any subject matter. Prior results do not guarantee a similar outcome.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
