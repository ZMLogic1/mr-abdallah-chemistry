import Head from 'next/head';
import React from 'react';
import { Beaker, Youtube, BookOpen, Facebook, PlayCircle, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mr. Abdallah Ashraf - Chemistry</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-slate-900 text-white font-sans" dir="rtl">
        
        {/* --- Navbar --- */}
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-2">
              🧪 Mr. Abdallah Ashraf
            </h1>
            <div className="flex gap-4">
              {/* زرار واتساب في القائمة */}
              <a href="https://wa.me/201005241637" target="_blank" className="flex items-center gap-1 hover:text-green-500 transition font-medium">
                <span>💬</span> <span className="hidden md:inline">واتساب</span>
              </a>
              <a href="https://youtube.com/@mr.abdallahashraf-chemistr9370" target="_blank" className="flex items-center gap-1 hover:text-red-500 transition font-medium">
                <span>📺</span> <span className="hidden md:inline">يوتيوب</span>
              </a>
              {/* ✅ لينك الفيسبوك الجديد ✅ */}
              <a href="https://www.facebook.com/share/17nkcAHREd/" target="_blank" className="flex items-center gap-1 hover:text-blue-500 transition font-medium">
                <span>📘</span> <span className="hidden md:inline">فيسبوك</span>
              </a>
            </div>
          </div>
        </nav>

        {/* --- Hero Section --- */}
        <header className="py-20 text-center container mx-auto px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600">
            {/* تأكد ان الصورة في فولدر public */}
            <img 
              src="/mr-abdallah.jpg" 
              alt="Mr. Abdallah Ashraf" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover shadow-2xl bg-slate-800"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            أقوى شرح للكيمياء <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">للثانوية العامة</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            مع مستر عبد الله أشرف.. الكيمياء العضوية والتحليلية بقوا أسهل. شرح مبسط، مراجعات نهائية، وحل أسئلة الامتحانات بأحدث الطرق.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://youtube.com/@mr.abdallahashraf-chemistr9370" 
              target="_blank"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              <span>▶️</span> اشترك في القناة
            </a>
            
            {/* زرار تواصل واتساب */}
            <a 
              href="https://wa.me/201005241637" 
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold border border-green-700 transition hover:border-green-400/50 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
            >
               <span>💬</span> تواصل واتساب
            </a>
          </div>
        </header>

        {/* --- Features --- */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group">
              <div className="mb-6 flex justify-center text-4xl">📖</div>
              <h3 className="text-xl font-bold mb-3 text-white">شرح تفصيلي</h3>
              <p className="text-slate-400">تغطية شاملة لمنهج الكيمياء كاملاً بأسلوب حديث ومبسط يضمن الفهم العميق.</p>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group">
              <div className="mb-6 flex justify-center text-4xl">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-white">مراجعات نهائية</h3>
              <p className="text-slate-400">حل أهم 100 سؤال في الـ Organic Chemistry وتوقعات ليلة الامتحان.</p>
            </div>

            <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition group">
              <div className="mb-6 flex justify-center text-4xl">💬</div>
              <h3 className="text-xl font-bold mb-3 text-white">متابعة مستمرة</h3>
              <p className="text-slate-400">تواصل مباشر مع الطلاب والرد على جميع الأسئلة عبر صفحة الفيسبوك والواتساب.</p>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-slate-950 py-10 text-center border-t border-slate-900 mt-auto">
          <p className="text-slate-500 mb-2">© 2026 Mr. Abdallah Ashraf. All rights reserved.</p>
          <div className="flex justify-center gap-3 text-2xl opacity-40 grayscale hover:grayscale-0 transition">
            <span>⚛️</span>
            <span>🧪</span>
            <span>🔬</span>
          </div>
        </footer>
      </div>
    </>
  );
}
