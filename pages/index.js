import Head from 'next/head';
import React from 'react';
import { Beaker, Youtube, BookOpen, Facebook, MessageCircle, ChevronDown, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mr. Abdallah Ashraf | أقوى شرح كيمياء ثانوية عامة</title>
        <meta name="description" content="الموقع الرسمي لمستر عبد الله أشرف، مدرس الكيمياء للثانوية العامة. شرح مبسط، مراجعات نهائية، وحل أسئلة الامتحانات." />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          /* تحسين شكل السكرول بار */
          ::-webkit-scrollbar { width: 10px; }
          ::-webkit-scrollbar-track { background: #0f172a; }
          ::-webkit-scrollbar-thumb { background: #22d3ee; border-radius: 5px; }
          ::-webkit-scrollbar-thumb:hover { background: #0891b2; }
        `}</style>
      </Head>

      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white" dir="rtl">
        
        {/* --- Navbar --- */}
        <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-2 hover:text-cyan-300 transition cursor-pointer">
              <Beaker className="animate-pulse" /> Mr. Abdallah Ashraf
            </h1>
            <div className="flex gap-4">
              <a href="https://youtube.com/@mr.abdallahashraf-chemistr9370" target="_blank" className="flex items-center gap-1 hover:text-red-500 transition font-medium">
                <span>📺</span> <span className="hidden md:inline">يوتيوب</span>
              </a>
              {/* ✅ اللينك الجديد */}
              <a href="https://www.facebook.com/share/17yD6mqBmr/" target="_blank" className="flex items-center gap-1 hover:text-blue-500 transition font-medium">
                <span>📘</span> <span className="hidden md:inline">فيسبوك</span>
              </a>
            </div>
          </div>
        </nav>

        {/* --- Hero Section --- */}
        <header className="py-20 text-center container mx-auto px-6 relative overflow-hidden min-h-[90vh] flex flex-col justify-center items-center">
          {/* تأثير خلفية */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

          {/* بادج السنة الجديدة */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-bold animate-bounce">
            <GraduationCap size={18} />
            دفعة 2026
          </div>

          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-500/20">
            <img 
              src="/mr-abdallah.jpg" 
              alt="Mr. Abdallah Ashraf" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover bg-slate-800"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            أقوى شرح للكيمياء <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">للثانوية العامة</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            مع مستر عبد الله أشرف.. الكيمياء العضوية والتحليلية بقوا أسهل. تأسيس قوي، مراجعات نهائية، وحل أسئلة النظام الجديد.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full md:w-auto">
            <a 
              href="https://youtube.com/@mr.abdallahashraf-chemistr9370" 
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              <span>▶️</span> اشترك في القناة
            </a>
            <a 
              href="https://wa.me/201005241637" 
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold border border-green-700 transition hover:border-green-400/50 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
            >
               <span>💬</span> احجز الآن
            </a>
          </div>

          {/* سهم النزول لأسفل */}
          <div className="absolute bottom-10 animate-bounce text-slate-500">
            <ChevronDown size={32} />
          </div>
        </header>

        {/* --- Features --- */}
        <section className="py-24 bg-slate-800/30 border-y border-slate-800">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group hover:-translate-y-2 duration-300">
              <div className="mb-6 flex justify-center text-4xl group-hover:scale-110 transition">📖</div>
              <h3 className="text-xl font-bold mb-3 text-white">شرح تفصيلي</h3>
              <p className="text-slate-400">تغطية شاملة لمنهج الكيمياء (أولى - ثانية - ثالثة) بأسلوب حديث.</p>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group hover:-translate-y-2 duration-300">
              <div className="mb-6 flex justify-center text-4xl group-hover:scale-110 transition">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-white">ليالي الامتحان</h3>
              <p className="text-slate-400">حل أهم الأسئلة المتوقعة والتدريب على نظام البابل شيت.</p>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group hover:-translate-y-2 duration-300">
              <div className="mb-6 flex justify-center text-4xl group-hover:scale-110 transition">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-white">تأسيس كيمياء</h3>
              <p className="text-slate-400">كورس تأسيسي قوي يخليك داخل السنة وانت واقف على أرض صلبة.</p>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-slate-950 py-10 text-center mt-auto">
          <p className="text-slate-500 mb-2">© 2026 Mr. Abdallah Ashraf. All rights reserved.</p>
          <div className="flex justify-center gap-3 text-2xl opacity-30 grayscale hover:grayscale-0 transition duration-500">
            <span>⚛️</span>
            <span>🧪</span>
            <span>🔬</span>
          </div>
        </footer>

        {/* --- زرار الواتساب العائم --- */}
        <a 
          href="https://wa.me/201005241637"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110 animate-bounce"
          title="تواصل معنا واتساب"
        >
          <MessageCircle size={32} fill="white" />
        </a>

      </div>
    </>
  );
}
