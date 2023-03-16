import { combineReducers } from "redux";
import create_account_reducer from "./createAccountFormReducer";

const rootReducers = combineReducers({
    create_account_reducer
});

export default rootReducers;






// export default combineReducers({
//     account: create_account_reducer
// });

