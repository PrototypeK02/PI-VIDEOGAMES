import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux"
import getAllNames from "../action/getAllNames";
import "./styles/gamesStyles.css"
import background from "../../src/8k-hextech-tristana-splash-art-league-of-legends-lol-wallpaper-2560x1080_14.jpg"
import {Link, useHistory} from "react-router-dom"
import {Pagination} from "./Pagination"
import { NEED_BACKUP, SET_PAGE_STATE } from "../actiontypes/actiontypes";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import getPagination from "../action/getPagination";
import validatePage from "../action/validatePage";


export function Home() {
    const pageData= useSelector(state => state.paginationPages)
    const dispatch = useDispatch()
    const videoGames = useSelector(state => state.paginationToShow)
    const allGamesBD = useSelector(state => state.allVideoGames)
    let history = useHistory()
    useEffect(()=> {
        
        if(allGamesBD.length < 1) {
        dispatch(getAllNames())
        }
       
        getPagination(pageData,allGamesBD,dispatch)
        

        return () => dispatch({type: SET_PAGE_STATE, payload: []});
    },[])


    return (
        <div>
        {!allGamesBD[0]? <div><Loading/></div> :
        <div style={{
            backgroundImage: `url(${background})`
        }}>
            
            <div><SearchBar/></div>
            <div> <Pagination/></div>
           
            {allGamesBD[0] && videoGames.map(el => {
                return (
                    <Link className="link" to={`/gamedetail/${el.id}`}>
                    <div key={el.id} className="post">
                        <h3>{el.name}</h3>
                        <img src={el.image} alt="" />

                    </div>
                    </Link>
                )
            }) }

        </div>
        }
        </div>
    )

}