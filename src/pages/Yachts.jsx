import { useState, useEffect } from 'react';
import ListingCard from '../components/shared/ListingCard';
import ListingForm from '../components/shared/ListingForm';
import { PlusIcon } from '@heroicons/react/24/outline';

function Yachts() {
  const [yachts, setYachts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingYacht, setEditingYacht] = useState(null);

  // TODO: Replace with actual MongoDB fetch
  useEffect(() => {
    // Simulated data for now
    setYachts([
      {
        id: 1,
        type: 'Motor Yacht',
        title: 'Luxury Motor Yacht',
        description: '120ft luxury motor yacht with 5 cabins',
        price: 8000000,
        images: [],
      },
      {
        id: 2,
        type: 'Sailing Yacht',
        title: 'Classic Sailing Yacht',
        description: '80ft sailing yacht perfect for ocean adventures',
        price: 3500000,
        images: [],
      },
    ]);
  }, []);

  const handleSubmit = async (formData) => {
    // TODO: Implement MongoDB integration
    if (editingYacht) {
      // Update existing yacht
      setYachts(yachts.map(y => 
        y.id === editingYacht.id ? { ...formData, id: y.id } : y
      ));
    } else {
      // Add new yacht
      setYachts([...yachts, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingYacht(null);
  };

  const handleEdit = (yacht) => {
    setEditingYacht(yacht);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // TODO: Implement MongoDB integration
    setYachts(yachts.filter(y => y.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Yachts</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Yacht
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary">
                {editingYacht ? 'Edit Yacht' : 'Add New Yacht'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingYacht(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <ListingForm
              type="Yacht"
              initialData={editingYacht}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingYacht(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Yacht Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yachts.map(yacht => (
          <ListingCard
            key={yacht.id}
            {...yacht}
            onEdit={() => handleEdit(yacht)}
            onDelete={() => handleDelete(yacht.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {yachts.length === 0 && !showForm && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-400 mb-4">No yachts listed yet</h3>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Add Your First Yacht
          </button>
        </div>
      )}
    </div>
  );
}

export default Yachts;