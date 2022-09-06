import './assets/styles/globals.css';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom'; 
import {AuthProvider} from './context/AuthProvider';
import Presentational from './components/Presentational';

export default function  App() {
  return (
      <AuthProvider>
          <Presentational />
      </AuthProvider>
  );
}