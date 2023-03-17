import { SET_STEP1_FORM, SET_STEP2_FORM, SET_STEP3_FORM } from "../actions/createAccountFormActions";

const initialState = {
    step1: {},
    step2: {},
    step3: {}
};

const create_account_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STEP1_FORM:{
            return {
                ...state,
                step1: action.payload
            }
        }
        case SET_STEP2_FORM:{
            return {
                ...state,
                step2: action.payload
            }
            
        }
        case SET_STEP3_FORM:{
            return {
                ...state,
                step3: action.payload
            }
        }
        default: return state;
    }
}

export default create_account_reducer;