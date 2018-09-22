import React from 'react';
import { backgroundColor } from '../constants';

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor,
      fontSize: '1.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);
