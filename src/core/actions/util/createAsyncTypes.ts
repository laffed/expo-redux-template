import { TypeConstant } from 'typesafe-actions';


export type TCreateAsyncTypes = (type: string) => ({
  request: TypeConstant,
  success: TypeConstant,
  failure: TypeConstant,
  cancel: TypeConstant,
})

export const createAsyncTypes: TCreateAsyncTypes = (type) => ({
  request: `${type}_REQUEST`,
  success: `${type}_SUCCESS`,
  failure: `${type}_FAILURE`,
  cancel: `${type}_CANCEL`,
});
