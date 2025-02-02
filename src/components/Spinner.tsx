import { SPINNER } from '@config';
import { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div className="flex h-[calc(100vh/2)] w-full items-center justify-center">
        <div
          className="before: inline-block size-20 animate-spin rounded-full border-[5px] border-current border-t-transparent text-blue-300"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">{SPINNER.TEXT}</span>
        </div>
      </div>
    );
  }
}

export default Spinner;
