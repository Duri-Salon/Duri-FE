import * as React from 'react';
const SvgSecurityWarning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 55"
    {...props}
  >
    <path
      fill="#000"
      d="M27 29.792c.62 0 1.125-.514 1.125-1.146V21.77c0-.633-.504-1.146-1.125-1.146s-1.125.513-1.125 1.146v6.875c0 .632.504 1.146 1.125 1.146m17.976-21.19a1.126 1.126 0 0 0-1.332-.888 20.2 20.2 0 0 1-15.998-3.332 1.11 1.11 0 0 0-1.292 0 20.2 20.2 0 0 1-15.998 3.332 1 1 0 0 0-.23-.024C9.505 7.69 9 8.202 9 8.835v18.376c.004 6.73 3.184 13.046 8.547 16.975l8.798 6.425a1.105 1.105 0 0 0 1.31 0l8.798-6.425c5.363-3.93 8.543-10.246 8.547-16.975V8.835q0-.117-.024-.233m-2.226 18.61c-.002 5.99-2.833 11.613-7.607 15.112L27 48.271l-8.143-5.947c-4.774-3.499-7.604-9.122-7.607-15.113V10.205A22.35 22.35 0 0 0 27 6.703a22.36 22.36 0 0 0 15.75 3.502zM27 31.796c-.777 0-1.406.641-1.406 1.432s.63 1.432 1.406 1.432c.777 0 1.406-.64 1.406-1.432 0-.79-.63-1.432-1.406-1.432"
    />
  </svg>
);
export default SvgSecurityWarning;
