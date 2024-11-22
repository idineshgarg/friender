'use client';
import { PropsWithChildren, useCallback } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  'data-testid'?: string;
  className?: string;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { onClick, children, className = '', disabled } = props;

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);
  return (
    <button onClick={onClickHandler} className={className} disabled={disabled}>
      {children}
    </button>
  );
};
