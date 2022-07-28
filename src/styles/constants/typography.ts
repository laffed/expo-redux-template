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
  },
  HEADER_2: {
    color: Colors.BLACK,
  },
  PARAGRAPH_1: {
    color: Colors.BLACK,
  },
  PARAGRAPH_2: {
    color: Colors.BLACK,
  },
  LINK_1: {
    color: Colors.BLUE,
  },
  LINK_2: {
    color: Colors.BLACK,
  },
} as const;
