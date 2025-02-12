import { BellIcon, CameraIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Webcam from 'react-webcam';

function Navbar() {
  const [showCamera, setShowCamera] = useState(false);

  const handleCapture = async () => {
    // TODO: Implement image capture and save to MongoDB
    setShowCamera(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-primary/20 px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Malaika Backoffice</h1>
        
        <div className="flex items-center gap-4">
          {/* Camera Button */}
          <button 
            onClick={() => setShowCamera(!showCamera)}
            className="btn-primary flex items-center gap-2"
          >
            <CameraIcon className="h-5 w-5" />
            <span>Capture</span>
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-gray-800 rounded-full relative">
            <BellIcon className="h-6 w-6 text-primary" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary">Camera Capture</h3>
              <button 
                onClick={() => setShowCamera(false)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <Webcam
              audio={false}
              className="w-full rounded-lg"
              screenshotFormat="image/jpeg"
            />
            <div className="mt-4 flex justify-end gap-4">
              <button 
                onClick={() => setShowCamera(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button 
                onClick={handleCapture}
                className="btn-primary"
              >
                Capture Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;