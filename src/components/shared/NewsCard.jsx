import { LinkIcon, CalendarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function NewsCard({ title, content, url, source, date, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
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

      <p className="text-gray-400 mb-4">{content}</p>

      <div className="flex flex-col gap-2 text-sm text-gray-400">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <LinkIcon className="h-4 w-4" />
            {url}
          </a>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <GlobeAltIcon className="h-4 w-4" />
            <span>{source}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  url: PropTypes.string,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NewsCard;