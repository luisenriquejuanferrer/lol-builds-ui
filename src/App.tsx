import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';
import ItemsPage from './pages/ItemsPage';
import CreateBuildPage from './pages/CreateBuildPage';

const queryClient = new QueryClient();

function App() {
  return (
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/builds/create" element={<CreateBuildPage />} />
              <Route path="/items" element={<ItemsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MainLayout>
  );
}

export default App;
