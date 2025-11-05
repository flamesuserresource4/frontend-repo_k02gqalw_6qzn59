import React from 'react';
import { Users, CheckCircle2, School, Settings, Mail } from 'lucide-react';

export default function AboutHowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Why PE-APP</h2>
          <p className="mt-4 text-slate-600">
            Save time and reduce burnout with expert-curated, curriculum-aligned lesson plans. Ensure consistent teaching standards across your school with polished, print-ready templates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: School, title: 'Curriculum-Aligned', desc: 'Every plan is designed and reviewed by experts to meet curriculum outcomes.' },
            { icon: CheckCircle2, title: 'Print-Ready A4 Templates', desc: 'Neatly formatted, single-page lesson plans you can print or download as PDF.' },
            { icon: Users, title: 'Built for Schools', desc: 'Institution-level access with admin tools to manage teachers and usage.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-white p-6 shadow-sm">
              <Icon className="text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">How It Works</h3>
            <ol className="mt-6 space-y-5">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">1</div>
                <div>
                  <div className="font-medium text-slate-900">School Sign-Up</div>
                  <p className="text-sm text-slate-600">An administrator starts a free trial or chooses a plan, then creates the school profile.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">2</div>
                <div>
                  <div className="font-medium text-slate-900">Invite Teachers</div>
                  <p className="text-sm text-slate-600">Add teachers by email. Each teacher creates their login via a secure invite link.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">3</div>
                <div>
                  <div className="font-medium text-slate-900">Explore the Library</div>
                  <p className="text-sm text-slate-600">Teachers filter by year level, subject, and term to find the perfect lesson.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">4</div>
                <div>
                  <div className="font-medium text-slate-900">Print or Download</div>
                  <p className="text-sm text-slate-600">Select a template to view a clean, single-page A4 plan, then print or save as PDF.</p>
                </div>
              </li>
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Settings size={16} className="text-indigo-600" />
              Comprehensive admin controls for subscriptions and teacher management.
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <Mail size={16} className="text-indigo-600" />
              Built-in invitations, favorites, analytics, and content feedback.
            </div>
          </div>
          <div className="rounded-xl border bg-slate-50 p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-700">Administrator Dashboard (Preview)</div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="text-xs text-slate-500">Teachers</div>
                <div className="mt-1 text-2xl font-semibold">24</div>
                <div className="mt-2 h-2 rounded bg-indigo-100">
                  <div className="h-2 w-2/3 rounded bg-indigo-600" />
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="text-xs text-slate-500">Active Plans</div>
                <div className="mt-1 text-2xl font-semibold">312</div>
                <div className="mt-2 h-2 rounded bg-violet-100">
                  <div className="h-2 w-4/5 rounded bg-violet-600" />
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="text-xs text-slate-500">Usage This Term</div>
                <div className="mt-1 text-2xl font-semibold">1,284</div>
                <div className="mt-2 h-2 rounded bg-emerald-100">
                  <div className="h-2 w-3/5 rounded bg-emerald-600" />
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="text-xs text-slate-500">Favorites</div>
                <div className="mt-1 text-2xl font-semibold">876</div>
                <div className="mt-2 h-2 rounded bg-amber-100">
                  <div className="h-2 w-1/2 rounded bg-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
