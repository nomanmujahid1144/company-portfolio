import ProgressBarReducer from './ProgressBarReducer';
import ProfileReducer from './ProfileReducer';
import usersReducer from './UserReducers';

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
    ProgressBarReducer,
    ProfileReducer,
    usersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;