import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from './components/Layout';
import Routes from './routes';
import PrimaryTheme from './theme/PrimaryTheme';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false,
        // cacheTime: 1000 * 60 * 7,
        // enabled: false,
        staleTime: Infinity,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={PrimaryTheme}>
            <Layout>
              <Routes />
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
