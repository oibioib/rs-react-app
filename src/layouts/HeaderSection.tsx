import { Component, ReactNode } from 'react';

type HeaderSectionProps = {
  children?: ReactNode;
};

class HeaderSection extends Component<HeaderSectionProps> {
  render() {
    return (
      <header>
        <h1 className="mb-6 text-3xl font-bold text-slate-700">
          Rick and Morty API search
        </h1>
        {this.props.children}
      </header>
    );
  }
}

export default HeaderSection;
