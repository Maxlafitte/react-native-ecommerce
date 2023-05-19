import { legacy_createStore as createStore, combineReducers } from 'redux'
import reducerCourses from './reducers/reducersCourses'
import reducerCart from './reducers/reducersCart'
import reducerPayment from './reducers/reducerPayment'

const rootReducer = combineReducers({
    courses: reducerCourses,
    cart: reducerCart,
    payments: reducerPayment
})

const store = createStore(rootReducer)

export default store