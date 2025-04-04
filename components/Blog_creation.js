import { useState, useEffect } from 'react';

export default function Blog_creation() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image: '',
    tags: ''
  });

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(savedBlogs);
  }, []);

  // Save blogs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBlog = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      content: formData.content,
      image: formData.image,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      date: new Date().toLocaleDateString()
    };

    setBlogs(prev => [...prev, newBlog]);
    setFormData({
      title: '',
      author: '',
      content: '',
      image: '',
      tags: ''
    });
  };

  const deleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  const renderPreview = () => {
    if (!formData.title && !formData.content) {
      return <p className="text-green-300">Your blog preview will appear here...</p>;
    }

    return (
      <article className="bg-green-300 p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-green-300 mb-2">{formData.title || 'Sample Title'}</h3>
        <div className="text-sm text-gray-500 mb-3">
          By {formData.author || 'Anonymous'} • {new Date().toLocaleDateString()}
        </div>
        
        {formData.image && (
          <img 
            src={formData.image} 
            alt={formData.title || 'Blog image'} 
            className="w-full h-48 object-cover rounded mb-3"
          />
        )}
        
        <p className="text-gray-700 mb-3">
          {formData.content || 'Your content will appear here...'}
        </p>
        
        {formData.tags && (
          <div className="text-xs text-blue-500">
            Tags: {formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag).join(', ')}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="bg-gray-800 text-white p-6 rounded-lg mb-8 text-center">
          <h1 className="text-3xl font-bold">My Blog Creator</h1>
        </header>
        
        <main className="space-y-8">
          {/* Blog Creation Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Create a New Blog Post
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Content:
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="8"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image URL:
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma separated):
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Publish Blog
              </button>
            </form>
          </section>
          
          {/* Blog Preview Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Blog Preview
            </h2>
            <div className="p-4 border border-dashed border-gray-300 rounded-lg min-h-40">
              {renderPreview()}
            </div>
          </section>
          
          {/* Published Blogs Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Published Blogs
            </h2>
            
            {blogs.length === 0 ? (
              <p className="text-gray-500">No blogs published yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map(blog => (
                  <article key={blog.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
                    <div className="text-xs text-gray-500 mb-2">
                      By {blog.author} • {blog.date}
                    </div>
                    
                    {blog.image && (
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                    )}
                    
                    <p className="text-gray-700 text-sm mb-3">
                      {blog.content.substring(0, 150)}{blog.content.length > 150 ? '...' : ''}
                    </p>
                    
                    {blog.tags.length > 0 && (
                      <div className="text-xs text-blue-500 mb-3">
                        Tags: {blog.tags.join(', ')}
                      </div>
                    )}
                    
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="text-xs text-red-600 hover:text-red-800 focus:outline-none"
                    >
                      Delete
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}


