import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'residential', 'commercial', 'infrastructure'];

  const projects = [
    {
      id: 1,
      title: 'Skyline Towers',
      category: 'residential',
      location: 'Mumbai, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury residential complex with 400+ premium apartments',
    },
    {
      id: 2,
      title: 'Metro Bridge Project',
      category: 'infrastructure',
      location: 'Delhi, India',
      year: '2022',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern metro bridge spanning 2.5 km',
    },
    {
      id: 3,
      title: 'Tech Park Complex',
      category: 'commercial',
      location: 'Bangalore, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art IT park with smart building features',
    },
    {
      id: 4,
      title: 'Green Valley Villas',
      category: 'residential',
      location: 'Pune, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eco-friendly luxury villas with modern amenities',
    },
    {
      id: 5,
      title: 'Coastal Highway',
      category: 'infrastructure',
      location: 'Goa, India',
      year: '2022',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium highway construction with scenic views',
    },
    {
      id: 6,
      title: 'Grand Shopping Mall',
      category: 'commercial',
      location: 'Hyderabad, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-level shopping destination with entertainment zones',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">Our Portfolio</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-navy-900 mt-4 mb-6">
            Showcasing Our Excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our diverse portfolio of successfully completed projects across various sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                  : 'bg-white text-navy-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize mb-2">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-gold-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-gold-500" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-all transform hover:scale-105 shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
