import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';

const SmSizeBr = styled('br')(() => ({
  display: 'none',
  [mixins.breakpoints.sm]: {
    display: 'initial',
  },
}));
export default SmSizeBr;
