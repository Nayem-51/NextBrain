'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Item added successfully! 🎉');
        setTimeout(() => router.push('/items'), 1500);
      } else {
        toast.error('Failed to add item. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Add New Product</h1>
          <p className="text-slate-400">Expand your inventory with new tech.</p>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Product Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Quantum Chip"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price ($)</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  required
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Image URL</label>
              <input
                name="image"
                type="url"
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition"
                onChange={handleChange}
              />
              <p className="text-xs text-slate-500 mt-2">Leave empty for default placeholder.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
              <textarea
                name="description"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-500 focus:outline-none transition"
                placeholder="Describe the product specs..."
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4 flex items-center justify-end gap-4">
              <button 
                type="button" 
                onClick={() => router.back()}
                className="px-6 py-3 text-slate-400 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition transform hover:-translate-y-1"
              >
                {loading ? 'Publishing...' : 'Publish Item'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
