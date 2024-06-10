import { SVGProps } from 'react';

export default function Ghost({
  selected = false,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 10H9.01"
        stroke={selected ? 'red' : '#212121'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 10H15.01"
        stroke={selected ? 'red' : '#212121'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10V22L7 19L9.5 21.5L12 19L14.5 21.5L17 19L20 22V10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z"
        stroke={selected ? 'red' : '#212121'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
