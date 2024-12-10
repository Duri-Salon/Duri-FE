import * as React from 'react';
const SvgTrash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.062 14.094h.065a.72.72 0 0 0 .654-.784L8.4 8.998a.719.719 0 0 0-1.43.122l.373 4.313a.72.72 0 0 0 .719.66m2.81 0h.065a.72.72 0 0 0 .719-.654l.373-4.313a.722.722 0 0 0-1.437-.122l-.381 4.313a.72.72 0 0 0 .661.776"
    />
    <path
      fill="#fff"
      d="M1.594 4.75h.783l1.114 11.14a3.594 3.594 0 0 0 3.594 3.235h4.859a3.594 3.594 0 0 0 3.593-3.234L16.624 4.75h.783a.719.719 0 1 0 0-1.437h-5.031v-.72A2.156 2.156 0 0 0 10.219.439H8.78a2.156 2.156 0 0 0-2.156 2.156v.719H1.594a.719.719 0 0 0 0 1.437m6.469-2.156a.72.72 0 0 1 .718-.719h1.438a.72.72 0 0 1 .719.719v.719H8.062zm-.72 2.156h7.835l-1.1 10.997a2.156 2.156 0 0 1-2.156 1.94H7.071a2.156 2.156 0 0 1-2.157-1.94L3.822 4.75z"
    />
  </svg>
);
export default SvgTrash;