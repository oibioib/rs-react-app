import { Component } from 'react';

import { BUTTON, ERROR } from '@config';

type ErrorButtonProps = Record<string, unknown>;

type ErrorButtonState = {
  isError: boolean;
};

class ErrorButton extends Component<ErrorButtonProps, ErrorButtonState> {
  constructor(props: ErrorButtonProps) {
    super(props);

    this.state = {
      isError: false,
    };
  }

  handleClick = () => {
    this.setState({ isError: true });
  };

  render() {
    const { isError } = this.state;

    if (isError) {
      throw new Error(ERROR.ERROR_BUTTON);
    }

    return (
      <div className="flex h-14 justify-center">
        <button
          className="h-full rounded-sm bg-gradient-to-tl from-amber-600 to-amber-400 px-12 text-2xl font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-br focus:outline-none"
          onClick={this.handleClick}
        >
          {BUTTON.THROW_ERROR}
        </button>
      </div>
    );
  }
}

export default ErrorButton;
