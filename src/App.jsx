import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Yachts from './pages/Yachts';
import Planes from './pages/Planes';
import Cars from './pages/Cars';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-secondary p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/yachts" element={<Yachts />} />
              <Route path="/planes" element={<Planes />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
