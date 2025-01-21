import { blogPostsData } from "../data/data";

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Welcome to the Viditech Blog
          </h1>
          <p className="text-lg">
            Insights, trends, and updates about technology, design, and digital
            innovation.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto py-10 px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {blogPostsData[0].title}
            </h2>
            <p className="text-gray-700 mb-4">{blogPostsData[0].excerpt}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Read More
            </button>
          </div>
          <div>
            <img
              src={blogPostsData[0].image}
              alt={blogPostsData[0].title}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white py-10 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPostsData.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-emerald-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-blue-600 mb-2">{post.category}</p>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-10 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {["Web Development", "UI/UX Design", "SEO", "Tech Trends"].map(
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
      </div>
    </div>
  );
};

export default BlogPage;
