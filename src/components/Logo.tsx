import { Component } from 'react';

import { LOGO } from '@config';

export class Logo extends Component {
  render() {
    return (
      <h1 className="mb-6 text-3xl font-bold text-slate-700">{LOGO.TEXT}</h1>
    );
  }
}

export default Logo;
