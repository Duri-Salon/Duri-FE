import * as React from 'react';
const SvgErase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 53 54"
    {...props}
  >
    <g fill="#000">
      <path
        fillRule="evenodd"
        d="M18.554 17.919a1.041 1.041 0 1 0-1.473 1.472L24.691 27l-7.61 7.609a1.041 1.041 0 0 0 1.473 1.472l7.609-7.608 7.609 7.608a1.041 1.041 0 1 0 1.473-1.472L27.635 27l7.61-7.609a1.041 1.041 0 1 0-1.473-1.472l-7.609 7.608z"
        clipRule="evenodd"
      />
      <path d="M26.526 4.509C14.335 4.5 4.446 14.565 4.438 26.987 4.431 39.408 14.308 49.484 26.5 49.49c5.857.01 11.477-2.358 15.616-6.58 4.14-4.216 6.468-9.934 6.472-15.897.007-12.422-9.87-22.498-22.062-22.505m.001 42.732c-10.972.008-19.872-9.048-19.88-20.227S15.528 6.766 26.5 6.759c5.272-.01 10.33 2.121 14.054 5.921 3.727 3.794 5.822 8.94 5.826 14.306.007 11.18-8.881 20.248-19.853 20.255" />
    </g>
  </svg>
);
export default SvgErase;