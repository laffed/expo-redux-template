import { ListRenderItem } from 'react-native';


export enum ThunkStatus {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED'
}

export type SliceMeta = {
  sliceMeta: {
    status: ThunkStatus;
    error: string | null;
  }
}

export type RejectWith<T> = {
  rejectValue: T
}

export type KeyExtractorOf<
  T extends unknown[]
> = <I extends T[number]>(item: I, i: number) => string;

export type RenderItemOf<T extends unknown[]> = ListRenderItem<T[number]>;
