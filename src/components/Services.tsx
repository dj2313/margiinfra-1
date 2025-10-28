import { Building2, Hammer, Home, Lightbulb, Cog, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, bridges, and urban development.',
      features: ['Highway Construction', 'Bridge Engineering', 'Urban Planning'],
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Premium residential projects from luxury villas to modern apartment complexes.',
      features: ['Luxury Villas', 'Apartments', 'Gated Communities'],
    },
    {
      icon: Hammer,
      title: 'Commercial Buildings',
      description: 'State-of-the-art commercial spaces designed for modern business needs.',
      features: ['Office Complexes', 'Shopping Centers', 'Industrial Units'],
    },
    {
      icon: Lightbulb,
      title: 'Smart Buildings',
      description: 'Intelligent building solutions with integrated automation and sustainability.',
      features: ['IoT Integration', 'Energy Efficient', 'Automated Systems'],
    },
    {
      icon: Cog,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality control.',
      features: ['Planning & Design', 'Execution', 'Quality Control'],
    },
    {
      icon: Shield,
      title: 'Renovation & Restoration',
      description: 'Expert renovation services that breathe new life into existing structures.',
      features: ['Structural Upgrades', 'Modern Interiors', 'Heritage Restoration'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNDUsIDE1OCwgMTEsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mt-4 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional results across all construction domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-navy-900/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-8 hover:border-gold-500/50 transition-all hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-gold-500/20">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-gold-500 font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
