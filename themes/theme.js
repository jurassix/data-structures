import { future } from 'mdx-deck/themes';
import style from 'react-syntax-highlighter/styles/prism/atom-dark';
import { backgroundColor } from '../constants';

export default {
  ...future,
  prism: {
    style,
  },
  colors: {
    ...future.colors,
    background: backgroundColor,
  },
};
