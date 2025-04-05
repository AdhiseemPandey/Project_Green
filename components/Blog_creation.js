import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiSearch, FiPlus, FiArrowLeft, FiEye, FiFileText, FiCalendar, FiUser, FiTag } from 'react-icons/fi';

export default function BlogCreator() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    image: '',
    tags: ''
  });
  const [activeTab, setActiveTab] = useState('create');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const loadBlogs = () => {
      setIsLoading(true);
      try {
        const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(savedBlogs);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogs();
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
      date: new Date().toISOString(),
      excerpt: formData.content.substring(0, 100) + (formData.content.length > 100 ? '...' : '')
    };

    setBlogs(prev => [newBlog, ...prev]);
    setFormData({
      title: '',
      author: '',
      content: '',
      image: '',
      tags: ''
    });
    setActiveTab('preview');
  };

  const deleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
      if (selectedBlog && selectedBlog.id === id) {
        setSelectedBlog(null);
      }
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderPreview = () => {
    if (!formData.title && !formData.content) {
      return (
        <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          <FiFileText className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-gray-500 text-center">Your blog preview will appear here.<br />Start typing to see a live preview.</p>
        </div>
      );
    }

    return (
      <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {formData.title || 'Untitled Blog Post'}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <FiUser className="mr-1" /> {formData.author || 'Anonymous'}
          </span>
          <span className="flex items-center">
            <FiCalendar className="mr-1" /> {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        {formData.image && (
          <img 
            src={formData.image} 
            alt={formData.title || 'Blog image'} 
            className="w-full h-64 object-cover rounded-lg mb-4"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/800x400?text=Image+not+available'
            }}
          />
        )}
        
        <div className="prose max-w-none text-gray-700 mb-4">
          {formData.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph || <br />}</p>
          ))}
        </div>
        
        {formData.tags && (
          <div className="flex flex-wrap gap-2 items-center">
            <FiTag className="text-gray-400" />
            {formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag).map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    );
  };

  const renderBlogDetail = (blog) => {
    return (
      <article className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft className="mr-1" /> Back to posts
          </button>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setFormData({
                  title: blog.title,
                  author: blog.author,
                  content: blog.content,
                  image: blog.image,
                  tags: blog.tags.join(', ')
                });
                setActiveTab('create');
                setSelectedBlog(null);
              }}
              className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
              title="Edit post"
            >
              <FiEdit2 />
            </button>
            <button
              onClick={() => deleteBlog(blog.id)}
              className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-red-50"
              title="Delete post"
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{blog.title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="flex items-center mr-4">
            <FiUser className="mr-1" /> {blog.author}
          </span>
          <span className="flex items-center">
            <FiCalendar className="mr-1" /> {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        {blog.image && (
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-96 object-cover rounded-lg mb-6"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/800x400?text=Image+not+available'
            }}
          />
        )}
        
        <div className="prose max-w-none text-gray-700 mb-6">
          {blog.content.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph || <br />}</p>
          ))}
        </div>
        
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <FiTag className="text-gray-400" />
            {blog.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl mb-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Blog Creator</h1>
          <p className="text-blue-100 opacity-90">Create, manage, and publish your content with ease</p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <nav className="space-y-1">
                <button
                  onClick={() => {
                    setActiveTab('create');
                    setSelectedBlog(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'create' ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                >
                  <FiPlus className="mr-3" />
                  Create Post
                </button>
                <button
                  onClick={() => {
                    setActiveTab('preview');
                    setSelectedBlog(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'preview' ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                >
                  <FiEye className="mr-3" />
                  Preview
                </button>
                <button
                  onClick={() => {
                    setActiveTab('published');
                    setSelectedBlog(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${activeTab === 'published' ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                >
                  <FiFileText className="mr-3" />
                  Published Posts
                </button>
              </nav>
              
              <div className="mt-8 pt-4 border-t border-gray-100">
                <h3 className="font-medium text-gray-700 mb-3">Blog Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Posts:</span>
                    <span className="font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {blogs.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Last Created:</span>
                    <span className="font-medium">
                      {blogs.length > 0 ? 
                        new Date(blogs[0].date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        }) : 
                        '--'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-1">
            {selectedBlog ? (
              renderBlogDetail(selectedBlog)
            ) : (
              <>
                {activeTab === 'create' && (
                  <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                      Create New Post
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Title *
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Enter blog title"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                            Author *
                          </label>
                          <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                          Content *
                        </label>
                        <textarea
                          id="content"
                          name="content"
                          rows="10"
                          value={formData.content}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Write your blog content here..."
                        ></textarea>
                        <p className="mt-2 text-xs text-gray-500">
                          Supports basic markdown formatting (headings, lists, links)
                        </p>
                      </div>
                      
                      <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                          Featured Image URL
                        </label>
                        <input
                          type="url"
                          id="image"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          id="tags"
                          name="tags"
                          value={formData.tags}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="technology, web development, design"
                        />
                      </div>
                      
                      <div className="flex justify-end space-x-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setActiveTab('preview')}
                          className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Preview
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Publish Post
                        </button>
                      </div>
                    </form>
                  </section>
                )}
                
                {activeTab === 'preview' && (
                  <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                      <h2 className="text-2xl font-semibold text-gray-800">Post Preview</h2>
                      <button
                        onClick={() => setActiveTab('create')}
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <FiArrowLeft className="mr-1" /> Back to editor
                      </button>
                    </div>
                    {renderPreview()}
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setActiveTab('published')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View All Posts
                      </button>
                    </div>
                  </section>
                )}
                
                {activeTab === 'published' && (
                  <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-2 border-b border-gray-100">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Published Posts</h2>
                      <div className="w-full sm:w-64 relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search posts..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    {isLoading ? (
                      <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                      </div>
                    ) : filteredBlogs.length === 0 ? (
                      <div className="text-center py-12">
                        {blogs.length === 0 ? (
                          <>
                            <FiFileText className="mx-auto w-12 h-12 text-gray-400 mb-2" />
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No posts yet</h3>
                            <p className="mt-1 text-gray-500">Get started by creating a new blog post.</p>
                            <div className="mt-6">
                              <button
                                onClick={() => setActiveTab('create')}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                <FiPlus className="-ml-1 mr-2 h-5 w-5" />
                                New Post
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <FiSearch className="mx-auto w-12 h-12 text-gray-400 mb-2" />
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No matching posts</h3>
                            <p className="mt-1 text-gray-500">Try adjusting your search query.</p>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredBlogs.map(blog => (
                          <article 
                            key={blog.id} 
                            className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer"
                            onClick={() => setSelectedBlog(blog)}
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteBlog(blog.id);
                                }}
                                className="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
                                title="Delete post"
                              >
                                <FiTrash2 />
                              </button>
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mb-3">
                              <span className="flex items-center mr-3">
                                <FiUser className="mr-1" /> {blog.author}
                              </span>
                              <span className="flex items-center">
                                <FiCalendar className="mr-1" /> {new Date(blog.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                            
                            {blog.image && (
                              <img 
                                src={blog.image} 
                                alt={blog.title} 
                                className="w-full h-48 object-cover rounded-lg mb-3"
                                onError={(e) => {
                                  e.target.onerror = null; 
                                  e.target.src = 'https://via.placeholder.com/800x400?text=Image+not+available'
                                }}
                              />
                            )}
                            
                            <p className="text-gray-700 text-sm mb-3">
                              {blog.excerpt}
                            </p>
                            
                            {blog.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag, i) => (
                                  <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    )}
                  </section>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}