import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Factory, 
  Cpu, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  FileText,
  CheckCircle2,
  MessageSquare,
  Send,
  Leaf,
  BarChart3,
  ExternalLink,
  Play
} from 'lucide-react';
import { Language, translations } from './translations';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const JAHLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 400 200" className={className} fill="currentColor">
    {/* J */}
    <path d="M40 40h60v80c0 22-18 40-40 40s-40-18-40-40h40c0 0 0 0 0 0 0 0 0 0 0 0z" className="hidden" />
    <path d="M20 120c0 22.1 17.9 40 40 40h60V40H80v80c0 0 0 0 0 0 0 0 0 0 0 0H20z" />
    {/* A */}
    <path d="M160 160V80c0-22.1 17.9-40 40-40s40 17.9 40 40v80h-30v-40h-20v40h-30zm50-70v10h-20V90c0-5.5 4.5-10 10-10s10 4.5 10 10z" />
    {/* H */}
    <path d="M280 40h30v50h30V40h30v120h-30v-40h-30v40h-30V40z" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const t = translations[lang];
  const chatEndRef = useRef<HTMLDivElement>(null);

  const productSpecs = {
    harness: { voltage: '12V / 24V / 48V', temp: '-40°C to +125°C', material: 'OFC Copper / Aluminum', standard: 'ISO 6722 / LV 112' },
    custom: { voltage: '5V to 60V', temp: '-40°C to +105°C', material: 'Shielded Twisted Pair', standard: 'USCAR-2 / GMW 3191' },
    oem: { voltage: 'High Precision Low Voltage', temp: '-40°C to +85°C', material: 'Silver-Plated Copper', standard: 'IATF 16949 / VDA 6.3' }
  };

  const generateTrackingId = () => {
    return 'UZJ-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleQuickAction = (action: string) => {
    let text = '';
    if (action === 'quote') text = "I'd like to request a technical quote for a new project.";
    if (action === 'status') text = "I want to check the status of my existing order.";
    if (action === 'tech') text = "Can you provide technical specifications for your wiring harnesses?";
    
    if (text) {
      setUserInput(text);
      // Optional: auto-submit
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateTrackingId();
    setTrackingId(id);
    alert(`${t.forms.success_id}: ${id}`);
  };

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput;
    setUserInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...chatMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: t.ai.system,
        }
      });
      
      const modelText = response.text || "I'm sorry, I couldn't process that.";
      setChatMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setChatMessages(prev => [...prev, { role: 'model', text: "Service temporarily unavailable. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <JAHLogo className="w-12 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-2xl tracking-tighter text-white">UZJAH</span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-brand-blue font-bold">Uzbekistan</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button 
                key={key} 
                onClick={() => scrollTo(key)}
                className="text-white/80 hover:text-brand-blue font-medium text-sm uppercase tracking-widest transition-colors"
              >
                {value}
              </button>
            ))}
            
            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-6">
              {Object.values(Language).map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className={`text-xs font-bold px-2 py-1 rounded transition-all ${lang === l ? 'bg-brand-blue text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-industrial-blue flex flex-col items-center justify-center gap-8"
          >
            <JAHLogo className="w-24 h-12 text-brand-blue mb-8" />
            {Object.entries(t.nav).map(([key, value]) => (
              <button 
                key={key} 
                onClick={() => scrollTo(key)}
                className="text-white text-2xl font-display font-bold uppercase tracking-widest"
              >
                {value}
              </button>
            ))}
            <div className="flex gap-4 mt-8">
              {Object.values(Language).map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className={`text-lg font-bold px-4 py-2 rounded ${lang === l ? 'bg-brand-blue text-white' : 'text-white/60'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-industrial-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://as2.ftcdn.net/v2/jpg/18/77/09/55/1000_F_1877095552_Cqflw7Dc9KZ88U9kHrZVANHk0Yvk737B.jpg" 
            alt="Automotive Wiring Harness Production" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue via-industrial-blue/60 to-transparent"></div>
          <div className="absolute inset-0 industrial-grid opacity-20"></div>
        </div>

        {/* Stock Ticker */}
        <div className="absolute top-24 left-0 w-full z-20 overflow-hidden bg-white/5 backdrop-blur-md border-y border-white/10 py-2">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Yongding Group (600105.SH)</span>
                <span className="text-emerald-400 font-mono text-sm">¥32.45 <span className="text-[10px]">+2.4%</span></span>
                <span className="text-white/20">|</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Market Status</span>
                <span className="text-emerald-400 font-mono text-sm">OPEN</span>
                <span className="text-white/20">|</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-blue text-white text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Automotive Excellence
            </span>
            <h1 className="font-display font-bold text-6xl md:text-8xl text-white leading-none mb-6 tracking-tighter">
              UZJAH
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed">
              {t.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-industrial-blue transition-all flex items-center gap-2 group"
              >
                {t.hero.cta_contact}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('investors')}
                className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
              >
                {t.hero.cta_invest}
              </button>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-px h-12 bg-white/20"></div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">{t.clients.title}</h4>
        </div>
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center gap-20 px-10 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <span className="font-display font-black text-2xl text-industrial-blue tracking-tighter italic">PARTNER_{i}</span>
              <Factory size={32} className="text-industrial-blue" />
            </div>
          ))}
        </div>
      </section>

      {/* Production Dashboard */}
      <section className="py-12 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.dashboard.active_lines}</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-display font-bold text-white">12 / 12</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.dashboard.quality_rate}</span>
              <span className="text-2xl font-display font-bold text-emerald-400">99.98%</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.dashboard.daily_output}</span>
              <span className="text-2xl font-display font-bold text-white">2,450</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{t.dashboard.status}</span>
              <span className="text-2xl font-display font-bold text-brand-blue">OPTIMAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">{t.about.subtitle}</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-industrial-blue mb-8 leading-tight">
              {t.about.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t.about.content}
            </p>
            <div className="space-y-4">
              {t.about.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue mt-1 shrink-0" size={20} />
                  <span className="font-medium text-slate-800">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 overflow-hidden rounded-sm">
              <img 
                src="https://picsum.photos/seed/jinting-factory/800/800" 
                alt="Jinting SJAHL Production Line" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-industrial-blue p-8 text-white hidden md:block">
              <div className="text-4xl font-display font-bold mb-1">1997</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Group Established</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl uppercase tracking-widest mb-4">Group Milestones</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: '1997', event: 'Shanghai Jinting (SJAHL) established in Baoshan, Shanghai.' },
              { year: '2005', event: 'Strategic expansion into global automotive supply chains.' },
              { year: '2015', event: 'Yongding Group (600105.SH) strengthens automotive division.' },
              { year: '2024', event: 'UZJAH established as the first major hub in Central Asia.' }
            ].map((m, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10 py-4">
                <div className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,174,239,0.5)]"></div>
                <div className="text-brand-blue font-display font-bold text-2xl mb-2">{m.year}</div>
                <p className="text-white/60 text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-industrial-blue mb-4">{t.products.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: 'harness', icon: <Cpu size={32} /> },
              { key: 'custom', icon: <Factory size={32} /> },
              { key: 'oem', icon: <Users size={32} /> }
            ].map((prod) => (
              <motion.div
                key={prod.key}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProduct(prod.key)}
                className="bg-white p-10 border border-slate-200 hover:border-brand-blue transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <BarChart3 size={20} className="text-brand-blue" />
                </div>
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-industrial-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {prod.icon}
                </div>
                <h4 className="font-display font-bold text-xl mb-4 text-industrial-blue">
                  {(t.products as any)[prod.key].name}
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  {(t.products as any)[prod.key].desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="py-24 bg-industrial-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">{t.facility.title}</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-12">
                {t.facility.desc}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l-2 border-brand-blue pl-6">
                  <div className="text-3xl font-display font-bold mb-1">200+</div>
                  <div className="text-xs uppercase tracking-widest opacity-50">Automated Machines</div>
                </div>
                <div className="border-l-2 border-brand-blue pl-6">
                  <div className="text-3xl font-display font-bold mb-1">100%</div>
                  <div className="text-xs uppercase tracking-widest opacity-50">Testing Accuracy</div>
                </div>
              </div>
              <button className="px-8 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-industrial-blue transition-all flex items-center gap-3 group">
                <Play size={18} fill="currentColor" />
                Virtual Factory Tour
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/harness-test/400/500" className="w-full aspect-[3/4] object-cover rounded-sm" referrerPolicy="no-referrer" alt="Electrical Testing" />
                <img src="https://picsum.photos/seed/wire-cutting/400/300" className="w-full aspect-square object-cover rounded-sm" referrerPolicy="no-referrer" alt="Automated Wire Cutting" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/crimping/400/300" className="w-full aspect-square object-cover rounded-sm" referrerPolicy="no-referrer" alt="Precision Crimping" />
                <img src="https://picsum.photos/seed/assembly/400/500" className="w-full aspect-[3/4] object-cover rounded-sm" referrerPolicy="no-referrer" alt="Harness Assembly" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/green1/400/400" className="w-full aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/green2/400/400" className="w-full aspect-square object-cover rounded-sm grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Leaf className="text-emerald-500 mb-6" size={48} />
              <h2 className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em] mb-4">{t.sustainability.subtitle}</h2>
              <h3 className="font-display font-bold text-4xl md:text-5xl text-industrial-blue mb-8 leading-tight">
                {t.sustainability.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t.sustainability.desc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.sustainability.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-emerald-50 border-l-4 border-emerald-500">
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={18} />
                    <span className="text-sm font-bold text-emerald-900">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display font-bold text-4xl text-industrial-blue mb-4">{t.news.title}</h2>
              <div className="w-20 h-1 bg-brand-blue"></div>
            </div>
            <button className="text-brand-blue font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
              {t.news.more} <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.news.items.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 p-8 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{item.date}</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[8px] uppercase font-bold tracking-widest">{item.category}</span>
                </div>
                <h4 className="font-display font-bold text-lg text-industrial-blue mb-6 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-brand-blue text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Read More <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Center */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 p-12 border border-slate-200">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-industrial-blue flex items-center justify-center text-white">
                <FileText size={24} />
              </div>
              <h2 className="font-display font-bold text-3xl text-industrial-blue">{t.downloads.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.downloads.items.map((file, i) => (
                <div key={i} className="bg-white p-6 border border-slate-200 flex flex-col justify-between hover:border-brand-blue transition-all group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-[8px] font-bold uppercase tracking-widest">{file.type}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{file.size}</span>
                    </div>
                    <h5 className="font-bold text-industrial-blue mb-6">{file.name}</h5>
                  </div>
                  <button className="w-full py-3 border border-slate-200 text-slate-400 text-[10px] uppercase tracking-widest font-bold group-hover:bg-industrial-blue group-hover:text-white group-hover:border-industrial-blue transition-all flex items-center justify-center gap-2">
                    <Download size={14} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISO Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-display font-bold text-3xl text-industrial-blue mb-16">{t.iso.title}</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {['ISO 9001', 'ISO 14001', 'IATF 16949'].map((cert) => (
              <motion.div 
                key={cert}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-brand-blue transition-colors">
                  <ShieldCheck size={48} className="text-slate-300 group-hover:text-brand-blue transition-colors" />
                </div>
                <span className="font-display font-bold text-slate-400 group-hover:text-industrial-blue transition-colors uppercase tracking-widest text-sm">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {t.why.items.map((item, i) => (
              <div key={i} className="bg-white p-8 border-t-4 border-brand-blue shadow-sm">
                <h4 className="font-display font-bold text-lg mb-4 text-industrial-blue uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-brand-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">{t.team.subtitle}</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-industrial-blue mb-4">{t.team.title}</h3>
            <div className="w-20 h-1 bg-brand-blue mx-auto"></div>
          </div>

          {/* Tree View Container */}
          <div className="relative flex flex-col items-center">
            
            {/* Level 1: General Manager */}
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.15, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 border-2 border-brand-blue shadow-xl flex flex-col items-center text-center w-72 group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner ring-4 ring-brand-blue/10">
                  <img 
                    src="https://picsum.photos/seed/gm/300/300" 
                    alt={(t.team.members as any).gm.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h5 className="font-display font-bold text-industrial-blue text-xl">{(t.team.members as any).gm.name}</h5>
                <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mt-2">{(t.team.members as any).gm.role}</p>
              </motion.div>
            </div>

            {/* Vertical Line 1 */}
            <div className="h-12 w-0.5 bg-slate-300"></div>

            {/* Level 2: Deputy General Manager */}
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.1, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 border border-slate-200 shadow-lg flex flex-col items-center text-center w-64 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-inner">
                  <img 
                    src="https://picsum.photos/seed/dgm/200/200" 
                    alt={(t.team.members as any).dgm.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h5 className="font-display font-bold text-industrial-blue text-lg">{(t.team.members as any).dgm.name}</h5>
                <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mt-1">{(t.team.members as any).dgm.role}</p>
              </motion.div>
            </div>

            {/* Vertical Line 2 */}
            <div className="h-12 w-0.5 bg-slate-300"></div>

            {/* Horizontal Branch Line */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-300 mx-auto w-[calc(100%-16rem)]"></div>
              
              <div className="grid grid-cols-2 gap-16 pt-12">
                {/* Production Branch */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical connector to branch */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-300"></div>
                  
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 bg-slate-50 px-4 py-1 rounded-full border border-slate-200">
                    {t.team.departments.production}
                  </div>
                  
                  <div className="flex flex-col gap-8">
                    {['pd', 'qc'].map((key) => (
                      <motion.div 
                        key={key}
                        whileHover={{ scale: 1.1, zIndex: 50 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white p-5 border border-slate-100 shadow-md flex items-center gap-5 w-72 group cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-50 shadow-sm">
                          <img 
                            src={`https://picsum.photos/seed/${key}/150/150`} 
                            alt={(t.team.members as any)[key].name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="text-left">
                          <h5 className="font-bold text-industrial-blue text-sm">{(t.team.members as any)[key].name}</h5>
                          <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-0.5">{(t.team.members as any)[key].role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technical Branch */}
                <div className="flex flex-col items-center relative">
                  {/* Vertical connector to branch */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-12 w-0.5 bg-slate-300"></div>

                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 bg-slate-50 px-4 py-1 rounded-full border border-slate-200">
                    {t.team.departments.technical}
                  </div>

                  <div className="flex flex-col gap-8">
                    {['ce', 'rd'].map((key) => (
                      <motion.div 
                        key={key}
                        whileHover={{ scale: 1.1, zIndex: 50 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white p-5 border border-slate-100 shadow-md flex items-center gap-5 w-72 group cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-50 shadow-sm">
                          <img 
                            src={`https://picsum.photos/seed/${key}/150/150`} 
                            alt={(t.team.members as any)[key].name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="text-left">
                          <h5 className="font-bold text-industrial-blue text-sm">{(t.team.members as any)[key].name}</h5>
                          <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-0.5">{(t.team.members as any)[key].role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-industrial-blue p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">{t.investors.title}</h2>
                <p className="text-white/70 text-lg mb-12 leading-relaxed">
                  {t.investors.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-industrial-blue font-bold uppercase tracking-widest text-sm hover:bg-brand-blue hover:text-white transition-all flex items-center gap-2">
                    <Download size={18} />
                    {t.investors.cta}
                  </button>
                  <a 
                    href="https://www.yongding.com.cn/Investor.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Globe size={18} />
                    Yongding Group (600105)
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {t.investors.stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 flex justify-between items-center">
                    <span className="text-white/60 uppercase tracking-widest text-xs font-bold">{stat.label}</span>
                    <span className="text-white font-display font-bold text-2xl">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-blue font-bold text-sm uppercase tracking-[0.3em] mb-4">{t.careers.subtitle}</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-industrial-blue mb-8">{t.careers.title}</h3>
            <div className="space-y-6">
              {[
                'Production Engineer',
                'Quality Control Specialist',
                'Supply Chain Manager',
                'Technical Technician'
              ].map((job) => (
                <div key={job} className="bg-white p-6 border border-slate-200 flex justify-between items-center hover:border-brand-blue transition-colors cursor-pointer group">
                  <span className="font-bold text-industrial-blue">{job}</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-brand-blue transition-colors" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-10 shadow-xl border border-slate-100">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t.careers.form.name}</label>
                  <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t.forms.routing}</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue outline-none transition-colors">
                    <option>{t.forms.sales}</option>
                    <option>{t.forms.hr}</option>
                    <option>{t.forms.tech}</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t.careers.form.email}</label>
                  <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t.careers.form.phone}</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-blue outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t.careers.form.cv}</label>
                <div className="relative border-2 border-dashed border-slate-200 p-8 text-center hover:border-brand-blue transition-colors cursor-pointer">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  <FileText className="mx-auto text-slate-300 mb-2" size={32} />
                  <span className="text-sm text-slate-400">Click to upload or drag and drop</span>
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-industrial-blue text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-blue transition-all">
                {t.careers.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="font-display font-bold text-4xl text-industrial-blue mb-8">{t.contact.title}</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-industrial-blue uppercase text-xs tracking-widest mb-1">Address</h5>
                      <p className="text-slate-500">{t.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-industrial-blue uppercase text-xs tracking-widest mb-1">Phone</h5>
                      <p className="text-slate-500">{t.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-industrial-blue uppercase text-xs tracking-widest mb-1">Email</h5>
                      <p className="text-slate-500">{t.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="h-full min-h-[400px] bg-slate-100 relative overflow-hidden rounded-sm group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3056.8837241258!2d67.872238!3d40.099118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA1JzU2LjgiTiA2N8KwNTInMjAuMSJF!5e0!3m2!1sen!2s!4v1709120000000!5m2!1sen!2s" 
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UZJAH Factory Location"
                ></iframe>
                <div className="absolute bottom-6 left-6 pointer-events-none">
                  <div className="bg-white p-6 shadow-2xl flex items-center gap-4 border-l-4 border-brand-blue">
                    <div className="w-10 h-10 bg-brand-blue flex items-center justify-center text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-industrial-blue">UZJAH Factory</div>
                      <div className="text-[10px] text-slate-500 font-mono mb-1 tracking-tighter">40.099118, 67.872238</div>
                      <div className="text-xs text-slate-400 uppercase tracking-widest">Jizzakh, Uzbekistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Spec Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-industrial-blue/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl p-8 md:p-12 shadow-2xl rounded-sm overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-industrial-blue transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-blue flex items-center justify-center text-white">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-display font-bold text-3xl text-industrial-blue">
                  {(t.products as any)[selectedProduct].name}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{t.specs.voltage}</span>
                    <p className="font-bold text-industrial-blue">{(productSpecs as any)[selectedProduct].voltage}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{t.specs.temp}</span>
                    <p className="font-bold text-industrial-blue">{(productSpecs as any)[selectedProduct].temp}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{t.specs.material}</span>
                    <p className="font-bold text-industrial-blue">{(productSpecs as any)[selectedProduct].material}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{t.specs.standard}</span>
                    <p className="font-bold text-industrial-blue">{(productSpecs as any)[selectedProduct].standard}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    scrollTo('contact');
                  }}
                  className="px-8 py-4 bg-industrial-blue text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-blue transition-all"
                >
                  {t.hero.cta_contact}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ChatBot */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white shadow-2xl border border-slate-200 flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="bg-industrial-blue p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">UZJAH Assistant</div>
                    <div className="text-[10px] opacity-60 uppercase tracking-widest">AI Powered</div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 border border-slate-100">
                    {t.ai.welcome}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 ml-11">
                  {Object.entries(t.ai.quick_actions).map(([key, label]) => (
                    <button 
                      key={key}
                      onClick={() => handleQuickAction(key)}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-industrial-blue hover:border-brand-blue hover:text-brand-blue transition-all"
                    >
                      {label as string}
                    </button>
                  ))}
                </div>

                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 ${msg.role === 'user' ? 'bg-slate-800' : 'bg-brand-blue'}`}>
                      {msg.role === 'user' ? <Users size={16} /> : <Cpu size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl shadow-sm text-sm border ${msg.role === 'user' ? 'bg-industrial-blue text-white border-industrial-blue rounded-tr-none' : 'bg-white text-slate-700 border-slate-100 rounded-tl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white shrink-0">
                      <Cpu size={16} />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-400 border border-slate-100 flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={t.ai.placeholder}
                  className="flex-1 bg-slate-100 border-none outline-none px-4 py-2 text-sm rounded-full focus:ring-2 focus:ring-brand-blue transition-all"
                />
                <button type="submit" disabled={isTyping} className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50">
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-brand-blue text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative group"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
          )}
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-industrial-blue pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <JAHLogo className="w-12 h-6 text-brand-blue" />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-2xl tracking-tighter">UZJAH</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-brand-blue font-bold">Uzbekistan</span>
                </div>
              </div>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                Leading the way in automotive wiring solutions through innovation, quality, and strategic partnerships.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all cursor-pointer">
                    <Globe size={18} className="opacity-40" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h6 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Quick Links</h6>
              <ul className="space-y-4">
                {Object.entries(t.nav).map(([key, value]) => (
                  <li key={key}>
                    <button onClick={() => scrollTo(key)} className="text-white/60 hover:text-brand-blue transition-colors text-sm uppercase tracking-widest font-medium">
                      {value}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/40">Languages</h6>
              <ul className="space-y-4">
                {Object.values(Language).map((l) => (
                  <li key={l}>
                    <button onClick={() => toggleLang(l)} className={`text-sm uppercase tracking-widest font-medium transition-colors ${lang === l ? 'text-brand-blue' : 'text-white/60 hover:text-white'}`}>
                      {l === Language.EN ? 'English' : l === Language.RU ? 'Русский' : l === Language.UZ ? 'O\'zbekcha' : '中文'}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} UZJAH. {t.footer.rights}
            </p>
            <div className="flex gap-8 text-white/20 text-[10px] uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
