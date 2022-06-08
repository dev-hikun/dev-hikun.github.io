import styled from '@emotion/styled';
import { Theme } from 'assets/styles/theme';
import colors, { ThemeColorKey } from 'assets/styles/theme/colors';
import React from 'react';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
export type ButtonVariant = 'contained' | 'outlined' | 'link' | 'none';
export type ButtonColorRange = 'backgroundColor' | 'borderColor' | 'text';
export type ButtonColorStyle = 'primary' | 'text' | 'pressed' | 'hover';
export type ButtonColor = ThemeColorKey;

const getApplyAttr: Record<ButtonVariant, { [x in ButtonColorRange]?: boolean }> = {
  contained: {
    backgroundColor: true,
  },
  link: {
    text: true,
  },
  none: {
    text: true,
  },
  outlined: {
    borderColor: true,
    text: true,
  },
};
const getColor: Record<ButtonColor, { [x in ButtonColorStyle]?: React.CSSProperties['color'] }> = {
  blue: {
    primary: colors.blue[400],
    hover: colors.blue[300],
    pressed: colors.blue[600],
  },
  gray: {
    primary: colors.gray[300],
    hover: colors.gray[300],
    pressed: colors.gray[800],
  },
  green: {
    primary: colors.green[500],
    hover: colors.green[400],
    pressed: colors.green[600],
  },
  purple: {
    primary: colors.purple[500],
    hover: colors.purple[400],
    pressed: colors.purple[600],
  },
  red: {
    primary: colors.red[500],
    hover: colors.red[400],
    pressed: colors.red[600],
  },
  yellow: {
    primary: colors.yellow[500],
    hover: colors.yellow[400],
    pressed: colors.yellow[600],
    text: colors.gray[900],
  },
};

const getButtonSize: Record<ButtonSize, React.CSSProperties> = {
  large: {
    padding: '16px',
  },
  medium: {
    padding: '12px',
  },
  small: {
    padding: '8px 12px',
  },
  tiny: {
    padding: '4px 12px',
  },
};

interface ButtonComponentProps {
  theme?: Theme;
  variant?: ButtonVariant;
  themeColor?: ButtonColor;
  pill?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
}

const ButtonComponent = styled('button')(
  ({
    theme,
    variant = 'contained',
    themeColor = 'blue',
    pill = false,
    rounded = true,
    size = 'medium',
  }: ButtonComponentProps) => {
    const isLink = variant === 'link';
    const isNone = variant === 'none';
    const isLinkOrNone = isLink || isNone;
    const { backgroundColor, borderColor, text } = getApplyAttr[variant];
    const { primary, pressed, hover, text: textColor } = getColor[themeColor];

    return {
      background: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: rounded ? 8 : pill ? 28 : 3,
      backgroundColor: backgroundColor ? primary : 'transparent',
      borderColor: borderColor ? primary : 'transparent',
      color: textColor ? textColor : text ? primary : theme?.color.white,

      '&:hover': {
        backgroundColor: backgroundColor ? hover : 'transparent',
        borderColor: borderColor ? hover : 'transparent',
        opacity: 0.7,
        boxShadow: !isLinkOrNone ? '0px 15px 25px -5px rgba(0,0,0,.3)' : undefined,
        transform: !isLinkOrNone ? 'scale(1.02)' : undefined,
      },

      '&:active': {
        backgroundColor: backgroundColor ? pressed : 'transparent',
        borderColor: borderColor ? pressed : 'transparent',
        transform: !isLinkOrNone ? 'scale(.98)' : undefined,
        boxShadow: !isLinkOrNone ? '0px 4px 8px rgba(0,0,0,.2)' : undefined,
      },

      '&:link': {
        color: theme?.color.link,
        textDecoration: 'none',
      },

      '&:visited': {
        color: theme?.color.link,
      },

      '&[href]': {
        cursor: 'pointer',
      },

      '&:is(button)': {
        cursor: 'pointer',
      },

      ...(isLinkOrNone ? { padding: 0 } : getButtonSize[size]),
      '&[disabled]': {
        color: colors.gray[400],
        background: backgroundColor ? colors.gray[300] : 'transparent',
        borderColor: borderColor ? colors.gray[300] : 'transparent',
        '&:link': {
          color: colors.gray[400],
        },
        '&:active': {
          background: backgroundColor ? colors.gray[300] : 'transparent',
          borderColor: borderColor ? colors.gray[300] : 'transparent',
          transform: 'initial',
          boxShadow: 'initial',
        },
        '&:hover': {
          opacity: 1.0,
          backgroundColor: backgroundColor ? colors.gray[300] : 'transparent',
          borderColor: borderColor ? colors.gray[300] : 'transparent',
        },
        transform: 'initial',
        boxShadow: 'initial',
        cursor: 'not-allowed',
      },
    };
  },
);

type EPButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type EPAnchor = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface ButtonProps extends ButtonComponentProps, EPButton, Omit<EPAnchor, keyof EPButton> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  ({ children, variant, disabled, ...props }, ref?: React.Ref<HTMLAnchorElement & HTMLButtonElement>) => {
    return (
      <ButtonComponent
        as={(variant === 'link' && 'a') || undefined}
        ref={ref}
        variant={variant}
        disabled={disabled}
        {...props}
      >
        {children}
      </ButtonComponent>
    );
  },
);
export default Button;
