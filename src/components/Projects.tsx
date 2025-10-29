import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

// Fallback image in case of loading errors
const fallbackImage = 'https://images.pexels.com/photos/977737/pexels-photo-977737.jpeg';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const filters = ['all', 'road construction', 'logistics'];

  const projects = [
    {
      id: 1,
      title: 'Express Highway Development',
      category: 'road construction',
      location: 'Gujarat, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/5025523/pexels-photo-5025523.jpeg',
      description: 'State-of-the-art highway construction with modern urban connectivity.',
    },
    {
      id: 2,
      title: 'Urban Road Expansion',
      category: 'road construction',
      location: 'Maharashtra, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg',
      description: 'Major urban road expansion project with advanced paving techniques.',
    },
    {
      id: 3,
      title: 'Night Construction Project',
      category: 'road construction',
      location: 'Delhi, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/1838349/pexels-photo-1838349.jpeg',
      description: '24/7 road construction project with minimal traffic disruption.',
    },
    {
      id: 4,
      title: 'Infrastructure Development',
      category: 'road construction',
      location: 'Rajasthan, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/977737/pexels-photo-977737.jpeg',
      description: 'Precision road construction with quality materials and expert execution.',
    }
  ];

  const handleImageError = (id: number) => {
    setImageError(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Delivering excellence in road construction and infrastructure development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all
                ${activeFilter === filter 
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={imageError[project.id] ? fallbackImage : project.image}
                  alt={project.title}
                  onError={() => handleImageError(project.id)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
