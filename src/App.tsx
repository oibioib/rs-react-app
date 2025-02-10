import { BrowserRouter, Route, Routes } from 'react-router';

import { Details, ErrorBoundary } from '@components';
import { BaseLayout } from '@layouts';
import { ErrorPage, MainPage } from '@pages';

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
