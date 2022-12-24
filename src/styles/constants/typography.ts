import { Fonts } from '../fonts';

import { Colors } from './colors';


export const Typographies = {
  NAVIGATION_HEADER: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontFamily: Fonts.MONT_BOLD,
  },
  HEADER_1: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 30,
  },
  HEADER_2: {
    color: Colors.BLACK,
    fontWeight: '700',
    fontSize: 26,
  },
  PARAGRAPH_1: {
    color: Colors.BLACK,
    fontWeight: '400',
    fontSize: 20,
  },
  PARAGRAPH_2: {
    color: Colors.BLACK,
    fontWeight: '400',
    fontSize: 18,
  },
  LINK_1: {
    color: Colors.BLUE,
  },
  LINK_2: {
    color: Colors.BLACK,
  },
} as const;
