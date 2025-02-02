import { Component } from 'react';

import { ErrorBoundary } from '@components';
import { AppProvider } from '@context';
import { BaseLayout, HeaderSection, MainSection } from '@layouts';

import './App.css';

class App extends Component {
  render() {
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
  }
}

export default App;
