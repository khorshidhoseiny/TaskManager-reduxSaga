import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'



export const store = configureStore({ reducer: {
    todos:TodoSlice,
} })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on