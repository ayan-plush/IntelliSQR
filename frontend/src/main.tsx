import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
    toastOptions={{
      position : 'top-right',
      style : {
        background : '#00000051',
        color : 'black',
        backdropFilter: "blur(5px)", // Blur effect
        WebkitBackdropFilter: "blur(5px)"
      }
    }}
    
    />
    </QueryClientProvider>
  </React.StrictMode>,
);
