import {React, useContext,useEffect} from 'react'
import LeftNav from '../Components/LeftNav'
import VideoCard from '../Components/VideoCard';
import { AppContext } from '../Context/AppContext';
export default function Feed() {

  const {loading,searchResults,selectCategories}=useContext(AppContext);

  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h');
  },[])
  
  console.log(searchResults)
  console.log(selectCategories);

  return (
    <div className='flex z-10 flex-row h-[calc(100%-56px)]'>  {/* FEED SECTION */ }

        <LeftNav/>

        <div className="FEED_ITEMS  grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">    {/* FEED ITEMS */ }
            <div className="GRID_AREA    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
              {!loading &&
              (searchResults.map(
                (item)=>{
                  if(item?.type!=="video") return false;
                  return(
                    <VideoCard key={item?.video?.videoId} video={item?.video}/>
                  );
              }))}
            </div>
        </div>    
      
    </div>
  )
}
