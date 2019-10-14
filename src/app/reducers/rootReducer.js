import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import testReducer from '../../feature/testarea/testReducer';
import  eventReducer  from '../../feature/event/eventReducer';
import modalReducer from '../../feature/modals/modalReducer';
import authReducer from '../../feature/auth/authReducer';
import asyncReducer from '../../feature/async/asyncReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastrReducer
})
export default rootReducer