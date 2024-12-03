import * as React from 'react';
const SvgFilledReport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 52 52"
    {...props}
  >
    <path
      fill="#200E32"
      d="M33.178 8.667a8.3 8.3 0 0 0-.152 1.598c0 4.812 3.907 8.713 8.726 8.713a8.7 8.7 0 0 0 1.581-.152V36.1c0 7.267-4.286 11.567-11.564 11.567H15.917c-7.297 0-11.584-4.3-11.584-11.567V20.272c0-7.268 4.287-11.605 11.584-11.605zm.008 13.003c-.424.061-.804.29-1.056.637l-5.22 6.716-5.944-4.68a1.6 1.6 0 0 0-2.267.304l-6.402 8.257c-.225.28-.346.63-.343.989l.006.24a1.602 1.602 0 0 0 2.948.693L20.26 27.9l5.944 4.661a1.6 1.6 0 0 0 2.287-.285l6.192-7.99v-.038a1.634 1.634 0 0 0-.305-2.264 1.58 1.58 0 0 0-1.193-.314"
    />
    <path
      fill="#200E32"
      d="M42.25 15.167a5.417 5.417 0 1 0 0-10.834 5.417 5.417 0 0 0 0 10.834"
      opacity={0.4}
    />
  </svg>
);
export default SvgFilledReport;
