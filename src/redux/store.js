import { createStore ,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./reducers/cartReducer";


const reducers=combineReducers({
    CartReducer,
})



const store=createStore( 
    reducers,
    composeWithDevTools()
    );

export default store;