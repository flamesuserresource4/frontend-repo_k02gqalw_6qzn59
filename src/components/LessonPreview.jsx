import React from 'react';
import { Filter, Bookmark, Printer, Download } from 'lucide-react';

export default function LessonPreview() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Explore the Library</h2>
          <p className="mt-4 text-slate-600">Filter by year level, subject, and term. Save favorites, preview templates, and print or download instantly.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border bg-white p-4 md:col-span-1">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Filter size={16} className="text-indigo-600" /> Filters
            </div>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <label className="text-slate-600">Year Level</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2">
                  <option>Year 2</option>
                  <option>Year 3</option>
                  <option>Year 4</option>
                  <option>Year 5</option>
                </select>
              </div>
              <div>
                <label className="text-slate-600">Subject</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2">
                  <option>Dance</option>
                  <option>Gymnastics</option>
                  <option>Games & Sports</option>
                </select>
              </div>
              <div>
                <label className="text-slate-600">Term</label>
                <select className="mt-1 w-full rounded-md border px-3 py-2">
                  <option>Term 1</option>
                  <option>Term 2</option>
                  <option>Term 3</option>
                  <option>Term 4</option>
                </select>
              </div>
              <button className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Search</button>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid gap-6 md:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <article key={i} className="group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">Year 2 Dance - Lesson {i}</h3>
                      <p className="mt-1 text-sm text-slate-600">Build rhythm and confidence with engaging movement tasks.</p>
                    </div>
                    <button className="rounded-md p-2 text-slate-500 hover:text-indigo-600" aria-label="save">
                      <Bookmark size={18} />
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
                    <div className="rounded border px-2 py-1">Warm up</div>
                    <div className="rounded border px-2 py-1">Main</div>
                    <div className="rounded border px-2 py-1">Cool down</div>
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-2">
                    <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-slate-50"><Printer size={16}/> Print</button>
                    <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700"><Download size={16}/> PDF</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
