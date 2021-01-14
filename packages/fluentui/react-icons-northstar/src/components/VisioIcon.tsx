import * as React from 'react';
import { createSvgIcon } from '../utils/createSvgIcon';

export const VisioIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 28 28" className={classes.svg}>
      <path
        d="M26 9.16989V18.8299C26 19.4799 25.48 19.9999 24.83 19.9999H15.17C14.52 19.9999 14 19.4799 14 18.8299V9.16989C14 9.10989 14 9.05989 14.01 8.99989C14.09 8.42989 14.58 7.99989 15.17 7.99989H24.83C25.48 7.99989 26 8.51989 26 9.16989Z"
        fill="#2B7CD3"
      />
      <path
        d="M19.66 9.83009L17 12.4801L14.82 14.6601C14.6 14.8901 14.3 15.0001 14 15.0001C13.7 15.0001 13.4 14.8901 13.17 14.6601L8.34 9.83009C8.11 9.60009 8 9.30009 8 9.00009C8 8.70009 8.11 8.40009 8.34 8.18009L13.17 3.34009C13.63 2.89009 14.37 2.89009 14.82 3.34009L19.48 8.00009L19.66 8.18009C20.11 8.63009 20.11 9.37009 19.66 9.83009Z"
        fill="#41A5EE"
      />
      <path
        d="M20 20.5C20 23.54 17.54 26 14.5 26C12.36 26 10.51 24.78 9.61 23C9.22 22.25 9 21.4 9 20.5C9 17.63 11.19 15.28 14 15.03C14.16 15.01 14.33 15 14.5 15C15.4 15 16.25 15.22 17 15.61C18.64 16.43 19.8 18.07 19.97 20C19.99 20.16 20 20.33 20 20.5Z"
        fill="#103F91"
      />
      <path
        d="M17 10.1699V21.6499C17 22.2899 16.31 22.9999 15.6 22.9999H9.61C9.22 22.2499 9 21.3999 9 20.4999C9 17.6299 11.19 15.2799 14 15.0299V14.9999C13.7 14.9999 13.4 14.8899 13.17 14.6599L8.34 9.82989C8.11 9.59989 8 9.29989 8 8.99989H15.83C16.47 8.99989 17 9.52989 17 10.1699Z"
        fill="black"
      />
      <path
        d="M14.8335 22H3.16649C2.52549 22 2.00049 21.475 2.00049 20.833V9.167C2.00049 8.525 2.52549 8 3.16649 8H14.8335C15.4755 8 16.0005 8.525 16.0005 9.167V20.833C16.0005 21.475 15.4755 22 14.8335 22Z"
        fill="#185ABD"
      />
      <path
        d="M8.59552 16.2942C8.82252 16.9602 8.95652 17.3802 8.99752 17.5552H9.02552C9.06552 17.3802 9.21052 16.9302 9.46052 16.2052L11.2515 11.0002H12.8965L9.86152 19.0002H8.09852L5.10352 11.0002H6.79952L8.59552 16.2942Z"
        fill="white"
      />
    </svg>
  ),
  displayName: 'VisioIcon',
});