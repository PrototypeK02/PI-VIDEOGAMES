import React from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import getDetails from '../action/getDetails'
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { RESET_DETAILS } from '../actiontypes/actiontypes'
import Loading from './Loading'
export default function GameDetail() {

    let dispatch= useDispatch()

    let details = useSelector(state => state.videoGameId)
   let {id} = useParams()

   useEffect(() => {
    getDetails(id,dispatch)

    return () => dispatch({type: RESET_DETAILS})
   },[])

   

  return (
    <div>
      {!details.name ? <Loading/>:
    <div className="Loadingif" style={{
      backgroundImage: `url(${details.image})`
      
  }}>
      
      <Link to="/Home"> <button>Go Back</button> </Link> 
        
        <h3>{details.name}</h3>
        <span>{details.description}</span>
        <h3>{details.rating}</h3>
        <h3>Genres: {details.genres?.map(el => <span>{el.name} </span>)}</h3>
        <h3>Platforms: {details.platform?details.platform.map(el => <li>{el}</li>) : details.plataform?.map(el => <li>{el}</li>)}</h3>
        <h4>Release Date: {details.releaseDate}</h4>
    </div>
      }
    </div>
  )
}
