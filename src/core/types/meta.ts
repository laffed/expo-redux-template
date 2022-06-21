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

