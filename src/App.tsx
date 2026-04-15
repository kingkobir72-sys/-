/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Wrench, 
  ThermometerSnowflake, 
  Settings, 
  Star,
  MapPin,
  User,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "01570205393";
const WHATSAPP_LINK = `https://wa.me/8801570205393?text=I%20need%20fridge%20repair%20service%20in%20Mohammadpur`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* SEO Hidden Content */}
      <h1 className="sr-only">Fridge repair Mohammadpur - Fridge service Dhaka - Fridge gas refill near me</h1>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ThermometerSnowflake className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">Quick<span className="text-blue-600">Repair</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">সার্ভিসসমূহ</a>
            <a href="#benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">কেন আমাদের বেছে নেবেন</a>
            <a href="#reviews" className="text-sm font-medium hover:text-blue-600 transition-colors">রিভিউ</a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <Phone className="w-4 h-4" /> কল করুন
            </a>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="md:hidden bg-blue-600 text-white p-2 rounded-full shadow-lg">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
              >
                <Clock className="w-4 h-4" /> ৩০ মিনিটে টেকনিশিয়ান আপনার দরজায়!
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black leading-tight mb-6 text-slate-900"
              >
                Mohammadpur এ দ্রুত <span className="text-blue-600">ফ্রিজ সার্ভিস</span> – এখনই বুক করুন!
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                ফ্রিজ ঠিক করা, গ্যাস রিফিল ও মেইনটেনেন্স – মোহাম্মদপুরের সেরা টেকনিশিয়ান দিয়ে আপনার ফ্রিজ সার্ভিস করুন আজই।
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
                >
                  <PhoneCall className="w-6 h-6 group-hover:animate-bounce" /> কল করুন: {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-green-200"
                >
                  <MessageCircle className="w-6 h-6" /> WhatsApp করুন
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex text-orange-400">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-xs font-bold text-slate-500">১০০০+ খুশি কাস্টমার</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-600 w-6 h-6" />
                  <p className="text-sm font-bold text-slate-700">৫+ বছরের অভিজ্ঞতা</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5 relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">সার্ভিস বুক করুন</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">আপনার নাম</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="নাম লিখুন" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">ফোন নম্বর</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="tel" 
                        placeholder="০১৫XXXXXXXX" 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">সার্ভিসের ধরন</label>
                    <div className="relative">
                      <Settings className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none">
                        <option>ফ্রিজ রিপেয়ার</option>
                        <option>গ্যাস রিফিল</option>
                        <option>রেগুলার সার্ভিসিং</option>
                        <option>ডিপ মেইনটেনেন্স</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                      formStatus === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100'
                    }`}
                  >
                    {formStatus === 'idle' && <>বুকিং কনফার্ম করুন <ChevronRight className="w-5 h-5" /></>}
                    {formStatus === 'submitting' && <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                    {formStatus === 'success' && <><CheckCircle2 className="w-5 h-5" /> সফলভাবে পাঠানো হয়েছে!</>}
                  </button>
                </form>
                <p className="text-xs text-slate-400 text-center mt-4">আমরা আপনার তথ্য গোপন রাখব।</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full -z-0" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">আমাদের সার্ভিসসমূহ</h2>
            <p className="text-slate-600">আমরা সব ধরনের ফ্রিজ ও রেফ্রিজারেটর অত্যন্ত দক্ষতার সাথে মেরামত করি।</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "ফ্রিজ রিপেয়ার", 
                desc: "যেকোনো যান্ত্রিক সমস্যা বা পার্টস পরিবর্তন।", 
                icon: <Wrench className="w-8 h-8" />,
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "গ্যাস রিফিল", 
                desc: "উন্নত মানের গ্যাস রিফিল ও লিক চেক।", 
                icon: <ThermometerSnowflake className="w-8 h-8" />,
                color: "bg-cyan-50 text-cyan-600"
              },
              { 
                title: "রেগুলার সার্ভিসিং", 
                desc: "ফ্রিজের আয়ু বাড়াতে নিয়মিত চেকআপ।", 
                icon: <Settings className="w-8 h-8" />,
                color: "bg-orange-50 text-orange-600"
              },
              { 
                title: "ডিপ মেইনটেনেন্স", 
                desc: "সম্পূর্ণ ক্লিনিং ও ইন্টারনাল মেইনটেনেন্স।", 
                icon: <ShieldCheck className="w-8 h-8" />,
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">কেন আমাদের <span className="text-blue-400">বেছে নেবেন?</span></h2>
              
              <div className="space-y-6">
                {[
                  { title: "একই দিনে সার্ভিস", desc: "আমরা আপনার সময়ের মূল্য বুঝি, তাই দ্রুত সার্ভিস নিশ্চিত করি।", icon: <Clock /> },
                  { title: "অভিজ্ঞ টেকনিশিয়ান", desc: "আমাদের প্রতিটি টেকনিশিয়ান ৫+ বছরের অভিজ্ঞতাসম্পন্ন।", icon: <User /> },
                  { title: "সাশ্রয়ী মূল্য", desc: "সেরা সার্ভিস পান একদম বাজেটের মধ্যে কোনো লুকানো খরচ ছাড়াই।", icon: <ShieldCheck /> },
                  { title: "হোম সার্ভিস", desc: "আপনার বাসায় গিয়েই আমরা ফ্রিজ মেরামত করে থাকি।", icon: <MapPin /> }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 h-fit">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/repair1/400/500" alt="Repair" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
                <div className="bg-blue-600 p-6 rounded-2xl">
                  <p className="text-3xl font-black">১০০০+</p>
                  <p className="text-sm opacity-80">সফল সার্ভিস</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-500 p-6 rounded-2xl">
                  <p className="text-3xl font-black">৫+</p>
                  <p className="text-sm opacity-80">বছরের অভিজ্ঞতা</p>
                </div>
                <img src="https://picsum.photos/seed/repair2/400/500" alt="Repair" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">কাস্টমাররা যা বলছেন</h2>
            <div className="flex justify-center text-orange-400 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-slate-600">আমাদের সার্ভিসে সন্তুষ্ট ১০০০+ কাস্টমার</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "আরিফ হোসেন", area: "মোহাম্মদপুর", text: "খুবই দ্রুত সার্ভিস পেয়েছি। টেকনিশিয়ান ৩০ মিনিটের মধ্যেই চলে এসেছিলেন। ধন্যবাদ!" },
              { name: "নাসরিন সুলতানা", area: "লালমাটিয়া", text: "ফ্রিজের গ্যাস রিফিল করার পর এখন খুব ভালো ঠান্ডা হচ্ছে। দামও অনেক কম ছিল।" },
              { name: "কামরুল ইসলাম", area: "শ্যামলী", text: "পেশাদার টেকনিশিয়ান এবং ব্যবহার খুব ভালো। আমি সবাইকে রিকমেন্ড করব।" }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white p-2 rounded-lg">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6">আপনার ফ্রিজ কি সমস্যা করছে?</h2>
              <p className="text-xl opacity-90 mb-10">দেরি না করে আজই মোহাম্মদপুরের সেরা সার্ভিস বুক করুন। আমরা ২৪/৭ আপনার সেবায় নিয়োজিত।</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl"
                >
                  <Phone className="w-6 h-6" /> কল করুন: {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" /> WhatsApp করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ThermometerSnowflake className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">Quick<span className="text-blue-600">Repair</span></span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-sm font-bold text-slate-700 mb-2">সার্ভিস এরিয়া:</p>
              <p className="text-sm text-slate-500">মোহাম্মদপুর, লালমাটিয়া, শ্যামলী, ধানমন্ডি ও আশেপাশের এলাকা।</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all">
                <ShieldCheck className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-400">© ২০২৪ QuickRepair. সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100">
        <div className="flex gap-3">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
          >
            <Phone className="w-5 h-5" /> কল করুন
          </a>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
