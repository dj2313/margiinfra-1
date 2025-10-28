import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        { number: '+919876543210', formatted: '+91 98765 43210' },
        { number: '+919876543211', formatted: '+91 98765 43211' }
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        { email: 'info@margiinfra.com' },
        { email: 'projects@margiinfra.com' }
      ],
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Construction Avenue', 'Mumbai, Maharashtra 400001'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-navy-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-navy-900 mt-4 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to bring your construction vision to life? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3">{info.title}</h3>
              {info.title === 'Call Us' && 
                info.details.map((detail: any, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCall(detail.number)}
                    className="text-gray-600 hover:text-gold-600 transition-colors block w-full mb-2"
                  >
                    {detail.formatted}
                  </button>
                ))
              }
              {info.title === 'Email Us' &&
                info.details.map((detail: any, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleEmail(detail.email)}
                    className="text-gray-600 hover:text-gold-600 transition-colors block w-full mb-2"
                  >
                    {detail.email}
                  </button>
                ))
              }
              {info.title !== 'Call Us' && info.title !== 'Email Us' &&
                (info.details as string[]).map((detail: string, idx: number) => (
                  <p key={idx} className="text-gray-600">
                    {detail}
                  </p>
                ))
              }
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <h3 className="font-display font-bold text-2xl text-navy-900 mb-6">
              Send Us a Message
            </h3>

            {status.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="infrastructure">Infrastructure Development</option>
                  <option value="renovation">Renovation & Restoration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl shadow-gold-500/30 disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">

            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-display font-bold text-2xl mb-3">
                Request a Free Quote
              </h3>
              <p className="mb-6 opacity-90">
                Get a detailed estimate for your project within 24 hours.
              </p>
              <button className="bg-white text-gold-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all w-full">
                Get Free Consultation
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995206862!3d19.082177513715483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1652444456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
