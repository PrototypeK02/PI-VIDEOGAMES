import {SORT_BY_NAMEAZ} from "../actiontypes/actiontypes"



export function sortByNameZA(referenceState,dispatch) {
    console.log(referenceState)
    referenceState = referenceState.sort((a,b) => { if(b.name.toLowerCase() < a.name.toLowerCase()) { return -1; }
    if(b.name.toLowerCase() > a.name.toLowerCase) { return 1; }
    return 0})

    return dispatch({type:SORT_BY_NAMEAZ, payload: referenceState})
    


}


export function sortByNameAZ(referenceState,dispatch) {
    console.log(referenceState)
    referenceState = referenceState.sort((a,b) => { if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase) { return 1; }
    return 0})

   return dispatch({type:SORT_BY_NAMEAZ, payload: referenceState})


}