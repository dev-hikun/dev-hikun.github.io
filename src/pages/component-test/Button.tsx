import { Global, ThemeProvider } from '@emotion/react';
import { light } from 'assets/styles/theme';
import Button from 'components/Button';
import Typography from 'components/Typography';
import React from 'react';
import GlobalStyle from 'assets/styles/globals';
import useTheme from 'hooks/useTheme';
import THEME from 'assets/styles/theme';

const withThemes = (Component: typeof ButtonTestScreen) => (props: React.ComponentProps<typeof ButtonTestScreen>) => {
  const [theme] = useTheme();
  return (
    <ThemeProvider theme={THEME[theme]}>
      <Global styles={GlobalStyle(THEME[theme])} />
      <Component {...props} />
    </ThemeProvider>
  );
};

const ButtonTestScreen: React.FC = () => {
  return (
    <>
      <ul
        css={{
          padding: 0,
          margin: 0,
          '& > li': {
            padding: 20,
            margin: 0,
            listStyle: 'none',

            '& > ul': {
              padding: 0,
              margin: 0,
              display: 'flex',
              '& > li': { padding: 5, margin: 0, listStyle: 'none' },
            },
          },
        }}
      >
        <li>
          <Typography variant="headline-h4">Contained</Typography>
          <ul>
            <li>
              <Button theme={light} themeColor="blue">
                파란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="gray">
                그레이버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="green">
                초록버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="purple">
                보라버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="red">
                빨간버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow">
                노란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow" disabled>
                disabled
              </Button>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="headline-h4">Outlined</Typography>
          <ul>
            <li>
              <Button theme={light} themeColor="blue" variant="outlined">
                파란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="gray" variant="outlined">
                그레이버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="green" variant="outlined">
                초록버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="purple" variant="outlined">
                보라버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="red" variant="outlined">
                빨간버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow" variant="outlined">
                노란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow" variant="outlined" disabled>
                disabled
              </Button>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="headline-h4">link</Typography>
          <ul>
            <li>
              <Button theme={light} themeColor="blue" variant="link" href="#">
                파란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="gray" variant="link" href="#">
                그레이버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="green" variant="link" href="#">
                초록버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="purple" variant="link" href="#">
                보라버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="red" variant="link" href="#">
                빨간버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow" variant="link" href="#">
                노란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} variant="link" disabled>
                disabled
              </Button>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="headline-h4">None</Typography>
          <ul>
            <li>
              <Button theme={light} themeColor="blue" variant="none">
                파란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="gray" variant="none">
                그레이버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="green" variant="none">
                초록버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="purple" variant="none">
                보라버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="red" variant="none">
                빨간버튼
              </Button>
            </li>
            <li>
              <Button theme={light} themeColor="yellow" variant="none">
                노란버튼
              </Button>
            </li>
            <li>
              <Button theme={light} variant="none" disabled>
                disabled
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default withThemes(ButtonTestScreen);
