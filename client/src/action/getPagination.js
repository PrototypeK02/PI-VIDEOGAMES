
import { GET_ALL_GAMES, SET_PAGE_STATE } from "../actiontypes/actiontypes"
import getAllNames from "./getAllNames"



export default function getPagination(pageData,referenceState,dispatch) {

    
  


    


    // eslint-disable-next-line default-case
    switch(pageData) {
        case 1: 
            let page1 = referenceState.slice(0,20)
            if(referenceState.length >= 1) {
            return dispatch({type: SET_PAGE_STATE, payload: page1})
            }
            else{
                break;
            }
        
            case 2:
            let page2 = referenceState.slice(20,40)
            if(referenceState.length >=20) {
            return dispatch({type: SET_PAGE_STATE, payload: page2})
            }
            break;

            case 3:
            let page3 = referenceState.slice(40,60)
            if(referenceState.length >=40) {
            return dispatch({type: SET_PAGE_STATE, payload: page3})
            }
            break;

            case 4:
            let page4 = referenceState.slice(60,80)
            if(referenceState.length >=60) {
            return dispatch({type: SET_PAGE_STATE, payload: page4})
            }
            break;

            case 5:
            let page5 = referenceState.slice(80,-1)
            if(referenceState.length >=80) {
            return dispatch({type: SET_PAGE_STATE, payload: page5})
            }
            break;

            default:
                return pageData 
        

    }
  
    

}

