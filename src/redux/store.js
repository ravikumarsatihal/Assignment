//import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { legacy_createStore  as createStore,applyMiddleware,compose} from "redux";

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
   
)
 sagaMiddleware.run(rootSaga)
 export default store