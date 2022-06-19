import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from './Typography';
import mixins from 'assets/styles/mixins';
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai';
import Button from './Button';

const Profile = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 6,
  backgroundColor: 'var(--profile-background-color)',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
  transform: 'translate3d(0,0,0)',
  transition: 'all .15s',
  '&::after': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    backdropFilter: 'brightness(1.0)',
    transition: 'all .15s',
  },
  // '&:hover': {
  //   boxShadow: '10px 20px 30px 0 rgba(11, 12, 14, .16)',
  //   transform: 'translate3d(0, -4px, 0)',
  //   '&::after': {
  //     content: '""',
  //     backdropFilter: 'brightness(0.9)',
  //   },
  // },
  [mixins.breakpoints.md]: {
    flexDirection: 'row',
  },
}));

const ImageWrap = styled('div')(() => ({
  width: 'calc(100% - 40px)',
  minWidth: '76px',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  [mixins.breakpoints.md]: {
    flexBasis: '100px',
  },
}));

const TextWrap = styled('div')(() => ({
  margin: '20px 0 0 0',
  color: 'var(--text-color)',
  textAlign: 'center',
  [mixins.breakpoints.md]: {
    margin: 0,
    padding: '0 0 0 20px',
    flexBasis: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    textAlign: 'left',
    h3: {
      flexBasis: '100%',
    },
    h4: {
      '&::after': {
        display: 'inline-block',
        content: '"/"',
        fontSize: '12px',
        padding: '0 5px',
      },
    },
  },
  [mixins.breakpoints.sm]: {
    'h4::after': {
      content: '""',
    },
  },
}));

const IconWrap = styled('div')(() => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0 0 0',
  margin: '20px 0 0 0',
  borderTop: '1px solid var(--hr-color)',

  '> a': {
    transition: 'all .1s',
    display: 'block',
    transform: 'translate3d(0,0,0)',
    color: 'var(--text-color)',
    '&:hover': {
      color: 'var(--text-hover-color)',
      transform: 'translate3d(0, -2px, 0);',
    },
  },
  [mixins.breakpoints.md]: {
    borderTop: 0,
    margin: 0,
    padding: 0,
    flexBasis: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    '> a': {
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

const MainProfile: React.FC = () => {
  return (
    <Profile>
      <ImageWrap>
        <StaticImage src="https://avatars.githubusercontent.com/u/76590935" layout="constrained" alt="Heehyeon Lee" />
      </ImageWrap>
      <TextWrap>
        <Typography as="h3" className="m-0" variant="headline-h5" id="name">
          이희현
        </Typography>
        <Typography as="h4" className="m-0" variant="interface-body1">
          Software engineer
        </Typography>
        <Typography as="span" variant="interface-body2">
          Seoul, Korea
        </Typography>
      </TextWrap>
      <IconWrap>
        <Button variant="link" title="github" href="https://github.com/dev-hikun">
          <GithubIcon size={20} />
        </Button>
        <Button
          variant="link"
          title="linkedin"
          href="https://www.linkedin.com/in/%ED%9D%AC%ED%98%84-%EC%9D%B4-a40a80128/"
        >
          <LinkedinIcon size={20} />
        </Button>
        <Button variant="link" title="instagram" href="https://www.instagram.com/_def.unction/">
          <InstagramIcon size={20} />
        </Button>
      </IconWrap>
    </Profile>
  );
};
export default MainProfile;
