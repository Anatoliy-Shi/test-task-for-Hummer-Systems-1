import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import customers from "./slices/customersSlice";

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        customers,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
