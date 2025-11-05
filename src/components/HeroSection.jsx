import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute right-0 -bottom-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Rocket size={16} />
              <span>PE-APP</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Streamline Your Planning, Amplify Your Teaching
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Access a curated library of high-quality, printable lesson plans. Designed for schools and teachers who value consistency, clarity, and curriculum alignment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-indigo-700 shadow hover:bg-indigo-50 transition">
                Start Free Trial
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                Request a Demo
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              Ideal for primary and secondary schools. Institution-wide access with admin controls.
            </div>
          </div>

          <div className="relative rounded-xl bg-white/10 p-6 backdrop-blur shadow-xl ring-1 ring-white/20">
            <div className="text-sm text-white/90">Sample Lesson Preview</div>
            <div className="mt-3 rounded-lg bg-white p-4 text-slate-800 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Year 2 Dance - Lesson 1</div>
                <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-700">A4 • Print-ready</span>
              </div>
              <hr className="my-3" />
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-medium text-slate-700">Learning Intentions</div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>Explore rhythm through movement</li>
                    <li>Develop coordination and balance</li>
                    <li>Work collaboratively in pairs</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-slate-700">Success Criteria</div>
                  <ul className="mt-1 list-disc pl-5 space-y-1">
                    <li>Performs a simple sequence on beat</li>
                    <li>Uses expressive movement vocabulary</li>
                    <li>Reflects on performance with peers</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md border p-2">
                  <div className="text-xs text-slate-500">Warm Up (5 min)</div>
                  <div className="font-medium">Mirror & Freeze</div>
                </div>
                <div className="rounded-md border p-2">
                  <div className="text-xs text-slate-500">Main (25 min)</div>
                  <div className="font-medium">Beat-Based Pairs Routine</div>
                </div>
                <div className="rounded-md border p-2">
                  <div className="text-xs text-slate-500">Cool Down (5 min)</div>
                  <div className="font-medium">Stretch & Reflect</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-2">
                <button className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Choose Template</button>
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700">Download PDF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
