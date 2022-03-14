import createSagaMiddleware, { SagaIterator } from 'redux-saga';


export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga(): SagaIterator {

}
