import { BrowserRouter, Route, Routes } from 'react-router';

import { ErrorBoundary } from '@components';
import Details from '@components/Details';
import { BaseLayout } from '@layouts';
import ErrorPage from '@pages/ErrorPage';
import MainPage from '@pages/MainPage';

import './App.css';

const App = () => {
  return (
    <ErrorBoundary className="h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<MainPage />}>
              <Route path="details/:id" element={<Details />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
