import './styles/globals.css';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom'; 
import {AuthProvider} from './containers/AuthProvider';
import Presentational from './components/Presentational';

export default function  App() {
  return (
      <AuthProvider>
          <Presentational />
      </AuthProvider>
  );
}