import React from 'react';
import './App.css';
import AppLayout from './components/Layout/AppLayout';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <AppLayout>
      <LoginPage />
    </AppLayout>
  );
}

export default App;
