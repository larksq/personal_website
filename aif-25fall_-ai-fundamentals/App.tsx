import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ScheduleTable from './components/ScheduleTable';
import { BookOpenIcon, CalendarDaysIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 font-sans">
      <Header />
      <main>
        <HomeSection />
        
        {/* Main Content Wrapper */}
        <div className="relative bg-slate-900 z-10">
          <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="space-y-16">
              <section id="about" className="pt-8 scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpenIcon className="w-8 h-8 text-sky-400" />
                  <h2 className="text-3xl font-bold tracking-tight text-slate-100">
                    About this class
                  </h2>
                </div>
                <AboutSection />
              </section>

              <section id="schedule" className="pt-8 scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDaysIcon className="w-8 h-8 text-sky-400" />
                  <h2 className="text-3xl font-bold tracking-tight text-slate-100">
                    Class Schedule
                  </h2>
                </div>
                <ScheduleTable />
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-8 text-slate-500 text-sm bg-slate-900">
        <p>AIF-25Fall Course Website</p>
      </footer>
    </div>
  );
};

export default App;