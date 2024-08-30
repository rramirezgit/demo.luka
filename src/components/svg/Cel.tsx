import type { SVGProps } from 'react';

import * as React from 'react';

const SvgCel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 28"
    {...props}
  >
    <path
      stroke={props?.style?.color ? props?.style?.color : '#2F363E'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.859}
      d="M20.833 7.552v12.396c0 4.958-1.24 6.198-6.198 6.198H7.198C2.24 26.146 1 24.906 1 19.948V7.552c0-4.958 1.24-6.198 6.198-6.198h7.437c4.959 0 6.198 1.24 6.198 6.198M13.396 5.693H8.437"
    />
    <path
      stroke={props?.style?.color ? props?.style?.color : '#2F363E'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.859}
      d="M10.917 22.551a1.921 1.921 0 1 0 0-3.842 1.921 1.921 0 0 0 0 3.842"
    />
  </svg>
);
export default SvgCel;
