import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring durability and precision.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring decades of combined experience to every build.',
    },
    {
      icon: Target,
      title: 'Client Focus',
      description: 'Your vision drives our mission. We deliver exactly what you envision and more.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and sustainable construction practices.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">About MargiInfra</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-navy-900 mt-4 mb-6 leading-tight">
              Building Landmarks That Stand the Test of Time
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since 2005, MargiInfra has been at the forefront of innovative construction and infrastructure development. We specialize in creating spaces that blend functionality with architectural brilliance.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our commitment to quality, safety, and sustainability has made us a trusted partner for both residential and commercial projects across the region.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-navy-900 text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-display font-bold">500+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="bg-gold-500 text-white px-6 py-3 rounded-lg">
                <div className="text-2xl font-display font-bold">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-navy-900">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Assurance</div>
                </div>
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
