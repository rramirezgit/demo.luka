import type { SVGProps } from 'react';

import * as React from 'react';

const SvgPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <radialGradient id="placeholder_svg__a" cx="50%" cy="46.801%" r="95.497%">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset={1} stopColor="#919eab" stopOpacity={0.48} />
    </radialGradient>
    <path
      fill="url(#placeholder_svg__a)"
      fillRule="evenodd"
      d="M88 86h512v512H88z"
      transform="translate(-88 -86)"
    />
  </svg>
);
export default SvgPlaceholder;
