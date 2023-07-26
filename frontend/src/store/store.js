import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './feactures/theme/darkModeSlice';
import userCrudReducer from './feactures/userCrud/userCrudSlice';

/**
 * Store configuration
 */
export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        userCrud: userCrudReducer
    }
})