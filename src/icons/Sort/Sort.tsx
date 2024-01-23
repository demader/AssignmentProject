

import React from "react";

interface Props {
  className: any;
}

export const Sort = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`sort ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.75 6.06066V13.75C7.75 14.1642 7.41421 14.5 7 14.5C6.58579 14.5 6.25 14.1642 6.25 13.75L6.25 6.06066L4.53033 7.78033C4.23744 8.07322 3.76256 8.07322 3.46967 7.78033C3.17678 7.48744 3.17678 7.01256 3.46967 6.71967L6.46967 3.71967C6.76256 3.42678 7.23744 3.42678 7.53033 3.71967L10.5303 6.71967C10.8232 7.01256 10.8232 7.48744 10.5303 7.78033C10.2374 8.07322 9.76256 8.07322 9.46967 7.78033L7.75 6.06066Z"
        fill="#4A4A4A"
      />
      <path
        className="path"
        d="M13.75 6.25C13.75 5.83579 13.4142 5.5 13 5.5C12.5858 5.5 12.25 5.83579 12.25 6.25V13.9393L10.5303 12.2197C10.2374 11.9268 9.76256 11.9268 9.46967 12.2197C9.17678 12.5126 9.17678 12.9874 9.46967 13.2803L12.4697 16.2803C12.7626 16.5732 13.2374 16.5732 13.5303 16.2803L16.5303 13.2803C16.8232 12.9874 16.8232 12.5126 16.5303 12.2197C16.2374 11.9268 15.7626 11.9268 15.4697 12.2197L13.75 13.9393V6.25Z"
        fill="#4A4A4A"
      />
    </svg>
  );
};
