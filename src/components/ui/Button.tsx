import { ButtonHTMLAttributes, Component, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
  style?: 'primary' | 'secondary';
};

export class Button extends Component<ButtonProps> {
  render() {
    const { children, style, className, ...rest } = this.props;

    const defaultStyles =
      'flex items-center justify-center min-h-14 rounded-sm bg-gradient-to-tl px-12 py-3 text-2xl font-medium text-white transition-all duration-300 hover:cursor-pointer hover:bg-gradient-to-br focus:outline-none';

    let colorStyles = '';

    switch (style) {
      case 'primary':
      default:
        colorStyles = 'from-sky-600 to-sky-400';
        break;
      case 'secondary':
        colorStyles = 'from-amber-600 to-amber-400';
        break;
    }

    const buttonStyles = `${defaultStyles} ${colorStyles} ${className ? className : ''}`;

    return (
      <button className={buttonStyles} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;
