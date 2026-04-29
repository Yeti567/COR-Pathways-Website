'use client';

import { useState } from 'react';

export default function HowItWorks() {
  const [openPhase, setOpenPhase] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const togglePhase = (phase: number) => {
    setOpenPhase(openPhase === phase ? null : phase);
  };

  const toggleFAQ = (faq: number) => {
    setOpenFAQ(openFAQ === faq ? null : faq);
  };
  const phases = [
    {
      number: '1',
      title: 'Setup & Onboarding',
      time: 'Week 1',
      description: 'Create account, add your team, configure settings, and get familiar with the platform.',
      icon: (
        <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      isComplete: false,
    },
    {
      number: '2',
      title: 'Build Your Program',
      time: 'Bulk of the timeline',
      description: 'Work through the 14 elements, create policies, train workers, and conduct daily operations.',
      icon: (
        <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      isComplete: false,
    },
    {
      number: '3',
      title: 'Audit Preparation',
      time: 'Final stretch',
      description: 'Practice with Mock Audit, identify gaps, generate evidence packages, and prepare your team.',
      icon: (
        <svg aria-hidden="true" className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      isComplete: false,
    },
    {
      number: '✓',
      title: 'Pass Your Audit',
      time: 'Audit day',
      description: 'Schedule your COR audit, pass with confidence, and continue using COR Pathways for maintenance.',
      icon: (
        <svg aria-hidden="true" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      isComplete: true,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PROVEN PROCESS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Path to COR Certification
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A practical 4-phase approach to COR 2020 certification. Three months in Alberta, nine in Ontario. Designed for the realities of small and mid-sized contractors.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-orange mb-2">3-9</div>
                <div className="text-sm text-gray-300">Months to certify</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange mb-2">14</div>
                <div className="text-sm text-gray-300">COR 2020 elements</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange mb-2">70+</div>
                <div className="text-sm text-gray-300">Safety forms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Timeline */}
          <div className="max-w-6xl mx-auto relative">
            
            {/* Horizontal Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-orange/20"></div>
            
            {/* Timeline Items */}
            <div className="grid md:grid-cols-4 gap-8">
              
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`hidden md:flex absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${phase.isComplete ? 'bg-green-500' : 'bg-orange'} rounded-full items-center justify-center text-white font-bold text-xl z-10 border-4 border-white shadow-lg`}>
                    {phase.number}
                  </div>
                  
                  {/* Card */}
                  <div className={`${phase.isComplete ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'} rounded-xl p-6 mt-16`}>
                    <div className={`w-12 h-12 ${phase.isComplete ? 'bg-green-500/10' : 'bg-orange/10'} rounded-lg flex items-center justify-center mb-4`}>
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">{phase.title}</h3>
                    <div className={`text-sm ${phase.isComplete ? 'text-green-600' : 'text-orange'} font-semibold mb-3`}>
                      {phase.time}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
        </div>
      </section>

      {/* Detailed Breakdown Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Detailed Breakdown: What Happens Each Phase
            </h2>
            <p className="text-xl text-gray-600">
              Click each phase to see exactly what you&apos;ll accomplish
            </p>
          </div>
          
          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Phase 1 Accordion Item */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Header (Clickable) */}
              <button 
                onClick={() => togglePhase(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">Phase 1: Setup & Onboarding</h3>
                    <p className="text-sm text-gray-600">Week 1 • Get started in under 30 minutes</p>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${openPhase === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Content (Expandable) */}
              {openPhase === 1 && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    
                    {/* What You'll Do */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-3">What You&apos;ll Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Create Your Account:</strong> Sign up with company email, verify, and set password</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Company Profile:</strong> Add company details, upload logo, set business hours</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Invite Your Team:</strong> Add admins, supervisors, and workers with role-based access</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Import Data:</strong> Upload existing worker lists, certifications, and equipment (CSV/Excel)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Set Your Goal:</strong> Choose your target certification date (typically 3 months in Alberta, 9 months in Ontario)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg aria-hidden="true" className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700"><strong>Onboarding Tour:</strong> Take the guided tour to learn platform features</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Support Available */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-6">
                      <div className="flex items-start gap-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-semibold text-blue-900 mb-1">Free Setup Assistance</div>
                          <div className="text-sm text-blue-800">Our team will help you get started. Book a 30-minute onboarding call to import your data and configure settings.</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">By End of Week 1:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Account fully configured
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          All team members added
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Worker data imported
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Ready to start documenting
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
            
            {/* Phase 2 Accordion Item */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button 
                onClick={() => togglePhase(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">Phase 2: Build Your Safety Program</h3>
                    <p className="text-sm text-gray-600">Bulk of the timeline • Work through all 14 COR elements</p>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${openPhase === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPhase === 2 && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    
                    {/* Month-by-Month Breakdown */}
                    <div className="space-y-6 mb-6">
                      
                      {/* Month 1 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">MONTH 1</div>
                          <h4 className="font-semibold text-navy">Foundation & Leadership (Elements 1-2)</h4>
                        </div>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Create Health & Safety Policy (Element 1)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Establish JHSC (Joint Health & Safety Committee)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Conduct initial hazard assessments (Element 2)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Start daily toolbox talks and site inspections</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Month 2-3 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">MONTHS 2-3</div>
                          <h4 className="font-semibold text-navy">Implementation & Training (Elements 3-4)</h4>
                        </div>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Create Safe Work Procedures for high-risk tasks (Element 3)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Upload all worker certifications and set up training matrix (Element 4)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Schedule required training for workers with expired/expiring certs</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Set up document control system (Element 5)</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Month 4-5 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">MONTHS 4-5</div>
                          <h4 className="font-semibold text-navy">Operations & Maintenance (Elements 6-9)</h4>
                        </div>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Establish regular inspection schedule (Element 6)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Set up purchasing and contracting procedures (Elements 7-8)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Configure equipment inventory and preventive maintenance (Element 9)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Build evidence library for all elements</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* Month 6 */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">MONTH 6</div>
                          <h4 className="font-semibold text-navy">Incident Management & Emergency Response (Elements 10-11)</h4>
                        </div>
                        <ul className="space-y-2 pl-4">
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Set up incident reporting and investigation procedures (Element 10)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Create Emergency Response Plan (Element 11)</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Conduct emergency drill and document results</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-orange">•</span>
                            <span>Review compliance dashboard. Target 70%+ completion.</span>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                    
                    {/* Key Activities */}
                    <div className="bg-orange/5 rounded-lg p-4 border border-orange/20 mb-6">
                      <h4 className="font-semibold text-navy mb-3">Ongoing Activities (Daily/Weekly):</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Daily toolbox talks
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Daily site inspections
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Weekly workplace inspections
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Monthly JHSC meetings
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Hazard assessments for new projects
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Equipment maintenance tracking
                        </div>
                      </div>
                    </div>
                    
                    {/* Milestone */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">By End of Month 6:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          70-80% compliance score
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          All elements started
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Safety culture established
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Ready for audit prep
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
            
            {/* Phase 3 Accordion Item */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button 
                onClick={() => togglePhase(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">Phase 3: Audit Preparation</h3>
                    <p className="text-sm text-gray-600">Final stretch • Practice and perfect before the real audit</p>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${openPhase === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPhase === 3 && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    
                    {/* What You'll Do */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-3">What You&apos;ll Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">1</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Complete Remaining Elements (12-14)</div>
                            <p className="text-sm text-gray-600">Finish Elements 12 (Performance Evaluation), 13 (Continuous Improvement), and 14 (Records Management)</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">2</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Run Mock Audit Simulator</div>
                            <p className="text-sm text-gray-600">Practice with real COR 2020 interview questions and observation scenarios. Get AI-powered feedback on your responses.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">3</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Gap Analysis</div>
                            <p className="text-sm text-gray-600">Review compliance dashboard, identify any remaining gaps, and create action plan to address them.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">4</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Generate Evidence Packages</div>
                            <p className="text-sm text-gray-600">Use COR Pathways to auto-generate evidence packages for each audit element with all required documentation.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">5</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Train Your Team</div>
                            <p className="text-sm text-gray-600">Prepare management, JHSC members, and workers for potential interviews. Practice common questions.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-orange text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">6</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Final Review</div>
                            <p className="text-sm text-gray-600">Conduct internal audit, review all 14 elements, ensure 85%+ completion on each.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Mock Audit Details */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-6">
                      <div className="flex items-start gap-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-semibold text-blue-900 mb-1">Mock Audit Coverage:</div>
                          <div className="text-sm text-blue-800 space-y-1">
                            <div>• 200+ actual COR 2020 audit questions</div>
                            <div>• Document review questions for all 14 elements</div>
                            <div>• Worker interview simulations</div>
                            <div>• Management interview simulations</div>
                            <div>• Site observation scenarios</div>
                            <div>• AI-powered gap identification</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Milestone */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">By End of Month 8:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          85-95% compliance score
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          All gaps addressed
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Team trained and confident
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Evidence packages ready
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
            
            {/* Phase 4 Accordion Item */}
            <div className="bg-white rounded-lg shadow-sm border-2 border-green-500 overflow-hidden">
              <button 
                onClick={() => togglePhase(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">Phase 4: Pass Your Audit & Get Certified</h3>
                    <p className="text-sm text-gray-600">Audit day • The moment you&apos;ve been working towards</p>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform ${openPhase === 4 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openPhase === 4 && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    
                    {/* What You'll Do */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy mb-3">What You&apos;ll Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">1</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Schedule Your COR Audit</div>
                            <p className="text-sm text-gray-600">Contact an accredited COR auditor (we can recommend auditors familiar with COR Pathways)</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">2</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Pre-Audit Preparation</div>
                            <p className="text-sm text-gray-600">Export evidence packages from COR Pathways, prepare site for observation, brief team on audit day expectations.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">3</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Audit Day</div>
                            <p className="text-sm text-gray-600">
                              <strong>Opening Meeting:</strong> Auditor introduces themselves and explains process<br />
                              <strong>Document Review:</strong> Auditor reviews your policies, procedures, and records<br />
                              <strong>Interviews:</strong> Management, workers, and JHSC members interviewed<br />
                              <strong>Site Observation:</strong> Auditor observes actual workplace conditions and practices<br />
                              <strong>Closing Meeting:</strong> Auditor provides initial feedback
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">4</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Receive Audit Report</div>
                            <p className="text-sm text-gray-600">Within 2 weeks, receive formal audit report. Pass requires 80%+ on each element.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5 flex-shrink-0">5</div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">Get Certified! 🎉</div>
                            <p className="text-sm text-gray-600">Receive your COR 2020 certificate (valid for 3 years). Display it proudly and enjoy insurance premium reductions!</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Success Tips */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-6">
                      <div className="flex items-start gap-3">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-semibold text-green-900 mb-1">Pro Tips for Audit Success:</div>
                          <div className="text-sm text-green-800 space-y-1">
                            <div>• Be honest. Auditors appreciate transparency about ongoing improvements.</div>
                            <div>• Have workers speak from experience. Don&apos;t script responses.</div>
                            <div>• Show actual implementation, not just paperwork</div>
                            <div>• Demonstrate continuous improvement mindset</div>
                            <div>• Use COR Pathways on tablets/phones to show real-time data during audit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* After Certification */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">After Certification:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Continue using COR Pathways for daily operations and maintenance
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Prepare for annual maintenance audit (Year 1 and 2)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Recertify after 3 years (much easier the second time!)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Enjoy insurance premium reductions (typically 5-15%)
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                          <svg aria-hidden="true" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Use COR status to win more bids and contracts
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about achieving COR certification with COR Pathways
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">How long does it really take to get COR certified?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 pb-6 text-gray-600">
                  Timeline depends on your province. Alberta&apos;s COR program is structured to be completable in about 3 months. Ontario&apos;s is a 9-month program. Both assume you&apos;re working consistently through the 14 elements and conducting daily operations. Traditional methods (paper and Excel) typically take longer because of the manual work involved in tracking and documentation.
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">Do I need to be tech-savvy to use COR Pathways?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 pb-6 text-gray-600">
                  Not at all! COR Pathways is designed for construction companies, not tech companies. If you can use a smartphone or check email, you can use COR Pathways. We also provide free onboarding assistance and training for your team.
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">What happens if we don&apos;t pass the audit?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="px-6 pb-6 text-gray-600">
                  If you don&apos;t pass, the auditor will give you a detailed report of exactly what needs improvement. You can address those gaps in COR Pathways and schedule a follow-up audit (typically 30 to 60 days later). The Mock Audit feature is designed to surface those gaps before the real audit, not after.
                </div>
              )}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(4)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">Can we import our existing safety documents and data?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 4 && (
                <div className="px-6 pb-6 text-gray-600">
                  Yes! You can upload existing policies, procedures, and training certificates. You can also import worker lists, certifications, and equipment data via CSV/Excel. This saves significant time during setup. Our team can help you with bulk imports during onboarding.
                </div>
              )}
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(5)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">Does COR Pathways work offline in the field?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 5 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 5 && (
                <div className="px-6 pb-6 text-gray-600">
                  Absolutely! COR Pathways is a Progressive Web App (PWA) that works completely offline. Your site supervisors can complete toolbox talks, inspections, and incident reports without internet. All data syncs automatically when they&apos;re back online. This is perfect for remote job sites with poor connectivity.
                </div>
              )}
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(6)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">What&apos;s included in the free trial?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 6 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 6 && (
                <div className="px-6 pb-6 text-gray-600">
                  The 14-day free trial includes full access to all features: all 70+ forms, Mock Audit Simulator, document management, training tracking, equipment management, and unlimited users. No credit card required. You can import your data, invite your team, and start working through the 14 COR elements immediately.
                </div>
              )}
            </div>
            
            {/* FAQ Item 7 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(7)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">Is COR Pathways only for companies pursuing initial certification?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 7 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 7 && (
                <div className="px-6 pb-6 text-gray-600">
                  No! COR Pathways is also perfect for companies maintaining their COR certification. Use it for daily operations, annual maintenance audits, and 3-year recertification. Many companies continue using COR Pathways after certification because it makes safety management so much easier than spreadsheets.
                </div>
              )}
            </div>
            
            {/* FAQ Item 8 */}
            <div className="bg-gray-50 rounded-lg border border-gray-200">
              <button 
                onClick={() => toggleFAQ(8)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-navy">How much support do we get?</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === 8 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 8 && (
                <div className="px-6 pb-6 text-gray-600">
                  All plans include email support (response within 24 hours). Premium and Enterprise plans include phone support and dedicated success managers. We also offer optional onboarding packages where our team helps you import data, configure settings, and train your staff. Our support team has extensive COR and construction safety experience.
                </div>
              )}
            </div>
            
          </div>
          
          {/* Still Have Questions CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="/about#contact" className="inline-block text-orange font-semibold hover:underline">
              Contact our team →
            </a>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your COR Journey?
            </h2>
            <p className="text-xl mb-8 text-white">
              Built for Ontario and Alberta contractors. Walk into your COR 2020 audit prepared.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/signup" className="bg-white text-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 text-center">
                Start 14-Day Free Trial →
              </a>
              <a href="/about#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 text-center">
                Schedule a Demo
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/90">
              <div>✓ No credit card required</div>
              <div>✓ Full feature access</div>
              <div>✓ Free setup assistance</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
