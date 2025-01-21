import { projectsData } from "../data/data";

const ProjectPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Our Projects</h1>
          <p className="text-lg">
            Explore our diverse portfolio showcasing innovative solutions and
            creative designs.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto py-10 px-8">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {["All", "Web Development", "Branding", "SEO"].map(
            (category, index) => (
              <button
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Project Grid */}
      <div className="bg-white py-10 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Our Work</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-green-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {project.description}
                  </p>
                  <button className="text-blue-600 hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
