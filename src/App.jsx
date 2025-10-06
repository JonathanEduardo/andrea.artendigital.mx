import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/pages/HomePage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage />} />
      <Route path="/demo" element={<HomePage />} />
    </Routes>
  )
}

export default App
