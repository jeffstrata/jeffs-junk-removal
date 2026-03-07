'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">Quote Request Sent!</h3>
        <p className="text-green-700">
          We&apos;ll review your request and get back to you with a free quote shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      encType="multipart/form-data"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        fetch('/', {
          method: 'POST',
          body: formData,
        })
          .then(() => setSubmitted(true))
          .catch(() => alert('Something went wrong. Please call us instead.'));
      }}
      className="space-y-5"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="quote-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
            placeholder="(780) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="quote-email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="quote-address" className="block text-sm font-medium text-gray-700 mb-1">
          Pickup Address *
        </label>
        <input
          type="text"
          id="quote-address"
          name="address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
          placeholder="123 Main St, Edmonton, AB"
        />
      </div>

      <div>
        <label htmlFor="quote-description" className="block text-sm font-medium text-gray-700 mb-1">
          What do you need removed? *
        </label>
        <textarea
          id="quote-description"
          name="description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition resize-y"
          placeholder="Describe the items or job — the more detail, the more accurate our quote..."
        />
      </div>

      <div>
        <label htmlFor="quote-photo" className="block text-sm font-medium text-gray-700 mb-1">
          Photo (optional — helps us quote accurately)
        </label>
        <input
          type="file"
          id="quote-photo"
          name="photo"
          accept="image/*"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent/10 file:text-accent file:font-semibold hover:file:bg-accent/20 file:cursor-pointer"
        />
        <p className="text-gray-400 text-xs mt-1">Send a pic of the junk and we can give you a faster, more accurate quote.</p>
      </div>

      <button type="submit" className="btn-primary w-full text-xl py-4">
        Send My Free Quote Request
      </button>

      <p className="text-gray-400 text-sm text-center">
        We&apos;ll respond within a few hours during business hours.
      </p>
    </form>
  );
}
