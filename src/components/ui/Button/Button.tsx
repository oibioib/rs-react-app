import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  style?: 'primary' | 'secondary' | 'neutral';
  size?: 'normal' | 'small';
};

const Button = ({
  children,
  style = 'primary',
  size = 'normal',
  className,
  ...rest
}: ButtonProps) => {
  const defaultStyles =
    'flex items-center justify-center  rounded-sm bg-gradient-to-tl  font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-br focus:outline-none';

  let colorStyles = '';

  switch (style) {
    case 'primary':
    default:
      colorStyles = 'from-sky-600 to-sky-400';
      break;
    case 'secondary':
      colorStyles = 'from-amber-600 to-amber-400';
      break;
    case 'neutral':
      colorStyles = 'from-gray-500 to-slate-400';
      break;
  }

  let sizeStyles = '';

  switch (size) {
    case 'normal':
    default:
      sizeStyles = 'min-h-14 px-12 py-3 text-2xl';
      break;
    case 'small':
      sizeStyles = 'min-h-10 px-8 py-2 text-xl';
      break;
  }

  const buttonStyles = `${defaultStyles} ${colorStyles} ${sizeStyles} ${className ? className : ''}`;

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default memo(Button);
