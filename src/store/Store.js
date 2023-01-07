import { configureStore} from '@reduxjs/toolkit';

/// Reducers
import colorReducer from './features/colors/colorSlice';
import loginReducer from './features/login/loginSice';
import orgReducer from './features/orgInfo/orgSlice';

export const store = configureStore({

  reducer : {
    color : colorReducer,
    login : loginReducer ,  
    orgInfo :  orgReducer
  }
});
