import React from 'react';
import styled from '@emotion/styled';
import { ColorDic, ThemeColorVariant, ThemeSemanticColorKey } from 'assets/styles/theme/colors';
import mixins from 'assets/styles/mixins';

const typographyVaraintDict = {
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
  ] as const,
  interface: ['body1', 'body2', 'description', 'catpion'] as const,
};

type TypographyVaraintDict = typeof typographyVaraintDict;
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
  "headline-h4": {
    fontSize: 24,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 700,
  },
  "headline-h5": {
    fontSize: 20,
    lineHeight: 1.5,
    letterSpacing: '-0.3px',
    fontWeight: 700,
  },
  "subhead-subhead1": {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '27px',
    letterSpacing: '-0.3px',
  },
  "subhead-subhead2": {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '27px',
    letterSpacing: '-0.3px',
  },
  "subhead-subhead3": {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.3px',
  },
  "subhead-subhead4": {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.3px',    
  },
  "subhead-subhead5": {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: '-0.3px',    
  },
  "subhead-subhead6": {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: '-0.3px',    
  }
};

interface TypographyComponentProps {
  variant: TypographyVariant;
  color: ThemeSemanticColorKey | ThemeColorVariant;
  md?: TypographyVariant,
}

const Component = styled('span')(({ variant, color, md }: TypographyComponentProps) => ({
  color: ColorDic[color],
  ...typographyStyleDic[variant],
  ...(md? {
    [mixins.breakpoints.md]: {
      ...typographyStyleDic[md],
    }
  } : null),
}));

export interface TypographyProps
  extends TypographyComponentProps,
    Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'color'> {
  children: React.ReactNode;
  as?: React.ElementType<any> | undefined;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'interface-body1',
  color = 'gray-050',
  children,
  ...props
}) => {
  return (
    <Component variant={variant} color={color} {...props}>
      {children}
    </Component>
  );
};
export default Typography;
