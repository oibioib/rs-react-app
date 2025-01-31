import { Component, ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

class BaseLayout extends Component<MainLayoutProps> {
  render() {
    return (
      <div className="flex min-h-screen w-full justify-center bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_70%,rgba(0,163,255,0)_100%)]">
        <div className="@container m-4 flex w-full max-w-4xl flex-col gap-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BaseLayout;
