

import React from "react";

interface Props {
  className: any;
}

export const Alerttriangle1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`alerttriangle-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.99994 6.75C10.4142 6.75 10.7499 7.08579 10.7499 7.5V11C10.7499 11.4142 10.4142 11.75 9.99994 11.75C9.58573 11.75 9.24994 11.4142 9.24994 11V7.5C9.24994 7.08579 9.58573 6.75 9.99994 6.75Z"
        fill="#4A4A4A"
      />
      <path
        className="path"
        d="M11 13.5C11 14.0523 10.5523 14.5 10 14.5C9.44772 14.5 9 14.0523 9 13.5C9 12.9477 9.44772 12.5 10 12.5C10.5523 12.5 11 12.9477 11 13.5Z"
        fill="#4A4A4A"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M10 3.5C8.95471 3.5 8.21616 4.20232 7.84762 4.94672C7.65565 5.33448 6.75984 7.0441 5.84305 8.79353L5.81531 8.84646C4.9229 10.5493 4.01714 12.2777 3.80716 12.702C3.4351 13.4537 3.32931 14.4519 3.89953 15.316C4.46911 16.1791 5.44222 16.5 6.36356 16.5L13.6364 16.5C14.5577 16.5 15.5308 16.1791 16.1004 15.316C16.6707 14.4519 16.5649 13.4537 16.1928 12.702C15.9832 12.2784 15.08 10.555 14.1889 8.85476L14.1569 8.79352C13.24 7.044 12.3443 5.33454 12.1524 4.94693C11.784 4.20242 11.0454 3.5 10 3.5ZM9.1919 5.61225C9.59605 4.79592 10.4041 4.79592 10.8081 5.61225C11.0102 6.02061 11.9201 7.75686 12.8296 9.49243C13.7383 11.2262 14.6466 12.9594 14.8485 13.3673C15.2525 14.1837 14.8485 15 13.6364 15L6.36356 15C5.1515 15 4.74746 14.1837 5.1515 13.3673C5.35376 12.9587 6.26468 11.2205 7.1748 9.4838C8.08283 7.75111 8.99005 6.01994 9.1919 5.61225Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
    </svg>
  );
};
