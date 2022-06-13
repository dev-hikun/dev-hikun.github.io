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
  contained: 'button--contained border-0',
  outlined: 'button--outlined border-1 border-solid bg-transparent',
  link: 'button--link border-0',
};

export const sizeClass: Record<ButtonSize, string> = {
  tiny: ['button--tiny', 'px-3', 'py-1'].join(' '),
  small: ['button--small', 'px-3', 'py-2'].join(' '),
  medium: ['button--medium', 'p-3'].join(' '),
  large: ['button--large', 'p-4'].join(' '),
};

export const colorClass: Record<ButtonColor, Record<ButtonVariant, string>> = {
  yellow: {
    contained: ['bg-yellow-500', 'text-gray-900', 'hover:bg-yellow-600', 'active:bg-yellow-700'].join(' '),
    outlined: [
      'border-yellow-500',
      'text-yellow-500',
      'hover:border-yellow-600',
      'active:border-yellow-700',
      'hover:bg-yellow-050',
    ].join(' '),
    link: 'text-yellow-500',
  },
  blue: {
    contained: ['bg-blue-500', 'text-white', 'hover:bg-blue-600', 'active:bg-blue-700'].join(' '),
    outlined: [
      'border-blue-500',
      'text-blue-500',
      'hover:border-blue-600',
      'active:border-blue-700',
      'hover:bg-blue-050',
    ].join(' '),
    link: ['text-blue-500', 'bg-transparent'].join(' '),
  },
  gray: {
    contained: ['bg-gray-500', 'text-white', 'hover:bg-gray-600', 'active:bg-gray-700'].join(' '),
    outlined: [
      'border-gray-500',
      'text-gray-500',
      'hover:bg-gray-050',
      'hover:border-gray-600',
      'active:border-gray-700',
    ].join(' '),
    link: 'text-gray-500',
  },
  green: {
    contained: ['bg-green-500', 'text-white', 'hover:bg-green-600', 'active:bg-green-700'].join(' '),
    outlined: [
      'border-green-500',
      'text-green-500',
      'hover:border-green-600',
      'hover:bg-green-050',
      'active:border-green-700',
    ].join(' '),
    link: 'text-green-500',
  },
  purple: {
    contained: ['bg-purple-500', 'text-white', 'hover:bg-purple-600', 'active:bg-purple-700'].join(' '),
    outlined: [
      'border-purple-500',
      'text-purple-500',
      'hover:border-purple-600',
      'hover:bg-purple-050',
      'active:border-purple-700',
    ].join(' '),
    link: 'text-purple-500',
  },
  red: {
    contained: ['bg-red-500', 'text-white', 'hover:bg-red-600', 'active:bg-red-700'].join(' '),
    outlined: [
      'border-red-500',
      'text-red-500',
      'hover:border-red-600',
      'active:border-red-700',
      'hover:bg-red-050',
    ].join(' '),
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
  pill?: boolean;
  rounded?: boolean;
}

const ButtonComponent = styled('button')(({ pill = false, rounded = true }: ButtonComponentProps) => ({
  borderRadius: rounded ? 8 : pill ? 28 : 3,
  overflow: 'hidden',
  position: 'relative',
  outline: 'none',
  wordBreak: 'keep-all',
  '&:not(a, [disabled])': {
    cursor: 'pointer',
  },
  '&[disabled]': {
    cursor: 'not-allowed',
  },
}));

type EPButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type EPAnchor = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface ButtonProps extends ButtonComponentProps, EPButton, Omit<EPAnchor, keyof EPButton> {
  variant?: ButtonVariant | 'none';
  themeColor?: ButtonColor;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  (
    { variant = 'contained', size = 'small', themeColor = 'blue', disabled, onClick, className, children, ...props },
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
        'button-root',
        sizeClass[size],
        variant !== 'none' && variantClass[variant],
        variant !== 'none' && (disabled ? disabledColorClass[variant] : colorClass[themeColor][variant]),
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
