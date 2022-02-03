import { combineReducers } from 'redux';

import registroBOReducer from './registroBo/reducers';
import boFormReducer from './registroBOForm/reducers';

const rootReducer = combineReducers({
  registroBO: registroBOReducer,
  registroBOForm: boFormReducer,
});

export default rootReducer;
