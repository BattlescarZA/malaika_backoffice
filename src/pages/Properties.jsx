import { useState, useEffect } from 'react';
import ListingCard from '../components/shared/ListingCard';
import ListingForm from '../components/shared/ListingForm';
import { PlusIcon } from '@heroicons/react/24/outline';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);

  // TODO: Replace with actual MongoDB fetch
  useEffect(() => {
    // Simulated data for now
    setProperties([
      {
        id: 1,
        type: 'Villa',
        title: 'Luxury Villa with Pool',
        description: 'Beautiful 5-bedroom villa with private pool and garden',
        price: 5000000,
        images: [],
      },
      {
        id: 2,
        type: 'Apartment',
        title: 'Modern Downtown Apartment',
        description: 'Spacious 2-bedroom apartment with city views',
        price: 1500000,
        images: [],
      },
    ]);
  }, []);

  const handleSubmit = async (formData) => {
    // TODO: Implement MongoDB integration
    if (editingProperty) {
      // Update existing property
      setProperties(properties.map(p => 
        p.id === editingProperty.id ? { ...formData, id: p.id } : p
      ));
    } else {
      // Add new property
      setProperties([...properties, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingProperty(null);
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // TODO: Implement MongoDB integration
    setProperties(properties.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Properties</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Property
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary">
                {editingProperty ? 'Edit Property' : 'Add New Property'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingProperty(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <ListingForm
              type="Property"
              initialData={editingProperty}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingProperty(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <ListingCard
            key={property.id}
            {...property}
            onEdit={() => handleEdit(property)}
            onDelete={() => handleDelete(property.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {properties.length === 0 && !showForm && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-400 mb-4">No properties listed yet</h3>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Add Your First Property
          </button>
        </div>
      )}
    </div>
  );
}

export default Properties;