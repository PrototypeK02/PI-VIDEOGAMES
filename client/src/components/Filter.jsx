import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_GAMES, SET_PAGE_STATE} from '../actiontypes/actiontypes'


function Filter() {
    let genres = ["Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card"]

    const pageData= useSelector(state => state.paginationPages)
    const dispatch = useDispatch()
    const videoGames = useSelector(state => state.paginationToShow)
    const allGamesBD = useSelector(state => state.allVideoGames)
    const backUp = useSelector(state => state.backUpState)
    function filterItems(el) {
        let filtered = allGamesBD.filter(e => {
            let founded = e.genres.find(g => g.name === el)
            if(founded) {
            return e
            }
        })
        console.log(filtered.length)
        if(filtered.length > 0) {
        dispatch({type: GET_ALL_GAMES, payload: filtered})
        return dispatch({type: SET_PAGE_STATE, payload: filtered.slice(0,20)})
        }
        else if(filtered.length<1 &&allGamesBD.length < 2){
            return alert("There are no more applicable filters to show :(")
        }
        else if(filtered.length < 1) {
            return alert("No match for this Genre")
        }
    }

    function filterCreated() {
        let filtered = allGamesBD.filter(e => 
          e.id.length > 10
        )
        console.log(filtered)
        if(filtered.length > 0) {
        dispatch({type: GET_ALL_GAMES, payload: filtered})
        return dispatch({type: SET_PAGE_STATE, payload: filtered})
        }
       
    }





  return (
    <div className="filtercontainer">
    <label>Filter By Genres</label>
    {genres.map(el => <button onClick={() => filterItems(el)}>{el}</button>)}
    <button onClick={()=> filterCreated()}>Created by User</button>
    <button onClick={()=> {return dispatch({type: GET_ALL_GAMES, payload: backUp }), dispatch({type: SET_PAGE_STATE, payload: backUp.slice(0,20)})}}>Show All</button>
</div>
  )
}

export default Filter