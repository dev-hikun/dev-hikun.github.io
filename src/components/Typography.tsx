import React from 'react';
import styled from '@emotion/styled';
import { ColorDic, ThemeColorVariant, ThemeSemanticColorKey } from 'assets/styles/theme/colors';
import mixins from 'assets/styles/mixins';
import { Theme } from 'assets/styles/theme';

const typographyVariantDict = {
  headline: ['h1', 'h2', 'h3', 'h4', 'h5'] as const,
  subhead: [
    'subhead1',
    'subhead2',
    'subhead3',
    'subhead4',
    'subhead5',
    'subhead6',
    'subhead7',
    'subhead8',
    'subhead9',
    'subhead10',
  ] as const,
  interface: ['body1', 'body2', 'description', 'catpion'] as const,
};

type TypographyVaraintDict = typeof typographyVariantDict;
export type TypographyCategory = keyof TypographyVaraintDict;
type TypographyName<$Category extends TypographyCategory> = `${$Category}-${TypographyVaraintDict[$Category][number]}`;

type CategoryHeadline = TypographyName<'headline'>;
type CategorySubHead = TypographyName<'subhead'>;
type CategoryInterface = TypographyName<'interface'>;

export type TypographyVariant = CategoryHeadline | CategorySubHead | CategoryInterface;

const typographyStyleDic: Record<TypographyVariant, React.CSSProperties> = {
  'headline-h1': {
    fontSize: 48,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 900,
  },
  'headline-h2': {
    fontSize: 36,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 900,
  },
  'headline-h3': {
    fontSize: 28,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 700,
  },
  'headline-h4': {
    fontSize: 24,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 700,
  },
  'headline-h5': {
    fontSize: 20,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 700,
  },
  'subhead-subhead1': {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '27px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead2': {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '27px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead3': {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead4': {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead5': {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead6': {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead7': {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead8': {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '18px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead9': {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: '15px',
    letterSpacing: '-0.3px',
  },
  'subhead-subhead10': {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: '15px',
    letterSpacing: '-0.3px',
  },
  'interface-body1': {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.3px',
  },
  'interface-body2': {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: '-0.3px',
  },
  'interface-description': {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '-0.3px',
  },
  'interface-catpion': {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '-0.2px',
  },
};

interface TypographyComponentProps {
  theme?: Theme;
  variant: TypographyVariant;
  color?: ThemeSemanticColorKey | ThemeColorVariant;
  md?: TypographyVariant;
  sm?: TypographyVariant;
}

const Component = styled('span')(({ theme, variant, color, md, sm }: TypographyComponentProps) => ({
  color: color ? ColorDic?.[color] : theme?.color?.text,
  ...typographyStyleDic[variant],
  ...(md
    ? {
        [mixins.breakpoints.md]: {
          ...typographyStyleDic[md],
        },
      }
    : null),
  ...(sm
    ? {
        [mixins.breakpoints.sm]: {
          ...typographyStyleDic[sm],
        },
      }
    : null),
}));

export interface TypographyProps
  extends Omit<TypographyComponentProps, 'theme'>,
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'color'> {
  theme?: Theme;
  children?: React.ReactNode;
  as?: React.ElementType<any> | undefined;
}

const Typography: React.FC<TypographyProps> = ({ color, variant = 'interface-body1', children, ...p }) => {
  const { ...props } = p;
  return (
    <Component variant={variant} color={color} {...props}>
      {children}
    </Component>
  );
};
export default Typography;
