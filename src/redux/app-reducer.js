import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {//return thunk(thunkCreator)
    let promise = dispatch(getAuthUserData());//диспатчим санку----результ вызова санки----promise
    //debugger
    //promise.then(() => {dispatch(initializedSuccess())})//один promise
    Promise.all([promise]).then(() => {//все промисы из массива(если присутствует несколько dispatch)
        dispatch(initializedSuccess());
    });
}

/*export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
};*/

export default appReducer;