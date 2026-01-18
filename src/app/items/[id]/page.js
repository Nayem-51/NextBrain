'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Unwrap params if using recent NextJS 15 promise-based params (though useParams hook normally handles synchronous access in older versions or client components appropriately, 
    // in Next 15 `params` prop is a Promise but `useParams` hook is consistent.
    if(id) {
        fetch(`/api/items/${id}`)
        .then(res => {
            if (!res.ok) throw new Error('Not found');
            return res.json();
        })
        .then(data => {
            setItem(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-cyan-400">Initializing Neural Link...</div>;
  if (!item) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white mb-4">Item Not Found</h2>
        <Link href="/items" className="text-cyan-400 hover:underline">Return to Market</Link>
    </div>
  );

  return (
    <div className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
        
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden h-[500px] group">
           <img 
             src={item.image} 
             alt={item.name} 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
           <Link href="/items" className="text-slate-500 hover:text-white mb-6 text-sm transition">&larr; Back to Catalog</Link>
           
           <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
             {item.name}
           </h1>
           
           <div className="text-3xl font-bold text-cyan-400 mb-8">
             ${item.price}
           </div>
           
           <div className="prose prose-invert mb-10 text-slate-300 leading-relaxed">
             <p>{item.description}</p>
             <p className="mt-4 text-sm text-slate-500">
               *Includes standard 2-year manufacturer warranty and AI-compatibility certification.
             </p>
           </div>

           <div className="flex gap-4">
              <button className="flex-1 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-cyan-50 transition shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Add to Cart
              </button>
              <button className="px-6 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition">
                ♥️
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
