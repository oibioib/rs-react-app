import { ErrorBoundary } from '@components';
import { AppProvider } from '@context';
import { BaseLayout, HeaderSection, MainSection } from '@layouts';

import './App.css';

const App = () => {
  return (
    <ErrorBoundary className="h-screen w-full">
      <AppProvider>
        <BaseLayout>
          <HeaderSection />
          <MainSection />
        </BaseLayout>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
