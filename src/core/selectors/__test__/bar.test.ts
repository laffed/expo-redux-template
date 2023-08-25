import { ApplicationState, ThunkStatus } from '@app/core/types';

import {
  selectBar, selectBuzz, selectBarTestUser
} from '../bar';


describe('bar selectors', () => {
  const initialBarState: Readonly<ApplicationState> = {
    bar: {
      sliceMeta: {
        error: null,
        status: ThunkStatus.IDLE,
      },
      buzz: 'hello from tests',
      user: {
        email: 'test@email',
        firstName: 'John',
        lastName: 'Doe',
        id: 0,
      },
    },
  };

  it('root bar selector', () => {
    expect.assertions(1);
    const selected = selectBar(initialBarState);
    expect(selected).toStrictEqual(initialBarState.bar);
  });

  it('buzz selector', () => {
    expect.assertions(1);
    const selected = selectBuzz(initialBarState);
    expect(selected).toStrictEqual(initialBarState.bar.buzz);
  });

  it('test user selector', () => {
    expect.assertions(1);
    const selected = selectBarTestUser(initialBarState);
    expect(selected).toStrictEqual(initialBarState.bar.user);
  });
});
