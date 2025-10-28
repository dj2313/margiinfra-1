import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, TechVision Inc',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'MargiInfra transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. The Tech Park project was delivered on time and exceeded all our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Working with MargiInfra was a seamless experience. Their professional approach and innovative solutions helped us achieve a stunning residential complex that stands out in the market.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Infrastructure Minister',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'The highway project completed by MargiInfra showcases their expertise in large-scale infrastructure. Their dedication to safety and sustainability sets them apart from others.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">Client Testimonials</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-navy-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={24} />
              </div>

              <div className="flex items-center gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold-500 fill-gold-500" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-gold-500"
                />
                <div>
                  <div className="font-display font-bold text-navy-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="font-display font-bold text-3xl text-white mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the MargiInfra difference. Let's build something extraordinary together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
