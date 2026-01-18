'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch items:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-slate-400 max-w-xl">
              Discover cutting-edge hardware and neural interfaces designed for the next generation of developers.
            </p>
          </div>
          <Link 
            href="/admin/add" 
            className="hidden md:block px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition border border-slate-700 hover:border-indigo-500/50"
          >
            Sell Item
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 rounded-2xl bg-slate-800/50 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {items.map(item => (
              <Link href={`/items/${item.id}`} key={item.id} className="group">
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                    <div className="absolute top-4 right-4 bg-indigo-500/20 backdrop-blur-md px-3 py-1 rounded-full text-indigo-300 text-xs font-bold border border-indigo-500/30">
                      NEW ARRIVAL
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition">{item.name}</h2>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700/50">
                      <span className="text-2xl font-bold text-white">${item.price}</span>
                      <span className="text-indigo-400 text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
