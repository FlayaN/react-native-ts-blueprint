import { handleActions } from 'redux-actions'
import { SET_NAME } from "./Constants";
import { setName } from "./Actions";

const Reducer = handleActions({
    [SET_NAME]: (state: UserDef, action: Action<string>) => {
        return Object.assign({}, state, {
            Name: action.data
        } as UserDef);
    }
}, {});

export default Reducer;
