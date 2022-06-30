
import { useDispatch,useSelector} from "react-redux"
import {CHANGE_NEXT_PAGE, CHANGE_PAGE} from "../actiontypes/actiontypes"


export default function changeNext(dispatch,pageData) {

    
    if(pageData >= 5) {
        return dispatch({type: CHANGE_PAGE, payload: 1})
    }
    return  dispatch({type: CHANGE_NEXT_PAGE})
}