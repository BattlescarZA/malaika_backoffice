import { useState } from 'react';
import PropTypes from 'prop-types';
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline';

function ListingForm({ type, initialData = {}, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    price: initialData.price || '',
    images: initialData.images || [],
    ...initialData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, reader.result]
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input-field w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="input-field w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">
          Price (AED)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="input-field w-full"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Images
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {formData.images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          ))}
          <label className="w-full h-24 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary/50">
            <CameraIcon className="h-8 w-8 text-primary/50" />
            <span className="text-sm text-gray-400 mt-2">Add Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          {initialData.id ? 'Update' : 'Create'} {type}
        </button>
      </div>
    </form>
  );
}

ListingForm.propTypes = {
  type: PropTypes.string.isRequired,
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ListingForm;