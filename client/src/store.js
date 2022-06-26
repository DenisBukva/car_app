import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer, userRegisterReducer, userUpdateProfileReducer} from './redux/reducers/userReducers';
import {
  carListReducer,
  carDetailsReducer,
  carDeleteReducer,
  carCreateReducer,
  carUpdateReducer

} from './redux/reducers/carReducers';

const reducer = combineReducers({
    carList: carListReducer,
    carDetails: carDetailsReducer,
    carDelete: carDeleteReducer,
    carCreate: carCreateReducer,
    carUpdate: carUpdateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  export default store

