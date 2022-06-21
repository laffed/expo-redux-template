import type { BarState } from './bar';


export type ApplicationState = {
  _persist?: {
    rehydrated?: boolean;
  }
  bar: BarState;
}
