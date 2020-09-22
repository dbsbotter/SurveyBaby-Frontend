import React from 'react';

import { ToastProvider } from './toast';
import { AuthProvider } from './auth';
import { LoadingProvider } from './loading';

const AppProvider: React.FC = ({ children }) => (
  <LoadingProvider>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </LoadingProvider>
);

export default AppProvider;
