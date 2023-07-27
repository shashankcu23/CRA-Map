import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// const store = createStore(rootReducer);

const store =configureStore({
    reducer: rootReducer
});

export default store;
