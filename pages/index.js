import Head from 'next/head';
import React from 'react';
import { Beaker, Youtube, BookOpen, Facebook, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mr. Abdallah Ashraf - Chemistry</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen bg-slate-900 text-white font-sans" dir="rtl">
        {/* Navbar */}
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-400 flex items-center gap-2">
              🧪 Mr. Abdallah Ashraf
            </h1>
            <div className="flex gap-4">
              <a href="https://youtube.com/@mr.abdallahashraf-chemistr9370" target="_blank" className="flex items-center gap-1 hover:text-red-500 transition">
                <span>📺</span> يوتيوب
              </a>
              <a href="https://www.facebook.com/Mr.Abdallah.Ashraf.chemistry.teacher" target="_blank" className="flex items-center gap-1 hover:text-blue-500 transition">
                <span>📘</span> فيسبوك
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="py-20 text-center container mx-auto px-6 relative overflow-hidden">
          <div className="mb-6 inline-block p-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600">
            <div className="w-32 h-32 rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-900 text-6xl">
              👨‍🏫
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            أقوى شرح للكيمياء <span className="text-cyan-400">للثانوية العامة</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            مع مستر عبد الله أشرف.. الكيمياء العضوية والتحليلية بقوا أسهل.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://youtube.com/@mr.abdallahashraf-chemistr9370" target="_blank" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20">
              اشترك في القناة
            </a>
          </div>
        </header>

        {/* Features */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <BookOpen className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">شرح تفصيلي</h3>
              <p className="text-slate-400">تغطية شاملة للمنهج بأسلوب حديث.</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <PlayCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">مراجعات نهائية</h3>
              <p className="text-slate-400">حل أهم الأسئلة المتوقعة.</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <Facebook className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">متابعة مستمرة</h3>
              <p className="text-slate-400">تواصل مباشر مع الطلاب.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 py-8 text-center text-slate-500 mt-auto border-t border-slate-900">
          <p>© 2026 Mr. Abdallah Ashraf. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
