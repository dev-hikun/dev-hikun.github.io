import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useDarkModeContext } from 'contexts/index';
import React from 'react';

interface PathProps {
  isDark?: boolean;
}
const LogoSvg = styled('svg')(() => ({
  position: 'relative',
  '> *': { position: 'fixed' },
}));
const LeftH = styled('path')(({ isDark }: PathProps) => ({
  animation: `${keyframes`
  to{
    fill: ${isDark ? 'var(--gray-200)' : 'url(#start-gradient)'};
  }`} .5s ease-in forwards`,
  animationDelay: '0.5s',
}));
const RightH = styled('path')(({ isDark }: PathProps) => ({
  animation: `${keyframes`
  to {
    d: path("M216,346c70.844-.2,13.2-117.832,79-145l-1-2c-67.816-23.957-4.309-143.78-78-144V30l1-1c127.277-.424,17.469,136.6,109,156v31c-91.377,20.478,17.955,156.644-109,156l-1-1V346Z");
    fill: ${isDark ? 'var(--gray-200)' : 'url(#end-gradient)'};
  }`} .5s ease-in forwards`,
  animationDelay: '1.5s',
}));
const CenterH = styled('path')(({ isDark }: PathProps) => ({
  animation: `${keyframes`
  to {
    d: path("M64,180H298v30H64V180Z");
    fill: var(${isDark ? '--gray-200' : '--blue-600'});
  }`} .5s ease-in forwards`,
  animationDelay: '1s',
}));
const Reminder = styled('path')(({ isDark }: PathProps) => ({
  animation: `${keyframes`
  50% {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-80px, 0);
    fill: var(${isDark ? '--gray-200' : '--blue-600'});
  }`} 0.5s ease-out forwards`,
  animationDelay: '2s',
}));
const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <LogoSvg xmlns="http://www.w3.org/2000/svg" width="1000" height="400" viewBox="0 0 1000 400" {...props}>
      <defs>
        <linearGradient id="start-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={'var(--blue-200)'} />
          <stop offset="80%" stopColor={'var(--blue-600)'} />
        </linearGradient>
        <linearGradient id="end-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="20%" stopColor={'var(--blue-600)'} />
          <stop offset="100%" stopColor={'var(--blue-200)'} />
        </linearGradient>
      </defs>
      <g>
        <RightH
          id="rightH"
          isDark={isDarkMode}
          data-name="}"
          d="M305,346c70.844-.2,13.2-117.832,79-145l-1-2c-67.816-23.957-4.309-143.78-78-144V30l1-1c127.277-.424,17.469,136.6,109,156v31c-91.377,20.478,17.955,156.644-109,156l-1-1V346Z"
        />
      </g>
      <LeftH
        id="leftH"
        isDark={isDarkMode}
        data-name="{"
        d="M144,29V55c-69.849.43-11.964,118.686-79,145v1c66.347,26.867,9.8,144.836,79,145v26c-127.836.092-20.943-152.24-109-155V184C123.315,180.634,16.066,28.657,144,29Z"
      />
      <g>
        <CenterH isDark={isDarkMode} id="centerH" data-name="-" d="M153,180H293v30H153V180Z" />
      </g>
      <Reminder
        isDark={isDarkMode}
        id="ikun"
        d="M445,187h10c2.219,0.726,4.219,2.366,7,3l2,3h1l4,11V355h-1v5h-1l-2,6-3,2v1h-2l-1,2h-3v1c-5.851,1.894-12.2-1.217-16-2l-3-4h-1v-2l-2-1v-3h-1c-3.032-8.371-1-31.924-1-43V232c0-10.018-1.4-29.569,2-36l2-1v-2l3-2v-1h2l1-2h3v-1ZM633,368l-3,1v1h-2v1c-1.887.837-11.9,1.983-15,1v-1h-3v-1l-4-1-5-6-2-1q-0.5-2-1-4l-2-1q-0.5-2-1-4l-2-1q-0.5-2-1-4h-1q-0.5-1.5-1-3l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-1.5-1-3h-1q-0.5-2-1-4l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-1.5-1-3h-1q-0.5-2-1-4l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-1.5-1-3h-1v-2h-1v-2l-2-1v-2h-1l-7,6-14,15-8,6v43h-1v5h-1q-1,3-2,6c-2.894,1.767-5.556,4.894-9,6-9.18,2.947-19.656-3.7-21-9-4.993-5-3-29.53-3-40V224c0-14.7-1.5-31.931,10-35,1.9-1.986.529-.021,3-1,6.967-2.76,11.557.7,17,2l2,3h1l4,11v67h1c2.752-5.131,7.086-8.085,11-12l9-10,5-4v-2l12-11,7-8,4-3v-2l14-13,16-17c1.8-1.175,11.142-3.241,15-2,2.219,0.714,4.211,2.389,7,3,2.733,4.775,5.8,7.164,6,15h-1v4h-1q-0.5,2-1,4l-3,2v2l-8,6-7,8-6,5-2,3h-2l-7,8-8,7-2,3h-2v1l-2,1v3c2.685,1.781,3.175,4.3,5,7l2,1v2l2,1v2l2,1v2l3,2v2h1q0.5,1.5,1,3l2,1v2l3,2v2l2,1v2l2,1v2l3,2v2h1q0.5,1.5,1,3l2,1v2l3,2v2h1q0.5,1.5,1,3l2,1v2l3,2v2l2,1v2h1q0.5,1.5,1,3l2,1v2l3,2v2l2,1v2l2,1v2h1v2h1q1,3,2,6h1v4h1q-0.5,5.5-1,11h-1A8.651,8.651,0,0,0,633,368Zm24-181h10c2.219,0.726,4.219,2.366,7,3l2,3h1q1,3,2,6h1c2.775,7.29,1,23.646,1,33v57c0,16.93.221,31.948,7,42l5,4q0.5,1,1,2h2q0.5,1,1,2h2v1l6,1v1h5c10.984,3.265,24.935.017,32-4h2l5-6,2-1v-2l2-1c5.95-9.674,5-29.219,5-45V206h1v-6c0.729-2.224,2.407-4.2,3-7l3-2v-1c4.3-2.821,9.877-3.012,17-3v1h3q0.5,1,1,2c3.026,2.022,4.942,1.942,6,6,3.649,3.641,3,12.621,3,20v50c0,21.513,1.482,45.922-4,62v4h-1v2h-1l-3,9-2,1v2l-3,2v2l-7,6q-0.5,1-1,2h-2q-0.5,1-1,2l-3,1v1h-2q-0.5,1-1,2h-2v1h-2v1h-3v1h-3v1h-3v1h-3v1h-5v1h-6c-3.69,1.056-26.009,2.414-31,1v-1h-8v-1h-5v-1h-4v-1l-9-2v-1l-6-2v-1l-4-1-2-3h-2l-4-5-4-3c-14.783-20.885-14-48.5-14-84V204a43.581,43.581,0,0,0,2-8c2.3-1.458,2.894-4.5,5-6h2q0.5-1,1-2h3v-1Zm169,0h10c12.953,4.1,17.141,17.712,24,28l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1q0.5,2,1,4l2,1v2l2,1v2l2,1v2l2,1v2h1q0.5,1.5,1,3l2,1v2h1q0.5,1.5,1,3l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1v2l2,1q0.5,2,1,4l2,1v2l2,1,5,9h1V201h1v-4h1v-2h1c1.782-3.127,2.089-4.989,6-6,4.1-4.3,12.494-.994,17,0,2.137,3.607,5.471,5.3,7,10v7c2.747,9.748,1,25.439,1,37v82c0,17.041,2.052,41.5-11,45-1.7,1.628-11.686,3.371-16,2-6.369-2.024-14.558-9.926-18-15v-2l-3-2v-2l-2-1q-0.5-2-1-4l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-2-1-4l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-1.5-1-3h-1q-0.5-2-1-4h-1q-0.5-1.5-1-3l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1q-0.5-2-1-4h-1q-0.5-1.5-1-3l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2l-2-1v-2h-1v-2h-1q-0.5-1.5-1-3h-1V356l-3,9c-2.436,1.358-3.3,3.825-5,5-1.669,1.157-2.292-.017-4,2H821v-1h-2v-1c-3.313-1.872-5.975-2.878-7-7-2.465-2.5-.874-4.222-2-8-2.825-9.476-1-27.456-1-39V236c0-10.768-1.343-29.559,2-37h1v-2l2-1v-2l7-5,5-1v-1Z"
      />
    </LogoSvg>
  );
};
export default Logo;
