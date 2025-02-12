import { useState, useEffect } from 'react';
import ListingCard from '../components/shared/ListingCard';
import ListingForm from '../components/shared/ListingForm';
import { PlusIcon } from '@heroicons/react/24/outline';

function Cars() {
  const [cars, setCars] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState(null);

  // TODO: Replace with actual MongoDB fetch
  useEffect(() => {
    // Simulated data for now
    setCars([
      {
        id: 1,
        type: 'Luxury Sedan',
        title: 'Mercedes-Benz S-Class',
        description: 'Flagship luxury sedan with premium features',
        price: 500000,
        images: [],
      },
      {
        id: 2,
        type: 'Sports Car',
        title: 'Lamborghini Huracán',
        description: 'High-performance sports car with V10 engine',
        price: 1200000,
        images: [],
      },
    ]);
  }, []);

  const handleSubmit = async (formData) => {
    // TODO: Implement MongoDB integration
    if (editingCar) {
      // Update existing car
      setCars(cars.map(c => 
        c.id === editingCar.id ? { ...formData, id: c.id } : c
      ));
    } else {
      // Add new car
      setCars([...cars, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingCar(null);
  };

  const handleEdit = (car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    // TODO: Implement MongoDB integration
    setCars(cars.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Cars</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn-primary flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          Add Car
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-primary">
                {editingCar ? 'Edit Car' : 'Add New Car'}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingCar(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <ListingForm
              type="Car"
              initialData={editingCar}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingCar(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <ListingCard
            key={car.id}
            {...car}
            onEdit={() => handleEdit(car)}
            onDelete={() => handleDelete(car.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {cars.length === 0 && !showForm && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-400 mb-4">No cars listed yet</h3>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            Add Your First Car
          </button>
        </div>
      )}
    </div>
  );
}

export default Cars;