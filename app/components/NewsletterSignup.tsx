'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    // Here you would typically handle the newsletter signup
  };

  return (
    <section className="bg-green-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-8">Subscribe to our newsletter for the latest events and updates about Çatalca.</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-2 text-sm">Thank you for subscribing!</p>
          )}
        </form>
      </div>
    </section>
  );
} 