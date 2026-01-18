import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-indigo-500/30 text-indigo-300 text-sm font-medium animate-fade-in">
            🚀 Launch Your Tech Career
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight animate-fade-in animate-delay-100">
            Master the Future of <br />
            <span className="text-gradient-primary">Engineering</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-200">
           NextBrain Academy offers premium courses in MERN Stack, Agentic AI, DevOps, and Automation. Build real-world projects and scale your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <Link href="/items" className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]">
              Browse Courses
            </Link>
            <Link href="/login" className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition">
              Student Login
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features Grid -> Learning Tracks */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Learn With Us?</h2>
            <p className="text-slate-400">Curated tracks designed by industry experts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: "Full-Stack Mastery", desc: "Deep dive into MERN (MongoDB, Express, React, Node) with Next.js 15.", icon: "💻" },
              { title: "Agentic AI Systems", desc: "Learn to build autonomous agents using LangChain, OpenAI, and modern vector DBs.", icon: "🤖" },
              { title: "DevOps & Automation", desc: "Master CI/CD, Docker, Kubernetes, and cloud infrastructure as code.", icon: "⚙️" },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Marquee */}
      <section className="py-12 border-y border-slate-800 bg-[#0f172a]/50">
        <div className="text-center mb-8 text-sm text-slate-500 uppercase tracking-widest">Technologies You Will Master</div>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {['React', 'Next.js', 'Node.js', 'Python', 'Docker', 'TensorFlow'].map(tech => (
             <span key={tech} className="text-xl md:text-2xl font-bold text-slate-400">{tech}</span>
           ))}
        </div>
      </section>

      {/* 4. Showcase / Bento Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Project-Based Learning</h2>
           <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px]">
              <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"/>
                 <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Code" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                 <div className="absolute bottom-6 left-6 z-20">
                   <h3 className="text-2xl font-bold text-white">Build Real Apps</h3>
                   <p className="text-slate-300">From e-commerce to AI chat bots, build portfolio-ready projects.</p>
                 </div>
              </div>
              <div className="md:col-span-2 rounded-3xl glass-card p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl"></div>
                   <h3 className="text-3xl font-bold text-white relative z-10">Mentorship & Code Reviews</h3>
              </div>
              <div className="rounded-3xl glass-card p-6 flex flex-col justify-end">
                   <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
                   <div className="text-sm text-slate-400">Hours of Content</div>
              </div>
              <div className="rounded-3xl glass-card p-6 flex flex-col justify-end bg-gradient-to-br from-indigo-900/50 to-slate-900/50">
                   <div className="text-4xl font-bold text-violet-400 mb-2">Lifetime</div>
                   <div className="text-sm text-slate-400">Access Updates</div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Metrics/Stats */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Students', val: '5,000+' },
            { label: 'Courses', val: '12+' },
            { label: 'Hired At FAANG', val: '150+' },
            { label: 'Rating', val: '4.9/5' },
          ].map((stat, i) => (
             <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                  {stat.val}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest">{stat.label}</div>
             </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {[
                { q: "Are these courses suitable for beginners?", a: "Yes! We have dedicated tracks for absolute beginners starting with JavaScript basics." },
                { q: "Do I get a certificate?", a: "Upon completion of all projects and quizzes, you receive a verified industry-recognized certificate." },
                { q: "Is the content up to date?", a: "We update our courses monthly. You'll learn Next.js 15, React 19, and the latest AI tools." },
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-xl">
                   <div className="font-bold text-white mb-2">{item.q}</div>
                   <div className="text-slate-400">{item.a}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-violet-900/40 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Invest in your career.</h2>
           <p className="text-xl text-slate-300 mb-10">Join thousands of developers building the future.</p>
           <Link href="/items" className="px-10 py-5 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition text-lg shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              View All Courses
           </Link>
        </div>
      </section>

    </div>
  );
}
