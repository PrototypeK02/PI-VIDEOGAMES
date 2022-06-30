
import {CHANGE_PAGE} from "../actiontypes/actiontypes"


export default async function changePage(event,dispatch) {
    let eventNum= parseInt(event.target.innerText)

    
  
        return await dispatch({type: CHANGE_PAGE, payload: eventNum})
    
}