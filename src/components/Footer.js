import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800/50 bg-gradient-to-b from-[#0a0e1a] to-[#050810] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="col-span-2">
            <h2 className="text-2xl md:text-3xl font-black text-gradient mb-4">NextBrain</h2>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Pioneering the future of digital interaction with agentic AI and immersive web experiences. 
              Build tomorrow's technology today.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['twitter', 'github', 'linkedin', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
                  aria-label={social}
                >
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors capitalize text-xs font-bold">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Platform Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/items" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} NextBrain. All rights reserved. Built with Next.js 16 & Express.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Status</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
