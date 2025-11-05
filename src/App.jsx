import React from 'react';
import HeroSection from './components/HeroSection';
import AboutHowItWorks from './components/AboutHowItWorks';
import LessonPreview from './components/LessonPreview';
import PricingTestimonials from './components/PricingTestimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600" />
            <span className="font-semibold">PE-APP</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Sample</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:inline-block">Request a Demo</a>
            <a href="#pricing" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Start Free Trial</a>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutHowItWorks />
        <LessonPreview />
        <PricingTestimonials />
      </main>

      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600" />
              <span>PE-APP • Streamline Your Planning</span>
            </div>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} LessonFlow. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
