import * as React from "react";

function SvgUsername(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#username_svg__clip0)">
        <path fill="#fff" d="M0 0h21v23H0z" />
        <path
          d="M17.086 23a.909.909 0 01-.913-.898c0-3.518-2.91-6.38-6.488-6.38h-1.37c-3.577 0-6.488 2.862-6.488 6.38A.909.909 0 01.914 23 .909.909 0 010 22.102c0-4.51 3.728-8.176 8.315-8.176h1.37c4.587 0 8.315 3.665 8.315 8.176a.909.909 0 01-.914.898zM9.168 12.129C5.768 12.129 3 9.407 3 6.064 3 2.722 5.769 0 9.168 0s6.167 2.722 6.167 6.064c0 3.343-2.769 6.065-6.167 6.065zm0-10.332c-2.394 0-4.34 1.914-4.34 4.267 0 2.354 1.946 4.268 4.34 4.268 2.393 0 4.34-1.914 4.34-4.268 0-2.353-1.947-4.267-4.34-4.267z"
          fill="#25CCBF"
        />
      </g>
      <defs>
        <clipPath id="username_svg__clip0">
          <path fill="#fff" d="M0 0h21v23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgUsername;
