'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@nextmind.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/items',
      });

      if (result.error) {
        setError(result.error === 'CredentialsSignin' ? 'Invalid credentials' : result.error);
        toast.error("Authentication failed. Please check your credentials.");
      } else {
        toast.success(
          <div className="flex flex-col">
            <span className="font-bold text-base">Welcome back!</span>
            <span className="text-xs opacity-80">Redirecting to marketplace...</span>
          </div>,
          {
            duration: 3000,
            style: {
              background: '#0f172a', // Slate 900
              color: '#fff',
              border: '1px solid rgba(99, 102, 241, 0.2)', // Indigo border hint
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)', // Indigo glow
            }
          }
        );
        // Delay redirect to let user see the toast
        setTimeout(() => {
          router.push('/items');
        }, 1000);
      }
    } catch (err) {
      setError('An error occurred during sign in.');
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden -z-10">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black"></div>
      </div>
      
      <div className="glass-card w-full max-w-md p-8 rounded-2xl shadow-2xl border border-slate-700/50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-sm mt-2">Sign in to access the agentic dashboard.</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="text-xs text-slate-500 text-center">
            Hint: Use <strong>admin@nextmind.com</strong> / <strong>admin123</strong>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
           <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
              &larr; Back to Home
           </Link>
        </div>
      </div>
    </div>
  );
}
