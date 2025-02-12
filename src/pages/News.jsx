import { useState, useEffect } from 'react';
import NewsCard from '../components/shared/NewsCard';
import { PlusIcon, LinkIcon } from '@heroicons/react/24/outline';

function News() {
  const [news, setNews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    url: '',
    source: '',
  });

  // TODO: Replace with actual MongoDB fetch
  useEffect(() => {
    // Simulated data for now
    setNews([
      {
        id: 1,
        title: 'New Luxury Development in Dubai Marina',
        content: 'A new luxury residential development has been announced in Dubai Marina, featuring premium amenities and waterfront views.',
        url: 'https://example.com/news/dubai-marina',
        source: 'Dubai Real Estate News',
        date: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Latest Yacht Show Highlights',
        content: 'The recent yacht show showcased the most impressive vessels, with record attendance and sales.',
        url: 'https://example.com/news/yacht-show',
        source: 'Maritime Weekly',
        date: new Date().toISOString(),
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement MongoDB integration
    const newsItem = {
      ...formData,
      id: editingNews ? editingNews.id : Date.now(),
      date: editingNews ? editingNews.date : new Date().toISOString(),
    };

    if (editingNews) {
      setNews(news.map(n => n.id === editingNews.id ? newsItem : n));
    } else {
      setNews([newsItem, ...news]);
    }

    setShowForm(false);
    setEditingNews(null);
    setFormData({
      title: '',
      content: '',
      url: '',
      source: '',
    });
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      url: newsItem.url,
      source: newsItem.source,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // TODO: Implement MongoDB integration
    setNews(news.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">News & Links</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add News
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary">
                {editingNews ? 'Edit News' : 'Add News'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingNews(null);
                  setFormData({
                    title: '',
                    content: '',
                    url: '',
                    source: '',
                  });
                }}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                  URL
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="input-field w-full pl-10"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-2">
                  Source
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  className="input-field w-full"
                  required
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingNews(null);
                    setFormData({
                      title: '',
                      content: '',
                      url: '',
                      source: '',
                    });
                  }}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {editingNews ? 'Update' : 'Post'} News
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map(item => (
          <NewsCard
            key={item.id}
            {...item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {news.length === 0 && !showForm && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-400 mb-4">No news articles yet</h3>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Post Your First News
          </button>
        </div>
      )}
    </div>
  );
}

export default News;