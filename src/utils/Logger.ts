type Logger = {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

const log = (message: string, color = 'black', weight = 'normal') => {
  console.log(`%c ${message}`, `color: ${color}; font-weight: ${weight}`);
};

const info = (message: string) => {
  log(message, 'green');
};

const warn = (message: string) => {
  log(message, 'orange');
};

const error = (message: string) => {
  log(message, 'red');
};

export default { info, warn, error } as Logger;
