'use client';

export default function Features() {
  const featureCategories = [
    {
      id: 'compliance',
      title: 'Track All 14 COR Elements in Real-Time',
      badge: 'COMPLIANCE TRACKING',
      description: 'Know exactly where you stand at any moment. Our intelligent dashboard calculates your compliance score across all 14 COR 2020 elements.',
      features: [
        {
          title: 'Real-Time Progress',
          description: 'See completion % for each element update as you add documentation',
        },
        {
          title: 'Gap Identification',
          description: 'Instantly see what\'s missing and what needs attention',
        },
        {
          title: 'Evidence Mapping',
          description: 'Every form and document automatically links to relevant elements',
        },
        {
          title: 'Audit-Ready Reports',
          description: 'Generate compliance reports for auditors with one click',
        },
      ],
    },
    {
      id: 'forms',
      title: '70+ Pre-Built Safety Forms Ready to Use',
      badge: 'SAFETY FORMS',
      description: 'From daily hazard assessments to incident reports, every form you need is built-in and mobile-ready.',
      stats: [
        { value: '70+', label: 'Safety Forms' },
        { value: '100%', label: 'Mobile-Friendly' },
        { value: 'Offline', label: 'Works Everywhere' },
        { value: 'Custom', label: 'Build Your Own' },
      ],
      formTypes: [
        'Daily Hazard Assessments & Toolbox Talks',
        'Site Inspections & Equipment Checks',
        'Incident Reports & Investigations',
        'Permits & Safe Work Procedures',
        'Training Records & Certifications',
      ],
    },
    {
      id: 'training',
      title: 'Never Miss a Certification Renewal',
      badge: 'TRAINING MANAGEMENT',
      description: 'Track every worker\'s certifications, set automatic renewal reminders, and ensure 100% compliance with provincial regulations.',
      features: [
        {
          title: 'Automated Expiry Alerts',
          description: '60, 30, and 7-day reminders via email and SMS',
        },
        {
          title: 'Training Matrix',
          description: 'Visual dashboard showing all workers and their certification status',
        },
        {
          title: 'Position-Based Requirements',
          description: 'Automatically assign required training based on job role',
        },
        {
          title: 'Certificate Storage',
          description: 'Upload and store all training certificates in one secure location',
        },
      ],
      statsBox: {
        value: 'No more spreadsheets',
        description: 'Replace the binders, sticky notes, and Excel sheets with one place for every certification, expiry, and training record.',
      },
    },
    {
      id: 'audit',
      title: 'Practice Before Your Real COR Audit',
      badge: 'AUDIT PREPARATION',
      description: 'Our AI-powered Mock Audit Simulator uses actual COR 2020 questions to prepare your team for the real audit experience.',
      features: [
        {
          title: 'Real COR 2020 Questions',
          description: 'Practice with actual interview and observation questions from the audit tool',
        },
        {
          title: 'AI-Powered Feedback',
          description: 'Get instant feedback on your responses and suggestions for improvement',
        },
        {
          title: 'Evidence Package Generation',
          description: 'Auto-generate evidence packages mapped to each audit question',
        },
        {
          title: 'Team Training',
          description: 'Practice with management, workers, and JHSC members',
        },
      ],
      statsBox: {
        value: 'Practice before the real audit',
        description: 'Surface the gaps that would cost you on audit day, while you still have time to fix them.',
      },
    },
    {
      id: 'offline',
      title: 'Works Anywhere, Even Without Internet',
      badge: 'OFFLINE CAPABILITY',
      description: 'Field crews can complete forms, inspections, and toolbox talks offline. All data syncs automatically when back online.',
      features: [
        {
          title: 'Progressive Web App (PWA)',
          description: 'Install on any device. Works like a native mobile app.',
        },
        {
          title: 'Automatic Background Sync',
          description: 'Data syncs when connection is restored. No manual uploads.',
        },
        {
          title: 'Photo & Signature Capture',
          description: 'Take photos and capture signatures offline. All saved locally.',
        },
        {
          title: 'Never Lose Data',
          description: 'All work saved locally until synced. 100% data reliability.',
        },
      ],
      deviceCompatibility: {
        label: 'Works On:',
        devices: ['📱 iPhone', '🤖 Android', '💻 Windows', '🍎 Mac', '📟 Tablets'],
      },
    },
    {
      id: 'equipment',
      title: 'Complete Equipment Lifecycle Management',
      badge: 'EQUIPMENT TRACKING',
      description: 'Track all equipment inventory, schedule preventive maintenance, and manage work orders from one central platform.',
      features: [
        {
          title: 'Equipment Inventory',
          description: 'Track all equipment with serial numbers, purchase dates, and current values',
        },
        {
          title: 'Preventive Maintenance Scheduling',
          description: 'Auto-schedule service based on hours/km with advance alerts',
        },
        {
          title: 'Work Order Management',
          description: 'Create, assign, and track repairs with photos and parts lists',
        },
        {
          title: 'Cost Tracking & Analytics',
          description: 'Track maintenance costs, downtime, and equipment ROI',
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              COMPLETE FEATURE SET
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need for COR 2020
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A comprehensive safety management platform built specifically for construction companies in Ontario and Alberta pursuing COR certification.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#compliance" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                14-Element Compliance
              </a>
              <a href="#forms" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Safety Forms
              </a>
              <a href="#training" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Training & Certifications
              </a>
              <a href="#equipment" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Equipment Management
              </a>
              <a href="#audit" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Mock Audit
              </a>
              <a href="#offline" className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                Offline Mode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, index) => (
        <section key={category.id} id={category.id} className={`py-20 scroll-mt-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div>
                {category.badge && (
                  <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {category.badge}
                  </div>
                )}
                <h2 className="text-4xl font-bold text-navy mb-6">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {category.description}
                </p>
                
                {/* Stats Grid for Forms */}
                {category.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {category.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-orange mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Form Types List */}
                {category.formTypes && (
                  <div className="space-y-3 mb-8">
                    {category.formTypes.map((formType, formIndex) => (
                      <div key={formIndex} className="flex items-center gap-3 text-gray-700">
                        <svg aria-hidden="true" className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{formType}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Regular Features List */}
                {category.features && (
                  <ul className="space-y-4 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg aria-hidden="true" className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {typeof feature === 'string' ? (
                          <span className="text-gray-700">{feature}</span>
                        ) : (
                          <div>
                            <div className="font-semibold text-navy">{feature.title}</div>
                            <div className="text-gray-600">{feature.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Stats Box */}
                {category.statsBox && (
                  <div className="bg-orange/5 rounded-lg p-6 border border-orange/20 mb-8">
                    <div className="text-2xl font-bold text-orange mb-2">{category.statsBox.value}</div>
                    <div className="text-gray-600">{category.statsBox.description}</div>
                  </div>
                )}
                

{/* Device Compatibility Box */}
                {category.deviceCompatibility && (
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                    <div className="text-sm font-semibold text-gray-600 mb-3">{category.deviceCompatibility.label}</div>
                    <div className="flex flex-wrap gap-3">
                      {category.deviceCompatibility.devices.map((device, deviceIndex) => (
                        <span key={deviceIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {device}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {category.id === 'compliance' && (
                  <a
                    href="/signup"
                    className="inline-block bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Try It Free →
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">
              COR Pathways vs. Traditional Methods
            </h2>
            <p className="text-xl text-gray-600">
              See why modern companies are switching from spreadsheets and paper
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-600 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-orange font-semibold">COR Pathways</th>
                  <th className="text-center py-4 px-6 text-gray-600 font-semibold">Paper/Excel</th>
                </tr>
              </thead>
              <tbody>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Real-time compliance tracking</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Mobile & offline capability</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Automated certification reminders</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Mock audit simulator</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Evidence auto-mapping to elements</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Document version control</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 text-sm">Manual</span>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Multi-user collaboration</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 text-sm">Limited</span>
                  </td>
                </tr>
                
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">Audit-ready reports (1-click)</td>
                  <td className="py-4 px-6 text-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-gray-400 text-sm">Manual</span>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial and see how COR Pathways can transform your safety management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 text-center transition-colors"
            >
              Start 14-day free trial
            </a>
            <a
              href="/pricing"
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 text-center transition-colors"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
