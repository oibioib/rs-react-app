import {
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
} from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  children?: ReactNode;
  className?: string;
  style?: 'primary' | 'secondary';
  forwardedRef?: RefObject<HTMLInputElement>;
};

class Input extends Component<InputProps> {
  render() {
    const { children, style, className, forwardedRef, ...rest } = this.props;
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
      <input className={inputStyles} ref={forwardedRef} {...rest}>
        {children}
      </input>
    );
  }
}

const InputWithRef = forwardRef<
  HTMLInputElement,
  Omit<InputProps, 'forwardedRef'>
>((props, ref) => {
  return <Input {...props} forwardedRef={ref as RefObject<HTMLInputElement>} />;
});

InputWithRef.displayName = 'InputWithRef';

export default InputWithRef;
