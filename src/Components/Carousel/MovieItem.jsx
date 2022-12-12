import React ,{useEffect,useState}from 'react';
import Classes from "./MovieItem.module.css"
import { ThreeDots } from 'react-loader-spinner'
function MovieItem({year,categorie}) {
    const [data,setData] = useState({});
    const [isLoading,setIsLoading] = useState(true);

   
      useEffect(()=>{
        try{
            fetch(`https://www.omdbapi.com/?t=${categorie}&y=${year}&apikey=2ce95ed4`)
            .then(response => response.json())
            .then(function(data){
             setData(data);
             setIsLoading(false);
            });
            
          
          }catch (e){
            console.log(e);
          }
      },[year,categorie])
  return (
    <div className={Classes.container}>
     {isLoading?<ThreeDots 
height="80" 
width="80" 
radius="9"
color="#ffffff" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />:<p>{data.Title}</p>}  
    </div>
  )
}

export default MovieItem
