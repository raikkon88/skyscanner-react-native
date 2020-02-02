import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

// Ha de ser una funció per què sigui cridada quan es vulgui crear un store
export default () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(sagas)
    }
}