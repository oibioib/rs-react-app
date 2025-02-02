import { Component } from 'react';

import { Button } from '@components/ui';
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
      <div className="flex justify-center">
        <Button style="secondary" onClick={this.handleClick}>
          {BUTTON.THROW_ERROR}
        </Button>
      </div>
    );
  }
}

export default ErrorButton;
