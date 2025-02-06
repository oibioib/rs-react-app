import { useState } from 'react';

import { Button } from '@components/ui';
import { BUTTON, ERROR } from '@config';

const ErrorButton = () => {
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error(ERROR.ERROR_BUTTON);
  }

  return (
    <div className="flex justify-center">
      <Button style="secondary" onClick={handleClick}>
        {BUTTON.THROW_ERROR}
      </Button>
    </div>
  );
};

export default ErrorButton;
