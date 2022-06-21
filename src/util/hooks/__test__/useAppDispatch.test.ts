// eslint-disable-next-line no-restricted-imports
import { useDispatch } from 'react-redux';

import { useAppDispatch } from '../useAppDispatch';


jest.mock('react-redux');
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;

describe('useAppDispatch redeclaration', () => {
  it('should return useDispatch from react-redux', () => {
    expect.assertions(1);
    useAppDispatch();
    expect(mockUseDispatch).toHaveBeenCalledTimes(1);
  });
});
