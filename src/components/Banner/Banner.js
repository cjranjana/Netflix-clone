import React , {useEffect,useState} from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"



function Banner() {
  const [movie,setMovie] =useState()
  useEffect(()=>{
    const randomPage=Math.floor(Math.random()*20)+1;
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=${randomPage}`).then((response)=>{
      const randomIndex=Math.floor(Math.random()*response.data.results.length);
    console.log(response.data.results[randomIndex])
      setMovie(response.data.results[randomIndex])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?.backdrop_path? imageUrl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                    <button className="button">My List</button>
                
            </div>
            <h1 className="description">{movie ? movie.overview:""}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
