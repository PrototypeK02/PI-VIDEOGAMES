
import { useDispatch,useSelector} from "react-redux"
import {CHANGE_BACK_PAGE, CHANGE_PAGE} from "../actiontypes/actiontypes"


export default function changeBack(dispatch,pageData) {

    
    
    if(pageData === 1) {
        return dispatch({type: CHANGE_PAGE, payload: 5})
    }
    return  dispatch({type: CHANGE_BACK_PAGE})
}