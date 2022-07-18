import Button from 'components/Button';
import Typography from 'components/Typography';
import React from 'react';
import WithThemes from 'components/common/WithThemes';
import THEME from 'assets/styles/theme';

const ButtonTestScreen: React.FC = () => {
  return (
    <>
      {(['dark', 'light'] as const).map(str => {
        return (
          <ul
            key={str}
            css={{
              backgroundColor: str === 'dark' ? 'black' : 'white',
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
              <Typography variant="headline-h4" themeColor={str === 'dark' ? 'white' : 'gray-900'}>
                Contained
              </Typography>
              <ul>
                <li>
                  <Button theme={THEME[str]} themeColor="blue">
                    파란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="gray">
                    그레이버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="green">
                    초록버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="purple">
                    보라버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="red">
                    빨간버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="yellow">
                    노란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="yellow" disabled>
                    disabled
                  </Button>
                </li>
              </ul>
            </li>
            <li>
              <Typography themeColor={str === 'dark' ? 'white' : 'gray-900'} variant="headline-h4">
                Outlined
              </Typography>
              <ul>
                <li>
                  <Button theme={THEME[str]} themeColor="blue" variant="outlined">
                    파란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="gray" variant="outlined">
                    그레이버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="green" variant="outlined">
                    초록버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="purple" variant="outlined">
                    보라버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="red" variant="outlined">
                    빨간버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="yellow" variant="outlined">
                    노란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="yellow" variant="outlined" disabled>
                    disabled
                  </Button>
                </li>
              </ul>
            </li>
            <li>
              <Typography themeColor={str === 'dark' ? 'white' : 'gray-900'} variant="headline-h4">
                link
              </Typography>
              <ul>
                <li>
                  <Button theme={THEME[str]} themeColor="blue" variant="link" href="#">
                    파란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="gray" variant="link" href="#">
                    그레이버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="green" variant="link" href="#">
                    초록버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="purple" variant="link" href="#">
                    보라버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="red" variant="link" href="#">
                    빨간버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} themeColor="yellow" variant="link" href="#">
                    노란버튼
                  </Button>
                </li>
                <li>
                  <Button theme={THEME[str]} variant="link" disabled>
                    disabled
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default WithThemes(ButtonTestScreen);
