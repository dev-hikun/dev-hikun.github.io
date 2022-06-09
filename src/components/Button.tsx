import styled from '@emotion/styled';
import { Theme } from 'assets/styles/theme';
import { ThemeColorKey } from 'assets/styles/theme/colors';
import React, { useCallback } from 'react';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'contained' | 'outlined' | 'link';
export type ButtonColorRange = 'backgroundColor' | 'borderColor' | 'text';
export type ButtonColorStyle = 'primary' | 'text' | 'pressed' | 'hover';
export type ButtonColor = ThemeColorKey;

export const variantClass: Record<ButtonVariant, string> = {
  contained: 'border-0',
  outlined: 'border-1 border-solid bg-transparent',
  link: 'border-0',
};

export const sizeClass: Record<ButtonSize, string> = {
  tiny: ['button--tiny', 'px-3', 'py-1'].join(' '),
  small: ['button--small', 'px-3', 'py-2'].join(' '),
  medium: ['button--medium', 'p-3'].join(' '),
  large: ['button--large', 'p-4'].join(' '),
};

export const colorClass: Record<ButtonColor, Record<ButtonVariant, string>> = {
  yellow: {
    contained: ['bg-yellow-500', 'text-gray-900'].join(' '),
    outlined: ['border-yellow-500', 'text-yellow-500'].join(' '),
    link: 'text-yellow-500',
  },
  blue: {
    contained: ['bg-blue-500', 'text-white'].join(' '),
    outlined: ['border-blue-500', 'text-blue-500'].join(' '),
    link: ['text-blue-500', 'bg-transparent'].join(' '),
  },
  gray: {
    contained: ['bg-gray-500', 'text-white'].join(' '),
    outlined: ['border-gray-500', 'text-gray-500'].join(' '),
    link: 'text-gray-500',
  },
  green: {
    contained: ['bg-green-500', 'text-white'].join(' '),
    outlined: ['border-green-500', 'text-green-500'].join(' '),
    link: 'text-green-500',
  },
  purple: {
    contained: ['bg-purple-500', 'text-white'].join(' '),
    outlined: ['border-purple-500', 'text-purple-500'].join(' '),
    link: 'text-purple-500',
  },
  red: {
    contained: ['bg-red-500', 'text-white'].join(' '),
    outlined: ['border-red-500', 'text-red-500'].join(' '),
    link: 'text-red-500',
  },
};

export const disabledColorClass: Record<ButtonVariant, string> = {
  contained: 'text-gray-400 bg-gray-200',
  link: 'text-gray-400 bg-transparent',
  outlined: 'text-gray-400 border-gray-200',
};

interface ButtonComponentProps {
  theme?: Theme;
  disabled?: boolean;
  pill?: boolean;
  rounded?: boolean;
}

const ButtonComponent = styled('button')(
  ({ pill = false, rounded = true, disabled = false }: ButtonComponentProps) => ({
    borderRadius: rounded ? 8 : pill ? 28 : 3,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    outline: 'none',
    wordBreak: 'keep-all',
    ...(disabled ? { pointerEvents: 'none', cursor: 'not-allowed' } : {}),
  }),
);

type EPButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type EPAnchor = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface ButtonProps extends ButtonComponentProps, EPButton, Omit<EPAnchor, keyof EPButton> {
  variant?: ButtonVariant;
  themeColor?: ButtonColor;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', size = 'medium', themeColor = 'blue', disabled, onClick, className, children, ...props },
    ref?: React.Ref<HTMLAnchorElement & HTMLButtonElement>,
  ) => {
    const onClickButtonComponent = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const button = e.target as HTMLButtonElement;
        if (button.tagName === 'BUTTON') {
          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          const x = e.clientX - button.offsetLeft;
          const y = e.clientY - button.offsetTop;
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          button.appendChild(ripple);
          setTimeout(() => ripple.remove(), 300);
        }
        onClick && onClick(e);
      },
      [onClick],
    );

    const classNames =
      [
        className,
        sizeClass[size],
        variantClass[variant],
        disabled ? disabledColorClass[variant] : colorClass[themeColor][variant],
      ]
        .filter(v => Boolean(v))
        .join(' ') || undefined;

    return (
      <ButtonComponent
        as={(variant === 'link' && 'a') || undefined}
        ref={ref}
        disabled={disabled}
        className={classNames}
        onClick={e => onClickButtonComponent(e)}
        {...props}
      >
        {children}
      </ButtonComponent>
    );
  },
);
export default Button;
