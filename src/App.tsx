import { Component } from 'react';
import { BaseLayout, HeaderSection, MainSection } from '@layouts';
import './App.css';
import { AppProvider } from '@context';
import { ErrorBoundary } from '@components';

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
