import './assets/styles/globals.css';

import { AuthProvider } from './context/AuthProvider';
import Presentational from './components/Presentational';

export default function  App() {
  return (
      <AuthProvider>
          <Presentational />
      </AuthProvider>
  );
}