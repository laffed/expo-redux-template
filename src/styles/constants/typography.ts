import { TextStyle } from 'react-native';

import { Fonts } from '../fonts';

import { Colors } from './colors';


export enum Typography {
  NAVIGATION_HEADER,
  HEADER_1,
  HEADER_2,
  PARAGRAPH_1,
  PARAGRAPH_2,
  LINK_1,
  LINK_2
}

export const Typographies: {
  [key in Typography]: TextStyle;
} = {
  [Typography.NAVIGATION_HEADER]: {
    color: Colors.black,
    fontWeight: '700',
    fontFamily: Fonts.MONT_BOLD,
  },
  [Typography.HEADER_1]: {
    color: Colors.black,
  },
  [Typography.HEADER_2]: {
    color: Colors.black,
  },
  [Typography.PARAGRAPH_1]: {
    color: Colors.black,
  },
  [Typography.PARAGRAPH_2]: {
    color: Colors.black,
  },
  [Typography.LINK_1]: {
    color: Colors.blue,
  },
  [Typography.LINK_2]: {
    color: Colors.black,
  },
} as const;
