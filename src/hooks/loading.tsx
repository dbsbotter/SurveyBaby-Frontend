import React, { createContext, useCallback, useContext, useState } from 'react';
import Loading from '../components/Loading';

interface LoadingContextData {
  isLoading: boolean;
  handlerLoading(isLoading: boolean): void;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handlerLoading = useCallback((isLoading: boolean) => {
    localStorage.removeItem('@SurveyBaby:token');
    localStorage.removeItem('@SurveyBaby:user');

    setLoading(isLoading);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading: loading, handlerLoading }}>
      {children}
      {loading && <Loading />}
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within an LoadingProvider');
  }

  return context;
}
