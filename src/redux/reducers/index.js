import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import auth from './auth'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  debug: false,
}

const reducer = combineReducers({
  auth,
})

export default persistReducer(persistConfig, reducer)