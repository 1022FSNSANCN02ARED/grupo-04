import react from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'; 
import User from './components/User';
import Product from './components/Product'
import Dashboard from './components/Dashboard';
import './App.css';


function App() {

  return (
      <div>
        < User/>
        < Product/>
        < Dashboard />
      </div>
  );
}

export default App;