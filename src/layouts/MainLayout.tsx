import { Component, ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

class MainLayout extends Component<MainLayoutProps> {
  render() {
    return (
      <div className="p- flex h-screen w-full justify-center bg-orange-50">
        <div className="w-full max-w-4xl p-4 py-10">{this.props.children}</div>
      </div>
    );
  }
}

export default MainLayout;
