import styled from 'styled-components';

export default styled.div`
  background: rgb(231,237,241);
  background: linear-gradient(-90deg, rgba(231,237,241,1) 0%, rgba(248,248,248,1) 50%, rgba(231,237,241,1) 100%);
  background-size: 400% 400%;

  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0;
    }
  }

  &.white {
    background: rgb(255, 255, 255);
    background: linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(231,237,241,1) 50%, rgba(255, 255, 255, 1) 100%);
  }
`;