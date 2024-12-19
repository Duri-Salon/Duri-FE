import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { theme } from './theme';

export const globalStyle = css`
  ${emotionReset}
  body {
    min-height: 100vh;
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
      scroll: smooth;
    }
    font-family: 'Pretendard';
    background-color: ${theme.palette.Normal50};
  }

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  button:focus {
    outline: none;
  }
  button:disabled {
    pointer-events: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  input,
  textarea {
    border: none;
    margin: 0;
  }
  .react-calendar {
    border: none !important;
    width: 100%;
  }
`;
