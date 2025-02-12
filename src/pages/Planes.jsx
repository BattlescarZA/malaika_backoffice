import { useState, useEffect } from 'react';
import ListingCard from '../components/shared/ListingCard';
import ListingForm from '../components/shared/ListingForm';
import { PlusIcon } from '@heroicons/react/24/outline';

function Planes() {
  const [planes, setPlanes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPlane, setEditingPlane] = useState(null);

  // TODO: Replace with actual MongoDB fetch
  useEffect(() => {
    // Simulated data for now
    setPlanes([
      {
        id: 1,
        type: 'Private Jet',
        title: 'Luxury Private Jet',
        description: 'Modern private jet with VIP configuration',
        price: 15000000,
        images: [],
      },
      {
        id: 2,
        type: 'Charter Plane',
        title: 'Mid-size Charter Aircraft',
        description: 'Efficient charter plane for business travel',
        price: 8000000,
        images: [],
      },
    ]);
  }, []);

  const handleSubmit = async (formData) => {
    // TODO: Implement MongoDB integration
    if (editingPlane) {
      // Update existing plane
      setPlanes(planes.map(p => 
        p.id === editingPlane.id ? { ...formData, id: p.id } : p
      ));
    } else {
      // Add new plane
      setPlanes([...planes, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingPlane(null);
  };

  const handleEdit = (plane) => {
    setEditingPlane(plane);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // TODO: Implement MongoDB integration
    setPlanes(planes.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Planes</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Plane
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary">
                {editingPlane ? 'Edit Plane' : 'Add New Plane'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingPlane(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <ListingForm
              type="Plane"
              initialData={editingPlane}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingPlane(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Plane Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planes.map(plane => (
          <ListingCard
            key={plane.id}
            {...plane}
            onEdit={() => handleEdit(plane)}
            onDelete={() => handleDelete(plane.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {planes.length === 0 && !showForm && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-400 mb-4">No planes listed yet</h3>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Add Your First Plane
          </button>
        </div>
      )}
    </div>
  );
}

export default Planes;