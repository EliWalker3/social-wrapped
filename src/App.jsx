import { Routes, Route } from 'react-router-dom';
import Index from './Index.jsx';
import Data from './Data.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;