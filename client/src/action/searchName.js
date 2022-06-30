import axios from "axios"
import { GET_VIDEOGAME_NAME } from "../actiontypes/actiontypes"

export function onSearch(name,dispatch) {
   try {
    axios(`http://localhost:3001/api/videogames?name=${name}`)
    .then(response => {return dispatch({type: GET_VIDEOGAME_NAME, payload: response.data})})
   } catch (error) {
        throw alert("Sorry VideoGame Not Found")
   } 
    
    
}