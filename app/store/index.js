import {createStore } from 'redux'
import rootReducer from '../reducers'
// const rootReducer = () => {

// }


export default store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )