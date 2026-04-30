'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-md bg-orange text-navy font-extrabold text-sm">
                CP
              </span>
              <span className="text-xl font-bold">COR Pathways</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              The COR 2020 certification platform for construction companies in Ontario and Alberta.
            </p>
            <p className="text-gray-300 text-sm">
              4702 Birch Lane<br />
              Barriere, British Columbia<br />
              <a href="tel:+17808325158" className="hover:text-white transition-colors">780-832-5158</a><br />
              <a href="mailto:blake.safetyconsultant@gmail.com" className="hover:text-white transition-colors">blake.safetyconsultant@gmail.com</a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/platform" className="hover:text-white transition-colors">Platform</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/compliance" className="hover:text-white transition-colors">Compliance Tracking</Link></li>
              <li><Link href="/secor-program-management" className="hover:text-white transition-colors">SECOR Program Management</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/signup" className="hover:text-white transition-colors">Start Free Trial</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <div>
            © 2026 COR Pathways. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
