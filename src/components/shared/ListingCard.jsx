import { CurrencyDollarIcon, PhotoIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function ListingCard({ type, title, description, price, images = [], onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="relative">
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
            <PhotoIcon className="h-12 w-12 text-gray-600" />
          </div>
        )}
        <span className="absolute top-2 right-2 bg-primary/90 text-secondary px-2 py-1 rounded text-sm font-medium">
          {type}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-primary">
          <CurrencyDollarIcon className="h-5 w-5" />
          <span className="font-semibold">{price} AED</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="px-3 py-1 text-sm border border-primary/20 rounded-lg hover:bg-primary hover:text-secondary transition-colors duration-200"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 text-sm border border-red-500/20 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

ListingCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListingCard;