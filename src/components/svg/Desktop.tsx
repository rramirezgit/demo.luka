import type { SVGProps } from 'react';

import * as React from 'react';

const SvgDesktop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 31"
    {...props}
  >
    <path
      stroke={props?.style?.color ? props?.style?.color : '#2F363E'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.859}
      d="M8.816 3.354h13.772c4.413 0 5.516 1.103 5.516 5.504v7.847c0 4.413-1.103 5.503-5.504 5.503H8.816c-4.4.013-5.504-1.09-5.504-5.491V8.858c0-4.4 1.104-5.504 5.504-5.504ZM15.708 22.22v5.926M3.313 16.99h24.791M10.13 28.146h11.157"
    />
  </svg>
);
export default SvgDesktop;
