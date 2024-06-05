import { useState } from 'react';

interface ToggleProps {
  customClass?: string;
  checkedOnLabel?: string;
  checkedOffLabel?: string;
  id: string;
  name: string;
  initialChecked: boolean;
  onChangeToggle: ({ name, checked }: { name: string; checked: boolean }) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  customClass = '',
  checkedOnLabel = '',
  checkedOffLabel = '',
  id,
  name,
  initialChecked = false,
  onChangeToggle,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const handleToggle = (): void => {
    setIsChecked((prevState) => !prevState);
    onChangeToggle({ name, checked: !isChecked });
  };

  return (
    <label htmlFor={id} className={`flex items-center ${customClass}`}>
      <div className="relative">
        <input id={id} name={name} type="checkbox" className="sr-only" checked={isChecked} onChange={handleToggle} />
        <div
          className={`cursor-pointer w-10 h-5 rounded-full border-0.5 border-[#C9C9C9] transition-all duration-500 ${
            isChecked ? 'bg-primary' : 'bg-secondary'
          }`}
        />
        <div
          className={`cursor-pointer absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-xl transition-all duration-500 shadow-toggle ${
            isChecked ? 'translate-x-5' : ''
          }`}
        />
      </div>
      <span className="ml-2">{isChecked ? checkedOnLabel : checkedOffLabel}</span>
    </label>
  );
};

export default Toggle;
