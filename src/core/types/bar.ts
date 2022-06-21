import { SliceMeta } from './meta';


export type BarState = SliceMeta & {
  buzz: string;
  user?: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  }
}
