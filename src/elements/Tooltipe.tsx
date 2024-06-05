import { ReactNode, useEffect, useState } from 'react';

interface TooltipProps {
  customClass?: string;
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({
  customClass = '',
  content,
  children,
  position = 'bottom',
}: TooltipProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [positionStyle, setPositionStyle] = useState<string>('');

  useEffect(() => {
    if (position === 'top') {
      setPositionStyle('bottom-full right-0 -translate-y-2');
    } else if (position === 'bottom') {
      setPositionStyle('top-full right-0 translate-y-2');
    } else if (position === 'left') {
      setPositionStyle('right-full top-1/2 -translate-x-2 -translate-y-1/2');
    } else {
      setPositionStyle('left-full top-1/2 translate-x-2 -translate-y-1/2');
    }
  }, [position]);

  const showTooltip = (): void => setVisible(true);
  const hideTooltip = (): void => setVisible(false);

  return (
    <div
      className={`relative ${customClass}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-10 bg-white text-black font-semibold text-xs p-2.5 rounded-lg shadow-tooltip w-max ${positionStyle}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
export default Tooltip;
