import React from 'react';
import { Star, ShieldCheck, Check } from 'lucide-react';

function PricingCard({ name, price, desc, features, highlight }) {
  return (
    <div className={`relative rounded-2xl border p-6 shadow-sm ${highlight ? 'ring-2 ring-indigo-600' : ''}`}>
      {highlight && (
        <div className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Most Popular</div>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 text-3xl font-semibold text-slate-900">{price}
        <span className="text-sm font-normal text-slate-500"> / school</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-700">
            <Check size={16} className="mt-0.5 text-emerald-600" /> {f}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Choose Plan</button>
    </div>
  );
}

export default function PricingTestimonials() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Pricing for Every School</h2>
          <p className="mt-4 text-slate-600">Monthly and annual billing available. Free trial included with all plans.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PricingCard
            name="Basic School Plan"
            price="$79/mo"
            desc="Up to 10 teachers. Core subjects. Standard templates."
            features={[
              'Up to 10 teacher accounts',
              'Core subjects access',
              'Standard A4 templates',
              'Email support',
            ]}
          />
          <PricingCard
            name="Premium School Plan"
            price="$249/mo"
            desc="Up to 50 teachers. All subjects. Advanced templates. Basic analytics."
            features={[
              'Up to 50 teacher accounts',
              'All subjects + advanced templates',
              'Basic usage analytics',
              'Priority support',
            ]}
            highlight
          />
          <PricingCard
            name="Enterprise School Plan"
            price="Custom"
            desc="Unlimited teachers. Bespoke templates. Advanced analytics. Dedicated support."
            features={[
              'Unlimited teacher accounts',
              'Bespoke template library',
              'Advanced analytics & SSO',
              'Dedicated success manager',
            ]}
          />
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={18} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>
              <p className="mt-4 text-slate-700">
                “PE-APP transformed our planning. Teachers now spend time teaching, not formatting.”
              </p>
              <div className="mt-4 text-sm font-medium text-slate-900">Head of Department</div>
              <div className="text-xs text-slate-500">Riverview Primary</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-center text-white">
          <ShieldCheck size={28} />
          <h3 className="mt-3 text-2xl font-semibold">Ready to streamline planning?</h3>
          <p className="mt-2 text-white/90">Start a free trial or request a demo and onboard your school in minutes.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded-md bg-white px-5 py-2 text-sm font-medium text-indigo-700 shadow hover:bg-indigo-50">Start Free Trial</a>
            <a href="#" className="rounded-md border border-white/30 px-5 py-2 text-sm font-medium text-white hover:bg-white/10">Request a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
