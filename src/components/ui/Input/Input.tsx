import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  children?: ReactNode;
  className?: string;
  style?: 'primary' | 'secondary';
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, style = 'primary', className, ...rest }, ref) => {
    const defaultStyles =
      'h-full w-full flex-1 rounded-sm border-2 bg-gray-50 p-3 text-2xl font-medium text-gray-900 focus:outline-5 ';

    let colorStyles = '';

    switch (style) {
      case 'primary':
      default:
        colorStyles = `border-sky-300 hover:border-sky-400 focus:border-sky-400 focus:outline-sky-100`;
        break;
      case 'secondary':
        colorStyles = `border-amber-300 hover:border-amber-400 focus:border-amber-400 focus:outline-amber-100`;
        break;
    }

    const inputStyles = `${defaultStyles} ${colorStyles} ${className ? className : ''}`;

    return (
      <input className={inputStyles} ref={ref} {...rest}>
        {children}
      </input>
    );
  }
);

Input.displayName = 'Input';

export default Input;
