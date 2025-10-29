import { MessageSquare, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-gold-500 to-gold-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-gold-500/50 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Request a quote"
      >
        {isOpen ? (
          <X size={24} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-40 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-fade-in">
          <div className="mb-4">
            <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
              Quick Quote Request
            </h3>
            <p className="text-sm text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gold-500 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+918780135906"
              className="block w-full bg-navy-900 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all"
            >
              Call Now
            </a>
            <a
              href="mailto:margiinfra05@gmail.com"
              className="block w-full border-2 border-navy-900 text-navy-900 text-center px-4 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
