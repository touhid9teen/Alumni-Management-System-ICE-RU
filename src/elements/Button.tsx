import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customClass?: string;
  buttonType?: 'submit' | 'reset' | 'button';
  buttonVariant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { children, customClass = '', buttonVariant = 'primary', buttonType = 'button', ...attributes } = props;

  const buttonColor = `${
    buttonVariant === 'primary' ? 'bg-primary text-textDark' : 'bg-white text-[#858585] border border-[#DFDFDF]'
  }`;

  return (
    <button
      type={buttonType}
      className={`flex items-center rounded-lg h-14 px-5 ${buttonColor} ${customClass}`}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;