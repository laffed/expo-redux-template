import type { FooState } from './foo';
import type { BarState } from './bar';


export type ApplicationState = {
  _persist?: {
    rehydrated?: boolean;
  }
  foo: FooState;
  bar: BarState;
}
