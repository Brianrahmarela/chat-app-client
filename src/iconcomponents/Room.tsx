import * as React from "react";

function SvgRoom(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#room_svg__clip0)">
        <path fill="#fff" d="M0 0h21v23H0z" />
        <path
          d="M16.882 19.36V2.46A2.464 2.464 0 0014.422 0H4.577a2.464 2.464 0 00-2.461 2.46v16.9H.477V21h18.046v-1.64h-1.64zm-1.64 0H3.757V2.46c0-.451.368-.82.82-.82h9.844c.453 0 .82.369.82.82v16.9zM12.78 9.761a.82.82 0 100 1.64.82.82 0 000-1.64z"
          fill="#25CCBF"
        />
      </g>
      <defs>
        <clipPath id="room_svg__clip0">
          <path fill="#fff" d="M0 0h21v23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgRoom;
