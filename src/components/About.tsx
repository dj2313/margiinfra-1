import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use top-grade materials and advanced techniques to build durable and safe roads.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our engineers and logistics experts bring extensive experience to every project.',
    },
    {
      icon: Target,
      title: 'Client Focus',
      description: 'Your goals are our priority. We deliver tailored solutions for your transport needs.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging the latest in road construction and logistics technology for efficiency.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">About MargiInfra</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-navy-900 mt-4 mb-6 leading-tight">
              Engineering the Arteries of Commerce and Community
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MargiInfra has been a leader in road construction and transport logistics. We specialize in developing robust infrastructure that facilitates economic growth and connectivity.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our dedication to quality, efficiency, and safety has made us a preferred partner for public and private sector transportation projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-navy-900 text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-display font-bold">1,000+ km</div>
                <div className="text-sm text-gray-300">Roads Paved</div>
              </div>
              <div className="bg-gold-500 text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-display font-bold">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
