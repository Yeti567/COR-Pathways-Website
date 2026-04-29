'use client';

import { useState } from 'react';
import Button from '@/components/Button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFieldErrors({});
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
        return;
      }

      if (res.status === 422) {
        const data = (await res.json().catch(() => ({}))) as { errors?: FieldErrors };
        setFieldErrors(data.errors ?? {});
        setSubmitError('Please fix the highlighted fields and try again.');
      } else if (res.status === 429) {
        setSubmitError('You’ve sent a few messages recently. Please wait a few minutes before trying again.');
      } else {
        setSubmitError('Something went wrong on our end. Please try again, or email blake.safetyconsultant@gmail.com directly.');
      }
      setStatus('error');
    } catch {
      setSubmitError('We couldn’t reach the server. Check your connection and try again.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (fieldErrors[e.target.name as keyof FieldErrors]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: undefined });
    }
  };

  const inputClass = (field: keyof FieldErrors) =>
    `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
      fieldErrors[field] ? 'border-red-400' : 'border-gray-300'
    }`;

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy-50 to-navy-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            About COR Pathways
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            The digital safety management platform for construction companies in Ontario and Alberta.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-lg">
              COR Pathways exists to make COR 2020 certification achievable for construction companies in Ontario and Alberta. Auditable safety programs, fewer binders, more time on the tools.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              We built the platform around the realities of small and mid-sized contractors: field crews on tablets, certifications that need to stay current, and audit evidence that has to hold up. We also work with clients in British Columbia, where COR is less common but the underlying safety work is the same.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Audit-ready by default</h3>
                <p className="text-gray-600">
                  Every form, signature, and inspection record maps to a COR 2020 element as it&apos;s captured. When the auditor arrives, your evidence package is already built.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Built for the field</h3>
                <p className="text-gray-600">
                  Foremen complete forms on tablets, offline if there&apos;s no signal. Data syncs once the truck is back in coverage. The interface assumes work gloves, not a quiet office.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Canadian support</h3>
                <p className="text-gray-600">
                  Real people on the phone, in your time zone, who have walked job sites and sat through audits. 780-832-5158 reaches a human.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Made by people who do this work</h3>
                <p className="text-gray-600">
                  COR Pathways was built by a working safety consultant, not a generic SaaS team. The product reflects what actually matters on a job site, in a binder review, and across the table from an auditor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg aria-hidden="true" className="w-6 h-6 text-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:blake.safetyconsultant@gmail.com" className="text-orange hover:text-orange-700">
                      blake.safetyconsultant@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg aria-hidden="true" className="w-6 h-6 text-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+17808325158" className="text-gray-600 hover:text-orange transition-colors">780-832-5158</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg aria-hidden="true" className="w-6 h-6 text-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">4702 Birch Lane<br />Barriere, British Columbia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

              {status === 'success' ? (
                <div
                  role="status"
                  className="rounded-lg border border-green-300 bg-green-50 p-6 text-green-900"
                >
                  <p className="font-semibold mb-1">Thanks. We received your message.</p>
                  <p className="text-sm">
                    Blake will reply within one business day. If it&apos;s urgent, call 780-832-5158.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot: hidden from real users, bots fill it and get silently dropped server-side. */}
                  <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  {submitError && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900 text-sm"
                    >
                      {submitError}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.name ? 'true' : 'false'}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                      maxLength={200}
                      className={inputClass('name')}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-700">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.email ? 'true' : 'false'}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      maxLength={320}
                      autoComplete="email"
                      className={inputClass('email')}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-700">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.message ? 'true' : 'false'}
                      aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      maxLength={5000}
                      rows={5}
                      className={inputClass('message')}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-700">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </Button>
                  <p
                    role="status"
                    aria-live="polite"
                    className="sr-only"
                  >
                    {status === 'submitting' ? 'Sending your message.' : ''}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
